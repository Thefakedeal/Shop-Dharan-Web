import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSettings } from "../contexts/Settings";
import useFetchSuppliers from "../hooks/useFetchSuppliers";
import SupplierCard from "../components/SupplierCard";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import HeadingText from "../components/HeadingText";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    flexWrap: "nowrap",
    overflowX: "auto",
    marginBottom:20,
    width: "100%",
  },
});

export default function DisplayProductByCatagory({
  catagory_id,
  catagory_name,
  city_id
}) {
  const styles = useStyles();
  const { err, loading, result=[] } = useFetchSuppliers({
    visible: true,
    city_id,
    catagory_id,
  });
  if (loading) return <Loading loading={loading} />;
  if (err) return <Errors errors={[err]} />;
  if(result.length>0) return (
    <div>
      <HeadingText> {catagory_name}</HeadingText>
      <div className={styles.container}>
        {result.map((supplier) => (
          <SupplierCard
            id={supplier.supplier_id}
            description={supplier.supplier_description}
            title={supplier.supplier_name}
            imageURI={`/images/${supplier.image_id}`}
          />
        ))}
      </div>
    </div>
  );
  return null
}
