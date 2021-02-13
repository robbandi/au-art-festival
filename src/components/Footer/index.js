import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const mapAPI = {
  width:400,
  height:300,
  // left: 8,
  frameborder:0,
  // style:border0,
  allowfullscreen:"",
  tabindex:0
};

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Useful Links</FooterLinkTitle>
              <FooterLink to='https://www.abersu.co.uk/aboutaber/abersustaff/'>Contact Us</FooterLink>
              <FooterLink to='https://www.abersu.co.uk/freshers2020/studentoffers/'>Student Offers</FooterLink>
              <FooterLink to='https://www.abersu.co.uk/advertising/'>Advertising</FooterLink>
              <FooterLink to='https://www.abersu.co.uk/freshers2020/suguide/'>SU Guide</FooterLink>
              <FooterLink to='https://www.abersu.co.uk/cookiepolicy/'>Cookie Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <p className='contactDet'>Students Union
              Penglais
Aberystwyth
SY23 3DX
01970 621700

union@aber.ac.uk</p>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        {/* <FooterLinksWrapper> */}
            {/* <FooterLinkItems> */}
        <iframe style={mapAPI} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.530655579395!2d-4.06532468419645!3d52.41518197979457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486f764be9e96d75%3A0x914d8cd830f79327!2sStudents&#39;%20Union!5e0!3m2!1sen!2suk!4v1589363812891!5m2!1sen!2suk"></iframe>
        {/* </FooterLinkItems> */}
          {/* </FooterLinksWrapper> */}
                <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Aberystwyth University
            </SocialLogo>
            <WebsiteRights> Robin Naghshbandi | Hannah Laidlaw © 2021 All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
