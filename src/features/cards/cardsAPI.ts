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
  _id: string;
  user_id: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};
