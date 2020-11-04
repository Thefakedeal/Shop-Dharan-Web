import React from "react";
import { useHistory } from "react-router-dom";
import { capitalizeEachWord } from "../helperFunctions/capitalize";
import { ListItem, ListItemText, Drawer, ListItemIcon } from "@material-ui/core";
import {Home, Search, ShoppingCart, MenuBook, Person, DoubleArrow, Business} from '@material-ui/icons'
import navlinks from "../defaults/navlinks.json";

function ListIcon({title}){
    switch (title){
        case navlinks.Home:
            return <Home />
        case navlinks.Search:
            return <Search />
        case navlinks.Cart:
            return <ShoppingCart />
        case navlinks.Address:
          return <Business />
        case navlinks.Orders:
            return <MenuBook />
        case navlinks.User:
            return <Person />
        default:
            return <DoubleArrow />
    }
}

function ListLink({ title, link }) {
  const history = useHistory();
  return (
    <ListItem
      button
      onClick={() => {
        history.push(link);
      }}
    >
      <ListItemIcon>{ <ListIcon title={link}/> }</ListItemIcon>
      <ListItemText> {capitalizeEachWord(title)} </ListItemText>
    </ListItem>
  );
}

export default function NavList({ open, onClose }) {
  const NavArray = Object.entries(navlinks);
  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      {NavArray.map(([label, link]) => (
        <ListLink key={label} title={label} link={link} />
      ))}
    </Drawer>
  );
}
