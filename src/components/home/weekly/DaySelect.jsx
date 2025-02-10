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
  /* display: flex;
  border-radius: 0.25rem;
  border: 1px solid #a8a9ad; */
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px;
`;

const DayItem = styled.button`
  width: 5rem;
  height: 3.5rem;
  padding: 8px 12px;
  border: 1px solid var(#07ffe6);
  border-radius: 5px;
  background-color: ${({ className }) => (className === 'active' ? '#009C8C' : '#6C6D70')};
  color: ${({ className }) => (className === 'active' ? '#ffffff' : '#000000')};
  cursor: pointer;
`;
// const DayItem = styled.span`
//   padding: 0.75rem 1.5rem;
//   background-color: #1a1a1a;
//   color: #aaa;
//   font-size: 1rem; /* 16px */
//   text-align: center;
//   cursor: pointer;
//   border: 1px solid #a8a9ad;

//   &:hover {
//     background-color: #333;
//   }

//   &.active {
//     color: black;
//     background-color: #1ee0b6;
//     font-weight: 700;
//     border: 1px solid #1ee0b6;
//   }
// `;
