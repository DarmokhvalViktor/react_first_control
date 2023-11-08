import {useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import "./Header.module.css"
import gif from "./image/sticker.gif"
import ControlledSwitches from "./ThemeSwitcher";

const Header = () => {

    const clickToRick = () => {
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    }

    // const [button, setButton] = useState(true);

    const navigate = useNavigate();

    // function setBut():void {
    //     if(button) {
    //         document.body.style.backgroundColor = "black";
    //         document.body.style.color = "white"
    //         const classk = document.getElementsByClassName("MoviesPage")[0];
    //         classk.classList.add("dark")
    //         const button = document.getElementsByClassName("ThemeChanger")[0];
    //         button.classList.add("clicked")
    //     } else {
    //         document.body.style.backgroundColor = "white";
    //         document.body.style.color = "black"
    //         const classk = document.getElementsByClassName("MoviesPage")[0];
    //         classk.classList.remove("dark")
    //         const button = document.getElementsByClassName("ThemeChanger")[0];
    //         button.classList.remove("clicked")
    //     }
    //     setButton(!button)
    // }

    return (
        <div className={css.Header}>

            <h1>The Movie App</h1>

            <div className={css.Middle}>
                <h1 className={css.MidEl}>Search</h1>
                <h1 className={css.MidEl} onClick={() => navigate("movies")}>Movies</h1>
                <h1 className={css.MidEl} onClick={() => navigate("genres")}>Genres</h1>
                <h1 className={css.MidEl}>Favorite</h1>
            </div>
            <div id={"darkThemeSwitcher"}>
                <ControlledSwitches/>
            </div>
            {/*<button onClick={setBut} className={"ThemeChanger"}>Toggle dark mode</button>*/}

            <div id={"Steve"} className={`${css.Profile}`} onClick={clickToRick}>
                <h5>Steve Rambo</h5>
                <img src={gif} alt={"profile_picture"}/>
            </div>
        </div>
    );
};

export {Header};