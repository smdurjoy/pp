import React from 'react'
import {animated, useSpring} from 'react-spring'
import { NavLink } from "react-router-dom"
import {Nav, Image} from "react-bootstrap"
import image from '../../asset/image/brand-image.jpg'

const ToggleMenu = ({ toggled }) => {

    const { x } = useSpring({
        x: toggled ? 0 : 100
    });
    return (
        <animated.div className="nav-wrapper" 
        style={{ transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }}>
            <div className="img-area">
                <Image className="sidebarImage" src={image} roundedCircle />
            </div>
            <Nav className="nav">
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/">Home</NavLink>
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/about">About</NavLink>
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/education">Education</NavLink>
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/skill">Skill</NavLink>
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/portfolio">Portfolio</NavLink>
                <NavLink exact activeStyle={{color:'rgb(0, 65, 150)'}} className="navItem" to="/hobbies">Hobbies</NavLink>
                </Nav>
        </animated.div>
    );
};

export default ToggleMenu;