import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StudentList from "./StudentList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/spinner/Spinner";
import { toast } from "react-toastify";
import {
getAllStudent,
deleteStudent,
} from "../../redux/actions/StudentAction";
import Container from "react-bootstrap/Container";

const StudentsPage = ({ loading, students, getAllStudent, deleteStudent }) => {
const [redirectToAddStudentPage, setRedirectToAddStudentPage] = useState(
false
);
useEffect(() => {
if (students.length === 0) {
getAllStudents().catch((error) => {
alert("Loading students failed" + error);
});
}
}, [students]);

function handleDeleteStudent(student) {
toast.success("Student deleted");
try {
deleteStudent(student);
} catch (error) {
toast.error("Delete failed. " + error.message, { autoClose: false });
}
}

return (
<Container>
{redirectToAddStudentPage && <Redirect to="/student" />}
<h2>Students</h2>
{loading ? (
<Spinner />
) : (
<>
<button
style={{ marginBottom: 20 }}
className="btn btn-primary add-student"
onClick={() => setRedirectToAddStudentPage(true)}
>
Add Student
</button>

<StudentList
onDeleteClick={handleDeleteStudent}
students={students}
/>
</>
)}
</Container>
);
};

StudentsPage.propTypes = {
students: PropTypes.array.isRequired,
loading: PropTypes.bool.isRequired,
getAllStudents: PropTypes.func.isRequired,
deleteStudent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
return {
students: state.students,
authors: state.authors,
loading: state.apiCallsInProgress > 0,
};
}

const mapDispatchToProps = {
getAllStudent,
deleteStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);
