import React, { Component } from 'react'
import { Nav,LinkC } from '../../Styled/Styled';
import LogoImage from '../../images/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
export default class Navigation extends Component {
    render() {
        return (
            <Nav className='NavMobile'>
                <LinkC to='/' className='LogoLink'>
                <img className="Logo" src={LogoImage} alt='EDFBD'></img>
                </LinkC>
                <div className='Bars'>
                <AiOutlineMenu />
                </div>
            </Nav>
        )
    }
}
