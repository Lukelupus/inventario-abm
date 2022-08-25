import React from "react"
import Address from "./Address"
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
return (
    <div className="footer">
    <div className="dev-link">
        <p>Site desenvolvido por: <a href="https://react-professional-website.vercel.app/">    Lucas Moreira Botelho</a></p>
    </div>
    <div className="icon-links">
        <a href="https://www.facebook.com/alvesmachadosolucoes/">
            <FacebookIcon className="footer-icon"/>
        </a>
    
        <a href="https://www.instagram.com/alvesmachadoebretas/?hl=en">
        <InstagramIcon className="footer-icon"/>
        </a>
    </div>
    <Address />
    </div>
    
)
}

export default Footer