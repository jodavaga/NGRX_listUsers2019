import { EUserActions, UserActions } from '../actions/user.actions';

// User state, initial and interface state
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = ( state = initialUserState, action: UserActions ) : IUserState => {
    switch (action.type) {
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        default: {
            return state;
        }
    }
};