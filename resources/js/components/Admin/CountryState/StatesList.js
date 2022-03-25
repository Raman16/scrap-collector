import { Button, Table } from "react-bootstrap";

const StatesList = (props) => {
    
    const { countryState, handleEdit, handleDelete } = props;
    const edit = (data) => {
        handleEdit(data);
    };
    const deleteData = (data) => {
        handleDelete(data);
    };

    return (
        <Table responsive bordered>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {countryState.map((st) => {
                    return (
                        <tr key={st.id}>
                            <td>{st.name}</td>
                            <td>
                                <button
                                    className="btn mr-1 mb-1 btn-primary btn-sm"
                                    onClick={() => edit(st)}
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    className="btn mr-1 mb-1 btn-danger btn-sm"
                                    onClick={() => deleteData(st)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
export default StatesList;
