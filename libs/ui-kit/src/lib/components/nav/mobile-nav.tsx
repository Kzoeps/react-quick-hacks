import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NavItems } from '../../models';
import MobileNavItem from './mobile-nav-item';

export interface MobileNavProps {
  items: NavItems;
}
const MobileNav = ({items}: MobileNavProps) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
