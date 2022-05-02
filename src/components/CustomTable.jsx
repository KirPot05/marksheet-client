import { useData } from "../context/dataContext";
import "../styles/CustomTable.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useState } from "react";

function CustomTable() {

    const { getData, getMarks } = useData();
    const data = getData();

    const [checked, setChecked] = useState(false);
    const [subIndex, setSubIndex] = useState();

    const onChange = (index) => {
        setChecked(true);
        setSubIndex(index);
    }

    return (
        <>
            <div className="options">
                <div className="subject__options">
                    <span>
                        English: <input type="radio" name="subject" value="eng" onChange={() => onChange(0)} />
                    </span>

                    <span>
                        Mathematics: <input type="radio" name="subject" value="maths" onChange={() => onChange(1)} />
                    </span>

                    <span>
                        Hindi: <input type="radio" name="subject" value="hindi" onChange={() => onChange(2)} />
                    </span>

                    <span>
                        Science: <input type="radio" name="subject" value="science" onChange={() => onChange(3)} />
                    </span>

                    <span>
                        Computer Science: <input type="radio" name="subject" value="comp_sci" onChange={() => onChange(4)} />
                    </span>

                </div>

                <ReactHTMLTableToExcel
                    id="download__btn"
                    table="result__table"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download"
                />


            </div>


            <table cellSpacing={0} id="result__table" className="result__Table">
                <thead>
                    <tr className="table__heading">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>{`${checked ? "Marks/100": "Marks / 600"}`} </th>
                        <th>Percentage</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map(({ id, name, sclass, section, marks }, i) => {
                        return (
                            <tr key={id} className="table_data">
                                <td>{id}</td>
                                <td>{name}</td>
                                <td> {sclass} </td>
                                <td>{section}</td>
                                <td>{getMarks(marks, subIndex)}</td>
                                <td>{`${!checked ? Math.round(getMarks(marks) / 6) : getMarks(marks, subIndex)}%`}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
}

export default CustomTable;
