import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function marksteetsReducer(state = initialState.marksteets, action) {
	switch (action.type) {
		case types.CREATE_MARKSTEET_SUCCESS:
		return [...state, { ...action.marksteet }];
		case types.UPDATE_MARKSTEET_SUCCESS:
		return state.map((marksteet) =>
		marksteet.id === action.marksteet.id ? action.marksteet : marksteet
		);
		case types.GET_ALL_MARKSTEETS_SUCCESS:
		return action.marksteets;
		case types.DELETE_MARKSTEET_SUCCESS:
		return state.filter((marksteet) => marksteet.id !== action.marksteet.id);
		default:
		return state;
	}
}





