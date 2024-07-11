import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface CategoryProps {
  active: boolean;
}

const SidebarContainer = styled.div`
  min-width: 200px;
  padding: 24px 40px 48px 40px;
  margin-left: -10px;
  border-right: 1px solid #cccccc;
`;

const HorizontalBorder = styled.div`
  padding: 0px 0px 2px 0px;
`;

const CategoryHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 24px 6px;
  font-weight: 600;
  font-size: 15.25px;
  line-height: 16px;
`;

const CategoryContainer = styled.div`
  padding: 0px 0px 30px 0px;
`;

const MainCategoryContainer = styled.div`
  padding: 0px;
`;

const SubCategoryContainer = styled.div`
  padding: 0px;
`;

const Category = styled.div<CategoryProps>`
  border-radius: 4px;
  padding: 8px;

  font-weight: 600;
  font-size: 13.23px;
  line-height: 21px;
  letter-spacing: 0.15px;

  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const SubCategory = styled.div`
  border-radius: 4px;
  padding: 7px 10px;

  font-weight: 400;
  font-size: 13.02px;
  line-height: 21px;
  letter-spacing: 0.15px;
  color: #313135;

  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const LeftSidebar = () => {
  const navigate = useNavigate();
  const [categoryToggle, setCategoryToggle] = useState<boolean>(true);

  const handleCategoryClick = (index: number) => {
    if (index === 0) {
      navigate("/items");
    }
  };

  const handleSubCategoryClick = () => {};

  return (
    <SidebarContainer>
      <HorizontalBorder>
        <CategoryHeader>
          <span>카테고리</span>
          <button onClick={() => setCategoryToggle((prev) => !prev)}>
            {categoryToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </CategoryHeader>
        <CategoryContainer>
          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(0)}>
              전체
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(1)}>
              건축도면
            </Category>
            <SubCategoryContainer>
              <SubCategory onClick={handleSubCategoryClick}>- 주거</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 상업</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 공공</SubCategory>
            </SubCategoryContainer>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(2)}>
              토목도면
            </Category>
            <SubCategoryContainer>
              <SubCategory onClick={handleSubCategoryClick}>- 도로</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 교통</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 터널</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>
                - 댐/수자원
              </SubCategory>
            </SubCategoryContainer>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(3)}>
              인테리어 도면
            </Category>
            <SubCategoryContainer>
              <SubCategory onClick={handleSubCategoryClick}>- 주거</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 상업</SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>
                - 가구/집기
              </SubCategory>
            </SubCategoryContainer>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(4)}>
              기계 도면
            </Category>
            <SubCategoryContainer>
              <SubCategory onClick={handleSubCategoryClick}>
                - 기계부품
              </SubCategory>
              <SubCategory onClick={handleSubCategoryClick}>- 설비</SubCategory>
            </SubCategoryContainer>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(5)}>
              전기 도면
            </Category>
            <SubCategoryContainer>
              <SubCategory onClick={handleSubCategoryClick}>- 전기</SubCategory>
            </SubCategoryContainer>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(6)}>
              기타 도면
            </Category>
          </MainCategoryContainer>
        </CategoryContainer>
      </HorizontalBorder>
    </SidebarContainer>
  );
};

export default LeftSidebar;
