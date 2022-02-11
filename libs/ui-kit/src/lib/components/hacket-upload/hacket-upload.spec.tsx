import { render } from '@testing-library/react';

import HacketUpload from './hacket-upload';

describe('HacketUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HacketUpload />);
    expect(baseElement).toBeTruthy();
  });
});
