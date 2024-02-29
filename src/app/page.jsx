
"use client"

import React, {useState, useEffect, useContext} from "react";






//INTERNAL
import{
    Table,
    Form,
    Services,
    Profile,
    CompleteShipment,
    GetShipment,
    StartShipment,
} from "../../components";

import {TrackingContext} from "../../context/tracking";

const page = () => {
    const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
} = useContext(TrackingContext);

//STATE VAR
const [createShipmentModel, setCreateShipmentModel] = useState(false);
const [openPrrofile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModal, setGetModal] = useState(false);

//DATA STATE VAR
const [allShipmentsdata, setallShipmentsdata] = useState();

useEffect(() => {
    const getCampaignsData = getAllShipment();

    return async () => {
        const allData = await getCampaignsData;
        setallShipmentsdata(allData);
    };
},[]) ;

return (
    <>
    <Services
    setOpenProfile = {setOpenProfile}
    setCompleteModal = {setCompleteModal}
    setGetModal = {setGetModal}
    setStartModal={setStartModal}
    />
    <Table
    setCreateShipmentModel={setCreateShipmentModel}
    allShipmentsdata={allShipmentsdata}
    />
    <Form
    createShipmentModel={createShipmentModel}
    createShipment={createShipment}
    setCreateShipmentModel={setCreateShipmentModel}
    />
    <Profile
    openPrrofile={openPrrofile}
    setOpenProfile={setOpenProfile}
    currentUser={currentUser}
    getShipmentsCount={getShipmentsCount}
    />
    <CompleteShipment
    completeModal={completeModal}
    setCompleteModal={setCompleteModal}
    completeShipment={completeShipment}
    />
    <GetShipment
    getModal={getModal}
    setGetModal={setGetModal}
    getShipment={getShipment}
    />
    <StartShipment
    startModal={startModal}
    setStartModal={setStartModal}
    startShipment={startShipment}
    />
    </>
);
};



export default page