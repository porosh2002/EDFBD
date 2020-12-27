import styled from 'styled-components';
import {Link} from 'react-router-dom'
// Navigation
export const Nav = styled.div`
  height:100px;
  width:100vw;
  position:fixed;
  top:0;
  background-color:#ffff;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content:space-between;
`;
//  Navigation Link
const Link_common = `
text-decoration:none;
letter-spacing:.5px;
&:hover {
color:royalblue;
}
`
export const LinkC = styled(Link)`
${Link_common}
    color:#343a40;
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
export const UL = styled.ul`
display:flex;
justify-content:space-between;
width:800px;
align-items:center;
margin-right:30px;
`;
// Mobile Menu 
export const MobileMenu = styled.div`
height:100%;
width:100vw;
position:fixed;
top:0;
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
& :hover{
  color:#f7f7f7
}
`;
export const FooterContainer = styled.div`
text-align:center;
width:300px

`
export const FooterLink = styled(Link)`
font-family: 'Josefin Sans', sans-serif;
color:#cfcfcf;
text-decoration:none;
display:inline-block;
margin:10px 5px;
`;
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
