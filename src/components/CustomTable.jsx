import { useEffect, useState } from "react";
import "../styles/CustomTable.css";

function CustomTable() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch('http://localhost:5000');
            const tableData = await res.json();   
            setData(tableData);
        
            console.log(data);
        }

        fetchData();

    }, [data])

    return (
        <table cellSpacing={0} className="result__Table">
            <thead>
                <tr className="table__heading">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Marks</th>
                    <th>Percentage</th>
                </tr>
            </thead>

            <tbody>

                {data.map(({id, name, sclass, section}) => {
                    return(
                        <tr key={id} className="table_data">
                        <td>{id}</td>
                        <td>{name}</td>
                        <td> {sclass} </td>
                        <td>{section}</td>
                        <td>578</td>
                        <td>95%</td>
                </tr>
                    )
                })}

            </tbody>
        </table>
    );
}

export default CustomTable;
