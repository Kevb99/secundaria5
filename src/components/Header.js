import React from 'react';
import { Nav, Anchor } from '../styledcomponents/Menu';
const Header = () => {
  return (
    <Nav>
      <Anchor href="#team" alt=''>Equipo</Anchor>
      <Anchor href="#gallery" alt=''>Galeria</Anchor>
      <Anchor href="#maps" alt=''>Ubicacion</Anchor>
    </Nav>
  );
}

export default Header;
