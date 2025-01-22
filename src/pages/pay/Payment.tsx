import styled from "styled-components";
import { LuBox } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import { FaWonSign } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPayItems } from "../../utils/api";
import TossWidget from "../../components/TossWidget";
import { usePaymentWidget } from "../../hooks/usePaymentWidget";
import { useForm } from "react-hook-form";

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin-right: auto;
`;

const Banner = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid black;
  }
`;

const ItemImage = styled.img`
  width: 145px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 24px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPriceDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 343px;
  height: 40px;
  padding: 8px;
  border: 1px solid #dbe0e4;
`;

const BoxTitle = styled.span`
  margin: 24px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div<{ isActive: boolean }>`
  width: 294px;
  height: 218px;
  padding: 25px;
  border: ${(props) =>
    props.isActive ? "1px solid #4e4eff" : "1px solid #A2A2A4"};
  border-radius: 4px;
  background-color: ${(props) =>
    props.isActive ? "#4e4eff0a" : "transparent"};
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  p {
    margin-top: 20px;
  }
`;

const PriceWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled(Price)`
  font-size: 14px;
  font-weight: 700;
`;

const Discount = styled(Price)`
  font-size: 14px;
  font-weight: 700;
  color: #4e4eff;
`;

const FinalPrice = styled(Price)`
  font-size: 22px;
  font-weight: 800;
  border-top: 1px solid #f5f5f6;
  border-bottom: 1px solid #f5f5f6;
  padding: 10px 0;
`;

const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
`;

const Card = styled.button<{ isActive: boolean }>`
  width: 184px;
  height: 48px;
  border: ${(props) =>
    props.isActive ? "1px solid #8e8eff" : "1px solid #A2A2A4"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#8e8eff" : "transparent")};
`;

const CheckBoxWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }
  span {
    font-size: 11px;
    font-weight: 400;
    color: #4e4eff;
  }
`;

const PurchaseButton = styled.button`
  width: 196px;
  height: 48px;
  border-radius: 8px;
  background-color: #4e4eff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

interface CheckedItems {
  terms: boolean;
  productInfo: boolean;
  emailConfirm: boolean;
}

interface PayResultProps {
  isSuccess: boolean;
  code: string;
  message: string;
  result: PayItemsProps[];
}

interface PayItemsProps {
  blueprintId: number;
  blueprintName: string;
  extension: string;
  author: string;
  price: number;
}

interface PayFormProps {
  name: string;
  phone: string;
  email: string;
}

const Payment = () => {
  const { data, isLoading } = useQuery<PayResultProps>({
    queryKey: ["payItems"],
    queryFn: getPayItems,
  });

  const { handlePaymentRequest } = usePaymentWidget();
  const [step, setStep] = useState(1); // 1: 주문상품, 주문자 정보, 사용권, 2: 결제
  const [personState, setPersonState] = useState<boolean>(true);
  const [institutionState, setInstitutionState] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PayFormProps>();

  const onPersonClicked = () => {
    setPersonState(true);
    setInstitutionState(false);
  };

  const onInstitutionClicked = () => {
    setPersonState(false);
    setInstitutionState(true);
  };

  useEffect(() => {
    if (data && data.result) {
      const total = data.result.reduce((acc, cur) => acc + cur.price, 0);
      setTotalAmount(total);
    }
  }, [data]);

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = async () => {
    if (step === 2) {
      //await handlePaymentRequest();
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data && data.result.length > 0 ? (
    <Wrapper>
      <Title>주문서</Title>

      {step === 1 && (
        <>
          <Banner>주문상품</Banner>
          {data?.result.map((item) => (
            <CartItem key={item.blueprintId}>
              <ItemDetails>
                <ItemName>{item.blueprintName}</ItemName>
              </ItemDetails>
              <ItemPriceDetail>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
              </ItemPriceDetail>
            </CartItem>
          ))}
          <Form>
            <FormGroup>
              <Label>주문자명</Label>
              <Input
                type="text"
                placeholder="홍길동"
                {...register("name", { required: "이 필드는 필수입니다." })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </FormGroup>
            <FormGroup>
              <Label>휴대폰 번호</Label>
              <Input
                type="text"
                placeholder="010-1234-5678"
                {...register("phone", { required: "이 필드는 필수입니다." })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </FormGroup>
            <FormGroup>
              <Label>이메일</Label>
              <Input
                type="email"
                placeholder="example@example.com"
                {...register("email", { required: "이 필드는 필수입니다." })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </FormGroup>
          </Form>
          <BoxTitle>사용권 유형</BoxTitle>
          <BoxWrapper>
            <Box onClick={onPersonClicked} isActive={personState}>
              <input
                type="radio"
                checked={personState}
                onChange={onPersonClicked}
              />
              <span>개인 사용권</span>
              <p>
                필명이 작품에 반드시 표시되어야 해요. 본인만 사용 가능하고,
                공유할 수 없어요. 여러 작품에 사용 가능해요. 작품마다 다 른
                필명을 사용할 경우, 모든 필명을 입력 해주세요.
              </p>
            </Box>
            <Box onClick={onInstitutionClicked} isActive={institutionState}>
              <input
                type="radio"
                checked={institutionState}
                onChange={onInstitutionClicked}
              />
              <span>기업 사용권</span>
              <p>
                등록한 1개의 작품에만 사용할 수 있어 요. 등록한 작품명과 실제
                사용 작품명이 반 드시 일치해야 해요. 등록한 작품을 작업하는 모든
                작가가 사 용할 수 있어요.
              </p>
            </Box>
          </BoxWrapper>
        </>
      )}

      {step === 2 && (
        <>
          <Banner>결제 금액</Banner>
          <PriceWrapper>
            <TotalPrice>
              <span>총 상품 금액</span>
              <span>{totalAmount.toLocaleString()}원</span>
            </TotalPrice>
            <Discount>
              <span>총 할인 금액</span>
              <span>0원</span>
            </Discount>
            <FinalPrice>
              <span>최종 결제 금액</span>
              <span>{totalAmount.toLocaleString()}원</span>
            </FinalPrice>
          </PriceWrapper>
          <TossWidget />
        </>
      )}

      <ButtonWrapper>
        {step < 2 ? (
          <PurchaseButton onClick={handleNextStep}>다음</PurchaseButton>
        ) : (
          <PurchaseButton onClick={handleSubmit(onSubmit)}>
            주문하기
          </PurchaseButton>
        )}
      </ButtonWrapper>
    </Wrapper>
  ) : (
    <div>구매할 상품이 없습니다.</div>
  );
};

export default Payment;
