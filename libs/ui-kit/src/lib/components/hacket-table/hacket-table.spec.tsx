import { render } from '@testing-library/react';

import HacketTable from './hacket-table';

describe('HacketTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HacketTable />);
    expect(baseElement).toBeTruthy();
  });
});
