
import { handleEmptyResponse, handleResponse } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL
? process.env.REACT_APP_API_URL + "/studentreporting/v1/planner/marksteets"
: "/studentreporting/v1/planner/marksteets";



export function getAllMarksteet() {
	return fetch(baseUrl, {
	method: "GET",
	headers: {
	"content-type": "application/json",
	},
	}).then(handleResponse);
}

export function getMarksteet(marksteetId
) {
	return fetch(baseUrl + "/" + marksteetId, {
	method: "GET",
	headers: { "content-type": "application/json" },
	}).then(handleResponse);
}

export function saveOrUpdateMarksteet(marksteet
) {
	return fetch(baseUrl + (marksteet.id || ""), {
	method: marksteet.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
	headers: { "content-type": "application/json" },
	body: JSON.stringify(marksteet),
	}).then(handleResponse);
}

export function deleteMarksteet(marksteetId
) {
	return fetch(baseUrl + "/" + marksteetId, {
	method: "DELETE",
	headers: { "content-type": "application/json" },
	}).then(handleEmptyResponse);
}





