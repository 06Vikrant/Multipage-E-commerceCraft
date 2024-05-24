import { styled } from "styled-components";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormGridWrapper, FormTitle } from "../../styles/themes/form_grid";
import { Container } from "../../styles/themes/styles";
import { staticImages } from "../../utils/imgaes";
import { FormElement, Input } from "../../styles/themes/form";
import { PasswordInput } from "../../components";
import { Link } from "react-router-dom";
import { BaseButtonBlack, BaseButtonGreen } from "../../styles/themes/button";
import { defaultTheme } from "../../styles/themes/default";

const SignInScreenWrapper = styled.section`
  .form-seperator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: 768px) {
      margin: 24px 0;
    }

    .seperator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .seperator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

const SignIn = () => {
  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img1} className="object-fit-cover" />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>
              <AuthOptions />

                <div className="form-seperator flex items-center justify-center">
                  <span className="seperator-line"></span>
                  <span className="seperator-text inline-flex items-center justify-center text-white">
                    OR
                  </span>
                  <span className="seperator-line"></span>
                </div>

                <form action="">
                  <FormElement>
                    <label htmlFor="" className="form-elem-label">
                      Username or email address
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      name=""
                      className="form-elem-control"
                    />
                  </FormElement>
                  <PasswordInput fieldName="Password" name="password" />
                  <Link
                    to="/reset"
                    className="form-elem-text text-end font-medium"
                  >
                    Forgot your password?
                  </Link>
                  <BaseButtonBlack 
                    type='submit'
                    className='form-submit-btn'
                  >
                    Sign In
                  </BaseButtonBlack>
                </form>
                <p className="flex flex-wrap account-rel-text">
                  Don&apos;t have a account?
                  <Link to='/sign_up'>
                      Sign Up  
                  </Link>
                </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignIn;
