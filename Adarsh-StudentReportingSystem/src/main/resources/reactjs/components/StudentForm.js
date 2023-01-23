

import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/widgets/TextInput";
import Container from "react-bootstrap/Container";
const StudentForm = ({
student,
onSave,
onChange,
saving = false,
errors = {},
}) => {
return (
<Container>
<form onSubmit={onSave}>
<h2>{student.id ? "Edit" : "Add"} Student</h2>
{errors.onSave && (
<div className="alert alert-danger" role="alert">
{errors.onSave}
</div>
)}
<TextInput
name="id"
label="Id"
value={student.id}
onChange={onChange}
error={errors.title}
/>

<TextInput
name="name"
label="Name"
value={student.name}
onChange={onChange}
error={errors.title}
/>


<button type="submit" disabled={saving} className="btn btn-primary">
{saving ? "Saving..." : "Save"}
</button>
</form>
</Container>
);
};

StudentForm.propTypes = {
// authors: PropTypes.array.isRequired,
student: PropTypes.object.isRequired,
errors: PropTypes.object,
onSave: PropTypes.func.isRequired,
onChange: PropTypes.func.isRequired,
onNestedChange: PropTypes.func.isRequired,
saving: PropTypes.bool,
};

export default StudentForm;
