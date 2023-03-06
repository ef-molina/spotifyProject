import { useState } from 'react';
import { Flex } from '../../styles/MainStyles';
import { SearchBar } from '../secondary';
import { Link } from 'react-router-dom';

import largeLogo from '../../assets/Spotify_Logo_RGB_Green.png';
import smallLogo from '../../assets/Spotify_Icon_RGB_Green.png';
import { LargeLogo, SmallLogo } from '../../styles/NavbarStyle';

const Navbar = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      border='1px solid white'
      padding='.5rem'
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <LargeLogo src={largeLogo} height={40} border='1px solid white' />
        <SmallLogo src={smallLogo} height={40} border='1px solid white' />
      </Link>
      <SearchBar />
    </Flex>
  );
};

export default Navbar;
