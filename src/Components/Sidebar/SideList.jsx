import {
  AccountBox,
  Article,
  Home,
  ModeNight,
  People,
  Person,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const SideList = () => {
  const sideList = [
    {
      name: "Homepage",
      icon: <Home />,
    },
    {
      name: "Pages",
      icon: <Article />,
    },
    {
      name: "Groups",
      icon: <People />,
    },
    {
      name: "Marketplace",
      icon: <Store />,
    },
    {
      name: "Friends",
      icon: <Person />,
    },
    {
      name: "Settings",
      icon: <Settings />,
    },
    {
      name: "Profile",
      icon: <AccountBox />,
    },
    {
      icon: <ModeNight />,
    },
    {
      icon: <Switch />,
    },
  ];
  return (
    <List>
      {sideList.map((list) => (
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideList;
