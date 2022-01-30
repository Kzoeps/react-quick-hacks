import { render } from '@testing-library/react';

import UsePhoneVerifyHook from './use-phone-verify.hook';

describe('UsePhoneVerifyHook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsePhoneVerifyHook />);
    expect(baseElement).toBeTruthy();
  });
});
