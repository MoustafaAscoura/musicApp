import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoritesSlice from "./slices/favoritesSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
        favList: favoritesSlice
    }
})