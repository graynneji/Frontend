import { CircularProgress, Typography } from "@mui/material";
 const StateLoading = ()=>{
    return(
        <div>
       
        <div style={{      display: "flex",
        height: "100vh",
        width: "100vw",
        background: "#fffa",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
    
        flexDirection:"column",
        zIndex: 2000,}}>
          <CircularProgress />
          <Typography mt={3} >Fetching Sectors Please Wait...</Typography>
        </div>
      </div>)
    }
    export default StateLoading;