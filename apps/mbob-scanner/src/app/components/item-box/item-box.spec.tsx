import { render } from '@testing-library/react';

import ItemBox from './item-box';

describe('ItemBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemBox />);
    expect(baseElement).toBeTruthy();
  });
});
