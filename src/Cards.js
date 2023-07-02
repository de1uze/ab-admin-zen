import React from "react";
import DashboardCard from "./DashboardCard";

function Cards() {
  let CardData = [
    {
      cardname: "Earnings (Monthly)",
      text: "text-primary",
      border: "border-left-primary",
      icon: "fa-calendar",
      Cardinfo: "$40,000",
    },
    {
      cardname: "Earnings (Annual)",
      text: "text-success",
      border: "border-left-success",
      icon: "fa-dollar-sign",
      Cardinfo: "$215,000",
    },
    {
      cardname: "Tasks",
      text: "text-info",
      border: "border-left-info",
      icon: "fa-clipboard-list",
      Cardinfo: "50%",
    },
    {
      cardname: "Pending Requests",
      text: "text-warning",
      border: "border-left-warning",
      icon: "fa-comments",
      Cardinfo: "18",
    },
  ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cards</h1>
      </div>

      <div className="row">
        {CardData.map((carddata) => {
          return <DashboardCard Carddata={carddata}></DashboardCard>;
        })}
      </div>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Development Approach
            </h6>
          </div>
          <div className="card-body">
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
              order to reduce CSS bloat and poor page performance. Custom CSS
              classes are used to create custom components and custom utility
              classes.
            </p>
            <p className="mb-0">
              Before working with this theme, you should become familiar with
              the Bootstrap framework, especially the utility classes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
