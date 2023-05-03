import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        userId: 0,
        userName: "",
    },
});
