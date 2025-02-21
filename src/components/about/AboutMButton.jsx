import { useNavigate } from 'react-router';
import { ButtonWrapper } from './style';

const AboutMButton = () => {
    const navigate = useNavigate();
    const onGoLogin = () => {
        navigate('/login');
    };
    const onGoRegister = () => {
        navigate('/register');
    };
    return (
        <ButtonWrapper>
            <button className='main-btn' onClick={onGoRegister}>
                VIBO 시작하기
            </button>
            <button className='sub-btn' onClick={onGoLogin}>
                다른 계정으로 로그인 하기
            </button>
        </ButtonWrapper>
    );
};

export default AboutMButton;
