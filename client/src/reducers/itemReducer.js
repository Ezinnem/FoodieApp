//this is where our actions go to. we have our action filethat conatains all the GET items actions, the ADD items actions etc
import uuid from 'uuid/v4';

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../action/types';

const initiaState = {
    
    items: [
        {id: uuid(), name: 'English'},
        {id: uuid(), name: 'Mathematics'},
        {id: uuid(), name: 'Programming'},
        {id: uuid(), name: 'Coding'}
    ]
}

export default function (state = initiaState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default:
                return state;
    }
}