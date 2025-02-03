import styled from 'styled-components';

export const MembershipBanner = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .banner-content {
    position: relative;
    z-index: 1;

    h1 {
      font-size: 60px;
      font-weight: bold;
    }

    p {
      font-size: 40px;
    }
  }
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  .list {
    margin-top: 3.75rem;
  }
  li {
    font-size: 20px;
    padding: 10px 0;
    /* border-top: 1px solid gray; */
    text-align: left;
  }
`;

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 10px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: gray;
  }
`;

export const Plan = styled.div`
  border: 1px solid cyan;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  &:hover {
    background: cyan;
    color: black;
  }
`;

export const FeatureList = styled.ul`
  font-size: 20px;
  margin-top: 3.75rem;
  list-style: none;
  padding: 0;
  width: 100%;
  li {
    padding: 10px 0;
    /* border-top: 1px solid gray; */
    text-align: center;
  }
`;

export const PaymentButton = styled.button`
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 10px;
  background: cyan;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PlanRow = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  /* width: 100%; */
`;
