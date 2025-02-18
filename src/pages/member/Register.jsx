import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import thunkUsers from '../../store/modules/getThunkUser';
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector((state) => state.memberR?.users || []);

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
        return regex.test(password);
    };

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

    const handleIdCheck = () => {
        if (users.some((user) => user.id === id)) {
            alert('이미 사용 중인 아이디입니다.');
            setIsIdChecked(false);
        } else {
            alert('사용 가능한 아이디입니다.');
            setIsIdChecked(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id || !email || !password || !confirmPassword || !phone) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!isIdChecked) {
            alert('아이디 중복 확인을 해주세요.');
            return;
        }

        if (users.some((user) => user.email === email)) {
            alert('이미 가입된 이메일입니다.');
            return;
        }

        dispatch(thunkUsers.register({ id, email, password, phone })).then((result) => {
            if (result.payload?.success) {
                alert('회원가입이 완료되었습니다!');
                navigate('/login');
            }
        });
    };

    return (
        <RegisterContainer>
            <h2 className="title">VIBO ID 회원가입</h2>
            <Form className="form" onSubmit={handleSubmit}>
                <div className="Register">
                    <InputGroup>
                        <StyledInputWrapper>
                            <StyledInput
                                type="text"
                                placeholder="아이디"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <InputButton type="button" onClick={handleIdCheck}>
                                중복확인
                            </InputButton>
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
                            error={!!confirmPasswordError}
                        />
                        {confirmPasswordError && <ErrorText>{confirmPasswordError}</ErrorText>}
                    </InputGroup>

                    <InputGroup>
                        <StyledInput
                            type="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup>
                        <StyledInputWrapper>
                            <StyledInput
                                type="text"
                                placeholder="휴대폰 번호"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <InputButton type="button" onClick={() => setIsPhoneChecked(true)}>
                                중복확인
                            </InputButton>
                        </StyledInputWrapper>
                    </InputGroup>
                </div>

                <InputGroup>
                    <textarea className="textarea" placeholder="약관 내용" readOnly></textarea>
                </InputGroup>

                <StyledButton type="submit">회원가입</StyledButton>
            </Form>
        </RegisterContainer>
    );
};

export default Register;
