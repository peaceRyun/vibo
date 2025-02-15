import { BadgeBlank } from '../../pages/contents/style';
import { Flex, FlexUl } from './style';

const ContDetail = () => {
    return (
        <>
            <section>
                <Flex $gap='15px' $padding='30px 0 30px' $justifyContent='space-between'>
                    <Flex $flexDirection='column' $gap='15px'>
                        <Flex $gap='15px' $alignItems='center'>
                            <span>2024년</span>
                            <span>에피소드 13화</span>
                            <BadgeBlank>FHD</BadgeBlank>
                        </Flex>
                        <Flex $gap='10px'>
                            <img
                                src='/contentdetail/contentrate/전체관람가 관람등급 1.png'
                                alt='rateAll'
                                style={{ width: '24px' }}
                            />
                            <img
                                src='/contentdetail/contentrate/내용정보-선정성.png'
                                alt='rateAll'
                                style={{ width: '24px' }}
                            />
                        </Flex>
                        <p>
                            노비의 삶을 벗어나기 위해 신분을 속여야 하는 젊은 여인. 그런데 한 떠돌이 이야기꾼이 여인을
                            향해 연정을 고백하면서 문제가 복잡해지기 시작한다....
                        </p>
                    </Flex>
                    <FlexUl $flexDirection='column' $gap='15px'>
                        <li>
                            <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                                <strong style={{ color: 'var(--gray-600)' }}>출연: </strong>
                                <p>임지연, 추영우, 김재원</p>
                                <span>더보기</span>
                            </Flex>
                        </li>
                        <li>
                            <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                                <strong style={{ color: 'var(--gray-600)' }}>장르: </strong>
                                <p>로맨스 </p>
                                <span>더보기</span>
                            </Flex>
                        </li>
                        <li>
                            <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                                <strong style={{ color: 'var(--gray-600)' }}>콘텐츠 특징: </strong>
                                <p>로멘틱, 법정, 복잡하다</p>
                                <span>더보기</span>
                            </Flex>
                        </li>
                    </FlexUl>
                </Flex>
            </section>
        </>
    );
};

export default ContDetail;
