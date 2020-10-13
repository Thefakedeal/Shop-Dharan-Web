import React from "react";
import { Tab, makeStyles, Paper, Tabs } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    width: "90%",
    margin: 10,
  },
});
export default function OrderTabs({
  orderTypes = [],
  orderType,
  setOrderType,
}) {
  const styles = useStyles();

  const handleChange = (event, newValue) => {
    setOrderType(newValue);
  };
  console.log(orderTypes)
  return (
    <Paper square className={styles.container}>
      <Tabs
        value={orderType}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="Order Tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All" value={''} />
        {orderTypes.map((orderType) => (
          <Tab label={orderType.toUpperCase()} value={orderType} />
        ))}
      </Tabs>
    </Paper>
  );
}
