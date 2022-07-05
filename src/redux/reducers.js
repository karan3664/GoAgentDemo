import { GET_COMPANY_DATA } from './actions';

const initialState = {
    data: []
};


function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMPANY_DATA:
            return { ...state, data: action.payload };
        default: return state;

    }

};


export default dataReducer;
