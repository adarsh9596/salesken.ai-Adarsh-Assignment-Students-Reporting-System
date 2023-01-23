
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
saveOrUpdateMarksteet,
getMarksteet,
} from "../../redux/actions/marksteetActions";

import PropTypes from "prop-types";
import MarksteetForm from "./MarksteetForm";
import { toast } from "react-toastify";

const ManageMarksteetPage = ({
getMarksteet,
saveOrUpdateMarksteet,
history,
...props
}) => {
const [marksteet, setMarksteet] = useState({ ...props.marksteet });
const [errors, setErrors] = useState({});
const [saving, setSaving] = useState(false);

useEffect(() => {
const marksteetId = props.match.params.slug; // from the path `/marksteets/:slug`
if (marksteetId & !props.marksteet.id) {
getMarksteet(marksteetId).catch(() => {
toast.error("Could not fetch marksteet");
});
} else {
setMarksteet({ ...props.marksteet });
}
}, [props.marksteet]);

function handleChange({ target }) {
setMarksteet({
...marksteet,
[target.name]: target.value,
});
}

function formIsValid() {
const {
id, 
student, 
semester, 
subject, 
marks, 
} = marksteet;
const errors = {};

if (!id) errors.id = "Id is required.";
if (!student) errors.student = "Student is required.";
if (!semester) errors.semester = "Semester is required.";
if (!subject) errors.subject = "Subject is required.";
if (!marks) errors.marks = "Marks is required.";

setErrors(errors);
// Form is valid if the errors object still has no properties
return Object.keys(errors).length === 0;
}

function handleSave(event) {
event.preventDefault();
if (!formIsValid()) return;
setSaving(true);
saveOrUpdateMarksteet(marksteet)
.then(() => {
toast.success("Marksteet saved.");
history.push("/marksteets");
})
.catch((error) => {
setSaving(false);
setErrors({ onSave: error.message });
});
}

return (
<MarksteetForm
marksteet={marksteet}
errors={errors}
onChange={handleChange}
onSave={handleSave}
saving={saving}
/>
);
};

ManageMarksteetPage.propTypes = {
marksteet: PropTypes.object.isRequired,
getMarksteet: PropTypes.func.isRequired,
saveOrUpdateMarksteet: PropTypes.func.isRequired,
history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
debugger;
return {
marksteet: state.marksteet,
loading: state.apiCallsInProgress > 0,
history: ownProps.history,
};
}

const mapDispatchToProps = {
getMarksteet,
saveOrUpdateMarksteet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMarksteetPage);
