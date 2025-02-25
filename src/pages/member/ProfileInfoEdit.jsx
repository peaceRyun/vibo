import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser, deleteUser } from '../../store/modules/memberSlice';
import { MainContent } from '../home/main/style';
import {
    Button,
    ButtonGroup,
    CeheckContainer,
    CheckLabel,
    CheckTitle,
    ConsentItem,
    DeleteAccountText,
    Description,
    FlexGroup,
    FormGroup,
    Icon,
    IconSmall,
    InformationBox,
    InfoTitle,
    Input,
    InputContainer,
    Label,
    ProfileContainer,
    Section,
    Select,
    SubOption,
    SubOptions,
    SubText,
} from './style';

const ProfileInfoEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.memberR.currentUser);

    const [userData, setUserData] = useState({
        id: '',
        email: '',
        phone: '',
        nickname: '',
    });
    const [consent, setConsent] = useState({
        personalInfo: false,
        marketing: false,
        push: false,
        email: false,
        sms: false,
        thirdParty: false,
    });

    useEffect(() => {
        if (currentUser) {
            setUserData({
                id: currentUser.id || '',
                email: currentUser.email || '',
                phone: currentUser.phone || '',
                nickname: currentUser.nickname || '',
            });
        }
    }, [currentUser]);

    const toggleConsent = (key) => {
        setConsent((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updateUser(userData));
        alert('회원정보 수정이 완료되었습니다.');
        navigate('/mainhome');
    };

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm('정말로 탈퇴하시겠습니까?');
        if (confirmDelete) {
            dispatch(deleteUser(currentUser.id));
            alert('회원탈퇴가 완료되었습니다.');
            navigate('/login');
        }
    };

    return (
        <>
            <MainContent>
                <ProfileContainer>
                    <InfoTitle>회원정보 수정</InfoTitle>

                    <form onSubmit={handleUpdate}>
                        <FormGroup>
                            <Label htmlFor="userId">아이디</Label>
                            <InputContainer>
                                <Input
                                    type="text"
                                    id="userId"
                                    value={userData.id}
                                    onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                                />
                            </InputContainer>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="userName">이름</Label>
                            <InputContainer>
                                <Input type="text" id="userName" placeholder="홍길동" disabled />
                            </InputContainer>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="email">이메일</Label>
                            <InputContainer>
                                <FlexGroup>
                                    <Input
                                        type="text"
                                        id="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    />
                                </FlexGroup>
                            </InputContainer>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="phone">휴대폰 번호</Label>
                            <InputContainer>
                                <FlexGroup>
                                    <Select>
                                        <option>010</option>
                                    </Select>
                                    -
                                    <Input type="text" value={userData.phone.slice(3, 7)} disabled />
                                    -
                                    <Input type="text" value={userData.phone.slice(7)} disabled />
                                    <Button $padding="10px 20px" type="button" $fontSize="1rem" $cancel>
                                        인증번호 전송
                                    </Button>
                                </FlexGroup>
                            </InputContainer>
                        </FormGroup>

                        {/* ✅ 약관 동의 부분 유지 */}
                        <FormGroup>
                            <InformationBox>
                                <CeheckContainer>
                                    <Section>
                                        <CheckTitle>개인정보 수집 및 마케팅 수신 동의</CheckTitle>
                                        <Description>
                                            수신동의를 하시면 다양한 프로모션과 이벤트/신규 콘텐츠 정보를 받을 수
                                            있습니다.
                                        </Description>

                                        <ConsentItem onClick={() => toggleConsent('personalInfo')}>
                                            <Icon active={consent.personalInfo} />
                                            <CheckLabel>[선택] 개인정보 수집 및 이용 동의</CheckLabel>
                                        </ConsentItem>
                                        <SubOption>
                                            <IconSmall active={consent.personalInfo} />
                                            <SubText>맞춤형 광고 설정 활성화</SubText>
                                        </SubOption>

                                        <ConsentItem onClick={() => toggleConsent('marketing')}>
                                            <Icon active={consent.marketing} />
                                            <CheckLabel>[선택] 마케팅 정보 수신 동의</CheckLabel>
                                        </ConsentItem>
                                        <SubOptions>
                                            <SubOption onClick={() => toggleConsent('push')}>
                                                <IconSmall active={consent.push} />
                                                <SubText>푸시 알림</SubText>
                                            </SubOption>
                                            <SubOption onClick={() => toggleConsent('email')}>
                                                <IconSmall active={consent.email} />
                                                <SubText>이메일</SubText>
                                            </SubOption>
                                            <SubOption onClick={() => toggleConsent('sms')}>
                                                <IconSmall active={consent.sms} />
                                                <SubText>SMS</SubText>
                                            </SubOption>
                                        </SubOptions>
                                    </Section>
                                </CeheckContainer>
                            </InformationBox>
                        </FormGroup>

                        <DeleteAccountText onClick={handleDeleteAccount}>회원 탈퇴 및 계정 삭제</DeleteAccountText>

                        <ButtonGroup>
                            <Button type="submit">확인</Button>
                            <Button type="button" $cancel onClick={() => navigate(-1)}>
                                취소
                            </Button>
                        </ButtonGroup>
                    </form>
                </ProfileContainer>
            </MainContent>
        </>
    );
};

export default ProfileInfoEdit;
