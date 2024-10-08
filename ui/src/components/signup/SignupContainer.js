import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Snackbar,
  Typography,
} from "@mui/material";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
import { formSpacing, formWidth } from "../../constants";
// import {
//   stringValidator,
//   emailValidator,
//   fullNameValidator,
//   passwordValidator,
// } from "./helpers/zod.validators";
import { useNavigate } from "react-router-dom";

// zod validation
// const registerValidationSchema = z
//   .object({
//     fullName: fullNameValidator,
//     email: emailValidator,
//     password: passwordValidator,
//     confirmPassword: stringValidator,
//   })
//   .refine(
//     (values) => {
//       return values.password === values.confirmPassword;
//     },
//     {
//       message: 'The passwords do not match',
//       path: ['confirmPassword'],
//     }
//   );

const SignUpContainer = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // const { register, handleSubmit, formState } = useForm({
  //   resolver: zodResolver(registerValidationSchema),
  // });

  // const { errors } = formState;
  const handleSubmit = () => {};

  const [invalidRegistration, setInvalidRegistration] = useState("");

  // const handleRegister = async (data) => {
  //   try {
  //     const payload = await axios.post('/api/auth/signup', {
  //       fullName: data.fullName,
  //       email: data.email,
  //       password: data.password ?? '',
  //     });
  //     if (payload.status === 200) {
  //       setOpen(true);
  //       setTimeout(() => {
  //         navigate('/login');
  //       }, 3000);
  //     }
  //   } catch (err) {
  //     if (err.response && err.response.status === 409) {
  //       console.log('Email already exists');
  //       setInvalidRegistration('Email already exists, please try with another email');
  //     } else if (err.response && err.response.status === 422) {
  //       console.log('Required fields not filled');
  //       setInvalidRegistration('Required fields not filled');
  //     }
  //   }
  // };

  return (
    <>
      <Box
        minHeight={"100vh"}
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/psalted-bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <Box margin={"auto"} bgcolor={"transparent"} width={formWidth}>
          <Stack direction={"column"} margin={"auto"} spacing={formSpacing}>
            <Stack spacing={1}>
              <Typography variant="h3" color={"primary"} textAlign={"center"}>
                REGISTER
              </Typography>
              <Typography variant={"body1"} textAlign={"center"}>
                Create a New Account
              </Typography>
            </Stack>
            <form
              onSubmit={handleSubmit({
                /*handleRegister*/
              })}
            >
              <Stack spacing={formSpacing}>
                <Stack spacing={1}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    // {...register("fullName", {
                    //   required: "Required",
                    // })}
                    // error={!!errors?.fullName?.message}
                    // helperText={errors?.fullName?.message}
                  />
                </Stack>
                <Stack spacing={1}>
                  <TextField
                    label="Email"
                    fullWidth
                    autoComplete={"email"}
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
                    // fullWidth
                    // error={!!errors?.password?.message}
                    // helperText={errors?.password?.message}
                  />
                </Stack>
                <Stack spacing={1}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    // {...register("confirmPassword", {
                    //   required: "Required",
                    // })}
                    // fullWidth
                    // error={!!errors?.confirmPassword?.message}
                    // helperText={errors?.confirmPassword?.message}
                  />
                </Stack>
                {invalidRegistration ? (
                  <Typography variant={"body2"} color={"error"}>
                    {invalidRegistration}
                  </Typography>
                ) : null}
                <Button
                  type={"submit"}
                  color={"primary"}
                  variant={"contained"}
                  fullWidth
                >
                  REGISTER
                </Button>
                <Link
                  href="/login"
                  underline={"hover"}
                  variant="button"
                  textAlign={"center"}
                >
                  ALREADY HAVE AN ACCOUNT? LOGIN
                </Link>
              </Stack>
            </form>
          </Stack>
        </Box>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            Successfully registered! Redirecting to login page...
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default SignUpContainer;
