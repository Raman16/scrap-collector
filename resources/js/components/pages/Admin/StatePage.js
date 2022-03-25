import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AddState from "../../Admin/CountryState/AddState";
import StatesList from "../../Admin/CountryState/StatesList";

import useAxios from "../../hooks/use-axios";
import Loader from "../../UI/Loader.";
import Notification from "../../UI/Notifications";

const StatePage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [countryState, setCountryState] = useState([]);
    const [editValue, setEditValue] = useState();

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getRequest,
    } = useAxios();

    const {
        isLoading: isDeleting,
        error: isDeleteError,
        sendRequest: deleteData,
    } = useAxios();

    const {
        isLoading: isAdding,
        error: isAddError,
        sendRequest: add,
    } = useAxios();

    const {
        isLoading: isUpdating,
        error: isUpdateError,
        sendRequest: update,
    } = useAxios();

    useEffect(() => {
        const getResponse = (data) => {
            setCountryState(data.country_states[0]);
        };
        getRequest(
            {
                method: "GET",
                url: "/states",
                data: [],
            },
            getResponse
        );
    }, []);

    const handleModalShow = () => {
        setEditValue({});
        setModalShow(!modalShow);
    };

    const handleEdit = (data) => {
        setEditValue(data);
        setModalShow(!modalShow);
    };

    const deleteResponse = (data) => {
        let country_States = countryState;
        let newValues = countryState.state.filter(
            (st) => st.id != data.state.id
        );

        country_States.state = newValues;

        setCountryState(country_States);
        toast(data.message);
    };
    const handleDelete = (type) => {
        deleteData(
            {
                method: "delete",
                url: "/states/delete",
                data: { id: type.id },
            },
            deleteResponse
        );
    };

    const addorUpdateState = (data, type) => {
        let country_states = countryState;
        let states = country_states.state;
        if (type == "add") {
            const newValues = states.concat(data.state);
            country_states.state = newValues;
        } else {
            const index = _.findIndex(states, { id: data.state.id });
            states[index] = data.state;
            country_states.state = states;
        }
        setCountryState(country_states);
        setModalShow(!modalShow);
        toast(data.message);
    };

    const addResponse = (data) => {
        addorUpdateState(data, "add");
    };

    const updateResponse = (data) => {
        addorUpdateState(data, "update");
    };

    const handleAddOrUpdate = (requestData) => {
        requestData.country_id = countryState.id;

        if (requestData.hasOwnProperty("id") && requestData.id != undefined) {
            update(
                {
                    method: "PUT",
                    url: "/states/update",
                    data: requestData,
                },
                updateResponse
            );
        } else {
            add(
                {
                    method: "post",
                    url: "/states",
                    data: requestData,
                },
                addResponse
            );
        }
    };

    return (
        <>
            <div className="margin-8"></div>
            <div className="row">
                <div className="col-9  px-0 "></div>
                <div className="col-3">
                    <Button onClick={handleModalShow}>Add State</Button>
                    <AddState
                        modalShow={modalShow}
                        handleModalShow={handleModalShow}
                        handleAddOrUpdate={handleAddOrUpdate}
                        editValue={editValue}
                    />
                    <Notification />
                </div>
            </div>
            <div className="margin-8"></div>
            <div className="row m-0">
                <div className="col-md-12 col-12 px-0 ">
                    <StatesList
                        countryState={
                            countryState.length != 0 ? countryState.state : []
                        }
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                    {isLoading && <Loader/>}
                </div>
            </div>
        </>
    );
};
export default StatePage;
