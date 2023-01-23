

import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/widgets/TextInput";
import Container from "react-bootstrap/Container";
const MarksteetForm = ({
marksteet,
onSave,
onChange,
saving = false,
errors = {},
}) => {
return (
<Container>
<form onSubmit={onSave}>
<h2>{marksteet.id ? "Edit" : "Add"} Marksteet</h2>
{errors.onSave && (
<div className="alert alert-danger" role="alert">
{errors.onSave}
</div>
)}
<TextInput
name="id"
label="Id"
value={marksteet.id}
onChange={onChange}
error={errors.title}
/>

<TextInput
name="student"
label="Student"
value={marksteet.student}
onChange={onChange}
error={errors.title}
/>

<TextInput
name="semester"
label="Semester"
value={marksteet.semester}
onChange={onChange}
error={errors.title}
/>

<TextInput
name="subject"
label="Subject"
value={marksteet.subject}
onChange={onChange}
error={errors.title}
/>

<TextInput
name="marks"
label="Marks"
value={marksteet.marks}
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

MarksteetForm.propTypes = {
// authors: PropTypes.array.isRequired,
marksteet: PropTypes.object.isRequired,
errors: PropTypes.object,
onSave: PropTypes.func.isRequired,
onChange: PropTypes.func.isRequired,
onNestedChange: PropTypes.func.isRequired,
saving: PropTypes.bool,
};

export default MarksteetForm;
