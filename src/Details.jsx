import React from "react";
// import { BarChart } from "recharts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const type = [
  {
    type: "Active",
    color: "#027524",
    bg: "#c3f6c3",
  },
  {
    type: "Positive",
    color: "#9370db",
    bg: "#e6e6fa",
  },
  {
    type: "Cured",
    color: "#00008b",
    bg: "#c4d9ff",
  },
  {
    type: "Death",
    color: "#ff4500",
    bg: "#ffd589",
  },
];

const icon = {
  down: <ArrowDownwardRoundedIcon />,
  up: <ArrowUpwardRoundedIcon />,
};

const color = {
  ok: "#00ff00",
  err: "#ff0000",
};

export default function Details({ stateData }) {
  // const
  return (
    <Paper
      elevation={8}
      sx={{ mx: 1, my: 3, p: 1, pb: 2, borderRadius: "10px" }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          color: "#aaa",
          paddingBottom: "10px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {stateData.state_name || "Total"}
      </div>
      <Grid container spacing={1}>
        {type.map((el) => (
          <Grid key={el.type} item xs={6} md={6}>
            <Paper
              variant="outlined"
              sx={{ px: 1, backgroundColor: el.bg, borderRadius: "10px" }}
            >
              <div style={{ color: el.color }}>{el.type}</div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>{stateData[el.type.toLowerCase()]}</span>
                <span style={{ marginLeft: "auto" }}>
                  {stateData["new_" + el.type.toLowerCase()] -
                    stateData[el.type.toLowerCase()] >
                  0
                    ? ""
                    : ""}
                </span>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
