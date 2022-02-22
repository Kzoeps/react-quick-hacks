import { render } from '@testing-library/react';

import FirebaseAuthContext from './firebase-auth-context';

describe('FirebaseAuthContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirebaseAuthContext />);
    expect(baseElement).toBeTruthy();
  });
});
