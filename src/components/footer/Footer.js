import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/react-project-v1">Testimonials</FooterLink>
            <FooterLink to="/react-project-v1">Investors</FooterLink>
            <FooterLink to="/react-project-v1">Careers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/react-project-v1">Contact</FooterLink>
            <FooterLink to="/react-project-v1">Support</FooterLink>
            <FooterLink to="/react-project-v1">Destinations</FooterLink>
            <FooterLink to="/react-project-v1">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/react-project-v1">Submit Video</FooterLink>
            <FooterLink to="/react-project-v1">Ambassadors</FooterLink>
            <FooterLink to="/react-project-v1">Agency</FooterLink>
            <FooterLink to="/react-project-v1">Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/react-project-v1">Instagram</FooterLink>
            <FooterLink to="/react-project-v1">Facebook</FooterLink>
            <FooterLink to="/react-project-v1">Youtube</FooterLink>
            <FooterLink to="/react-project-v1">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            eFIMa
          </SocialLogo>
          <WebsiteRights>eFIMa © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={"https://www.facebook.com/HTMLwebDesgin/?ref=py_c"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.instagram.com/javascriptmastery/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "https://www.youtube.com/results?search_query=web+development+"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href={
                "https://twitter.com/search?q=web%20development&src=typed_query"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.linkedin.com/learning/topics/web-development"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
