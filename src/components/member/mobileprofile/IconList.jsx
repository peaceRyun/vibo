import IconSwiper from './IconSwiper';
import { Flex, H2 } from './style';

const IconList = () => {
    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '2',
                    width: '70rem',
                    height: '61.25rem',
                    padding: '75px',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '30px',
                }}
            >
                <H2>이미지 선택</H2>
                <Flex $flexDirection='column'>
                    <IconSwiper />
                </Flex>
            </div>
        </>
    );
};

export default IconList;
