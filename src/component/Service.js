import React from "react";
import Sdata from './Sdata';
import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="service">
        <h2 >Our Services</h2>
      </div>
      <div className="container-fluid my-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
                {
                  Sdata.map((val,ind)=>
                  {
                    return <Card key ={ind} imgsrc ={val.imgsrc}
                    title ={val.title}
                    />
                  })
                }
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Service;
