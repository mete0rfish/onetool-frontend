import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CategoryType {
  name: string;
  subcategories: string[];
}

interface CategoryProps {
  active: boolean;
}

interface SubCategoriesProps {
  visible: boolean;
}

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
`;

const CategoryHeader = styled.h2`
  margin-bottom: 1rem;
`;

const Category = styled.div<CategoryProps>`
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.active ? "#333" : "#666")};
  background-color: ${(props) => (props.active ? "#e0e0e0" : "transparent")};
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubCategories = styled.div<SubCategoriesProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  left: 100%;
  top: 0;
  width: 120px; /* Adjusted width */
  background-color: #f4f4f4;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubCategory = styled.div`
  margin-bottom: 0; /* Removed bottom margin */
  cursor: pointer;
  color: #666;
  padding: 0.3rem;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }
`;

const LeftSidebar = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [subCategoryVisible, setSubCategoryVisible] = useState(false);
  const navigate = useNavigate();

  const categories: CategoryType[] = [
    { name: "전체", subcategories: [] },
    { name: "건축도면", subcategories: ["주거", "상업", "공공"] },
    { name: "토목도면", subcategories: ["도로", "교통", "터널", "댐/수자원"] },
    { name: "인테리어 도면", subcategories: ["주거", "상업", "가구/집기"] },
    { name: "기계 도면", subcategories: ["기계부품", "설비"] },
    { name: "전기 도면", subcategories: ["전기"] },
    { name: "기타 도면", subcategories: [] },
  ];

  const handleCategoryHover = (index: number) => {
    setActiveCategory(index);
    setSubCategoryVisible(categories[index].subcategories.length > 0);
  };

  const handleCategoryClick = (index: number) => {
    if (index === 0) {
      navigate("/items");
    }
  };

  const handleSubCategoryClick = () => {
    // Implement your logic here for subcategory selection if needed
  };

  return (
    <SidebarContainer>
      <CategoryHeader>카테고리</CategoryHeader>
      {categories.map((category, index) => (
        <Category
          key={index}
          active={activeCategory === index}
          onMouseEnter={() => handleCategoryHover(index)}
          onMouseLeave={() => setActiveCategory(null)}
          onClick={() => handleCategoryClick(index)}
        >
          {category.name}
          <SubCategories
            visible={activeCategory === index && subCategoryVisible}
          >
            {category.subcategories.map((subcategory, subIndex) => (
              <SubCategory key={subIndex} onClick={handleSubCategoryClick}>
                {subcategory}
              </SubCategory>
            ))}
          </SubCategories>
        </Category>
      ))}
    </SidebarContainer>
  );
};

export default LeftSidebar;
