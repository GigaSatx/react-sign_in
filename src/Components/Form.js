import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent, MenuItem, Select } from "@mui/material";
import { LanguageContext } from "../Contexts/LanguageContext";

const words = {
  english: {
    email: "Email",
    password: "Password",
    remember: "Remember Me",
    signin: "Sign In",
  },
  hindi: {
    email: "ईमेल",
    password: "पासवर्ड",
    remember: "याद रखे",
    signin: "सिग्न करे",
  },
  french: {
    email: "Adresse Electronique",
    password: "Mot de Passe",
    remember: "rappelles toi",
    signin: "s'identifier",
  },
};

export default class SignIn extends Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  render() {
    const { languages, changeLanguage } = this.context;
    const { email, password, signin, remember } = words[languages];
    return (
      <Card
        elevation={10}
        sx={{ maxWidth: 450 }}
        style={{ margin: "2rem auto" }}
      >
        <CardContent>
          <Container component="main">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {signin}
              </Typography>
              <Select
                value={languages}
                onChange={changeLanguage}
                sx={{ height: "2rem", marginTop: "0.5rem" }}
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="hindi">Hindi</MenuItem>
                <MenuItem value="french">French</MenuItem>
              </Select>
              <Box
                component="form"
                onSubmit={this.handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={email}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={remember}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {signin}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </CardContent>
      </Card>
    );
  }
}
