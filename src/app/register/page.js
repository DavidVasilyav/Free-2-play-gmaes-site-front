"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  InputAdornment,
  IconButton,
  Typography,
  Input,
  Stack,
  FormControl,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GlobalButton from "components/Button/GlobalButton";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import GlobalTextField from "components/textFiled/GlobalTextField";
import backgroundImageRegister from "public/img/registerBackGround.jpg";
import { registerUser, loginUser, restSlice } from "redux/reducers/userAuthReducer";
import Loading from "components/Loading/Loading";

export default function Register() {
  const userAuth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 8,
  });
  const [errMessage, setErrMessage] = useState("");
  const [alertMsg, setAlertMsg] = useState(false);
  const [disableFormSendBtn, setDisableFormBtn] = useState(false);
  const [errInput, setErrInput] = useState({
    userName: false,
    password: false,
    email: false,
    firstName: false,
    lastName: false,
    age: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function sendFormController(e) {
    e.preventDefault();
    if (inputs.password != inputs.confirmPassword) {
      setErrMessage("password is not match");
      setAlertMsg(true);
      return setDisableFormBtn(true);
    } else {
      dispatch(
        registerUser({
          username: inputs.username,
          password: inputs.password,
          email: inputs.email,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          age: inputs.age,
        })
      );
      
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
    if (userAuth.error) {
      setErrMessage(userAuth.error);
      setDisableFormBtn(true);
      setAlertMsg(true);
    }
    if (userAuth.loading) {
    } if (userAuth.loading === 'success') {
      console.log('login');
      setTimeout(() => {
        dispatch(
          loginUser({ username: inputs.username, password: inputs.password })
          );
        dispatch(restSlice())
      }, 3000)
      }
  }, [inputs, userAuth]);

  return (
    <Box
      flexGrow={1}
      className="main-box"
      sx={{
        minHeight: "80vh",
        // height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${backgroundImageRegister.src})`,
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        sx={{
          color: "#fffffe",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderBottom: "2px solid #fffffe",
          m: 1,
        }}
      >
        Register
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 1,
          m: 1,
        }}
      >
        <form onSubmit={sendFormController}>
          <FormControl
            onChange={getValue}
            sx={{ gap: "10px", alignItems: "center", m: 1 }}
          >
            <GlobalTextField
              type="text"
              name={"username"}
              value={Input.userName}
              label={"Username"}
              error={errInput.userName}
              required={true}
            />
            <TextField
              name={"password"}
              value={Input.password}
              label={"password"}
              error={errInput.password}
              required={true}
              InputLabelProps={{ style: { color: "#2cb67d" } }}
              sx={{
                width: 222.2,
                bgcolor: "#16161a",
                "& .MuiInputBase-input": {
                  backgroundColor: "#16161a",
                  color: "#fffffe",
                  border: "none",
                  borderRadius: 1,
                },
                "& .MuiInputLabel-root": { color: "#2cb67d" },
                "& .MuiOutlinedInput-root": {
                  color: "black",
                  "&.Mui-focused input": {
                    color: "#fffffe",
                  },
                  "&.Mui-focused fieldset": {
                    color: "#fffffe",
                    borderColor: "#2cb67d",
                  },
                },
                "& .label.Mui-focused": {
                  color: "#fff",
                },
                "&MuiSvgIcon-root": {
                  color: "#fff",
                },
              }}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        color: "white",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      //  onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              name={"confirmPassword"}
              value={Input.confirmPassword}
              label={"confirm password"}
              error={errInput.confirmPassword}
              required={true}
              InputLabelProps={{ style: { color: "#2cb67d" } }}
              sx={{
                width: 222.2,
                bgcolor: "#16161a",
                "& .MuiInputBase-input": {
                  backgroundColor: "#16161a",
                  color: "#fffffe",
                  border: "none",
                  borderRadius: 1,
                },
                "& .MuiInputLabel-root": { color: "#2cb67d" },
                "& .MuiOutlinedInput-root": {
                  color: "black",
                  "&.Mui-focused input": {
                    color: "#fffffe",
                  },
                  "&.Mui-focused fieldset": {
                    color: "#fffffe",
                    borderColor: "#2cb67d",
                  },
                },
                "& .label.Mui-focused": {
                  color: "#fff",
                },
                "&MuiSvgIcon-root": {
                  color: "#fff",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        color: "white",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      //  onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <GlobalTextField
              type="text"
              name={"email"}
              value={inputs.email}
              label={"E-mail"}
              error={errInput.email}
              required={true}
            />
            <GlobalTextField
              type="text"
              name={"firstName"}
              value={Input.firstName}
              label={"FirstName"}
              error={errInput.firstName}
              required={true}
            />
            <GlobalTextField
              type="text"
              name="lastName"
              value={inputs.lastName}
              label="LastName:"
              error={errInput.lastName}
            />

            <GlobalTextField
              type="number"
              name="age"
              value={inputs.age}
              label="Age:"
              error={errInput.age}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 8,
                max: 120,
              }}
            />
            {userAuth.loading ? (
              <>
                <Box>
                  <Loading />
                </Box>
              </>
            ) : (
              <>
                <GlobalButton
                  text="submit"
                  type="submit"
                  disabled={disableFormSendBtn}
                />
              </>
            )}
          </FormControl>
        </form>
      </Box>
      {alertMsg ? (
        <Stack
          sx={{
            width: { xs: "50%" },
            position: "relative",
          }}
        >
          <>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertMsg(false);
                    setDisableFormBtn(false);
                    setErrMessage("");
                    dispatch(restSlice())
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {errMessage}
            </Alert>
          </>
        </Stack>
      ) : (
        <></>
      )}
    </Box>
  );
}
