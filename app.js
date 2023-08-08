import React from "react"
import ReactDOM from "react-dom/client"
import { FaSearchengin, FaUserSecret } from "react-icons/fa"

const logo = <img className="logo" src={require("./img/logo.png")} />
const searchIcon = <FaSearchengin className="search-icon"/>;
const userIcon = <FaUserSecret size={24} color="white" />
const searchBar = <input type="text" placeholder="Search Here"></input>
const HeaderComponent = function () {
    return (
        <div className="header">
            {logo}
            {searchIcon}
            {searchBar}
            {userIcon}
        </div>
    )
}

const rootJS = document.getElementById("root")
const root = ReactDOM.createRoot(rootJS)

root.render(<HeaderComponent />)