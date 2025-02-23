import styled from 'styled-components';

export const SDropdown = styled.div`
    position: relative;
`;

export const SDropdownButton = styled.div`
    width: 130px;
    height: 48px;
    border: 1px solid var(--primary-base);
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    gap: 10px;
    white-space: nowrap;
    cursor: pointer;

    @media (max-width: 590px) {
        width: 100px;
        height: 38px;
        padding: 0 20px;
    }
`;

export const SDropdownContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--gray-900);
    /* border: 1px solid var(--primary-base); */
    border-radius: 4px;
    width: 100%;
    max-height: ${(props) => props.$maxHeight || 'auto'};
    overflow-y: auto;
    z-index: 10;

    /* 커스텀 스크롤바 스타일 */
    &.custom-scrollbar {
        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: var(--gray-900);
            border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--gray-700);
            border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: var(--gray-600);
        }
    }
`;

export const LoadMoreButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: transparent;
    border: none;
    color: var(--secondary-300);
    font-size: 15px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: var(--white);
    }

    &:focus {
        outline: none;
    }
`;
export const SDropdownItem = styled.div`
    padding: 12px 30px;

    cursor: pointer;

    &:hover {
        background-color: var(--gray-800);
    }
    @media (max-width: 590px) {
        padding: 12px 20px;
    }
`;

export const SIcon = styled.img`
    transition: transform 0.2s ease;
    transform: ${({ $isDropOpen }) => ($isDropOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;
