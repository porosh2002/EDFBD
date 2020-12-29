import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { AiTwotonePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi'
import moment from 'moment'
import {
  Footer,
  FooterContainer,
  FooterContent,
  FooterTitle,
  FooterLink,
} from "../../Styled/Styled";
export default function FooterComponent() {
  return (
    <Footer>
      <FooterContainer>
        <FooterContent>
          <FooterTitle to="#">SITE MAP</FooterTitle>
          <FooterLink to="#">Home</FooterLink>
          <FooterLink to="#">About</FooterLink>
          <FooterLink to="#">Mission</FooterLink>
          <FooterLink to="#">Training</FooterLink>
          <FooterLink to="#">Events</FooterLink>
          <FooterLink to="#">News</FooterLink>
          <FooterLink to="#">Donate</FooterLink>
        </FooterContent>
        <FooterContent>
          <FooterTitle>CONNECT WITH AJWS</FooterTitle>
          <FooterLink to="#">Facebook</FooterLink>
          <FooterLink to="#">Twitter</FooterLink>
          <FooterLink to="#">YouTube</FooterLink>
          <FooterLink to="#">Linkedin</FooterLink>
          <FooterLink to="#">EDF Blog</FooterLink>
        </FooterContent>
        <FooterContent>
          <FooterTitle>PRIVACY POLICY</FooterTitle>
          <FooterLink to="#">Privacy Policy</FooterLink>
        </FooterContent>
        <FooterContent>
          <FooterTitle>CONTACT US</FooterTitle>
                  <div style={{ display: "flex",marginTop:"5px"}}>
            <div className="FooterIcon">
              <BiMap />
            </div>
            <FooterLink to="#">Mogbazar, Dhaka.</FooterLink>
          </div>
                  <div style={{ display: "flex",marginTop:"5px"}}>
            <div className="FooterIcon">
              <IoMailOutline />
            </div>
            <FooterLink to="#">edfobd@gmail.com</FooterLink>
          </div>
                  <div style={{ display: "flex",marginTop:"2px"}}>
            <div className="FooterIcon">
              <AiTwotonePhone />
            </div>
            <FooterLink to="#">+8801710-218420</FooterLink>
          </div>
        </FooterContent>
      </FooterContainer>
      <p className="FooterCopyright">
              © <span>{ moment().format('YYYY')}</span> EDF All rights reserved.{" "}
        <span style={{ color: "#dfdfdf" }}>
          Design and Developed by{" "}
          <span>
            <Link style={{ color: "#F26522" }} to="#">
              BestITCare
            </Link>
          </span>
        </span>
      </p>
    </Footer>
  );
}
