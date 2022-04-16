import { useEffect, useState } from "react";
import { Tab, Table, Tabs, Modal } from "react-bootstrap";
import AddMaterialType from "../../Admin/Material/AddMaterialType";
import MaterialTypeList from "../../Admin/Material/MaterialTypeList";
import useAxios from "../../hooks/use-axios";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputH from "../../UI/InputH";
import MaterialPage from "./MaterialPage";
import StatePage from "./StatePage";

const SettingsPage = () => {
    return (
        <div className="basic-5">
            <div className="container ">
                <div className="row" style={{minHeight:"450px"}}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <Tabs
                            defaultActiveKey={1}
                            id="uncontrolled-tab-example"
                        >
                            <Tab eventKey={1} title="Material Types">
                                    <MaterialPage />
                            </Tab>
                            <Tab eventKey={2} title="States">
                                    <StatePage/>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </div>
    );
};
export default SettingsPage;
