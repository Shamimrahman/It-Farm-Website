import React from "react";
import Card from "./Card";
import Sdata from "./Carddata";

function Services() {
  return (
    <>
      <h1 className="text-center my-5">Service Page</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10  mx-auto my-2">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    key={index}
                  ></Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
