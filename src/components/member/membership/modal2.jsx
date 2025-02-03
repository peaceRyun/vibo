import React from 'react';

const modal = () => {
  return (
    <>
      <div>
        <h2>결제 정보를 입력해 주세요.</h2>
        <p>정기결제에 사용할 결제 정보를 입력해주세요.</p>
      </div>
      <div>
        <h3>이용권 유형 1</h3>
        <span>요금</span>
        <span>요금가격</span>
        <span>혜택</span>
        <span>첫 구독 할인</span>
        <span>결제 예정 금액</span>
        <span>5,500원</span>
      </div>
      <button>결제방법1</button>
      <button>결제방법2</button>
      <button>결제방법3</button>
      <button>결제방법4</button>
      <label>
        <input type="checkbox" /> 동의사항 내용1
      </label>
      <label>
        <input type="checkbox" /> 동의사항 내용2
      </label>
      <label>
        <input type="checkbox" /> 전체 내용 동의하기
      </label>
    </>
  );
};

export default modal;
