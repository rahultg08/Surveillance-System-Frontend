import React, { Fragment } from "react";

import Multistep from "react-multistep";

// import {StepOne}  from "./StepOne";
// import {StepTwo} from "./StepTwo";
import {StepThree} from "./StepThree";
import {StepFour} from "./StepFour";

import PageTitle from "../../../layouts/PageTitle";
//import { propTypes } from "react-bootstrap/esm/Image";

const Wizard = () => {
 console.log("Here,in wizard");
  const steps = [
    // { name: "Personal Info", component: <StepOne  /> },
    // { name: "Company Info", component: <StepTwo /> },
    { name: "Business Hours", component: <StepThree /> },
    { name: "Email Setup", component: <StepFour /> },
  ];
  const prevStyle = {
    background: "#F7FAFC",
    borderWidth: "0px",
    color: "#333333",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.55em 2em",
    border: "1px solid #EEEEEE",
    marginRight: "1rem",
  };
  const nextStyle = {
    background: "#dd2f6e",
    borderWidth: "0px",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.1em 2em",
  };

 
 


  return (
    <Fragment>
      <PageTitle activeMenu="Publish" motherMenu="Forms" />

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form</h4>
            </div>
            <div className="card-body">
              <form  method="POST" 
                
                id="step-form-horizontal"
                className="step-form-horizontal"
              >
                <Multistep
                  showNavigation={true}
                  steps={steps}
                  prevStyle={prevStyle}
                  nextStyle={nextStyle}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wizard;
