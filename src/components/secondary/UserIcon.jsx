import React from 'react';
import { Flex } from '../../styles/MainStyles';

// this receives an object with the users display name, email, country ect. . .

const UserIcon = ({ userInfo }) => {
  if (userInfo)
    return (
      <Flex
        // border='1px solid red'
        alignItems={'center'}
        width='fit-content'
        gap='.5rem'
      >
        <img src={userInfo?.images[0]?.url} style={{ borderRadius: '50%' }} />

        {userInfo?.display_name?.toUpperCase()}
      </Flex>
    );
};

export default UserIcon;
