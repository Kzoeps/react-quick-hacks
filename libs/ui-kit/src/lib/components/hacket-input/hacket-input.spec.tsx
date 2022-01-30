import { render } from '@testing-library/react';

import HacketInput from './hacket-input';

describe('HacketInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HacketInput />);
    expect(baseElement).toBeTruthy();
  });
});
