// 회원가입 페이지
import { useState } from 'react';
import {
  RegisterContainer,
  Form,
  InputGroup,
  StyledInputWrapper,
  StyledInput,
  InputButton,
  ErrorText,
  StyledButton,
} from './style';

const Register = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isPhoneChecked, setIsPhoneChecked] = useState(false);

  // 비밀번호 유효성 검사 함수
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
    return regex.test(password);
  };

  // 비밀번호 입력 시 유효성 검사 실행
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError('🔴 영문, 숫자, 대문자, 특수문자 포함 6~12자리');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password !== value) {
      setConfirmPasswordError('🔴 비밀번호가 일치하지 않습니다');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <RegisterContainer>
      <h2 className="title">VIBO ID 회원가입</h2>
      <Form className="form">
        <div className="Register">
          <InputGroup>
            <StyledInputWrapper>
              <StyledInput type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
              <InputButton onClick={() => setIsIdChecked(true)}>중복확인</InputButton>
            </StyledInputWrapper>
          </InputGroup>

          <InputGroup>
            <StyledInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
            />
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <StyledInput
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!passwordError}
            />
            {confirmPasswordError && <ErrorText>{confirmPasswordError}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <StyledInput type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>

          <InputGroup>
            <StyledInputWrapper>
              <StyledInput
                type="text"
                placeholder="휴대폰 번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputButton onClick={() => setIsPhoneChecked(true)}>중복확인</InputButton>
            </StyledInputWrapper>
          </InputGroup>
        </div>

        <InputGroup>
          <textarea className="textarea" placeholder="약관 내용" readOnly></textarea>
        </InputGroup>

        <StyledButton>회원가입</StyledButton>
      </Form>
    </RegisterContainer>
  );
};
export default Register;
