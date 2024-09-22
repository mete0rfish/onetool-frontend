export interface IBluePrintDetail {
  id: number;
  blueprintName: string;
  categoryId: string;
  standardPrice: number;
  blueprintImg: string;
  blueprintDetails: string;
  extension: string;
  program: string;
  creatorName: string;
  blueprintDetailImg: string;
}

export interface IBluePrint {
  blueprint: IBluePrintDetail[];
}

export const blueprint = [
  {
    id: 1,
    blueprintName: "수석사 대웅전 모델",
    categoryId: "기타",
    standardPrice: 29900,
    blueprintImg: "https://i.ibb.co/JpZvzY7/1-1.png",
    blueprintDetails: "한국의 한옥 전통모델 예산 수덕사 대웅전",
    extension: "3dm",
    program: "CAD",
    hits: 0,
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/QJmcvKG/1-2.png",
  },
  {
    id: 2,
    blueprintName: "르 꼬르지뷔에-빌라 사보아",
    categoryId: "기타",
    standardPrice: 29900,
    blueprintImg: "https://i.ibb.co/KyP6nVr/2-1.png",
    blueprintDetails: "현대건축의 아버지 르꼬르지뷔의 빌라를 통해 학습하자.",
    extension: "3dm",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/bvVSgJp/2-2.png",
  },
  {
    id: 3,
    blueprintName: "렘 콜하스-빌라 달라바",
    categoryId: "기타",
    standardPrice: 29900,
    blueprintImg: "https://i.ibb.co/n3qrrK6/3-1.png",
    blueprintDetails:
      "청개구리건축가 영국AA건축협회학교 출신 렘콜하스의 빌라 달라바를 통해 라이노를 학습하자",
    extension: "3dm",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/VmxhQTL/3-2.png",
  },
  {
    id: 4,
    blueprintName: "킨텍스 한국국제전시장",
    categoryId: "건축도면-공공",
    standardPrice: 39900,
    blueprintImg: "https://i.ibb.co/SfmvVcv/4-1.png",
    blueprintDetails:
      "한국 대규모 전시장의 꽃 킨테스 도면을 통해 AUTO CAD를 제대로 배우자",
    extension: "dwg",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/pfPc91n/4-2.png",
  },
  {
    id: 5,
    blueprintName: "킨텍스 실무 적용버전",
    categoryId: "건축도면-공공",
    standardPrice: 9900,
    blueprintImg: "https://i.ibb.co/SfmvVcv/4-1.png",
    blueprintDetails:
      "킨텍스 좌석 배치 프로젝트 도면을 통해 AUTO CAD를 제대로 배우자",
    extension: "dwg",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/SfmvVcv/4-1.png",
  },
  {
    id: 6,
    blueprintName: "도면 레이어&심볼 실무 적용 버전",
    categoryId: "기타",
    standardPrice: 9900,
    blueprintImg: "https://i.ibb.co/QYrLbh9/6-1.png",
    blueprintDetails:
      "외부 뿐만 아닌 전기, 배선, 소방관련 디테일한 자료를 제공합니다.",
    extension: "dwg",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/pxcNs9Q/6-2.png",
  },
];
