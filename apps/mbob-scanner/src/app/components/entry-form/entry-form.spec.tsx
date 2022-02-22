import { render } from '@testing-library/react';

import EntryForm from './entry-form';

describe('EntryForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EntryForm />);
    expect(baseElement).toBeTruthy();
  });
});
