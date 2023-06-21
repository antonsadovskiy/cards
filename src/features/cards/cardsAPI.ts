import { instance } from "app/instance";

export const cardsAPI = {
  getCards: (data: CardsQueryParamsType) => {
    return instance.get<GetCardsResponseType>("cards/card", {
      params: { ...data },
    });
  },
  addCard: (data: AddCardArgType) => {
    return instance.post("cards/card", data);
  },
  deleteCard: (data: DeleteCardArgType) => {
    return instance.delete(`cards/card?id=${data.id}`);
  },
  updateCard: (data: UpdateCardArgType) => {
    return instance.put("cards/card", data);
  },
  updateCardGrade: (data: UpdateCardGradeArgType) => {
    return instance.put<UpdateCardGradeResponseType>("cards/grade", data);
  },
};

export type CardsQueryParamsType = {
  cardsPack_id: string;
  cardAnswer?: string;
  cardQuestion?: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};

export type GradeType = 1 | 2 | 3 | 4 | 5;
export type UpdateCardGradeArgType = {
  grade: GradeType;
  card_id: string;
};
export type UpdateCardGradeResponseType = {
  updatedGrade: {
    _id: string;
    cardsPack_id: string;
    card_id: string;
    user_id: string;
    grade: number;
    shots: number;
  };
};
export type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  questionImg: string;
  answerImg: string;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};
export type GetCardsResponseType = {
  cards: CardType[];
  packName: string;
  packDeckCover: string;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
  packUpdated: string;
};

export type AddCardArgType = {
  card: {
    cardsPack_id: string;
  } & CommonCardType;
};
export type DeleteCardArgType = {
  id: string;
};
export type UpdateCardArgType = {
  card: {
    _id: string;
  } & CommonCardType;
};
export type CommonCardType = {
  question?: string;
  answer?: string;
  grade?: 0;
  shots?: 0;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};
