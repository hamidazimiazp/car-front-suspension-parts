import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import propTypes from "prop-types";
import useTitle from "utils/hooks/useTitle";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

const Wrapper = styled(Grid2)(({ theme }) => ({
  width: "100%",
  minHeight: "500px",
  border: `1px solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.main,
  color: theme.palette.secondary.contrastText,
  borderRadius: 5,
  margin: "auto",
  marginTop: 20,
  padding: 20,
  boxShadow:
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    right: 0, // Align the label to the right
    left: "unset", // Override left position
    textAlign: "right",
    color: theme.palette.primary.contrastText,
  },
  "& .MuiInputBase-input": {
    direction: "rtl", // Ensure input text is RTL
    color: theme.palette.primary.contrastText,
  },
  marginTop: 20,
  width: "100%",
}));

const Register = ({ PageTitle }) => {
  useTitle(PageTitle);
  const theme = useTheme();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="lg">
      <Wrapper size={{ xs: 12 }}>
        <Typography
          textAlign={"center"}
          variant="p"
          component={"h1"}
          color="primary.contrastText"
        >
          فرم ورود
        </Typography>
        <form
          onSubmit={registerHandler}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 100,
          }}
        >
          <Box>
            <CustomTextField
              onChange={onChangeHandler}
              value={formData.username}
              id="username"
              label="نام کاربری"
              name="username"
              variant="standard"
              placeholder="نام کاربری خود را وارد کنید"
              type="text"
            />
            <CustomTextField
              onChange={onChangeHandler}
              value={formData.email}
              id="email"
              label="ایمیل"
              name="email"
              variant="standard"
              placeholder="ایمیل خود را وارد کنید"
              type="email"
            />
            <CustomTextField
              onChange={onChangeHandler}
              value={formData.password}
              type="password"
              id="password"
              label="رمز عبور"
              name="password"
              variant="standard"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <CustomTextField
              onChange={onChangeHandler}
              value={formData.password_confirm}
              type="password"
              id="password_confirm"
              label="تکرار رمز عبور"
              name="password_confirm"
              variant="standard"
              placeholder="رمز عبور خود را مجددا وارد کنید"
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              padding: "5px 50px",
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            ورود
          </Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Register;

Register.propTypes = {
  PageTitle: propTypes.string,
};
