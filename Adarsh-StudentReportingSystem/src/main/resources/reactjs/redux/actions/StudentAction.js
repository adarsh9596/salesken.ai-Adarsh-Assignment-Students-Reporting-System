import * as types from "./actionTypes";
import * as studentApi from "../../api/StudentApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";




// GET ALL
export function getAllStudentSuccess(students) {
return { type: types.GET_ALL_STUDENTS_SUCCESS, students };
}

export function getAllStudent() {
return function (dispatch) {
dispatch(beginApiCall());
return studentApi
.getAllStudent()
.then((_student) => {
if (_student) {
dispatch(getAllStudentSuccess(_student));
}
})
.catch((error) => {
dispatch(apiCallError(error));
throw error;
});
};
}

// GET
export function getStudentSuccess(student) {
return { type: types.GET_STUDENT_SUCCESS, student };
}

export function getStudent(studentId) {
return function (dispatch) {
dispatch(beginApiCall());
// Dont forget the return from here
return studentApi
.getStudent(studentId)
.then((_student) => {
if (_student) {
dispatch(getStudentSuccess(_student));
}
})
.catch((error) => {
dispatch(apiCallError(error));

throw error;
});
};
}

// POST
export function createStudentSuccess(student) {
return { type: types.CREATE_STUDENT_SUCCESS, student };
}

// UPDATE
export function updateStudentSuccess(student) {
return { type: types.UPDATE_STUDENT_SUCCESS, student };
}

export function saveOrUpdateStudent(student) {
return function (dispatch) {
return studentApi.saveOrUpdateStudent(student).then((_entity) => {
student.id
? dispatch(updateStudentSuccess(_entity))
: dispatch(createStudentSuccess(_entity));
});
};
}

// DELETE Action
export function deleteStudentSuccess(studentId) {
return { type: types.DELETE_STUDENT_SUCCESS, studentId };
}

export function deleteStudent(studentId) {
return function (dispatch) {
return studentApi.deleteStudent(studentId).then(() => {
dispatch(deleteStudentSuccess(studentId));
});
};
}





