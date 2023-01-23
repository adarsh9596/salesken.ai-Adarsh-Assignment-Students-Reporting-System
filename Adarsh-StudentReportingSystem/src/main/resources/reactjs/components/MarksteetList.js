import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MarksteetList = ({ marksteets, onDeleteClick }) => (
<table className="table">
<thead>
<tr>
<th>Id</th>
<th>Student</th>
<th>Semester</th>
<th>Subject</th>
<th>Marks</th>
</tr>
</thead>
<tbody>
{marksteets.map((marksteet) => {
return (
<tr key={marksteet.id}>
<td>{marksteet.id}</td>
<td>{marksteet.student}</td>
<td>{marksteet.semester}</td>
<td>{marksteet.subject}</td>
<td>{marksteet.marks}</td>
</tr>
);
})}
</tbody>
</table>
);

MarksteetList.propTypes = {
marksteets: PropTypes.array.isRequired,
onDeleteClick: PropTypes.func.isRequired,
};

export default MarksteetList;
