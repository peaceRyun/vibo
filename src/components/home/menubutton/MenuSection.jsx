import React from 'react';
import MenuButton from './MenuButton';
import { ButtonContainer, Section, Title, Underline } from './style';
import { useNavigate } from 'react-router';

const MenuSection = () => {
    const navigate = useNavigate();
    const onGoSeries = () => {
        navigate('/serieshome');
    };
    const onGoMovie = () => {
        navigate('/moviehome');
    };
    const onGoLive = () => {
        navigate('/livehome');
    };
    const onGoViboPlus = () => {
        navigate('/');
    };
    const menuData = [
        { id: 1, name: 'Series', ongo: onGoSeries },
        { id: 2, name: 'Movie', ongo: onGoMovie },
        { id: 3, name: 'LIVE', ongo: onGoLive },
        { id: 4, name: 'VIBO PLUS', ongo: onGoViboPlus },
    ];
    return (
        <>
            <Section>
                <Title>
                    <h2>지금, 다채로운 콘텐츠를 VIBO에서 찾아보세요.</h2>
                    <Underline />
                </Title>
                <ButtonContainer>
                    {menuData.map((item) => (
                        <MenuButton key={item.id} text='Series' item={item} />
                    ))}
                </ButtonContainer>
            </Section>
        </>
    );
};

export default MenuSection;
