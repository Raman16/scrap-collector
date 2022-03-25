import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AddMaterialType from "../../Admin/Material/AddMaterialType";
import MaterialTypeList from "../../Admin/Material/MaterialTypeList";
import useAxios from "../../hooks/use-axios";
import Loader from "../../UI/Loader.";
import Notification from "../../UI/Notifications";

const MaterialPage = () => {
    const [materialModalShow, setMaterialModalShow] = useState(false);
    const [materialTypes, setMaterialTypes] = useState([]);
    const [editValue, setEditValue] = useState();

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getMaterialTypes,
    } = useAxios();

    const {
        isLoading: isDeleting,
        error: isDeleteError,
        sendRequest: deleteMaterialType,
    } = useAxios();

    const {
        isLoading: isAdding,
        error: isAddError,
        sendRequest: addMaterialType,
    } = useAxios();

    const {
        isLoading: isUpdating,
        error: isUpdateError,
        sendRequest: updateMaterialType,
    } = useAxios();

    useEffect(() => {
        const materialTypesResponse = (data) => {
            setMaterialTypes(data.material_types);
        };
        getMaterialTypes(
            {
                method: "GET",
                url: "/material-types",
                data: [],
            },
            materialTypesResponse
        );
    }, []);

    const handleMaterialModalShow = () => {
        setEditValue({});
        setMaterialModalShow(!materialModalShow);
    };

    const handleMaterialEdit = (type) => {
        setEditValue(type);
        setMaterialModalShow(!materialModalShow);
    };

    const deleteMaterialTypeResponse = (data) => {
        let types = materialTypes.filter(
            (type) => type.id != data.material_type.id
        );
        setMaterialTypes(types);
    };
    const handleMaterialDelete = (type) => {
        deleteMaterialType(
            {
                method: "delete",
                url: "/material-types/delete",
                data: { id: type.id },
            },
            deleteMaterialTypeResponse
        );
    };

    const addorUpdateMaterial = (data, type) => {
        let existingMaterials = materialTypes;
        if (type == "add") {
            const newValues = existingMaterials.concat(data.material_type);
            setMaterialTypes(newValues);
        } else {
            const index = _.findIndex(materialTypes, {
                id: data.material_type.id,
            });
            existingMaterials[index] = data.material_type;
            setMaterialTypes(existingMaterials);
        }
        setMaterialModalShow(!materialModalShow);
        toast(data.message);
    };

    const addMaterialTypeResponse = (data) => {
        addorUpdateMaterial(data, "add");
    };

    const updateMaterialTypeResponse = (data) => {
        addorUpdateMaterial(data, "update");
    };

    const handleUpdateMaterialType = (type) => {
        if (type.hasOwnProperty("id") && type.id != undefined) {
            updateMaterialType(
                {
                    method: "PUT",
                    url: "/material-types/update",
                    data: type,
                },
                updateMaterialTypeResponse
            );
        } else {
            addMaterialType(
                {
                    method: "post",
                    url: "/material-types",
                    data: type,
                },
                addMaterialTypeResponse
            );
        }
    };

    return (
        <>
            <div className="margin-8"></div>
            <div className="row">
                <div className="col-9  px-0 "></div>
                <div className="col-3">
                    <Button onClick={handleMaterialModalShow}>
                        Add Material
                    </Button>
                    <AddMaterialType
                        modalShow={materialModalShow}
                        handleModalShow={handleMaterialModalShow}
                        handleUpdateMaterialType={handleUpdateMaterialType}
                        editValue={editValue}
                    />
                    <Notification />
                </div>
            </div>
            <div className="margin-8"></div>
            <div className="row m-0">
                <div className="col-md-12 col-12 px-0 ">
                    <MaterialTypeList
                        materialTypes={materialTypes}
                        handleEdit={handleMaterialEdit}
                        handleDelete={handleMaterialDelete}
                    />
                    <div>

                        {isLoading && <Loader />}
                    </div>
                </div>
            </div>
        </>
    );
};
export default MaterialPage;
