import compass from "../images/compass.png";
import dm from "../images/dm.png";
import heart from "../images/heart.png";

export const Menu = () => {
    return (
        <div className="menu">
            <img className="compass" src={compass} alt="instagram compass icon" />
            <img className="dm" src={dm} alt="instagram dm icon" />
            <img className="heart" src={heart} alt="instagram heart icon" />
        </div>
    )
}
