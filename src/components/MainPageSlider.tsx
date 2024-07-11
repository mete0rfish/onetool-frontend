import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SliderTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 20px;
`;

const SliderBtn = styled(motion.div)`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 380px; /* Box height + gap */
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BoxImg = styled(motion.div)`
  background-color: white;
  min-height: 200px;
  border-radius: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const boxImgVariants = {
  normal: {},
  hover: {
    backgroundColor: "aliceblue",
  },
};

const BoxOwnerName = styled.span`
  font-size: 11px;
  color: #a2a2a4;
`;

const BoxTitle = styled.p`
  font-size: 13px;
  font-weight: 400;
`;

const BoxPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const rowVariants = {
  hidden: (isBack: boolean) => ({
    x: isBack ? -window.outerWidth : window.outerWidth,
  }),
  visible: {
    x: 0,
    transition: {
      duration: 0.7,
      stiffness: 50,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? window.outerWidth : -window.outerWidth,
    transition: {
      duration: 0.7,
      stiffness: 50,
    },
  }),
};

const fakeData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
const initialOffset = 4;
const nextOffset = fakeData.length - initialOffset;

interface IMainPageSlider {
  title: string;
}

const MainPageSlider = ({ title }: IMainPageSlider) => {
  const [index, setIndex] = useState(0);
  const [isBack, setIsBack] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const nextSlide = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => (prev === 0 ? 1 : 0));
    setIsBack(false);
  };

  const prevSlide = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => (prev === 0 ? 1 : 0));
    setIsBack(true);
  };

  const getOffset = () => (index === 0 ? initialOffset : nextOffset);

  return (
    <div>
      <Header>
        <SliderTitle>{title}</SliderTitle>
        <div style={{ display: "flex" }}>
          <SliderBtn onClick={prevSlide}>
            <IoIosArrowBack />
          </SliderBtn>
          <SliderBtn onClick={nextSlide}>
            <IoIosArrowForward />
          </SliderBtn>
        </div>
      </Header>
      <Wrapper>
        <AnimatePresence
          initial={false}
          custom={isBack}
          onExitComplete={toggleLeaving}
        >
          <Row
            key={index}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={isBack}
          >
            {fakeData
              .slice(index * initialOffset, index * initialOffset + getOffset())
              .map((item, i) => (
                <Box key={i}>
                  <BoxImg
                    variants={boxImgVariants}
                    initial="normal"
                    whileHover="hover"
                  />
                  <BoxOwnerName>이해공간</BoxOwnerName>
                  <BoxTitle>
                    [반짝할인] 성공한 주인공의 럭셔리 펜트하우스 [외부]
                  </BoxTitle>
                  <BoxPrice>42,000원</BoxPrice>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
      </Wrapper>
    </div>
  );
};

export default MainPageSlider;
