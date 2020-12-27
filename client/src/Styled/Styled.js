import styled from 'styled-components';
import {Link} from 'react-router-dom'
// Navigation
export const Nav = styled.div`
  height:100px;
  position: sticky;
  top:0;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content:space-between;
`;
//  Navigation Link

export const LinkC = styled(Link)`
    text-decoration:none;
    color:#343a40;
    font-size:15px;
    font-weight: 600;
    letter-spacing:.5px;
    &:hover {
    color:royalblue;
  }
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