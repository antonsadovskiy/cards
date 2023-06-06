import { instance } from "app/instance";

export const packsAPI = {
  getPacks: (data: GetPacksArgsType) => {
    return instance.get<GetPacksResponseType>("cards/pack", {
      params: { ...data },
    });
  },
  addPack: (data: AddPackArgType) => {
    return instance.post("cards/pack", data);
  },
  deletePack: (data: DeletePackArgType) => {
    return instance.delete(`cards/pack?id=${data.id}`);
  },
  updatePack: (data: UpdatePackArgType) => {
    return instance.put("cards/pack", data);
  },
};
export type GetPacksArgsType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string | null;
};
export type GetPacksResponseType = {
  cardPacks: CardPackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};

export type CardPackType = {
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

export type AddPackArgType = {
  cardsPack: {
    name?: string;
    deckCover?: string;
    private?: boolean;
  };
};

export type DeletePackArgType = {
  id: string;
};

export type UpdatePackArgType = {
  cardsPack: {
    _id: string;
    name?: string;
  };
};
