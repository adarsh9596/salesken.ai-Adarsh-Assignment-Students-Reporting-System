import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentList = ({ students, onDeleteClick }) => (
<table className="table">
<thead>
<tr>
<th>Id</th>
<th>Name</th>
</tr>
</thead>
<tbody>
{students.map((student) => {
return (
<tr key={student.id}>
<td>{student.id}</td>
<td>{student.name}</td>
</tr>
);
})}
</tbody>
</table>
);

StudentList.propTypes = {
students: PropTypes.array.isRequired,
onDeleteClick: PropTypes.func.isRequired,
};

export default StudentList;
