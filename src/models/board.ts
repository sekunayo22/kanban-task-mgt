export type BoardResponse = {
  id: number;
  name: string;
  columns: Array<string>;
};

export type AddBoardRequest = {
  name: string;
  columns: Array<string>;
};
