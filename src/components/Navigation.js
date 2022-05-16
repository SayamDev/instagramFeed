import logo from "../images/logo.png";
import searchicon from "../images/searchicon.png";


export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchicon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
            </div>
        </div>
    )
}