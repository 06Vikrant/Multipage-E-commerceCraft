import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BaseButtonBlack } from "../../styles/themes/button";
import { FormElement, Input } from "../../styles/themes/form";
import { FormGridWrapper, FormTitle } from "../../styles/themes/form_grid";
import { Container } from "../../styles/themes/styles";
import { staticImages } from "../../utils/imgaes";
const CheckMaiWrapper = styled.section``;

const CheckMail = () => {
  return (
    <CheckMaiWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img1}
                alt=""
                className="object-fit-cover"
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Check Mail</h3>
                <p>
                  Please check your email inbox and click on the provided link
                  to reset your password. If you don&apos;t receive email. Click
                  here to resend.
                </p>
              </FormTitle>
              <form action="">
                <FormElement>
                    <label htmlFor="" className='form-elem-label'>Email</label>
                    <Input type='text' name="" placeholder="" className='form-elem-control'/>
                    <span className="form-elem-error">*We cannot find your email </span>
                </FormElement>
                <BaseButtonBlack className='form-submit-btn'>Send</BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                <Link to='/sign_in' className='font-medium'>
                  <span className="text_underline">Back to Login</span>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </CheckMaiWrapper>
  );
};

export default CheckMail;
