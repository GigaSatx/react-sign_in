import {
  alpha,
  AppBar,
  Fade,
  IconButton,
  InputBase,
  styled,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";

const RootStyles = styled("div")(({ theme }) => ({
  width: "100%",
  marginBottom: 0,
}));
const MenuButtonStyles = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  marginLeft: -12,
  marginRight: 20,
}));
const TitleStyles = styled(Typography)(({ theme }) => ({
  display: "none",
  variant: "h6",
  color: "inherit",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

class MyNav extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };
  render() {
    return (
      <RootStyles>
        <AppBar position="static" color="primary">
          <Toolbar>
            <MenuButtonStyles>
              <span>rocket league</span>
            </MenuButtonStyles>
            <TitleStyles>App title</TitleStyles>
            <Switch
              color="warning"
              checked={this.state.auth}
              onChange={this.handleChange}
              aria-label="login switch"
            />
            <div style={{ flexGrow: "1" }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </RootStyles>
    );
  }
}
export default MyNav;
