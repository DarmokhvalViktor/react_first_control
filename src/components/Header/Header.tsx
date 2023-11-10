import {NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import "./Header.module.css"
import gif from "./image/sticker.gif"
import ControlledSwitches from "./ThemeSwitcher";

const Header = () => {

    const clickToRick = () => {
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    }

    const navigate = useNavigate();

    //when clicking on header page doesn't highlight
    //TODO when clicking button it need to be highlighted, not working right now
    //TODO Navlink



    return (
        <div className={css.Header}>

            <h2 className={css.Title}>The Movie App</h2>

            <div className={css.Middle}>
                <NavLink to={"search"}>
                    <h1 className={css.MidEl}>Search</h1>
                </NavLink>
                <NavLink to={"movies"}>
                    <h1 className={css.MidEl}>Movies</h1>
                </NavLink>
                <NavLink to={"genres"}>
                    <h1 className={css.MidEl}>Genres</h1>
                </NavLink>
                <NavLink to={"search"}>
                    <h1 className={css.MidEl}>Favorite</h1>
                </NavLink>
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