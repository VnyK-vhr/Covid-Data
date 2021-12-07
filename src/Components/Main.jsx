import React, { useEffect, useRef, useState } from "react";
import Details from "./Details";
import TitleBar from "./TitleBar";
import { formatData } from "../util";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Header } from "../style/styles";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export default function Main() {
  const [data, setData] = useState(null);
  const [overall, setOverall] = useState(null);
  const [live, setLive] = useState(0);
  const [scrollPos, setPos] = useState(0);

  const titleRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPos(window.pageYOffset);
    });
    return () =>
      window.removeEventListener("scroll", () =>
        console.log("Scroll listener removed")
      );
  }, []);

  useEffect(() => {
    // Initial fetch
    fetch(process.env.REACT_APP_LIVE_VACCINE_COUNT_URL)
      .then((res) => res.json())
      .then((data) => setLive(data.count))
      .catch((err) => console.log(err));

    // fetch every 10 sec
    let interval = setInterval(() => {
      fetch(process.env.REACT_APP_LIVE_VACCINE_COUNT_URL)
        .then((res) => res.json())
        .then((data) => setLive(data.count))
        .catch((err) => console.log(err));
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(
    () =>
      !data &&
      fetch(process.env.REACT_APP_COVID_DATA_URL)
        .then((res) => res.json())
        .then((res) => {
          setData([...res.filter((el) => el.sno !== "11111")]);
          setOverall(formatData(res.find((el) => el.sno === "11111")));
        })
        .catch((err) => alert(err)),
    [data]
  );

  return (
    <div>
      <TitleBar ref={titleRef} data={data || []} />
      <div
        style={{
          height: titleRef.current?.getBoundingClientRect()?.height + 5 || 0,
        }}
      />

      {data ? (
        <Grid container spacing={2} sx={{ p: 2, px: 0 }}>
          <Grid item xs={12} md={6}>
            <Header>National Data</Header>
            <Grid container spacing={1} sx={{ p: 2, px: 1 }}>
              <Grid item xs={12}>
                <Paper
                  elevation={2}
                  sx={{
                    px: 1.5,
                    py: 1,
                    backgroundColor: "#f7e98e",
                    borderRadius: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        color: "#e96125",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Live Vaccinations
                    </div>
                    <span style={{ margin: "auto 0px auto auto" }}>
                      {live.toLocaleString("en-IN")}
                    </span>
                  </div>
                </Paper>
              </Grid>
              {overall?.map((el) => (
                <Grid key={el.title} item xs={6} md={6}>
                  <Paper
                    elevation={2}
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
            {window.innerWidth > 900 && (
              <div style={{ marginTop: "10px" }}>
                <Header>APIs used &amp; official links</Header>
                <div
                  style={{
                    fontSize: "18px",
                    padding: "0px 10px 10px 10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px auto",
                      border: "2px solid #eee",
                      padding: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <span>Ministry of Health and Family Welfare: </span>
                    <a
                      href="https://www.mohfw.gov.in/"
                      style={{ marginLeft: "auto" }}
                    >
                      https://www.mohfw.gov.in/
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px auto",
                      border: "2px solid #eee",
                      padding: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <span>My Gov: </span>
                    <a
                      href="https://www.mygov.in/covid-19"
                      style={{ marginLeft: "auto" }}
                    >
                      https://www.mygov.in/covid-19
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px auto",
                      border: "2px solid #eee",
                      padding: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <span>Covid Data API: </span>
                    <a
                      href="https://www.mohfw.gov.in/data/datanew.json"
                      style={{ marginLeft: "auto" }}
                    >
                      https://www.mohfw.gov.in/data/datanew.json
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px auto",
                      border: "2px solid #eee",
                      padding: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <span>Live Vaccination API: </span>
                    <a
                      href="https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination"
                      style={{ marginLeft: "auto" }}
                    >
                      https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Header>Statewise Data</Header>

            <div
              style={{
                height:
                  window.innerWidth > 899
                    ? window.innerHeight -
                      titleRef.current?.getBoundingClientRect()?.height -
                      75
                    : "auto",
                overflowY: "scroll",
              }}
            >
              {data.map((el) => (
                <Details key={el.sno} stateData={el} />
              ))}
            </div>
          </Grid>
        </Grid>
      ) : (
        "Loading..."
      )}

      {scrollPos > 250 && (
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            animation: "animate-in 0.3s ease",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: `smooth` })}
        >
          <KeyboardArrowUpRoundedIcon />
        </Fab>
      )}
    </div>
  );
}
