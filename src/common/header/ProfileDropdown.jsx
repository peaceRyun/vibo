// 프로필 드롭다운 / 디자인 시안이 없어서 그냥 만들었습니다.
import React from 'react';
import { ProfileDropdownContainer, DropdownItem, UserIconContainer, BorderLine, LogOut } from './style';
import { FaUserCircle } from 'react-icons/fa'; // 유저 아이콘
import { AiOutlineEdit } from 'react-icons/ai'; // 연필 아이콘
import { FiLogOut } from 'react-icons/fi'; // 로그아웃 아이콘
import { Link } from 'react-router';

const ProfileDropdown = () => {
  return (
    <ProfileDropdownContainer>
      {/* 사용자 목록 */}
      <ul>
        <DropdownItem>
          <UserIconContainer>
            <FaUserCircle size={30} />
          </UserIconContainer>
          사용자1
        </DropdownItem>
        <DropdownItem>
          <UserIconContainer>
            <FaUserCircle size={30} />
          </UserIconContainer>
          사용자2
        </DropdownItem>
        <DropdownItem>
          <UserIconContainer>
            <FaUserCircle size={30} />
          </UserIconContainer>
          사용자3
        </DropdownItem>
      </ul>

      {/* 메뉴 항목 */}
      <ul>
        <Link to="/mypage">
          <DropdownItem>
            <AiOutlineEdit size={30} />
            마이페이지
          </DropdownItem>
        </Link>
        <Link to="/profilesforedit">
          <DropdownItem>
            <AiOutlineEdit size={30} />
            프로필관리
          </DropdownItem>
        </Link>
        <Link to="/profileinfoedit">
          <DropdownItem>
            <AiOutlineEdit size={30} />
            회원정보수정
          </DropdownItem>
        </Link>
        <DropdownItem>
          <BorderLine />
        </DropdownItem>
        {/* <DropdownItem> */}
        <LogOut>
          <FiLogOut size={20} />
          로그아웃
        </LogOut>
        {/* </DropdownItem> */}
      </ul>
    </ProfileDropdownContainer>
  );
};

export default ProfileDropdown;
