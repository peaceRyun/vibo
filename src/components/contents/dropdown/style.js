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
`;

export const SDropdownContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 4px;
    background-color: var(--gray-900);
    border: 1px solid var(--primary-base);
    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1000;
`;

export const SDropdownItem = styled.div`
    padding: 12px 30px;

    cursor: pointer;

    &:hover {
        background-color: var(--gray-800);
    }
`;

export const SIcon = styled.img`
    transition: transform 0.2s ease;
    transform: ${({ $isDropOpen }) => ($isDropOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;
