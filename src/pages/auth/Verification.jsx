import { Link } from 'react-router-dom';
import { styled } from 'styled-components'
import { BaseButtonGreen } from '../../styles/themes/button';
import { FormElement, Input } from '../../styles/themes/form';
import { FormGridWrapper, FormTitle } from '../../styles/themes/form_grid';
import { Container } from '../../styles/themes/styles';
import { staticImages } from '../../utils/imgaes';

const VerificationWrapper = styled.section``;

const Verification = () => {
  return (
    <VerificationWrapper>
      <FormGridWrapper>
        <Container>
            <div className="form-grid-content">
                <div className="form-grid-left">
                    <img src={staticImages.form_img4} alt="" className='object-fit-cover' />
                </div>
                <div className="form-grid-right">
                    <FormTitle>
                        <h3>Verification</h3>
                        <p>Verify your code</p>
                    </FormTitle>
                    <form action="">
                      <FormElement>
                        <label htmlFor="" className='form-elem-label'>Verification Code</label>
                        <Input type='text' name='' placeholder='' className='form-elem-control'/>
                      </FormElement>
                      <BaseButtonGreen type='submit' className='form-submit-btn'>
                        <Link to='/' className='text-white font-medium'>Verify Code</Link>
                      </BaseButtonGreen>
                    </form>
                </div>
            </div>
        </Container>
      </FormGridWrapper>
    </VerificationWrapper>
  )
}

export default Verification
