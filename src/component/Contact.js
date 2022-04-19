import React, { useState } from "react";
// import { Link } from "react-router-dom";
 import { Link } from "react-router-dom";
const Contact = () => {
  
  const[Data,setData]=useState(
    {
      fullname:"",
      email:"",
      phone:"",
      msg:""
    }
  );
  const changeventfullname=(e)=>
{
    setData({...Data,fullname:e.target.value})
}
const changeventmsg=(e)=>
{
    setData({...Data,msg:e.target.value})
}
const changeventemail=(e)=>
{
    setData({...Data,email:e.target.value})
}
const changeventphone=(e)=>
{
    setData({...Data,phone:e.target.value})
}
   const[submited,setsubmited]=useState(false);
  const[valid,setvalid]=useState(false);

  const Submitdata=(e)=>
 {
     e.preventDefault();

     if(Data.fullname && Data.email && Data.phone)
     {
       setvalid(true);
     }
    setsubmited(true);
 }
  return (
    <>
      <div className="container-fluid ">
        <h2 className="text-center contact">Contact Us</h2>
      </div>
       {submited && valid ? alert("succusful submit"): null} 
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={Submitdata}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={Data.fullname}
                  onChange={changeventfullname}
                  placeholder="name"
                 
                />
               {submited && !Data.fullname ? <span className="text-warning">please enter the name</span> :null}  
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={Data.email}
                  onChange={changeventemail}
                  placeholder="Name@gmail.com"
                />
                 {submited && !Data.email ? <span className="text-warning">please valid email</span> :null}
              </div>
            
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="Number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={Data.phone}
                  onChange={changeventphone}
                  placeholder="Phone"
                />
                 {submited && !Data.phone ? <span className="text-warning">please enter phone number</span> :null} 
              </div>
         
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="name"
                  value={Data.msg}
                  onChange={changeventmsg}
                  rows="3" 
                >
                    {submited && !Data.msg ? <span>please msg</span> :null}  
                </textarea>
              </div>
              
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
