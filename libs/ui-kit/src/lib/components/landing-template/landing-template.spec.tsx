import { render } from '@testing-library/react';

import LandingTemplate from './landing-template';

describe('LandingTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandingTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
