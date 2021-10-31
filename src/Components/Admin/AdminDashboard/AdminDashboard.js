import React, { useState } from "react";
import AddServices from "../AddServices/AddServices";
import ManageOrders from "../ManageOrders/ManageOrders";
import MyOrders from "../MyOrders/MyOrders";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [control, setControl] = useState("allVolunteers");

  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("addServices")}
                    className="admin-menu p-2"
                  >
                    Add Services
                  </li>
                  <li
                    onClick={() => setControl("manageOrders")}
                    className="admin-menu p-2"
                  >
                    Manage Orders
                  </li>
                  <li
                    onClick={() => setControl("myOrders")}
                    className="admin-menu p-2"
                  >
                    My Orders
                  </li>
                 
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "addServices" && <AddServices></AddServices>}
              {control === "manageOrders" && <ManageOrders></ManageOrders>}
              {control === "myOrders" && <MyOrders></MyOrders>}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;