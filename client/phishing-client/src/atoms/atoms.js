import { atom } from 'recoil';

export const accessToken = atom({
    key: 'special',
    type: 'accessTokenState',
    default: ''
})