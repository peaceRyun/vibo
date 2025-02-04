import styled from 'styled-components';

export const CardContainer = styled.div`
    width: ${(props) => props.width || '28.0625rem'};
    height: ${(props) => props.height || '16.125rem'}; /* 258px -> 16.125rem */
    position: relative;
    overflow: hidden;
    border-radius: ${(props) => props.borderRadius || '0.625rem'};

    @media (max-width: 64rem) {
        width: 90%;
        height: auto;
    }
    @media (max-width: 37.5rem) {
        width: 100%;
        height: auto;
    }
`;

export const CardImage = styled.img`
    width: ${(props) => props.width || '28.0625rem'};
    height: ${(props) => props.height || '11.75rem'};
    object-fit: ${(props) => props.objectFit || 'cover'};
    border-radius: ${(props) => props.borderRadius || '0.625rem 0.625rem 0 0'};

    @media (max-width: 64rem) {
        height: ${(props) => props.mobileHeight || '12.5rem'};
    }
    @media (max-width: 37.5rem) {
        height: ${(props) => props.mobileHeight || '11.25rem'};
    }
`;

export const CardInfo = styled.div`
    width: ${(props) => props.width || '28.0625rem'};
    height: ${(props) => props.height || '4.375rem'};
    position: absolute;
    bottom: 0;
    background: ${(props) => props.bgColor || '#191919'};
    color: ${(props) => props.textColor || 'white'};
    padding: ${(props) => props.padding || '0.75rem 1.25rem 1rem 1.25rem'};
    box-sizing: border-box;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    text-align: left;

    @media (max-width: 64rem) {
        padding: ${(props) => props.mobilePadding || '0.75rem 1rem'};
    }
    @media (max-width: 37.5rem) {
        padding: ${(props) => props.mobilePadding || '0.5rem 0.875rem'};
    }
`;

export const CardTitle = styled.h3`
    font-size: ${(props) => props.fontSize || '1.0625rem'};
    margin: ${(props) => props.margin || '0'};
    color: ${(props) => props.color || 'inherit'};
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 64rem) {
        font-size: ${(props) => props.mobileFontSize || '1.0625rem'};
    }
    @media (max-width: 37.5rem) {
        font-size: ${(props) => props.mobileFontSize || '1.0625rem'};
    }
`;

export const CardEpisode = styled.p`
    font-size: ${(props) => props.fontSize || '1.0625rem'};
    margin: 0;
    color: ${(props) => props.color || 'inherit'};
    opacity: ${(props) => props.opacity || '0.9'};
    overflow-wrap: anywhere;

    @media (max-width: 64rem) {
        font-size: ${(props) => props.mobileFontSize || '1.0625rem'};
    }
    @media (max-width: 37.5rem) {
        font-size: ${(props) => props.mobileFontSize || '1.0625rem'};
    }
`;
