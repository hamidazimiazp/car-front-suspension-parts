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
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "services/auth";
import { setCookies } from "utils/cookies/cookies";
import { toast } from "react-toastify";

const Wrapper = styled(Grid2)(({ theme }) => ({
  width: "100%",
  minHeight: "400px",
  height: "400px",
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

const Login = ({ PageTitle }) => {
  useTitle(PageTitle);
  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { isPending, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => await login(data),
  });

  const loginHandler = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    mutate(formData, {
      onSuccess: (data) => {
        setCookies(data.response.data);
        setFormData({
          email: "",
          password: "",
        });
        if (data.response.status === 200) {
          navigate("/dashboard/");
          toast.success("خوش آمدید");
        } else {
          toast.error("خطایی رخ داده است.");
        }
      },
      onError: () => {
        toast.error("خطایی رخ داده است.");
      },
    });
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
          onSubmit={loginHandler}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <CustomTextField
              onChange={onChangeHandler}
              value={formData.email}
              id="email"
              label="ایمیل"
              name="email"
              variant="standard"
              placeholder="ایمیل عبور خود را وارد کنید"
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
          </Box>
          <Box>
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
              {isPending ? "درحال ارسال ..." : "ورود"}
            </Button>
            <Button
              onClick={() => navigate("/auth/register/")}
              size="large"
              sx={{
                padding: "5px 50px",
                background: theme.palette.primary.main,
                color: theme.palette.grey[400],
                mr: 2,
              }}
            >
              ثبت نام
            </Button>
          </Box>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;

Login.propTypes = {
  PageTitle: propTypes.string,
};
