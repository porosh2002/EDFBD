import {Footer,FooterLink,FooterContainer} from '../../Styled/Styled'
export default function FooterComponent() {
    return (
        <Footer>
            <FooterContainer>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/'>About</FooterLink>
            <FooterLink to='/'>Mission</FooterLink>
            <FooterLink to='/'>Training</FooterLink>
            <FooterLink to='/'>Events</FooterLink>
            <FooterLink to='/'>News</FooterLink>
            <FooterLink to='/'>Donate</FooterLink>
            <FooterLink to='/'>Login</FooterLink>
            </FooterContainer>
        </Footer>
    )
}
