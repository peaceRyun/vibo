import { useNavigate } from 'react-router';
import { LastSectionWrapper } from './style';

const AboutContent5 = () => {
    const navigate = useNavigate();
    const onGoLogin = () => {
        navigate('/login');
    };
    return (
        <>
            <LastSectionWrapper>
                <img
                    src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/logo 1.png'
                    alt='VIBO 로그인'
                    className='logo'
                />
                <h2>지금 함께 해 보세요.</h2>
                <button className='login-btn' onClick={onGoLogin}>
                    로그인
                </button>
            </LastSectionWrapper>
        </>
    );
};

export default AboutContent5;
