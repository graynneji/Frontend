/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";

import { Checkbox, CircularProgress, Typography } from "@mui/material";
import Selector1 from "./components/custom/Selector";
import { GLobalContext } from "./contexts";
import StateLoading from "./components/helper/StateLoading";
import { CreateUserData } from "./contexts/actions/userAction";

function App() {
  const { sectorsState:{data,loading},}= useContext(GLobalContext)
  const [agree,setAgree]=useState(false)
  const [submitLoading,setSubmitLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    selectedSector: [],
   
  });
  console.log("formData", formData)
  const handleSubmit = async(e) => {
    e.preventDefault();
    //if you want to submit just pass the formData as the body parameter to the backend
    setSubmitLoading(true);
    const res = await CreateUserData(formData)
    setSubmitLoading(false);
  };

  return (
    <section>
      {
        loading&&
 <StateLoading />
      }
      <p>
        Please enter your name and pick the Sectors you are currently involved
        in
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            required
            id="name"
            value={formData.name}
            name="name"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              marginTop: 20,
            }}
          >
            <p style={{ padding: 0, margin: 0 }}>Selector</p>
            <Selector1
              value={formData.selectedSector}
              onSelect={(e) => {
                const r = [...formData.selectedSector];
                const i = formData.selectedSector.findIndex((item) => item === e);
                if (i > -1) {
                  r.splice(i, 1);
                  setFormData({
                    ...formData,
                    selectedSector: r,
                  });
                } else {
                  const b = r.push(e);
                  setFormData({
                    ...formData,
                    selectedSector: r,
                  });
                }
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              marginTop: 20,
            }}
          >
            <Checkbox
              checked={agree}
              style={{ padding: 0, margin: 0 }}
              onClick={() => {
      setAgree(!agree);
              }}
              size="small"
            />
            <p style={{ padding: 0, margin: 0 }}> Agree to terms</p>
          </div>

          <button
            disabled={formData.name === "" || formData.selectedSector.length === 0}
            onClick={(e) => {
              if(!agree){
                alert("Please agree to terms")
              }
              else{
handleSubmit(e)
              }
           
            }}
            style={{
              background: "#1976d2",
              borderRadius: 10,
              boxShadow: 0,
              border: 0,
              paddingLeft: 10,
              paddingRight: 10,
              color: "#fff",
              marginTop: 20,
            }}
          >
            {
              submitLoading?
              <CircularProgress size={10} color="inherit"  />
              :
              "Save"
            }
         
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
