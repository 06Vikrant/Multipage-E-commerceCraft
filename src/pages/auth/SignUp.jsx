import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { AuthOptions, PasswordInput } from "../../components";
import { BaseButtonBlack } from "../../styles/themes/button";
import { FormElement, Input } from "../../styles/themes/form";
import {
  CheckboxGroup,
  FormGridWrapper,
  FormTitle,
} from "../../styles/themes/form_grid";
import { Container } from "../../styles/themes/styles";
import { staticImages } from "../../utils/imgaes";

const SignUpWrapper = styled.section`
  form {
    margin-top: 40px;
    .form-elem-text {
      margin-top: -16px;
      display: block;
    }
  }

  .text-space {
    margin: 0 4px;
  }
`;

const SignUp = () => {
  return (
    <SignUpWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img2}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access to in any of our products
                </p>
              </FormTitle>
              <AuthOptions />
              <form>
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
                  <span className="form-elem-error">
                    *Please enter a valid email address
                  </span>
                </FormElement>
                <PasswordInput fieldName="Password" name="password" />
                <span className="form-elem-text font-medium">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </span>

                <CheckboxGroup>
                  <li className="flex items-center">
                    <input type="checkbox" />
                    <span>
                      Agree to our
                      <Link to="/" className="text-underline">
                        Terms of use
                      </Link>
                      <span className="text-space">and</span>
                      <Link to="/" className="text-underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Suscribe to our monthly newletter
                    </span>
                  </li>
                </CheckboxGroup>
                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>
              <p className='flex flex-wrap account-rel-text'>
                Already have an account?
                <Link to="/sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
