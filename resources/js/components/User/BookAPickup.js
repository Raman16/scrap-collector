import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import Button from "../UI/Button";
import InputH from "../UI/InputH";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";

const BookAPickup = (props) => {
    const [materialType, setMaterialType] = useState([]);
    const [countries, setCountries] = useState([]);
    const [countryState, setcountryState] = useState([]);

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getDropdowns,
    } = useAxios();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(
        function () {
            const dropdownResponse = (data) => {
                setMaterialType(data.material_types);
                setCountries(data.countries);
            };
            getDropdowns(
                {
                    method: "GET",
                    url: "/pickup/dropdowns",
                    data: [],
                },
                dropdownResponse
            );
        },
        [getDropdowns]
    );
    const handleCountry = (event) => {
        if (event.target.value != "") {
            const country_states = countries.find(
                (ctry) => ctry.id == event.target.value
            );
            setcountryState(country_states.state);
        }
    };

    let material_options = [];
    let country_options = [];
    let state_options = [];

    if (!isLoading) {
        materialType.map((matrl) => {
            material_options.push({
                id: matrl.id,
                value: matrl.material,
            });
        });
        countries.map((ctry) => {
            country_options.push({
                id: ctry.id,
                value: ctry.name,
            });
        });
        countryState.map((st) => {
            state_options.push({
                id: st.id,
                value: st.name,
            });
        });
    }
    // const handleImage =(e)=>{
    // console.log("file", e.target.files[0]);
    // let file = e.target.files[0];
       

    //    let reader = new FileReader();
    //    reader.onloadend = function() {
    //      document.write('RESULT: ', reader.result);
    //    }
    //    reader.readAsDataURL(file);

    // }
    return (
        <>
            <h5>Book Your Pickup</h5>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="py-50">Scrap</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Select
                                                id="material_type_id"
                                                label="Material Type"
                                                name="material_type_id"
                                                placeholder="--select material--"
                                                errors={errors}
                                                register={register}
                                                onChange={(e) => {
                                                    setValue(
                                                        "material_type_id",
                                                        e.target.value
                                                    );
                                                }}
                                                options={material_options}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                        {/* <input
                                                id="image"
                                                name="image"
                                                type="file"
                                                placeholder="upload image"
                                                onChange={handleImage}
                                            /> */}
                                            <InputH
                                                id="image"
                                                label="Image"
                                                type="file"
                                                placeholder="upload image"
                                                register={register}
                                                // errors={errors}
                                                // required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <TextArea
                                                id="message"
                                                label="Message"
                                                type="text"
                                                placeholder="Enter some text"
                                                register={register}
                                                required
                                                errors={errors}
                                            />
                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">
                                            Pickup Date & Location
                                        </h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputH
                                            id="pickup_date"
                                            label="Date"
                                            type="text"
                                            placeholder="Pickup Date"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <TextArea
                                            id="address"
                                            label="Address"
                                            placeholder="Enter Address"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <TextArea
                                            id="land_mark"
                                            label="Land Mark"
                                            placeholder="Enter Landmark"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {/* <Controller
                                                name="countries"
                                                control={control}
                                                
                                                render={({ field: { value, ref } }) => (
                                                    <Select
                                                        id="countries"
                                                        label="Country"
                                                        placeholder="--select country--"
                                                        onChange={handleCountry}
                                                        options={
                                                            country_options
                                                        }
                                                        selected={value}

                                                    />
                                                )}
                                            /> */}
                                            <Select
                                                id="country_id"
                                                label="Country"
                                                name="country_id"
                                                placeholder="--select country--"
                                                register={register}
                                                errors={errors}
                                                onChange={(e) => {
                                                    handleCountry(e);
                                                    setValue(
                                                        "country_id",
                                                        e.target.value
                                                    );
                                                }}
                                                options={country_options}
                                            />

                                            {/* <Select
                                                id="countries"
                                                label="Country"
                                                placeholder="--select country--"
                                                options={country_options}
                                                register={register}
                                                onChange={handleCountry}
                                                errors={errors}
                                                required
                                            />  */}
                                        </div>
                                        <div className="col-sm-6">
                                            <Select
                                                id="state_id"
                                                label="State"
                                                name="state_id"
                                                placeholder="--select state--"
                                                register={register}
                                                require
                                                errors={errors}
                                                onChange={(e) => {
                                                    setValue(
                                                        "state_id",
                                                        e.target.value
                                                    );
                                                }}
                                                options={state_options}
                                            />

                                            {/* <Select
                                                id="state"
                                                label="State"
                                                placeholder="--select state--"
                                                register={register}
                                                options={state_options}
                                                required
                                                errors={errors}
                                                required
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputH
                                            id="city"
                                            label="City"
                                            type="text"
                                            placeholder="Enter City"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <InputH
                                            id="pincode"
                                            label="Pincode"
                                            type="text"
                                            placeholder="Enter Pincode"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">Bank Details</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputH
                                            id="bank_name"
                                            label="Bank Name"
                                            type="text"
                                            placeholder="Enter Bank Name"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputH
                                            id="account_name"
                                            label="Account Name"
                                            type="text"
                                            placeholder="Enter Account Name"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <InputH
                                            id="account_no"
                                            label="Account No#"
                                            type="text"
                                            placeholder="Enter Account Number"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputH
                                            id="ifsc_code"
                                            label="Ifsc Code"
                                            type="text"
                                            placeholder="Enter Ifsc Code"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <InputH
                                            id="branch"
                                            label="Branch"
                                            type="text"
                                            placeholder="Enter Branch Name"
                                            register={register}
                                            required
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>
                <div>
                    <Button type="submit">Book Pickup</Button>
                </div>
            </form>
        </>
    );
};
export default BookAPickup;
