import React from "react"
import ReactDOM from "react-dom/client"
import { FaSearchengin, FaUserSecret } from "react-icons/fa"

const logo = <img className="logo" src={require("./img/logo.png")} />
const searchIcon = <FaSearchengin className="search-icon" onClick={onClickSearch}/>;
const userIcon = <FaUserSecret size={24} color="white" />
const searchBar = <input type="text" placeholder="Search Here" ></input>

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

// searchbar functionality
// const searchIconJs = document.querySelector(".search-icon")
function onClickSearch() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const rgb = `rgb(${r},${g},${b})`
    const body = document.body
    body.style.backgroundColor = rgb
}
// searchIconJs.addEventListener("click", onClickSearch)


const rootJS = document.getElementById("root")
const root = ReactDOM.createRoot(rootJS)

root.render(<HeaderComponent />)