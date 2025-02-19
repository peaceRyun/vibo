import styled from 'styled-components';

const DaySelect = ({ activeDay, setActiveDay }) => {
  //   const [activeDay, setActiveDay] = useState('월');
  //   const days = ['월', '화', '수', '목', '금', '토', '일'];

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <DayContainer>
      {days.map((day) => (
        <DayItem key={day} className={day === activeDay ? 'active' : ''} onClick={() => setActiveDay(day)}>
          {day}
        </DayItem>
      ))}
    </DayContainer>
  );
};

export default DaySelect;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(8px, 2vw, 15px); /* ✅ 반응형 간격 조정 */
  padding: 10px;

  @media (max-width: 1024px) {
    gap: 10px; /* 태블릿에서 버튼 간격 조정 */
  }
`;

const DayItem = styled.button`
  width: clamp(50px, 3.5vw, 56px); /* ✅ 반응형 크기 조정 */
  height: clamp(50px, 3.5vw, 56px);
  border-radius: 50%;
  border: 2px solid #a8a9ad;
  background-color: #333;
  color: white;
  font-size: clamp(1rem, 1vw, 1rem); /* ✅ 반응형 폰트 크기 */
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #07ffe6;
    color: #07ffe6;
  }

  &.active {
    background-color: #07ffe6;
    color: black;
    border-color: #07ffe6;
    box-shadow: 0px 0px 15px rgba(7, 255, 230, 0.7);
  }
  @media (max-width: 1024px) {
    width: clamp(40px, 4vw, 45px);
    height: clamp(40px, 4vw, 45px);
    font-size: clamp(0.875rem, 1vw, 1.3rem);
  }
`;
