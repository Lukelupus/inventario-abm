import React, { useEffect } from "react"
import {useRouter} from "next/router"



function NavItem({to, children, ...props}) {
    const router = useRouter()
    const isActive = router.query.to

 

    
    
    return (
        <li className={isActive ? "active nav-item" : "nav-item"}>
        <a className="nav-a" href={to} {...props}>
            {children}
        </a>
    </li>
    )
}


export default NavItem;