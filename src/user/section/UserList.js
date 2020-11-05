import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ShoppingCart, MenuBook, LockOpen, Business } from "@material-ui/icons";
import NAVLINKS from "../defaults/navlinks.json";

export default function UserList() {
  const history = useHistory();
  return (
    <>
      <ListItem
        button
        onClick={() => {
          history.push(NAVLINKS.Cart);
        }}
      >
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText>Cart</ListItemText>
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(NAVLINKS.Orders);
        }}
      >
        <ListItemIcon>
          <MenuBook />
        </ListItemIcon>
        <ListItemText>Orders</ListItemText>
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(NAVLINKS.Address);
        }}
      >
        <ListItemIcon>
          <Business />
        </ListItemIcon>
        <ListItemText>Address</ListItemText>
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`${NAVLINKS.User}/changepassword`);
        }}
      >
        <ListItemIcon>
          <LockOpen />
        </ListItemIcon>
        <ListItemText>Change Password</ListItemText>
      </ListItem>
    </>
  );
}
