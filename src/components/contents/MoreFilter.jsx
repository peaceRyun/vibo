import React, { useState } from 'react';
import styled from 'styled-components';

const MoreFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // 카테고리 클릭시 항목 초기화
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <FilterContainer>
      <Title>굿 닥터</Title>
      <CategoryList>
        <CategoryItem onClick={() => handleCategoryClick('국가')} isSelected={selectedCategory === '국가'}>
          국가
        </CategoryItem>
        <CategoryItem onClick={() => handleCategoryClick('출연')} isSelected={selectedCategory === '출연'}>
          출연
        </CategoryItem>
        <CategoryItem onClick={() => handleCategoryClick('크리에이터')} isSelected={selectedCategory === '크리에이터'}>
          크리에이터
        </CategoryItem>
        <CategoryItem onClick={() => handleCategoryClick('관람등급')} isSelected={selectedCategory === '관람등급'}>
          관람등급
        </CategoryItem>
        <CategoryItem onClick={() => handleCategoryClick('장르')} isSelected={selectedCategory === '장르'}>
          장르
        </CategoryItem>
        <CategoryItem
          onClick={() => handleCategoryClick('시리즈 특징')}
          isSelected={selectedCategory === '시리즈 특징'}
        >
          시리즈 특징
        </CategoryItem>
      </CategoryList>

      {selectedCategory && (
        <ItemList>
          {selectedCategory === '국가' && (
            <Item onClick={() => handleItemClick('미국')} isSelected={selectedItem === '미국'}>
              미국
            </Item>
          )}
          {selectedCategory === '출연' && (
            <>
              <Item onClick={() => handleItemClick('프레디 하이모어')} isSelected={selectedItem === '프레디 하이모어'}>
                프레디 하이모어
              </Item>
              <Item onClick={() => handleItemClick('헐 하퍼')} isSelected={selectedItem === '헐 하퍼'}>
                헐 하퍼
              </Item>
              <Item onClick={() => handleItemClick('리차드 시프')} isSelected={selectedItem === '리차드 시프'}>
                리차드 시프
              </Item>
            </>
          )}
          {selectedCategory === '크리에이터' && (
            <Item onClick={() => handleItemClick('진혁')} isSelected={selectedItem === '진혁'}>
              진혁
            </Item>
          )}
          {selectedCategory === '관람등급' && (
            <Item onClick={() => handleItemClick('ALL')} isSelected={selectedItem === 'ALL'}>
              ALL
            </Item>
          )}
          {selectedCategory === '장르' && (
            <>
              <Item onClick={() => handleItemClick('메디컬 시리즈')} isSelected={selectedItem === '메디컬 시리즈'}>
                메디컬 시리즈
              </Item>
              <Item onClick={() => handleItemClick('드라마')} isSelected={selectedItem === '드라마'}>
                드라마
              </Item>
            </>
          )}
          {selectedCategory === '시리즈 특징' && (
            <Item onClick={() => handleItemClick('감정을 파고드는')} isSelected={selectedItem === '감정을 파고드는'}>
              감정을 파고드는
            </Item>
          )}
        </ItemList>
      )}
    </FilterContainer>
  );
};
export default MoreFilter;

// Styled-components
const FilterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  width: 300px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CategoryList = styled.div`
  margin-bottom: 20px;
`;

const CategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => (props.isSelected ? '#444' : 'transparent')};
  &:hover {
    background-color: #555;
  }
`;

const ItemList = styled.div`
  padding-left: 20px;
`;

const Item = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => (props.isSelected ? '#666' : 'transparent')};
  &:hover {
    background-color: #777;
  }
`;
