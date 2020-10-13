import React,{useState} from "react";
import {
  Box,
  makeStyles,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import CustomButton from "../components/CustomButton";
import DisplayErrors from "../components/DisplayErrors";
import DisplayLoading from "../components/DisplayLoading";
import useFetchOrderStatus from "../hooks/useFetchOrderStatus";
import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 200,
  },
});


async function updateOrderStatus({order_id, order_status}){
 const url = '/api/admin/orders/update'
 const method = "PUT"
 const response  =  await fetchWithCredentials(method,url,{order_id,order_status})
 if(response.ok) {
     return alert("Order Updated")
 }
 alert("Failed To Update Order!!!")
}


function Selections({ label, value, setValue, options = [] }) {
  return (
    <FormControl>
      <InputLabel id="order_status">{label}</InputLabel>
      <Select
        labelId={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {String(option).toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function UpdateOrderStatus({ order_status, order_id }) {
  const { err, loading, result } = useFetchOrderStatus();
  const [status, setStatus] = useState(order_status)
  const styles = useStyles();
  if (loading) return <DisplayLoading loading={loading} />;
  if (err) return <DisplayErrors errors={[err]} />;
  return (
    <Box className={styles.container}>
      <Selections label={"Order Status" } value={status} setValue={setStatus}
        options={result}
      />
      <CustomButton onClick={()=>{
          updateOrderStatus({order_id, order_status: status})
      }}> Update </CustomButton>
    </Box>
  );
}
