import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function studentReducer(state = initialState.student, action) {
	switch (action.type) {
		case types.CREATE_STUDENT_SUCCESS:
		return action.student;
		case types.UPDATE_STUDENT_SUCCESS:
		return action.student;
		case types.GET_STUDENT_SUCCESS:
		return action.student;
		case types.DELETE_STUDENT_SUCCESS:
		return {};
		default:
		return state;
	}
}





