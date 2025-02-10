import { useState } from 'react';
import { FAQContainer, FAQItem, Question, Answer, Icon } from './style';

const faqs = [
  { question: 'VIBO만의 콘텐츠는 무엇인가요?', answer: 'VIBO에서만 제공하는 오리지널 콘텐츠를 확인하세요.' },
  { question: 'VIBO 란 무엇인가요?', answer: 'VIBO는 새로운 OTT 플랫폼으로, 다양한 콘텐츠를 제공합니다.' },
  { question: 'VIBO 서비스 이용 요금은 얼마인가요?', answer: '멤버십 플랜에 따라 요금이 다를 수 있습니다.' },
  { question: '멤버십을 가족과 공유할 수 있나요?', answer: '네, VIBO 멤버십을 가족과 공유할 수 있습니다.' },
  { question: '콘텐츠 시청시 광고가 있나요?', answer: 'VIBO+ 멤버십은 광고 없이 이용할 수 있습니다.' },
];

const AboutContent4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <h2 className="faq-title">자주 묻는 질문</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} onClick={() => toggleFAQ(index)} active={openIndex === index}>
          <Question active={openIndex === index}>{faq.question}</Question>
          <Icon active={openIndex === index}>▼</Icon>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};
export default AboutContent4;
