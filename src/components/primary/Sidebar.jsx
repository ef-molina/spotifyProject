import { useState } from 'react';
import { Flex } from '../../styles/MainStyles';
import { sidebarCategories } from '../../utils/constants';
import { MenuItem, MenuIcon, MenuName } from '../../styles/SidebarStyles';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('/');

  const handleClick = (e) => {
    const clicked = e.target.closest('div').id;

    // console.log(e.target.closest('div').id);
    setActiveMenu(clicked);

    // if user logs out it will clear the token triggering login page
    if (clicked === 'logout') {
      localStorage.removeItem('access_token');
      window.location.reload();
    }
  };

  return (
    <Flex direction='column' width='fit-content'>
      {sidebarCategories.map((category) =>
        category.id === activeMenu ? (
          <MenuItem
            key={category.id}
            id={category.id}
            borderleft='0.4rem solid #17ab4d'
            pr='0.6rem'
            pl='0.8rem'
            bg='hsl(0 0% 100% / 0.5)'
            hoverright='none'
            hoverleft='none'
          >
            <MenuIcon>{category.icon}</MenuIcon>
            <MenuName>{category.name}</MenuName>
          </MenuItem>
        ) : (
          <Link
            key={category.id}
            to={category.id == '/' ? '/' : `/${category.id}`}
          >
            <MenuItem id={category.id} onClick={handleClick}>
              <MenuIcon>{category.icon}</MenuIcon>
              <MenuName>{category.name}</MenuName>
            </MenuItem>
          </Link>
        )
      )}
    </Flex>
  );
};

export default Sidebar;
