import React, { Component } from 'react'
import { Nav, LinkC,LI,NavDeskHidden } from '../../Styled/Styled';
import { NotificationMenu } from '../../Redux/NotificationMenu/nof_selector'
import { setNotificationMenu } from "../../Redux/NotificationMenu/actions";
import {connect} from 'react-redux'
import LogoImage from '../../images/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
class Navigation extends Component {
    MenuAction = () => {
        const { notification_menu } = this.props;
        this.props.NotificationMenu(!notification_menu);
    }
    render() {
        const { notification_menu } = this.props;
        const NavOpenStyle = notification_menu ? {} : { display: "none" };
        const NavOpenStyleMargin = notification_menu ? { marginLeft: "250px" } : null;
        return (
            <div>
                <NavDeskHidden style={NavOpenStyle} className="NavDeskLinkHam">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          <LI>
            <LinkC to="/">Home</LinkC>
          </LI>
          <LI>
            <LinkC to="/about">About</LinkC>
          </LI>
          <LI>
            <LinkC to="#">Mission</LinkC>
          </LI>
          <LI>
            <LinkC to="#">Training</LinkC>
          </LI>
          <LI>
            <LinkC to="#">Events</LinkC>
          </LI>
          <LI>
            <LinkC to="#">News</LinkC>
          </LI>
          <LI>
            <LinkC to="#">Donate</LinkC>
          </LI>
          <LI>
            <LinkC to="#">Become a Member</LinkC>
          </LI>
        </NavDeskHidden>
                <Nav style={NavOpenStyleMargin} className='NavMobile'>
                    <div onClick={this.MenuAction} className='Bars'>
                        <AiOutlineMenu />
                    </div>
                    <LinkC to='/' className='LogoLink'>
                        <img className="Logo" src={LogoImage} alt='EDFBD'></img>
                    </LinkC>
                </Nav>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      NotificationMenu: (status) => dispatch(setNotificationMenu(status)),
    };
};
const mapStateToProps = (state) => {
    return {
      notification_menu: NotificationMenu(state),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);