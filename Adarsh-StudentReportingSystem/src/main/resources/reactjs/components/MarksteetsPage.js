import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MarksteetList from "./MarksteetList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/spinner/Spinner";
import { toast } from "react-toastify";
import {
getAllMarksteet,
deleteMarksteet,
} from "../../redux/actions/MarksteetAction";
import Container from "react-bootstrap/Container";

const MarksteetsPage = ({ loading, marksteets, getAllMarksteet, deleteMarksteet }) => {
const [redirectToAddMarksteetPage, setRedirectToAddMarksteetPage] = useState(
false
);
useEffect(() => {
if (marksteets.length === 0) {
getAllMarksteets().catch((error) => {
alert("Loading marksteets failed" + error);
});
}
}, [marksteets]);

function handleDeleteMarksteet(marksteet) {
toast.success("Marksteet deleted");
try {
deleteMarksteet(marksteet);
} catch (error) {
toast.error("Delete failed. " + error.message, { autoClose: false });
}
}

return (
<Container>
{redirectToAddMarksteetPage && <Redirect to="/marksteet" />}
<h2>Marksteets</h2>
{loading ? (
<Spinner />
) : (
<>
<button
style={{ marginBottom: 20 }}
className="btn btn-primary add-marksteet"
onClick={() => setRedirectToAddMarksteetPage(true)}
>
Add Marksteet
</button>

<MarksteetList
onDeleteClick={handleDeleteMarksteet}
marksteets={marksteets}
/>
</>
)}
</Container>
);
};

MarksteetsPage.propTypes = {
marksteets: PropTypes.array.isRequired,
loading: PropTypes.bool.isRequired,
getAllMarksteets: PropTypes.func.isRequired,
deleteMarksteet: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
return {
marksteets: state.marksteets,
authors: state.authors,
loading: state.apiCallsInProgress > 0,
};
}

const mapDispatchToProps = {
getAllMarksteet,
deleteMarksteet,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarksteetsPage);
