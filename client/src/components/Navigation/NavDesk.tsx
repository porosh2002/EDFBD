import React, { Component } from 'react'
import LogoImage from '../../images/Logo.png';
import {LinkC,LI,UL,Nav} from '../../Styled/Styled'
export default class Navigation extends Component {
    render() {
        return (
            <Nav>
                <LinkC className='LogoLink' to='/'>
                    <img className='Logo' alt='EDFBD' src={LogoImage}></img>
                </LinkC>
                    <UL>
                        <LI><LinkC to='#'>Home</LinkC></LI>
                        <LI><LinkC to='#'>About</LinkC></LI>
                        <LI><LinkC to='#'>Mission</LinkC></LI>
                        <LI><LinkC to='#'>Training</LinkC></LI>
                        <LI><LinkC to='#'>Events</LinkC></LI>
                        <LI><LinkC to='#'>News</LinkC></LI>
                        <LI><LinkC to='#'>Donate</LinkC></LI>
                        <LI><LinkC to='#'>Become a Member</LinkC></LI>
                    </UL>
            </Nav>
        )
    }
}
