import { atom } from 'recoil';

export const matchState = atom({
    key: 'matchState',
    default: {
        teamName: "ABC",
        oppoName: "ssssssss",
        place: "서울",
        startTime : "2023-02-09 11:00",
        result : "2:0",
    },
});
