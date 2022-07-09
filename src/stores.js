import { writable } from 'svelte/store';

export const stuffModalJSON = {
    id: '',
    images: [],
    title: '',
    description: '',
    properties: [],
    rating: 0,
    price: ''
}
export const stuffModal = writable(stuffModalJSON);

export const regModalJSON = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    isVisible: false,
}
export const regModal = writable(regModalJSON);

export const authModalJSON = {
    email: '',
    password: '',
    isVisible: false,
}
export const authModal = writable(authModalJSON);

export const resetPassModalJSON = {
    email: '',
    isVisible: false,
}
export const resetPassModal = writable(resetPassModalJSON);