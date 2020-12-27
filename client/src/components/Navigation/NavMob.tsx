import React, { Component } from 'react'
import { Nav, LinkCMob, MobileMenu, Content, LinkC, MenuTimes } from '../../Styled/Styled';
import LogoImage from '../../images/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa'
export default class Navigation extends Component {
    state = {
        MenuOpen:false
    }
    MenuAction = () => {
        this.setState({MenuOpen:!this.state.MenuOpen})
    }
    render() {
        const { MenuOpen } = this.state;
        const OpenMenuStyle = MenuOpen ? null : ({display:"none"})
        return (
            <div>
                <Nav className='NavMobile'>
                    <LinkC to='/' className='LogoLink'>
                        <img className="Logo" src={LogoImage} alt='EDFBD'></img>
                    </LinkC>
                    <div onClick={this.MenuAction} className='Bars'>
                        <AiOutlineMenu />
                    </div>
                </Nav>
                <MobileMenu style={OpenMenuStyle} className="MobileMenu">
                    <MenuTimes onClick={this.MenuAction}>
                        <FaTimes />
                    </MenuTimes>
                    <Content onClick={this.MenuAction}>
                        <LinkCMob to='/'>Home</LinkCMob>
                        <LinkCMob to='/about'>About</LinkCMob>
                        <LinkCMob to='#'>Mission</LinkCMob>
                        <LinkCMob to='#'>Training</LinkCMob>
                        <LinkCMob to='#'>Events</LinkCMob>
                        <LinkCMob to='#'>News</LinkCMob>
                        <LinkCMob to='#'>Donate</LinkCMob>
                        <LinkCMob to='#'>Become a Member</LinkCMob>
                    </Content>
                </MobileMenu>
            </div>
        )
    }
}
