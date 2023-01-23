import * as types from "./actionTypes";
import * as marksteetApi from "../../api/MarksteetApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";




// GET ALL
export function getAllMarksteetSuccess(marksteets) {
return { type: types.GET_ALL_MARKSTEETS_SUCCESS, marksteets };
}

export function getAllMarksteet() {
return function (dispatch) {
dispatch(beginApiCall());
return marksteetApi
.getAllMarksteet()
.then((_marksteet) => {
if (_marksteet) {
dispatch(getAllMarksteetSuccess(_marksteet));
}
})
.catch((error) => {
dispatch(apiCallError(error));
throw error;
});
};
}

// GET
export function getMarksteetSuccess(marksteet) {
return { type: types.GET_MARKSTEET_SUCCESS, marksteet };
}

export function getMarksteet(marksteetId) {
return function (dispatch) {
dispatch(beginApiCall());
// Dont forget the return from here
return marksteetApi
.getMarksteet(marksteetId)
.then((_marksteet) => {
if (_marksteet) {
dispatch(getMarksteetSuccess(_marksteet));
}
})
.catch((error) => {
dispatch(apiCallError(error));

throw error;
});
};
}

// POST
export function createMarksteetSuccess(marksteet) {
return { type: types.CREATE_MARKSTEET_SUCCESS, marksteet };
}

// UPDATE
export function updateMarksteetSuccess(marksteet) {
return { type: types.UPDATE_MARKSTEET_SUCCESS, marksteet };
}

export function saveOrUpdateMarksteet(marksteet) {
return function (dispatch) {
return marksteetApi.saveOrUpdateMarksteet(marksteet).then((_entity) => {
marksteet.id
? dispatch(updateMarksteetSuccess(_entity))
: dispatch(createMarksteetSuccess(_entity));
});
};
}

// DELETE Action
export function deleteMarksteetSuccess(marksteetId) {
return { type: types.DELETE_MARKSTEET_SUCCESS, marksteetId };
}

export function deleteMarksteet(marksteetId) {
return function (dispatch) {
return marksteetApi.deleteMarksteet(marksteetId).then(() => {
dispatch(deleteMarksteetSuccess(marksteetId));
});
};
}





