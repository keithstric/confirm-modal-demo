import {selectLoadingFeatureState} from '../';
import {createSelector} from '@ngrx/store';
import * as fromLoading from './loading.reducer';

export const selectLoading = createSelector(
	selectLoadingFeatureState,
	fromLoading.getLoading
);
