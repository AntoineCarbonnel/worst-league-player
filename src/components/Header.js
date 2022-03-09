import React from "react"
import {Link} from "react-router-dom"

function Header() {
  return (
          <header>
            <Link to="/">
              Home
            </Link>
            <h2>
              W
              <span>
                P
              </span>
              L
            </h2>
            <Link to="/favorites">
              Favorites
            </Link>
          </header>
  )
}

export default Header
