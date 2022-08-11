import React from "react"
import NavItem from "./NavItem"



function Header() {

 


    return (
      <header className="header">
        <nav className="nav">
            <a to="/" className="site-title">
              <img alt="Alves-Machado-Advogados" className="head-img" src="images/head.png"></img>
            </a>
            <ul>
              <NavItem to="#consulta">Faça seu Inventário</NavItem>
              <NavItem to="#testimonais">Testimoniais</NavItem>
              <NavItem to="#direitos-homoafetivos">Direitos Homoafetivos</NavItem>
              
             
            
            </ul>
            
        </nav>
       
      </header>
    )
    
}

export default Header;