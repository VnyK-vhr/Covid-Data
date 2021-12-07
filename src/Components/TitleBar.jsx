import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import SearchIcon from "@mui/icons-material/Search";
// import Autocomplete from "@mui/material/Autocomplete";
// import { Search, SearchIconWrapper, StyledInputBase } from "../style/styles";


export default React.forwardRef(function (props, ref) {
  //   console.log(props);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" ref={ref}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Covid Data
          </Typography>
          {/* <Autocomplete
            options={props.data}
            getOptionLabel={(option) => option.state_name}
            renderOption={(props, option) => (
              <Box
                {...props}
                sx={{ position: "absolute", top: "50px", left: "50px" }}
              >
                {option.state_name}
              </Box>
            )}
            renderInput={(params) => (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search States..."
                  inputProps={{ "aria-label": "search", ...params.inputProps }}
                />
              </Search>
            )}
          /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
