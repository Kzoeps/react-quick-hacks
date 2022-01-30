import { render } from '@testing-library/react';

import usePhoneVerify from './use-phone-verify.hook';

describe('UsePhoneVerifyHook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<usePhoneVerify />);
    expect(baseElement).toBeTruthy();
  });
});
