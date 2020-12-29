import styled from 'styled-components';
import {Link} from 'react-router-dom'
// Navigation
export const Nav = styled.div`
  height:70px;
  width:100vw;
  position:fixed;
  top:0;
  background-color:#F26522;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items:center;
  z-index:999999999999;
`;
//  Navigation Link
const Link_common = `
text-decoration:none;
letter-spacing:.5px;
&:hover {
color:#cfcfcf;
}
`
const NavDesk_common = `
height:150vh;
position:fixed;
top:-100px;
padding-bottom:100px;
z-index:99999999;
}
`
export const NavDeskHidden = styled.div`
 ${NavDesk_common}
width:250px;
background-color:#343a40;
`;
export const LinkC = styled(Link)`
${Link_common}
color:#ffff;
    font-size:15px;
    font-weight: 600;
`;
export const LinkCMob = styled(Link)`
${Link_common}
color:#f7f7f7;
    display:block;
    font-size:19px;
    text-align:center;
    margin:15px 0px;
    font-family: 'Josefin Sans', sans-serif;
`;
export const LI = styled.li`
list-style:none;
`;
export const LI2 = styled.li`
list-style:none;
background-color:#929cb933;
padding:10px 15px;
margin:1px 0px;
`;
export const UL = styled.ul`
display:flex;
justify-content:space-between;
width:650px;
align-items:center;
margin-right:30px;
margin-left:300px;
`;
// Mobile Menu 
export const MobileMenu = styled.div`
height:100%;
width:100vw;
position:fixed;
top:0;
z-index:999999999999;
`;
export const Content = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`;
export const MenuTimes = styled.div`
color:#f7f7f7;
right:50px;
position:absolute;
top:50px;
font-size:25px;
color:#dfdfdf;
`;
// Footer
export const Footer = styled.div`
padding:50px 30px;
background-color:#343a40;
`;
export const FooterContainer = styled.div`
display:flex;
justify-content:space-around;
`
export const FooterContent = styled.div`
padding:30px;
height:200px;
width:180px;
`;
export const FooterTitle = styled.p`
text-decoration:none !important;
font-size:15px;
font-family: 'Josefin Sans', sans-serif;
color:#F26522;
/* color:#f7f7f7; */
margin-bottom:20px;
`;
export const FooterLink = styled(Link)`
font-family: 'Josefin Sans', sans-serif;
display:block;
margin:5px 0px 0px 2px;
font-size:15px;
color: #cfcfcf;
text-decoration:none;
`;
// Loading
export const LoaderDiv = styled.div`
height:100vh;
width:100%;
position:absolute;
top:0px;
background-color:#29303bbd;
display:flex;
align-items:center;
justify-content:center;
`;
