import { instance } from "app/instance";

export const cardsAPI = {
  getCards: (data: getCardsArgsType) => {
    return instance.get<GetCardsResponseType>(`cards/pack`, {
      params: {
        packName: data.packName,
        min: data.min,
        max: data.max,
        sortPacks: data.sortPacks,
        page: data.page,
        pageCount: data.pageCount,
        user_id: data.user_id,
      },
    });
  },
};

export type getCardsArgsType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string | null;
};
export type GetCardsResponseType = {
  cardPacks: CardsPackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};
export type CardsPackType = {
  cardsCount: number;
  created: string;
  deckCover: string;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: boolean;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
  __v: number;
  _id: string;
};
