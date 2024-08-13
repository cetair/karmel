import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signin } from "../../reducers/userSlice";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { formSpacing, formWidth } from "../../constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { emailValidator, passwordValidator } from "./zod.validators";
import { useNavigate } from "react-router-dom";

// zod validation
const loginValidationSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
});

const LoginContainer = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const { errors } = formState;

  const [invalidLogin, setInvalidLogin] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleEmailLogin = async (data) => {
  //   try {
  //     const payload = await axios.post('/api/auth/login', {
  //       email: data.email,
  //       password: data.password ?? '',
  //       isRememberPassword: rememberPassword,
  //     });
  //     dispatch(signin(payload.data));
  //     setInvalidLogin('');
  //     // TODO: Switch method once private routes are implemented
  //     // window.location.reload();
  //     navigate('/');
  //   } catch (error) {
  //     if (error?.response?.status === 500 || error?.response?.status === 401) {
  //       setInvalidLogin('Invalid email or wrong password');
  //     }
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Box
        minHeight={"100vh"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box margin={"auto"} bgcolor={"transparent"} width={formWidth}>
          <Stack direction={"column"} margin={"auto"} spacing={formSpacing}>
            <Stack spacing={0.5}>
              <Typography variant="h3" color={"primary"} textAlign={"center"}>
                LOGIN
              </Typography>
              <Typography variant={"body1"} textAlign={"center"}>
                Welcome Back
              </Typography>
            </Stack>
            <form
              onSubmit={handleSubmit({
                /*handleEmailLogin*/
              })}
            >
              <Stack spacing={formSpacing}>
                <Stack spacing={1}>
                  <TextField
                    label="Email"
                    fullWidth
                    autoComplete={"email"}
                    autoFocus
                    // {...register("email", {
                    //   required: "Required",
                    // })}
                    // error={!!errors?.email?.message}
                    // helperText={errors?.email?.message}
                  />
                </Stack>
                <Stack spacing={1}>
                  <TextField
                    label="Password"
                    type="password"
                    // {...register("password", {
                    //   required: "Required",
                    // })}
                    // autoComplete={"password"}
                    // fullWidth
                    // error={!!errors?.password?.message}
                    // helperText={errors?.password?.message}
                  />
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Checkbox
                    onChange={(e) => setRememberPassword(e.target.checked)}
                    checked={rememberPassword}
                  />
                  <Typography variant={"body2"}>Remember me</Typography>
                </Stack>
                {invalidLogin ? (
                  <Typography variant={"body2"} color={"error"}>
                    {invalidLogin}
                  </Typography>
                ) : null}
                <Button
                  type={"submit"}
                  color={"primary"}
                  variant={"contained"}
                  fullWidth
                >
                  LOGIN
                </Button>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link href="/register" underline={"hover"} variant="button">
                    CREATE ACCOUNT
                  </Link>
                  <Link
                    href="/password/recover"
                    underline={"hover"}
                    variant="button"
                  >
                    FORGOT PASSWORD?
                  </Link>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default LoginContainer;
