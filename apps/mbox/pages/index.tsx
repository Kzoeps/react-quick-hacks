import { LandingTemplate } from '@react-quick-hacks/ui-kit';
import { LANDING_TEXT } from '../constants';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <LandingTemplate
      title={LANDING_TEXT.title}
      titleSlogan={LANDING_TEXT.titleSlogan}
      description={LANDING_TEXT.description}
      ctaButtonDescription={LANDING_TEXT.ctaButtonDescription}
      secondaryButtonDescription={LANDING_TEXT.secondaryButtonDescription}
    />
  );
}

export default Index;
