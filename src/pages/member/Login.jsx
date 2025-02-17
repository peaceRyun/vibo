import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // 추가!
import { login } from '../../store/modules/memberSlice';
import {
    LoginContainer,
    Form,
    Fieldset,
    Legend,
    StyledInput,
    StyledButton,
    StyledCheckboxContainer,
    StyledCheckbox,
    StyledLinks,
} from './style';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);
    const isDisabled = userId.trim() === '' || password.trim() === '';
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 🔹 추가

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDisabled) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        // Redux 로그인 액션 호출
        dispatch(login({ userId, password, autoLogin })).then((result) => {
            if (result.payload?.success) {
                navigate('/'); // ✅ 로그인 성공 시 루트('/')로 이동
            }
        });
    };

    return (
        <LoginContainer>
            <div className="title">VIBO 로그인</div>
            <Form onSubmit={handleSubmit}>
                <Fieldset>
                    <Legend>로그인</Legend>

                    <StyledInput
                        type="text"
                        id="userId"
                        name="userId"
                        placeholder="아이디"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />

                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <StyledCheckboxContainer>
                        <StyledCheckbox
                            type="checkbox"
                            id="autoLogin"
                            checked={autoLogin}
                            onChange={() => setAutoLogin(!autoLogin)}
                        />
                        <label htmlFor="autoLogin">자동 로그인</label>
                    </StyledCheckboxContainer>

                    <StyledButton type="submit" disabled={isDisabled}>
                        로그인
                    </StyledButton>
                    <StyledLinks>
                        <a href="/find-id">아이디 찾기</a>
                        <span>|</span>
                        <a href="/find-password">비밀번호 찾기</a>
                        <span>|</span>
                        <a href="/signup">회원가입</a>
                    </StyledLinks>
                </Fieldset>
            </Form>
        </LoginContainer>
    );
};

export default Login;
