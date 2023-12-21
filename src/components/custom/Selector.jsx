import * as React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Divider from "@mui/material/Divider";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { ButtonBase, Radio, Typography } from "@mui/material";
import { GLobalContext } from "../../contexts";
import SelectorHelper from "../helper/SelectorHelper";

export default function Selector1({ onSelect, value }) {
  const [height, setHeight] = React.useState(false);
  const { sectorsState } = React.useContext(GLobalContext);
 
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <ButtonBase
        onClick={toggleDrawer("bottom", true)}
        style={{
          background: "#d7d7d7",
          padding: 3,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 220,
        }}
      >
        <Typography variant="caption " color={"#1976d2"}>
          {value?.length} items
        </Typography>
        <MoreHorizIcon style={{ fontSize: 15, color: "#1976d2" }} />
      </ButtonBase>

      <SwipeableDrawer
        anchor="bottom"
        sx={{
          "& .css-9emuhu-MuiPaper-root-MuiDrawer-paper ": {
            height: height ? "90%" : "50%",
            borderTopLeftRadius: 20, // Adjust the radius as needed
            padding: 1,
            borderTopRightRadius: 20,
            background: "#f7f7f7",
            // Adjust the radius as needed
          },
        }}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            left: 10,
            right: 10,
            zIndex: -10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ButtonBase
              onClick={() => {
                setHeight(true);
              }}
            >
              <KeyboardArrowUpIcon style={{ fontSize: 35 }} />
            </ButtonBase>
            <ButtonBase
              onClick={() => {
                setHeight(false);
              }}
            >
              <KeyboardArrowDown style={{ fontSize: 35 }} />
            </ButtonBase>
          </div>
          <ButtonBase>
            <CloseIcon />
          </ButtonBase>
        </div>
        <div style={{ marginTop: 60, background: "#fff", borderRadius: 10 }}>
          <Box role="presentation">
            {sectorsState?.data?.map((sector, i) => (
              <div key={i}>
                {sector.sectors.map((category) => {
                 
                  return Object.keys(category).map((item, i) => (
                    <div key={i}>
                      <div
                        onClick={() => {
                          onSelect(item);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 5,
                        }}
                      >
                        <Radio
                          onClick={() => {
                            onSelect(item);
                          }}
                          size="small"
                          checked={
                            value?.find((selected) => selected === item) ===
                            item
                          }
                          value={item}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            width: "100%",
                            marginTop: 8,
                            marginBottom: 13,
                          }}
                        >
                          <Typography
                            style={{ fontWeight: 400 }}
                            onClick={() => {
                              onSelect(item);
                            }}
                          >
                            {item}
                          </Typography>
                          <Divider />
                        </div>
                      </div>
                      <SelectorHelper
                        onSelect={onSelect}
                        value={value}
                        array={category[item]}
                      />
                    </div>
                  ));
                })}
              </div>
            ))}
      
          </Box>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
