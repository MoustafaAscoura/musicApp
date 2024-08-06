import { useDispatch, useSelector } from "react-redux"
import AlbumSection from "../../components/AlbumSection/AlbumSection"
import { useContext, useEffect } from "react"
import { addItemtoCart, emptyCart, removeItemFromCart } from "../../store/slices/cartSlice"
import themeContext from "../../context/themeContext"

export default function Homepage () {
    const cart = useSelector(state => state.cart.cartBody)
    const dispatch = useDispatch()

    const {darkMode} = useContext(themeContext)

    return <>
        <h1 className={`mt-3 p-3 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>Homepage</h1>
        {/* <button onClick={()=> dispatch(emptyCart())}>Empty Card</button>
        <button className="mx-5" onClick={()=> dispatch(addItemtoCart("New product"))}>Add item to cart</button>
        <button onClick={()=> dispatch(removeItemFromCart())}>Remove item from cart</button> */}
        <AlbumSection/>
    </>
}