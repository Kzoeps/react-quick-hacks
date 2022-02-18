import { render } from '@testing-library/react';

import RecordsListing from './records-listing';

describe('RecordsListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecordsListing />);
    expect(baseElement).toBeTruthy();
  });
});
