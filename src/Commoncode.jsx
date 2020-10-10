import React from "react";

function Commoncode(props) {
  let imgadd =
    "https://i2.wp.com/css-tricks.com/wp-content/uploads/2018/04/react-svg-component-library-1.gif?ssl=1";
  return (
    <div>
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1">
                  <div className="mt-2 d-flex justify-content-center flex-column">
                    <h1>{props.headline} </h1>
                    <h3 className="mt-2">{props.para}</h3>
                    <h4 className="my-2 text-capitalize">{props.spara}</h4>
                  </div>

                  <div className="mt-3">
                    <button className="button">
                      <span>{props.btn}</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                  <img
                    src={props.img}
                    alt="Image"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commoncode;
