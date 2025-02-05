// 회원정보 변경 페이지

import {
  Button,
  ButtonGroup,
  DeleteAccountText,
  FlexGroup,
  FormGroup,
  InformationBox,
  InfoTitle,
  Input,
  InputContainer,
  Label,
  ProfileContainer,
  Select,
} from './style';

const ProfileInfoEdit = () => {
  return (
    <>
      <ProfileContainer>
        <InfoTitle>회원정보 수정</InfoTitle>

        <form>
          {/* 아이디 */}
          <FormGroup>
            <Label htmlFor="userId">아이디</Label>
            <InputContainer>
              <Input type="text" id="userId" placeholder="사용자 아이디" disabled />
            </InputContainer>
          </FormGroup>

          {/* 이름 */}
          <FormGroup>
            <Label htmlFor="userName">이름</Label>
            <InputContainer>
              <Input type="text" id="userName" placeholder="사용자 이름" />
            </InputContainer>
          </FormGroup>

          {/* 이메일 */}
          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <InputContainer>
              <FlexGroup>
                <Input type="text" id="email" placeholder="이메일 입력" />
                <Select>
                  <option>직접 입력</option>
                  <option>@gmail.com</option>
                  <option>@naver.com</option>
                  <option>@daum.net</option>
                </Select>
              </FlexGroup>
            </InputContainer>
          </FormGroup>

          {/* 휴대폰 번호 */}
          <FormGroup>
            <Label htmlFor="phone">휴대폰 번호</Label>
            <InputContainer>
              <FlexGroup>
                <Select>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                </Select>
                <Input type="text" placeholder="0000" />
                <Input type="text" placeholder="0000" />
                <Button type="button">인증</Button>
              </FlexGroup>
            </InputContainer>
          </FormGroup>

          {/* 프로필 이미지 업로드 */}
          <FormGroup>
            <Label>개인정보</Label>
            <InputContainer>
              <InformationBox>약관 내용 확인</InformationBox>
            </InputContainer>
          </FormGroup>

          {/* 회원탈퇴 및 계정 삭제 */}
          <DeleteAccountText>회원 탈퇴 및 계정 삭제</DeleteAccountText>

          {/* 버튼 */}
          <ButtonGroup>
            <Button type="submit">확인</Button>
            <Button type="button" cancel>
              취소
            </Button>
          </ButtonGroup>
        </form>
      </ProfileContainer>
    </>
  );
};

export default ProfileInfoEdit;
