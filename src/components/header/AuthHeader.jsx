import { styled } from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { BaseLinkGreen, BaseLinkOutlineDark } from "../../styles/themes/button";
import { breakpoints } from "../../styles/themes/default";
import { Container } from "../../styles/themes/styles";
import { staticImages } from "../../utils/imgaes";

const ButtonGroupWrapper = styled.div`
  gap: 8px;

  @media (max-width: ${breakpoints.sm}) {
    button,
    a {
      min-width: 100px;
    }
  }
`;

const AuthHeader = () => {
  return (
    <HeaderMainWrapper className='flex items-center'>
      <Container>
        <div className="header-wrap flex items-center justify-between">
          <SiteBrandWrapper to='/' className='inline-flex'>
            <div className="brand-img-wrap flex items-center justify-center">
              <img className="site-brand-img" src={staticImages.logo} alt="" />
            </div>
            <span className="site-brand-text">CODE BUY</span>
          </SiteBrandWrapper>
          <div className="flex items-center">
            <ButtonGroupWrapper className="flex items-center">
              <BaseLinkGreen to="/sign_in">Login</BaseLinkGreen>
              <BaseLinkOutlineDark to="/sign_up">Sign up</BaseLinkOutlineDark>
            </ButtonGroupWrapper>
          </div>
        </div>
      </Container>
    </HeaderMainWrapper>
  );
};

export default AuthHeader;
