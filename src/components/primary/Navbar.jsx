import { useEffect, useState } from 'react';
import { Flex } from '../../styles/MainStyles';
import { SearchBar } from '../secondary';
import { Link } from 'react-router-dom';

import largeLogo from '../../assets/Spotify_Logo_RGB_Green.png';
import smallLogo from '../../assets/Spotify_Icon_RGB_Green.png';
import { LargeLogo, SmallLogo } from '../../styles/NavbarStyle';
import { fetchFromApi } from '../../utils/APIController';
import { UserIcon } from '../secondary';

const Navbar = ({ handleReject }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetchFromApi('me')
      .then((res) => {
        if (res.error) throw res;

        if (res.display_name) setUserInfo(res);
      })
      .catch((error) => {
        console.log(error);
        handleReject();
      });
  }, []);

  while (!userInfo) return <h3>Loading . . .</h3>;

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
      <UserIcon userInfo={userInfo} />
    </Flex>
  );
};

export default Navbar;
