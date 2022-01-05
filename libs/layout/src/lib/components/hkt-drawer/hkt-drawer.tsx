import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

export const HktDrawer: React.FC<{showDrawer: boolean,
  onDrawerClose: (...args: unknown[]) => unknown}> = ({showDrawer, onDrawerClose}) => {
  return (
    <Drawer title="Basic Drawer" placement="left" onClose={onDrawerClose} visible={showDrawer}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  );
};
export default HktDrawer;
