import { Component } from "react";
import LogoImage from "../../images/Logo.png";
import { NotificationMenu } from '../../Redux/NotificationMenu/nof_selector'
import { setNotificationMenu } from "../../Redux/NotificationMenu/actions";
import { connect } from 'react-redux'
import { LinkC, LI, UL, Nav, NavDeskHidden } from "../../Styled/Styled";
import { FaBars} from "react-icons/fa";
class Navigation extends Component {
  NavCall = () => {
    const { notification_menu } = this.props;
    this.props.NotificationMenu(!notification_menu);
  };
  render() {
    const { notification_menu } = this.props;
    const NavOpenStyle = notification_menu ? {} : { display: "none" };
    const NavOpenStyleMargin = notification_menu ? { marginLeft: "250px" } : null;
    return (
      <div>
        <NavDeskHidden style={NavOpenStyle} className="NavDeskLinkHam">
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
        <Nav style={NavOpenStyleMargin}>
          <div onClick={this.NavCall} className="HamBurger">
            <FaBars />
          </div>
          <LinkC className="LogoLink" to="/">
            <img className="Logo" alt="EDFBD" src={LogoImage}></img>
          </LinkC>
          <UL>
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
              <LinkC className="FocusBtnMenu" to="#">
                Donate
              </LinkC>
            </LI>
            <LI>
              <LinkC className="FocusBtnMenu" to="#">
                Become a Member
              </LinkC>
            </LI>
          </UL>
        </Nav>
      </div>
    );
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