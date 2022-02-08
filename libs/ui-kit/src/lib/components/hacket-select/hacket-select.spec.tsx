import { render } from '@testing-library/react';

import HacketSelect from './hacket-select';

describe('HacketSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HacketSelect />);
    expect(baseElement).toBeTruthy();
  });
});
