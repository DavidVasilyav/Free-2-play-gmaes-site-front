import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
function Loading() {
  const [loading, setLoading] = useState(false);
  const userAuth = useSelector((state) => state.userAuth);

  useEffect(() => {
    if(userAuth.loading){
        setLoading(true)
    } if(!userAuth.loading) {
        const timer = setTimeout(() => {
            setTimeout(setLoading(false))
        }, 3000)

    }
  },[userAuth])

  return (
    <Box>
      {loading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Loading;
