import { Component } from 'react'
import LogoImage from '../../images/Logo.png';
import { LinkC, LI, UL, Nav,NavDeskHidden,NavDeskHiddenParrent } from '../../Styled/Styled'
import { FaBars } from 'react-icons/fa'
export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <div className='HamBurger'>
                        <FaBars />
                    </div>
                    <LinkC className='LogoLink' to='/'>
                        <img className='Logo' alt='EDFBD' src={LogoImage}></img>
                    </LinkC>
                    <UL>
                        <LI><LinkC to='/'>Home</LinkC></LI>
                        {/* <LI><LinkC to='/about'>About</LinkC></LI>
                        <LI><LinkC to='#'>Mission</LinkC></LI>
                        <LI><LinkC to='#'>Training</LinkC></LI>
                        <LI><LinkC to='#'>Events</LinkC></LI>
                        <LI><LinkC to='#'>News</LinkC></LI> */}
                        <LI><LinkC className='FocusBtnMenu' to='#'>Donate</LinkC></LI>
                        <LI><LinkC className='FocusBtnMenu' to='#'>Become a Member</LinkC></LI>
                    </UL>
                </Nav>
                <NavDeskHiddenParrent>
                <NavDeskHidden></NavDeskHidden>
                </NavDeskHiddenParrent>
            </div>
        )
    }
}
