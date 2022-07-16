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

// auth | reg | reset - modals
export const authModal = writable({
    component: null,
})