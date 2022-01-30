import { render } from '@testing-library/react';

import FirebaseAuth from './firebase-auth';

describe('FirebaseAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirebaseAuth />);
    expect(baseElement).toBeTruthy();
  });
});
