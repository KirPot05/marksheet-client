import React from "react";

function Table() {
 	return (
		<div className="result__table">
			
			<div className="table__header">
				<div>ID</div>
				<div>Name</div>
				<div>Class</div>
				<div>Section</div>
				<div>Total Marks</div>
				<div>Percentage</div>
			</div>

			<div className="table__data">
				<div className="data">
					<span>389CS19008</span>
					<span>Rohan</span>
					<span>10</span>
					<span>A</span>
					<span>578</span>
					<span>95%</span>
				</div>

				<div className="data">
				<span>389CS19018</span>
					<span>Ramlal</span>
					<span>10</span>
					<span>C</span>
					<span>512</span>
					<span>93%</span>
				</div>

				<div className="data">
					<span>389CS19043</span>
					<span>Thakur</span>
					<span>11</span>
					<span>B</span>
					<span>508</span>
					<span>91%</span>
				</div>

				<div className="data">
					<span>389CS19041</span>
					<span>Gabbar</span>
					<span>12</span>
					<span>C</span>
					<span>381</span>
					<span>79%</span>
				</div>

				<div className="data">
					<span>389CS19023</span>
					<span>Samba</span>
					<span>8</span>
					<span>A</span>
					<span>512</span>
					<span>91%</span>
				</div>

				<div className="data">
					<span>389CS19133</span>
					<span>Mogambo</span>
					<span>12</span>
					<span>B</span>
					<span>109</span>
					<span>30%</span>
				</div>
			</div>
			
	 	</div>
	);
}

export default Table;
