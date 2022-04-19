import React from "react";
import { Link } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className=" col-md-6  pt-lg-0 order-2 mt-5 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name">Food Industry</strong>
                  </h1>
                  <h3 className="my-2">we are software developer</h3>
                  <div className="mt-1">
                    <Link to={props.visit} className="btn btn-outline-primary">
                      {props.btnname}
                    </Link>
                  </div>
                </div>
                <div className=" col-md-6 pt-2 pt-lg-0 order-2 mt-5">
                  <img src={props.imgsrc } alt="food" className="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
