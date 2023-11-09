import {useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import "./Header.module.css"
import gif from "./image/sticker.gif"
import ControlledSwitches from "./ThemeSwitcher";
import {useState} from "react";

const Header = () => {

    const clickToRick = () => {
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    }

    const navigate = useNavigate();

    const navTo = (path:string) => {
        navigate(`${path}`, {state:{active:true}})
    }

    const [isActive, setIsActive] = useState<boolean>(false);
    const toggleActiveAndNavigate = (path: string) => {
        setIsActive(!isActive);
        navigate(`${path}`, {state:{active:true}})
    }

    //when clicking on header page doesn't highlight
    //TODO when clicking button it need to be highlighted, not working right now
    //TODO Navlink

    return (
        <div className={css.Header}>

            <h1>The Movie App</h1>

            <div className={css.Middle}>
                <h1 className={css.MidEl} onClick={() => navigate("search")}>Search</h1>
                <h1 className={css.MidEl} onClick={() => navigate("movies")}>Movies</h1>
                <h1 className={css.MidEl} onClick={() => navigate("genres")}>Genres</h1>

                {/*<h1 className={`${css.MidEl} ${isActive ? "active" : ""}`} onClick={() => toggleActiveAndNavigate("movies")}>Movies</h1>*/}
                {/*<h1 className={`${css.MidEl} ${isActive ? "active" : ""}`} onClick={() => toggleActiveAndNavigate("genres")}>Genres</h1>*/}
                <h1 className={css.MidEl}>Favorite</h1>
            </div>
            <div id={"darkThemeSwitcher"}>
                <ControlledSwitches/>
            </div>

            <div id={"Steve"} className={`${css.Profile}`} onClick={clickToRick}>
                <h5>Steve Rambo</h5>
                <img src={gif} alt={"profile_picture"}/>
            </div>
        </div>
    );
};

export {Header};