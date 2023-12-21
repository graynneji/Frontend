import client from "../../../api/client"
import { errorMessage } from "../../../utility"

export const CreateUserData = async(data)=>{
console.log(data,"data")
try {
const res = (await client.post("/users",data))
alert("User created successfully")
  return true

} catch (error) {
   console.log("error Creeting UserData",error) 
   alert(errorMessage(error))
   return false
}

}