import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update this line

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);

  &.scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-10px')});
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-color);
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.span<{ isOpen: boolean }>`
  position: relative;
  
  &, &:before, &:after {
    width: 30px;
    height: 2px;
    background-color: var(--text-color);
    display: inline-block;
    transition: all 0.3s ease;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
  }

  &:before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
  }

  &:after {
    bottom: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
  }

  & {
    background-color: ${({ isOpen }) => (isOpen ? 'transparent' : 'var(--text-color)')};
  }
`;

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav className={className}>
      <Logo to="/">
        <LogoImage src={logo} alt="TEACcH Logo" />
      </Logo>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About TEACcH</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Get in Touch</NavLink>
        <NavLink to="/donate">Donate</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;