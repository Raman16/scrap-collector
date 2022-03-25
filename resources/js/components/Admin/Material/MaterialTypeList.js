import { Button, Table } from "react-bootstrap";

const MaterialTypeList = (props) => {
    const { materialTypes,handleEdit,handleDelete } = props;

    const editMaterialType = (type) =>{
        handleEdit(type);
    }
    const deleteMaterialType = (type) =>{
        handleDelete(type);
    }
    return (
        <Table responsive bordered>
            <thead>
                <tr>
                    <th>Material Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {materialTypes.map((type) => {
                    return (
                        <tr key={type.id}>
                            <td>{type.material}</td>
                            <td>
                                <button
                                    className="btn mr-1 mb-1 btn-primary btn-sm"
                                    onClick={()=>editMaterialType(type)}
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    className="btn mr-1 mb-1 btn-danger btn-sm"
                                    onClick={()=>deleteMaterialType(type)}
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
export default MaterialTypeList;
