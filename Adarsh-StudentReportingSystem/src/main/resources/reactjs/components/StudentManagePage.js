
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
saveOrUpdateStudent,
getStudent,
} from "../../redux/actions/studentActions";

import PropTypes from "prop-types";
import StudentForm from "./StudentForm";
import { toast } from "react-toastify";

const ManageStudentPage = ({
getStudent,
saveOrUpdateStudent,
history,
...props
}) => {
const [student, setStudent] = useState({ ...props.student });
const [errors, setErrors] = useState({});
const [saving, setSaving] = useState(false);

useEffect(() => {
const studentId = props.match.params.slug; // from the path `/students/:slug`
if (studentId & !props.student.id) {
getStudent(studentId).catch(() => {
toast.error("Could not fetch student");
});
} else {
setStudent({ ...props.student });
}
}, [props.student]);

function handleChange({ target }) {
setStudent({
...student,
[target.name]: target.value,
});
}

function formIsValid() {
const {
id, 
name, 
} = student;
const errors = {};

if (!id) errors.id = "Id is required.";
if (!name) errors.name = "Name is required.";

setErrors(errors);
// Form is valid if the errors object still has no properties
return Object.keys(errors).length === 0;
}

function handleSave(event) {
event.preventDefault();
if (!formIsValid()) return;
setSaving(true);
saveOrUpdateStudent(student)
.then(() => {
toast.success("Student saved.");
history.push("/students");
})
.catch((error) => {
setSaving(false);
setErrors({ onSave: error.message });
});
}

return (
<StudentForm
student={student}
errors={errors}
onChange={handleChange}
onSave={handleSave}
saving={saving}
/>
);
};

ManageStudentPage.propTypes = {
student: PropTypes.object.isRequired,
getStudent: PropTypes.func.isRequired,
saveOrUpdateStudent: PropTypes.func.isRequired,
history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
debugger;
return {
student: state.student,
loading: state.apiCallsInProgress > 0,
history: ownProps.history,
};
}

const mapDispatchToProps = {
getStudent,
saveOrUpdateStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageStudentPage);
