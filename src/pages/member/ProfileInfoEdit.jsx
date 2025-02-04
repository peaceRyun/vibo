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

// import styled from 'styled-components';

// // 전체 컨테이너
// export const ProfileContainer = styled.div`
//   width: 500px;
//   margin: auto;
//   padding: 20px;
//   background: #000;
//   color: white;
//   border-radius: 10px;
// `;

// // 제목
// export const Title = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// export const Subtitle = styled.h2`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// // 폼 그룹
// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 15px;
// `;

// // 라벨
// export const Label = styled.label`
//   font-size: 14px;
//   margin-bottom: 5px;
//   color: #bbb;
// `;

// // 입력 필드
// export const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #444;
//   border-radius: 5px;
//   background: #222;
//   color: white;
// `;

// // 이메일 & 휴대폰 그룹
// export const FlexGroup = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// // 드롭다운 (Select)
// export const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #444;
//   border-radius: 5px;
//   background: #222;
//   color: white;
// `;

// // 버튼
// export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-top: 20px;
// `;

// export const Button = styled.button`
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   background: ${(props) => (props.cancel ? '#444' : '#68F5EB')};
//   color: black;
//   font-weight: bold;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// // 이미지 업로드 박스
// export const ImageUploadBox = styled.div`
//   width: 100%;
//   height: 150px;
//   background: #444;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   cursor: pointer;
// `;

// export const DeleteAccountText = styled.p`
//   text-align: center;
//   color: red;
//   font-size: 14px;
//   margin-top: 10px;
//   cursor: pointer;
// `;
