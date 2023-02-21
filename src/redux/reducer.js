import {ADD_CONTACT, DELETE_CONTACT } from "./types";


const initialState = {
    contacts: [
        {
            id: 'id-1',
            name: 'Rosie Simpson',
            number: '459-12-56'
        }
    ],
    filter: ""
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const newContacts = [...state.contacts, action.payload];
            return { ...state, contacts: newContacts };
            case DELETE_CONTACT: 
            const result = state.contacts.filter(item => item.id !== action.payload )
            return {...state, contacts: result}
        default: return state;
    }
}

export default reducer;