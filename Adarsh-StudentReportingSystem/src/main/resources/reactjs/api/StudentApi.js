
import { handleEmptyResponse, handleResponse } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL
? process.env.REACT_APP_API_URL + "/studentreporting/v1/planner/students"
: "/studentreporting/v1/planner/students";



export function getAllStudent() {
	return fetch(baseUrl, {
	method: "GET",
	headers: {
	"content-type": "application/json",
	},
	}).then(handleResponse);
}

export function getStudent(studentId
) {
	return fetch(baseUrl + "/" + studentId, {
	method: "GET",
	headers: { "content-type": "application/json" },
	}).then(handleResponse);
}

export function saveOrUpdateStudent(student
) {
	return fetch(baseUrl + (student.id || ""), {
	method: student.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
	headers: { "content-type": "application/json" },
	body: JSON.stringify(student),
	}).then(handleResponse);
}

export function deleteStudent(studentId
) {
	return fetch(baseUrl + "/" + studentId, {
	method: "DELETE",
	headers: { "content-type": "application/json" },
	}).then(handleEmptyResponse);
}





