import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderWrapper = styled.header`
  background-color: var(--background-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MobileNavLink = styled(NavLink)`
  padding: 10px 0;
  font-size: 18px;
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">
          <LogoImage src={logo} alt="TEACcH Logo" />
          <span>TEACcH</span>
        </Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Get in Touch</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
        <MobileNavLink to="/programs" onClick={toggleMobileMenu}>Programs</MobileNavLink>
        <MobileNavLink to="/gallery" onClick={toggleMobileMenu}>Gallery</MobileNavLink>
        <MobileNavLink to="/blog" onClick={toggleMobileMenu}>Blog</MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Get in Touch</MobileNavLink>
        <MobileNavLink to="/donate" onClick={toggleMobileMenu}>Donate</MobileNavLink>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;