import React from "react"
import {Link} from "react-router-dom"

function Header() {

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('onScroll')
    } else {
      document.querySelector('header').classList.remove('onScroll')
    }
  })

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
