import { useEffect } from "react";
import Nav from "../Components/Nav";

function Header() {

    useEffect(() => {
        function scrollHeader(){
            const header = document.getElementById("header")
            // When the sccroll is greater that 50 viewport height, add the scroll-header class to the header tag
            if(this.scrollY >= 50)
                header.classList.add("scroll-header")
            
            else
                header.classList.remove("scroll-header")
        }
        
        window.addEventListener("scroll", scrollHeader)
    }, [])

    return (
        <header className="header" id="header">
            <Nav />
        </header>
    );
}

export default Header;