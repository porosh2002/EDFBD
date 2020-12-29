import {Link} from 'react-router-dom'
import { Footer, FooterContainer, FooterContent, FooterTitle, FooterLink } from '../../Styled/Styled'
export default function FooterComponent() {
    return (
        <Footer>
            <FooterContainer>
                <FooterContent>
                    <FooterTitle to='#'>SITE MAP</FooterTitle>
                    <FooterLink to='#'>Home</FooterLink>
                    <FooterLink to='#'>About</FooterLink>
                    <FooterLink to='#'>Mission</FooterLink>
                    <FooterLink to='#'>Training</FooterLink>
                    <FooterLink to='#'>Events</FooterLink>
                    <FooterLink to='#'>News</FooterLink>
                    <FooterLink to='#'>Bangla</FooterLink>
                    <FooterLink to='#'>Donate</FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterTitle>CONNECT WITH AJWS</FooterTitle>
                    <FooterLink to='#'>Facebook</FooterLink>
                    <FooterLink to='#'>Twitter</FooterLink>
                    <FooterLink to='#'>YouTube</FooterLink>
                    <FooterLink to='#'>Linkedin</FooterLink>
                    <FooterLink to='#'>EDF Blog</FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterTitle>PRIVACY POLICY</FooterTitle>
                    <FooterLink to='#'>Privacy Policy</FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterTitle>CONTACT US</FooterTitle>
                </FooterContent>
            </FooterContainer>
        <p className='FooterCopyright'>© 2020 EDF All rights reserved. <span style={{color:"#dfdfdf"}}>Design and Developed by <span><Link style={{color:"#F26522"}} to='#'>BestITCare</Link></span></span></p>
        </Footer>
    )
}
