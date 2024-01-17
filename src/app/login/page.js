"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";
import GlobalTextField from "components/textFiled/GlobalTextField";
import GlobalButton from "components/Button/GlobalButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, restSlice } from "redux/reducers/userAuthReducer";
import { useRouter } from "next/navigation";
import loginBackGround2 from "public/img/loginBackGround2.jpg";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import { FormWrapper } from "styles/login.style";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
export default function Login() {
  const userAuth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState(userAuth);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [loginAlert, setLoginAlert] = useState(false);
  const [loginAlertMsg, setLoginAlertMsg] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  // const checkIfUserLoggedIn = () => {
  //   const token = userAuth.user.token || null;
  //   if (!token) {
  //   } else {
  //     router.push("/");
  //   }
  // };

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleLogin(e) {
    e.preventDefault();
    if (!inputs.username && !inputs.password) {
      setLoginAlert(true);
      setDisableBtn(true);
      return setLoginAlertMsg("Please fill both fields");
    }
    if (!inputs.username) {
      setDisableBtn(true);
      setLoginAlert(true);
      return setLoginAlertMsg("username is missing");
    } else if (!inputs.password) {
      setDisableBtn(true);
      setLoginAlert(true);
      return setLoginAlertMsg("password is missing");
    } else {
      dispatch(loginUser(inputs));
      console.log(userAuth.error);
    }
  }

  const handleAlert = () => {
    setLoginAlert(false);
    setDisableBtn(false);
    dispatch(restSlice());
  };

  useEffect(() => {
    if (userAuth.error) {
      setLoginAlert(true);
      setLoginAlertMsg(userAuth.error);
    }
    if (localStorage.getItem('token')){
      setTimeout(() => {
        dispatch(restSlice())
        router.push("/");
      }, 1500);
      }
   
  }, [userAuth]);

  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        >
          <Image src={loginBackGround2} layout="fill" objectFit="cover"></Image>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={handleLogin}>
            <FormWrapper onChange={getValue} active={loginAlert === true}>
              <Box
                sx={{
                  color: "#fffe",
                  fontSize: 40,
                  textDecoration: "underline",
                }}
              >
                login
              </Box>
              <GlobalTextField
                inputProps={{
                  form: {
                    autocomplete: "off",
                  },
                }}
                name="username"
                value={inputs.username}
                label="Username"
              />
              <GlobalTextField
                type="password"
                name="password"
                value={inputs.password}
                label="Password"
              />
              {userAuth.loading ? (
                <>
                  <CircularProgress />
                </>
              ) : (
                <>
                  <GlobalButton
                    text="login"
                    type="submit"
                    disabled={disableBtn}
                  />
                </>
              )}
              <Link href={"/register"}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "none" },
                    color: "#fffffe",
                    textDecoration: "underline",
                  }}
                >
                  Register now!
                </Box>
              </Link>
            </FormWrapper>
          </form>

          {loginAlert ? (
            <>
              <Alert
                onClose={() => handleAlert()}
                sx={{ position: "relative", bottom: 15 }}
                severity="error"
              >
                {loginAlertMsg}
              </Alert>
            </>
          ) : (
            <></>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            float: "right",
            width: "60%",
            height: "100%",
            borderLeft: "3px solid",
            borderColor: (() =>ChangeDarkLightColors('#232323', '#EFF0F3')),
          }}
        >
          <Box
            sx={{
              height: 350,
              width: 300,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              bgcolor: "rgb(0, 0, 0, 0.7)",
              borderRight: "2px solid #ff8906",
              borderLeft: "2px solid #ff8906",
            }}
          >
            <Box
              sx={{
                borderBottom: "2px solid #fffe",
                width: 250,
                fontSize: 30,
              }}
            >
              <h2>Welcome</h2>
            </Box>
            <Box sx={{ textAlign: "center", mt: 5, fontSize: 20 }}>
              <h3>Log-in</h3>
              <h3>or</h3>
            </Box>
            <Link href="/register">
              <Box
                sx={{
                  position: "relative",
                  width: 250,
                  color: "#fff",
                  transition: "border-width 0.6s linear",
                  borderBottom: "2px solid #fffe",
                  transition: "1s",
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "underline #ff8906",
                  fontSize: 20,
                  pb: 5,
                  "&:hover": {
                    bgcolor: "rgb(0, 0, 0, 0.5)",
                    // fontSize: '15px',
                  },
                  "&:hover:before": {
                    borderTopColor: "#fffe",
                    borderRightColor: "#fffe",
                    transition:
                      "width 0.25s ease-out, height 0.25s ease-out 0.25s",
                  },
                  "&:hover:after": {
                    borderTopColor: "#fffe",
                    borderRightColor: "#fffe",
                    transition:
                      "border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s",
                  },
                }}
              >
                <h3>Register now!</h3>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
