// 회원정보 변경 페이지

import { MainContent } from '../home/main/style';
import {
  Button,
  ButtonGroup,
  ChecksWrap,
  DeleteAccountText,
  Flex,
  FlexGroup,
  FormGroup,
  InformationBox,
  InformationText,
  InfoTitle,
  Input,
  InputContainer,
  Label,
  ProfileContainer,
  Select,
} from './style';
import { FaCheck, FaCircleCheck } from 'react-icons/fa6';

const ProfileInfoEdit = () => {
  return (
    <>
      <MainContent>
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
                  -
                  <Input type="text" placeholder="0000" />
                  -
                  <Input type="text" placeholder="0000" />
                  <Button $padding="10px 20px" type="button" $fontSize="1rem" $cancel>
                    인증번호 전송
                  </Button>
                </FlexGroup>
              </InputContainer>
            </FormGroup>

            {/* 프로필 이미지 업로드 */}
            <FormGroup>
              <InformationBox>
                <InformationText>
                  <h3>개인정보 수집 및 마케팅 수신 동의</h3>
                  <p>
                    수신동의를 하시면 티빙에서 제공하는 다양한 프로모션과 이벤트/신규 콘텐츠 등의 정보를 만나실 수
                    있습니다.
                  </p>
                </InformationText>

                <ChecksWrap>
                  <input type="checkbox" id="info" />
                  <Flex $gap="10px" $alignItems="center">
                    <button>
                      <FaCircleCheck fill="var(--gray-100)" size="20px" />
                    </button>
                    <label htmlFor="agree">[선택] 개인정보 수집 및 이용 동의</label>
                  </Flex>
                  <Flex $gap="10px" $alignItems="center">
                    <button>
                      <FaCheck color="var(--primary-base)" size="15" />
                    </button>
                    <p style={{ color: 'var(--gray-100)' }}>맞춤형 광고 설정 활성화</p>
                  </Flex>

                  <input type="checkbox" id="info2" />
                  <Flex $gap="10px" $alignItems="center">
                    <button>
                      <FaCircleCheck fill="var(--gray-100)" size="20px" />
                    </button>
                    <label htmlFor="agree">[선택]마케팅 정보 수신 동의</label>
                  </Flex>
                  <Flex $gap="5px" $alignItems="center">
                    <Flex $gap="5px" $alignItems="center">
                      <button>
                        <FaCheck color="var(--primary-base)" size="15" />
                      </button>
                      <p>푸시 알림</p>
                    </Flex>
                    <Flex $gap="5px" $alignItems="center">
                      <button>
                        <FaCheck color="var(--primary-base)" size="15" />
                      </button>
                      <p>이메일</p>
                    </Flex>
                    <Flex $gap="5px" $alignItems="center">
                      <button>
                        <FaCheck color="var(--primary-base)" size="15" />
                      </button>
                      <p>SMS</p>
                    </Flex>
                  </Flex>
                </ChecksWrap>

                <InformationText>
                  <h3>개인정보 제3자 제공 동의</h3>
                </InformationText>
                <ChecksWrap>
                  <input type="checkbox" id="info" />
                  <Flex $gap="5px">
                    <button>
                      <FaCircleCheck fill="var(--gray-100)" size="20px" />
                    </button>
                    <label htmlFor="agree">[선택] CJ 옴니서비스 이용을 위한 개인정보 제 3자 제공 동의</label>
                  </Flex>
                </ChecksWrap>
              </InformationBox>
              {/* <Label>개인정보</Label>
            <InputContainer>
              <InformationBox>약관 내용 확인</InformationBox>
            </InputContainer> */}
            </FormGroup>

            {/* 회원탈퇴 및 계정 삭제 */}
            <DeleteAccountText>회원 탈퇴 및 계정 삭제</DeleteAccountText>

            {/* 버튼 */}
            <ButtonGroup>
              <Button type="submit">확인</Button>
              <Button type="button" $cancel>
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
