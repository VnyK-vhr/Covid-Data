import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export const colors = {
  active: {
    color: "#027524",
    bg: "#c3f6c3",
    rename: "Active",
  },
  positive: {
    color: "#9370db",
    bg: "#e6e6fa",
    rename: "Total",
  },
  cured: {
    color: "#00008b",
    bg: "#c4d9ff",
    rename: "Discharged",
  },
  death: {
    color: "#ff4500",
    bg: "#ffd589",
    rename: "Deaths",
  },
};

export const formatData = (stateData) => {
  return ["active", "positive", "cured", "death"].map((obj) => {
    let list = {}; // initialise empty list

    // Capitalise and set title
    list.title = colors[obj].rename;

    // New count
    list.count = parseInt(stateData[`new_${obj}`]).toLocaleString("en-IN");

    // Change since yesterday
    let change = stateData[`new_${obj}`] - stateData[obj];

    // Set change to absolute
    list.change = Math.abs(change);

    // Icon: up/down
    list.icon =
      change > 0 ? <ArrowUpwardRoundedIcon /> : <ArrowDownwardRoundedIcon />;

    // Change color: red/green
    list.changeColor =
      change > 0
        ? obj === "cured"
          ? "#006400"
          : "#ff0000"
        : change < 0 && obj === "cured"
        ? "#ff0000"
        : "#006400";

    // Card text color
    list.textColor = colors[obj].color;

    // Card bg color
    list.bg = colors[obj].bg;

    // Return the list
    return list;
  });
};
