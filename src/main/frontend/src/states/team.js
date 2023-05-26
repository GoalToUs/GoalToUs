import { atom } from "recoil";

export const teamNameState = atom({
  key: "teamNameState",
  default: "ABC",
});
export const searchWordState = atom({
  key: "searchWordState",
  default: "",
});
