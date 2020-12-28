import { Component } from "react";
import LogoImage from "../../images/Logo.png";
import { LinkC, LI, UL, Nav, NavDeskHidden } from "../../Styled/Styled";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
export default class Navigation extends Component {
  state = {
    navOpen: false,
  };
  NavCall = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  render() {
    const { navOpen } = this.state;
    const NavOpenStyle = navOpen ? {} : { display: "none" };
    const NavOpenStyleMargin = navOpen ? { marginLeft: "250px" } : null;
    return (
      <div>
        <NavDeskHidden style={NavOpenStyle} className="NavDeskLinkHam">
          <div className="NavDeskTimes">
            <FaRegTimesCircle />
          </div>
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
