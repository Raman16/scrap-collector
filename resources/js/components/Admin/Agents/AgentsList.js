import { Button, Modal, Table } from "react-bootstrap";
import InputH from "../../UI/InputH";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { useEffect } from "react";

const AgentsList = (props) => {
    const { agents } = props;

    return (
        <Table responsive bordered>
            <thead>
                <tr>
                    <th>Phone Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    {/* <th>Username</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {agents.map((agent) => {
                    return (
                        <tr key={agent.id}>
                            <td>
                                {agent.country_code + " " + agent.phone_number}
                            </td>
                            <td>{agent.first_name}</td>
                            <td>{agent.last_name}</td>
                            <td>{agent.email}</td>
                            {/* <td>{agent.username}</td> */}

                            <td>
                                <button
                                    className={`btn mr-1 mb-1 ${
                                        agent.status == 0
                                            ? "btn-danger"
                                            : "btn-success"
                                    } btn-sm`}
                                    onClick={() =>
                                        props.handleStatusChange(
                                            agent.status,
                                            agent.id
                                        )
                                    }
                                >
                                    {agent.status == 0 ? "Inactive" : "Active"}
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
export default AgentsList;
