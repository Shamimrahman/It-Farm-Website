import React, { useState } from "react";

function Contactform() {
  let [ps, us] = useState({
    name: "",
    email: "",
    phn: "",
    comp: "",
  });

  let [savedata, showdata] = useState([]);

  let input_event = (event) => {
    let { name, value } = event.target;

    us((olditem) => {
      return {
        ...olditem,
        [name]: value,
      };
    });
  };

  let save = () => {
    showdata((olditem) => {
      return [...olditem, ps];
    });

    alert(
      `Name: ${ps.name},  Email : ${ps.email} , Phone : ${ps.phn} , Complain : ${ps.comp}`
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-6 mx-auto">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                name="name"
                value={ps.name}
                onChange={input_event}
              />
            </div>
            <br></br>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter mail"
                name="email"
                value={ps.email}
                onChange={input_event}
              />
            </div>
            <br></br>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Phone No</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Phone no"
                name="phn"
                value={ps.phn}
                onChange={input_event}
              />

              <br></br>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Any Issue?</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="comp"
                value={ps.comp}
                onChange={input_event}
                rows="3"
              ></textarea>
            </div>

            <div className="col-12 my-3">
              <button class="btn btn-primary" onClick={save} type="submit">
                Submit form
              </button>

              {savedata.map((val, index) => {})}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
