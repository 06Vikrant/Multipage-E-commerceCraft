import { Link } from 'react-router-dom';
import { styled } from 'styled-components'
import { BaseButtonGreen } from '../../styles/themes/button';
import { Container } from '../../styles/themes/styles';
import { staticImages } from '../../utils/imgaes';

const PageNotFoundWrapper = styled.main`
    margin: 24px 0;

    .page-not-found-img {
        width: 450px;
        overflow: hidden;
    }
    .page-not-found-msg {
        border-radius: 6px;
        padding: 24px 0;
        margin-top: 16px;
        max-width: 400px;
        gap: 12px;
    }
`;

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper className='page-py-spacing'>
      <Container>
        <div className='flex items-center justify-center flex-col'>
            <div className='page-not-found-img flex items-center justify-center'>
                <img src={staticImages.page_not_found} alt="" className='object-fit-cover'/>
            </div>
            <div className='page-not-found-msg w-full flex items-center justify-center flex-col'>
                <p className='text-4xl font-semibold text-outerspace'>Opps! Page Not Found</p>
                <p className='text-gray text-center'>The page you are looking for might have been removed or temporaily unavailable</p>
                <BaseButtonGreen>
                    <Link className='text-white' to='/'>Back to HomePage</Link>
                </BaseButtonGreen>
            </div>
        </div>
      </Container>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound
