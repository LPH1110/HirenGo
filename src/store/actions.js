import { SET_USER_SESSION, SET_SEARCH_PRODUCT_FORM, SET_FILTER_FORM, SET_CHOOSE_TO_RENT } from './constants';

export const setUserSession = (...payload) => {
    return {
        type: SET_USER_SESSION,
        payload,
    };
};

export const setChooseToRent = (payload) => ({
    type: SET_CHOOSE_TO_RENT,
    payload,
});

export const setSearchProductForm = (key, value) => {
    return {
        type: SET_SEARCH_PRODUCT_FORM,
        payload: {
            key,
            value,
        },
    };
};

export const setFilterForm = (key, value) => {
    return {
        type: SET_FILTER_FORM,
        payload: {
            key,
            value,
        },
    };
};
