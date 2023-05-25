import { atom } from "recoil";

export const analysisMatchState = atom({
  key: "analysisMatch",
  default: {
    thisTeamId: 0,
    oppoTeamImg: "0",
    team1Name: "",
    team2Name: "",
    team1Goal: 0,
    team2Goal: 0,
    region: "",
    place: "",
    startTime: "",
  },
});
