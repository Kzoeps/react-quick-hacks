import { render } from '@testing-library/react';

import EntryAddition from './entry-addition';

describe('EntryAddition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EntryAddition />);
    expect(baseElement).toBeTruthy();
  });
});
