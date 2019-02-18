import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

// states
import { IAppState } from '../state/app.state';

// Reducers
import { configReducers } from '../reducers/config.reducer';
import { userReducers } from '../reducers/user.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};