import React from 'react'
import { Home } from './style'

const Header = () => {
  return (
    <Home>
      <header>
        <div className="logo">
          <a href="#">LOGO</a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#"></a>Inicio
            </li>
            <li>
              <a href="#"></a>Navegação
            </li>
            <li>
              <a href="#"></a>Serviços
            </li>
            <li>
              <a href="#"></a>Fale Conosco
            </li>
          </ul>
        </nav>
      </header>
    </Home>
  )
}

export default Header
