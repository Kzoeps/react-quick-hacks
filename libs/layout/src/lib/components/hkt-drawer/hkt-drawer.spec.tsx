import { render } from '@testing-library/react';

import HktDrawer from './hkt-drawer';

describe('HktDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HktDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
