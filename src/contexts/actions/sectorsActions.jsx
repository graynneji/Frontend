import client from "../../../api/client";

export const GetAllSectors = async (dispatch) => {
    dispatch({
      type: "LOADING",
    });
  
    try {
      const res = await client.get("/sectors");
  console.log(res,"response")
      dispatch({
        type: "FETCHED_DATA",
        payload: res.data.sectors,
      });
      // dispatch({});
      // getCurrentUser(dispatch);
      return true;
    } catch (error) {
      console.log("error fetching sectors", error);
      dispatch({
        type: "ERROR",
        payload: error?.response?.data?.message,
      });
      return false;
    }
  };