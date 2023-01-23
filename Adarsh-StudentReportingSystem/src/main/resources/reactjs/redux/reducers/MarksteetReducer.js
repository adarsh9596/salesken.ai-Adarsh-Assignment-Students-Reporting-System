import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function marksteetReducer(state = initialState.marksteet, action) {
	switch (action.type) {
		case types.CREATE_MARKSTEET_SUCCESS:
		return action.marksteet;
		case types.UPDATE_MARKSTEET_SUCCESS:
		return action.marksteet;
		case types.GET_MARKSTEET_SUCCESS:
		return action.marksteet;
		case types.DELETE_MARKSTEET_SUCCESS:
		return {};
		default:
		return state;
	}
}





