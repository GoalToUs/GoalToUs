import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        userId: 0,
        userName: "",
    },
});

export const loginState = atom({
    key: 'loginState',
    default: false,
});
