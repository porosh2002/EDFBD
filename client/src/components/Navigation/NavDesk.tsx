import React, { Component } from 'react'
import Logo from '../../images/Logo.png';
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <div className='navigation'>
                <Link to='/'>
                    <img alt='EDFBD' src={Logo}></img>
               </Link>
            </div>
        )
    }
}
