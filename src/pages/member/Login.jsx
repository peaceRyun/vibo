import { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const isDisabled = email.trim() === '' || password.trim() === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <LoginContainer>
      <div className="title">VIBO 로그인</div>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>로그인</Legend>

          <StyledInput
            type="text"
            id="email"
            name="email"
            placeholder="아이디"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
