import {Params} from '@angular/router';
import {User} from '../../models/user.model';
import {RouterReducerState} from '@ngrx/router-store';

export interface iStateItem {
	data: any;
	loading: boolean;
	error: Error | null;
	loaded?: boolean;
}

export interface iUserState extends iStateItem {
	data: User | null;
}

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
	params: Params;
}

export interface AppState {
	readonly user: iUserState | null;
	readonly loading: boolean | false;
	readonly router: RouterReducerState<RouterStateUrl>;
}


