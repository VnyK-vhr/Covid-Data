import React, { useEffect, useState } from "react";
// import { BarChart } from "recharts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { formatData } from "../util";

export default function Details({ stateData }) {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => setData(stateData ? formatData(stateData) : []), [stateData]);
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        borderLeft: "2px solid #eee",
        backgroundColor: expanded ? "#E5FFFA" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ fontSize: "18px" }}
      >
        {stateData.state_name}
      </AccordionSummary>
      {/*  E5FFFA */}
      <AccordionDetails sx={{ pt: 0 }}>
        <Grid container spacing={1}>
          {data?.map((el) => (
            <Grid key={el.title} item xs={6} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  px: 1.5,
                  py: 1,
                  backgroundColor: el.bg,
                  borderRadius: "15px",
                }}
              >
                <div style={{ color: el.textColor, fontWeight: "600" }}>
                  {el.title}
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span style={{ marginTop: "auto" }}>{el.count}</span>
                  {el.change > 0 && (
                    <div
                      style={{
                        marginLeft: "auto",
                        color: el.changeColor,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {el.icon}
                      <span style={{ marginTop: "auto" }}>
                        {el.change.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
