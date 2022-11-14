import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";

const reducer =(state,action) =>{

}
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
});
export default store;