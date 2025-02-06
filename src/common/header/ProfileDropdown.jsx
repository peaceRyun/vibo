import React from 'react';
import { ProfileDropdownContainer, DropdownItem, UserIconContainer } from './style';
import { FaUserCircle } from 'react-icons/fa'; // 유저 아이콘
import { AiOutlineEdit } from 'react-icons/ai'; // 연필 아이콘
import { FiLogOut } from 'react-icons/fi'; // 로그아웃 아이콘

const ProfileDropdown = () => {
    return (
        <ProfileDropdownContainer>
            {/* 사용자 목록 */}
            <ul>
                <DropdownItem>
                    <UserIconContainer>
                        <FaUserCircle size={20} />
                    </UserIconContainer>
                    사용자1
                </DropdownItem>
                <DropdownItem>
                    <UserIconContainer>
                        <FaUserCircle size={20} />
                    </UserIconContainer>
                    사용자2
                </DropdownItem>
                <DropdownItem>
                    <UserIconContainer>
                        <FaUserCircle size={20} />
                    </UserIconContainer>
                    사용자3
                </DropdownItem>
            </ul>

            {/* 메뉴 항목 */}
            <ul>
                <DropdownItem>
                    <AiOutlineEdit size={20} />
                    마이페이지
                </DropdownItem>
                <DropdownItem>
                    <AiOutlineEdit size={20} />
                    프로필관리
                </DropdownItem>
                <DropdownItem>
                    <FiLogOut size={20} />
                    로그아웃
                </DropdownItem>
            </ul>
        </ProfileDropdownContainer>
    );
};

export default ProfileDropdown;
