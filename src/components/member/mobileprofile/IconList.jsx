import IconItem from './IconItem';
import IconSwiper from './IconSwiper';
import ModalHeader from './ModalHeader';
import { Flex, H3, ModalBackdrop, ModalContainer } from './style';

const IconList = () => {
    return (
        <>
            <ModalBackdrop />
            <ModalContainer>
                {/* <div style={{ position: 'absolute', top: '0', right: '0', padding: '20px 20px 0 0' }}>
                    <IoMdClose size='60px' />
                </div>
                <H2>이미지 선택</H2> */}
                <ModalHeader />
                <Flex $flexDirection='column' $gap='30px'>
                    <Flex $flexDirection='column'>
                        <H3>기본 이미지</H3>
                        <IconSwiper />
                    </Flex>
                    <Flex $flexDirection='column'>
                        <H3>모던 이미지</H3>
                        <Flex $gap='20px'>
                            <IconItem />
                            <IconItem />
                            <IconItem />
                            <IconItem />
                        </Flex>
                    </Flex>
                    <Flex $flexDirection='column'>
                        <H3>코믹 이미지</H3>
                        <Flex $gap='10px'>
                            <IconItem />
                            <IconItem />
                            <IconItem />
                            <IconItem />
                        </Flex>
                    </Flex>
                    <Flex $flexDirection='column'>
                        <H3>코믹 이미지</H3>
                        <Flex $gap='10px'>
                            <IconItem />
                            <IconItem />
                            <IconItem />
                            <IconItem />
                        </Flex>
                    </Flex>
                </Flex>
            </ModalContainer>
        </>
    );
};

export default IconList;
