import { createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({

      //With out api
      name: "user",
      initialState: {
            name:"leander07",
            email:"leanderdsilva07@gmail.com"
      },
      reducers:{
            update:(state,action) =>{
                  state.name= action.payload.name;
                  state.email= action.payload.email
            },
            remove:(state) =>(state={}),
      },

      //with API
      name:"user",
      initialState:{
            userInfo:{
                  name:"Angela",
                  email:"angeladsilva07@gmail.com",
            },
            pending:null,
            error:false,
      },
      reducers:{
            updateStart:(state) =>{
                  state.pending=true;
            },
            updateSuccess:(state,action)=>{
                  state.pending=false;
                  state.userInfo = action.payload;
            },
            updateError:(state) =>{
                  state.error=true;
                  state.pending=false;
            },
            deleteStart:(state) =>{
                  state.pending=null;
            },
            deleteSuccess:(state)=>{
                  state.userInfo = {};
            },
            deleteError:(state) =>{
                  state.error=true;
                  state.pending=true;
            }
      

      }
});


export const {updateStart,updateSuccess,updateError,deleteError,deleteStart,deleteSuccess} =userSlice.actions;

export default userSlice.reducer;
