
import React, { useRef, useEffect } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';


/*import particlesConfig from "../../particles.json";
  import Particles from "react-tsparticles";*/

const Header = () => {

    return (
      
        <div className="header-wraper" id="Home">
          
            <div className="main-info">

                <h1>Developer</h1>
                
                <Typed
                className="typed-text"
                strings={["Web Developement", "Mainframe Development", "Technical analyst"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
             
                <Link
                className="btn-main-offer"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Contact Me
              </Link>
            </div>
        </div>
    )
}

export default Header;

/*const Header = () => {
  const particles = useRef();

    useEffect(() => {
        matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                const newColorScheme = e.matches ? "dark" : "light";

                particles.current.loadTheme(newColorScheme);
            });
    }, []);

    <Particles options={particlesConfig} id="tsparticles" container={particles} />*/