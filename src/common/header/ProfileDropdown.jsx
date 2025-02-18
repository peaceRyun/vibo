import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/modules/memberSlice';
import { ProfileDropdownContainer, DropdownItem, UserIconContainer, BorderLine, LogOut } from './style';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProfileDropdown = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 로그아웃 버튼 클릭 시 실행
    const handleLogout = () => {
        dispatch(logout()).then(() => {
            navigate('/about'); // ✅ 로그아웃 후 '/about'으로 이동
        });
    };

    return (
        <ProfileDropdownContainer>
            {/* 사용자 목록 */}
            <ul onClick={onClose}>
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
                <Link to="/mypage" onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        마이페이지
                    </DropdownItem>
                </Link>
                <Link to="/profilesforedit" onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        프로필관리
                    </DropdownItem>
                </Link>
                <Link to="/profileinfoedit" onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        회원정보수정
                    </DropdownItem>
                </Link>
                <DropdownItem className="noHover">
                    <BorderLine />
                </DropdownItem>

                {/* 로그아웃 버튼 */}
                <LogOut onClick={handleLogout}>
                    <FiLogOut size={20} />
                    로그아웃
                </LogOut>
            </ul>
        </ProfileDropdownContainer>
    );
};

export default ProfileDropdown;
