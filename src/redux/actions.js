
import { nanoid } from 'nanoid';
import {ADD_CONTACT} from './types';
import { DELETE_CONTACT } from './types';
export const addContact = payload => {
    return {
        type: ADD_CONTACT,
        payload: {
            id: nanoid(),
            ...payload, 
        }
    }
}

export const deleteContact = payload => {
    return {
        type: DELETE_CONTACT,
        payload,
    }
}