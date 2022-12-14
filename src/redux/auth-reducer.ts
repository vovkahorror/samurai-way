import {ActionsTypes} from "./redux-store";

export type AuthDataType = {
    id: number | null;
    email: string | null;
    login: string | null;
}

export type AuthStateType = AuthDataType & { isAuth: boolean };

const SET_USER_DATA = 'SET_USER_DATA';

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};

        default:
            return state;
    }
};

export type SetAuthUserDataActionType = {
    type: 'SET_USER_DATA';
    data: AuthDataType;
}

export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    data: {
        id,
        email,
        login,
    },
});

export default authReducer;