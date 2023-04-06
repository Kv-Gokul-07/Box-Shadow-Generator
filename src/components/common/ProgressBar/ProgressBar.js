import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./ProgressBar.scss";

const ProgressBar = () => {
		return (
			<div className="pageloader">
				<div>
					<CircularProgress classes={{ root: "pb-root" }} />
				</div>
			</div>
		);
};

export default ProgressBar;
