export const GET_COMPANY_DATA = 'GET_COMPANY_DATA';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getDataFromApiAsync = () => {


    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_COMPANY_DATA,
                    payload: json,
                });
            }

        }
    } catch (error) {
        console.error(error);
    } 
};

