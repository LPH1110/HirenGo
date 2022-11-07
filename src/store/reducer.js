import { SET_USER_SESSION, SET_SEARCH_PRODUCT_FORM, SET_FILTER_FORM } from './constants';

const initState = {
    user: {},
    loggedIn: false,
    searchProductForm: {
        pickUpLocation: '',
        returnLocation: '',
        pickUpDate: '',
        returnDate: '',
    },
    filterForm: {
        brand: 'Yamaha',
        type: 'Scooter',
        color: 'Red',
    },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                user: action.payload[0],
                loggedIn: action.payload[1],
            };
        case SET_SEARCH_PRODUCT_FORM:
            let newObj_1 = {
                ...state,
            };

            newObj_1.searchProductForm[action.payload.key] = action.payload.value;

            return newObj_1;
        case SET_FILTER_FORM:
            let newObj_2 = {
                ...state,
            };

            newObj_2.filterForm[action.payload.key] = action.payload.value;

            return newObj_2;
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
