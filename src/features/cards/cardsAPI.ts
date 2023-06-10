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
};

type CardsQueryParamsType = {
  cardsPack_id: string;
  cardAnswer?: string;
  cardQuestion?: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};

export type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};
export type GetCardsResponseType = {
  cards: CardType[];
  packName: string;
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
    question?: string;
    answer?: string;
    grade?: 0;
    shots?: 0;
    answerImg?: string;
    questionImg?: string;
    questionVideo?: string;
    answerVideo?: string;
  };
};
