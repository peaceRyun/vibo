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
  gap: 15px;
  padding: 10px;
`;

const DayItem = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px solid #a8a9ad;
  background-color: #333;
  color: white;
  font-size: 1rem;
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
`;

// const DayContainer = styled.div`
//   /* display: flex;
//   border-radius: 0.25rem;
//   border: 1px solid #a8a9ad; */
//   display: flex;
//   justify-content: center;
//   gap: 15px;
//   padding: 10px;
// `;

// const DayItem = styled.button`
//   width: 5rem;
//   height: 3.5rem;
//   padding: 8px 12px;
//   border: 1px solid var(#07ffe6);
//   border-radius: 5px;
//   background-color: ${({ className }) => (className === 'active' ? '#009C8C' : '#6C6D70')};
//   color: ${({ className }) => (className === 'active' ? '#ffffff' : '#000000')};
//   cursor: pointer;
// `;
