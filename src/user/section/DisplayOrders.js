import React from "react";
import { useHistory } from "react-router-dom";
import NAVLINKS from "../defaults/navlinks.json";
import { makeStyles } from "@material-ui/core";
import CenterPaper from "../components/CenterPaper";

import colors from "../defaults/colors.json";
import OrderDetails from "./OrderDetails";

const useStyles = makeStyles({
  list: {
    width: "100%",
    border: 1,
    display: "flex",
    flexDirection: "column",
    padding: 5,
    marginTop: 5,
    "&:hover": {
      backgroundColor: colors.PRIMARY_WHITE,
    },
  },
});
export default function DisplayOrders({ orders = [] }) {
  const styles = useStyles();
  const history = useHistory();
  return (
    <CenterPaper>
      {orders.map((order) => {
        return (
          <div
            className={styles.list}
            onClick={() => {
              history.push(`${NAVLINKS.Orders}/${order.order_id}`);
            }}
          >
            <OrderDetails order={order} />
          </div>
        );
      })}
    </CenterPaper>
  );
}
