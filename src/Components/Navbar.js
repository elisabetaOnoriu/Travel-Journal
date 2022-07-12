import React from "react"
import world from "../images/world-logo.png"
import travel from "../images/travel.png"

export default function Navbar() {
    return (
        <nav>
            <img className = "world"src = {world} alt = "world logo"/>
            <img className = "travel" src = {travel} alt = "travel"/>
        </nav>
    )
}