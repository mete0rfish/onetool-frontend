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

export const blueprint = [
  {
    id: 1,
    blueprintName: "수석사 대웅전 모델",
    categoryId: "기타",
    standardPrice: 29900,
    blueprintImg: "https://i.ibb.co/JpZvzY7/1-1.png",
    blueprintDetails:
      "한국의 전통 건축미를 그대로 재현한 수덕사 대웅전 모델. 한옥의 정교한 구조와 아름다움을 직접 탐구하며 CAD 스킬을 높여보세요.",
    extension: "3dm",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/QJmcvKG/1-2.png",
  },
  {
    id: 2,
    blueprintName: "르 꼬르지뷔에-빌라 사보아",
    categoryId: "기타",
    standardPrice: 29900,
    blueprintImg: "https://i.ibb.co/KyP6nVr/2-1.png",
    blueprintDetails:
      "현대 건축의 상징인 르 꼬르지뷔에의 빌라 사보아 모델. 기능성과 미학을 겸비한 이 작품을 통해 공간 구성과 CAD 작업을 마스터하세요.",
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
      "도전적인 건축 스타일로 유명한 렘 콜하스의 빌라 달라바. 복잡한 구조를 CAD로 표현하는 기술을 학습할 수 있는 절호의 기회입니다.",
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
      "대형 전시장의 대표작, 킨텍스 도면을 통해 실제 대규모 공공 프로젝트의 설계 과정을 경험해보세요. CAD 전문가의 필수 도면.",
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
      "킨텍스 전시장 좌석 배치 실무 도면. 실용적인 설계 작업을 통해 AUTO CAD 활용 능력을 향상시킬 수 있습니다.",
    extension: "dwg",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/CbTgGPk/5-2.png",
  },
  {
    id: 6,
    blueprintName: "도면 레이어&심볼 실무 적용 버전",
    categoryId: "기타",
    standardPrice: 9900,
    blueprintImg: "https://i.ibb.co/QYrLbh9/6-1.png",
    blueprintDetails:
      "전기, 배선, 소방 관련 필수 심볼 및 레이어 설정을 포함한 실무 도면. 세부적인 기술 자료를 통해 더욱 완벽한 프로젝트를 진행하세요.",
    extension: "dwg",
    program: "CAD",
    creatorName: "onetool",
    blueprintDetailImg: "https://i.ibb.co/pxcNs9Q/6-2.png",
  },
];
