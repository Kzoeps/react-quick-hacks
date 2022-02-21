import React from 'react';
import { Drawer } from 'antd';
import { NavigationConfiguration } from '../../models';

export interface HktDrawerProps {
  showDrawer: boolean,
  onDrawerClose: (...args: unknown[]) => unknown,
  configuration: NavigationConfiguration,
  onItemClick: (value: string) => void
}

export const HktDrawer = ({ showDrawer, onDrawerClose, configuration, onItemClick }: HktDrawerProps) => {
  return (
    <Drawer title='Basic Drawer' placement='left' onClose={onDrawerClose} visible={showDrawer}>
      {configuration.map((navItem) => <div key={navItem.value} onClick={() => onItemClick(navItem.value)}>
        <p>
          {navItem.icon} {navItem.title}
        </p>
      </div>)}
    </Drawer>
  );
};
export default HktDrawer;
