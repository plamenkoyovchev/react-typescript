import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    data: string[];
    error: string;
    loading: boolean;
}

const initialState: RepositoriesState = {
    data: [],
    error: '',
    loading: false
};

const repositoriesReducer = (state: RepositoriesState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: '',
                loading: false
            };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default repositoriesReducer;