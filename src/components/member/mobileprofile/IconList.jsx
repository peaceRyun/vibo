import IconItem from './IconItem';
import IconSwiper from './IconSwiper';
import ModalHeader from './ModalHeader';
import { Flex, H3, ModalBackdrop, ModalContainer } from './style';
import { useDispatch } from 'react-redux';
import { basicIcons, profileActions } from '../../../store/modules/profileSlice';
import { useEffect } from 'react';

const IconList = ({ handleModalOpen }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // 컴포넌트가 언마운트될 때 원래대로 복구
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const handleIcon = (selectedItem) => {
        const theIcon = basicIcons.find((item) => selectedItem.name === item.name);
        dispatch(profileActions.setIconNow(theIcon));
    };

    // 필터링된 아이콘들을 변수로 저장
    const modernIcons = basicIcons.filter((item) => (parseInt(item.id) > 4) & (parseInt(item.id) < 11));
    const comicIcons = basicIcons.filter((item) => parseInt(item.id) < 5);
    const normalIcons = basicIcons.filter((item) => parseInt(item.id) > 10);

    return (
        <>
            <ModalBackdrop />
            <ModalContainer>
                <ModalHeader handleModalOpen={handleModalOpen} />
                <Flex $flexDirection='column' $gap='50px'>
                    <Flex $flexDirection='column' $gap='30px'>
                        <H3>코믹 이미지</H3>
                        <Flex $gap='10px'>
                            {comicIcons.map((item) => (
                                <IconItem
                                    key={item.id}
                                    item={item}
                                    handleIcon={handleIcon}
                                    handleModalOpen={handleModalOpen}
                                />
                            ))}
                        </Flex>
                    </Flex>
                    <Flex $flexDirection='column' $gap='30px'>
                        <H3>기본 이미지</H3>
                        {normalIcons.length > 5 ? (
                            <IconSwiper icons={normalIcons} handleIcon={handleIcon} handleModalOpen={handleModalOpen} />
                        ) : (
                            <Flex $gap='20px'>
                                {normalIcons.map((item) => (
                                    <IconItem
                                        key={item.id}
                                        item={item}
                                        handleIcon={handleIcon}
                                        handleModalOpen={handleModalOpen}
                                    />
                                ))}
                            </Flex>
                        )}
                    </Flex>
                    <Flex $flexDirection='column' $gap='30px'>
                        <H3>모던 이미지</H3>
                        {modernIcons.length > 5 ? (
                            <IconSwiper icons={modernIcons} handleIcon={handleIcon} handleModalOpen={handleModalOpen} />
                        ) : (
                            <Flex $gap='20px'>
                                {modernIcons.map((item) => (
                                    <IconItem
                                        key={item.id}
                                        item={item}
                                        handleIcon={handleIcon}
                                        handleModalOpen={handleModalOpen}
                                    />
                                ))}
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </ModalContainer>
        </>
    );
};

export default IconList;
