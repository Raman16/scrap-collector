import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AddAgent from "../../Admin/Agents/AddAgent";

import useAxios from "../../hooks/use-axios";
import Notification from "../../UI/Notifications";
import Loader from "../../UI/Loader.";
import AgentsList from "../../Admin/Agents/AgentsList";

const PickupAgentPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [agentsList, setAgentsList] = useState([]);

    let pickupAgentsData;
    const handleModalShow = () => {
        setModalShow(!modalShow);
    };

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getRequest,
    } = useAxios();

    const {
        isLoading: isRegistering,
        error: isRegisterError,
        sendRequest: register,
    } = useAxios();

    const {
        isLoading: isUpdating,
        error: isUpdateError,
        sendRequest: updateAgent,
    } = useAxios();

    const registerResponse = (data) => {
        let users = agentsList.concat(data.user);
        setAgentsList(users);
        setModalShow(!modalShow);
        toast(data.message);
    };

    const agentRegistration = (requestData) => {
        requestData.device_name = navigator.userAgent;
        requestData.device_id = "unique Device Id";
        requestData.device_token = navigator.appVersion;
        requestData.device_type = "1";

        register(
            {
                method: "post",
                url: "/admin/pickup-agents/register",
                data: requestData,
            },
            registerResponse
        );
    };

    useEffect(() => {
        const getResponse = (data) => {
            setAgentsList(data.users);
        };
        getRequest(
            {
                method: "GET",
                url: "/admin/pickup-agents/",
                data: [],
            },
            getResponse
        );
    }, []);

    const updateResponse = (data) => {
        let agents = agentsList;
        const index = _.findIndex(agents, {
            id: data.user.id,
        });
        agents[index] = data.user;
        setAgentsList(agents);
        toast(data.message);
    };

    const handleUpdateAgent = (status, user_id) => {
        updateAgent(
            {
                method: "PUT",
                url: "/admin/pickup-agents/update",
                data: {
                    status: !status,
                    user_id: user_id,
                },
            },
            updateResponse
        );
    };

    if (isLoading) {
        pickupAgentsData = <Loader />;
    } else {
        pickupAgentsData = (
            <AgentsList
                agents={agentsList}
                handleStatusChange={handleUpdateAgent}
            />
        );
    }

    return (
        <div className="basic-5">
            <div className="container card">
                <div className="row" style={{ minHeight: "500px",padding:"15px" }}>
                    <div className="col-sm-12 ">
                        <>
                            <div className="margin-8"></div>
                            <div className="row">
                                <div className="col-sm-10  px-0 ">
                                        <h5 style={{marginLeft:"15px"}}>PickUp Agents</h5>
                                </div>
                                <div className="col-sm-2">
                                    <Button onClick={handleModalShow}>
                                        Add Agent
                                    </Button>
                                    <AddAgent
                                        modalShow={modalShow}
                                        handleModalShow={handleModalShow}
                                        agentRegistration={agentRegistration}
                                    />
                                    <Notification />
                                </div>
                            </div>
                            <div className="margin-8"></div>
                            <div className="row m-0">
                                <div className="col-md-12 col-sm-12 px-0 ">
                                    {pickupAgentsData}
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PickupAgentPage;
