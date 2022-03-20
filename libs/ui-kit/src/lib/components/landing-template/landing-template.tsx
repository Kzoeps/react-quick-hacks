import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LandingTemplateProps {}

const StyledLandingTemplate = styled.div`
  color: pink;
`;

export function LandingTemplate(props: LandingTemplateProps) {
  return (
    <StyledLandingTemplate>
      <h1>Welcome to LandingTemplate!</h1>
    </StyledLandingTemplate>
  );
}

export default LandingTemplate;
