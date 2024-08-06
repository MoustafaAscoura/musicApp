import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import { useContext } from "react";
import languageContext from "../../context/languageContext";

function HomepageLayout () {
    const {language} = useContext(languageContext)

    return <>
    <div dir={language === "en" ? "ltr" : "rtl"}>
        <Navbar NavbarTitle={"Music App"}/>
        <Outlet/>

        </div>
    </>
}

export default HomepageLayout