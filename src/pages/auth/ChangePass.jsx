import { styled } from 'styled-components'
import { PasswordInput } from '../../components';
import { BaseButtonBlack } from '../../styles/themes/button';
import { FormGridWrapper, FormTitle } from '../../styles/themes/form_grid';
import { Container } from '../../styles/themes/styles';
import { staticImages } from '../../utils/imgaes';

const ChangePasswordWrapper = styled.section``;

const ChangePass = () => {
  return (
    <ChangePasswordWrapper>
        <FormGridWrapper>
            <Container>
                <div className="form-grid-content">
                    <div className="form-grid-left">
                        <img src={staticImages.form_img5} alt="" className='object-fit-cover'/>
                    </div>
                    <div className="form-grid-right">
                        <FormTitle>
                            <h3>Create New Password</h3>
                            <p>Your new password must be different from the previous passwords.</p>
                        </FormTitle>
                        <form>
                            <PasswordInput fieldName='Password' name='password'/>
                            <PasswordInput fieldName='Confirm-Password' name='confirm_password' errorMsg='New password and confirm password do not match'/>
                            <BaseButtonBlack type='submit' className='form-submit-btn'>Reset Password</BaseButtonBlack>
                        </form>
                    </div>
                </div>
            </Container>
        </FormGridWrapper>
    </ChangePasswordWrapper>
  )
}

export default ChangePass