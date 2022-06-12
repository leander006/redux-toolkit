import {updateStart,updateSuccess,updateError,deleteError,deleteStart,deleteSuccess} from "./userSlice";
import axios from "axios";

export const updateUser = async(user,dispatch) =>{
      dispatch(updateStart());
      try {
            const res = await axios.post("http://localhost:3002/api/post/1/create",user);
            console.log(res);
            dispatch(updateSuccess(res.data))

      } catch (error) {
            dispatch(updateError())
            console.log(error.message);
      }
}


export const deleteUser = async(dispatch) =>{
      dispatch(deleteStart());
      try {
            await axios.delete("http://localhost:3002/api/delete/1/delete");
            dispatch(deleteSuccess())

      } catch (error) {
            dispatch(deleteError())
            console.log(error.message);
      }
}
