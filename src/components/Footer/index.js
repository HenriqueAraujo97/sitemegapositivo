import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaServer } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre nós </FooterLinkTitle>
                               <FooterLink to ="facebook.com">How it works</FooterLink>
                               <FooterLink >Testimonials</FooterLink>
                               <FooterLink to="/home">Careers</FooterLink>
                               <FooterLink to="/home">Investors</FooterLink>
                               <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contacto  </FooterLinkTitle>
                               <FooterLink to="/home">How it works</FooterLink>
                               <FooterLink to="/home">Testimonials</FooterLink>
                               <FooterLink to="/home">Careers</FooterLink>
                               <FooterLink to="/home">Investors</FooterLink>
                               <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>     
                    </FooterLinksWrapper>
                     
                   
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/'>
                            Megapositivo
                        </SocialLogo>
                        <WebsiteRights>Henrique Araújo © {new Date().getFullYear() }  
                         Todos os direitos reservados. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/concessionariolg
                            " target= "_blank"
                            aria-label = "Facebook" > 
                            <FaFacebook />
                             </SocialIconLink>   
                             <SocialIconLink href="/" target= "_blank"
                            aria-label = "Instagram" > 
                            <FaInstagram />
                             </SocialIconLink>  
                             <SocialIconLink href="/" target= "_blank"
                            aria-label = "Youtube" > 
                            <FaYoutube />
                            </SocialIconLink> 
                            <SocialIconLink href="//www.linkedin.com/in/megapositivo-lda-a469521b7" target= "_blank"
                            aria-label = "Linkedin" > 
                            <FaLinkedin />
                             </SocialIconLink>  
                             <SocialIconLink href="/signin" target= "_blank"
                            aria-label = "Server" > 
                            <FaServer />
                             </SocialIconLink> 
                             
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer