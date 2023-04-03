import React, { Fragment, useEffect } from "react";
// import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';
import Canvas from "./canvas";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  if (localStorage.getItem('user_id')) {
    if (localStorage.getItem('user_id').length > 0) {
      localStorage.getItem('user_id');
    }
  } else {
    localStorage.setItem('user_id', uuidv4());
  }

  // cookies
  // const cookies = new Cookies();
  // if (cookies.get("user_id")) {
  //   user_id = cookies.get("user_id");
  // } else {
  //   user_id = cookies.set('user_id', uuidv4(), { path: '/' }); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  // }
  
  useEffect(() => {
    // saving the text into input before reloading the page
    if (document.getElementById("dreamInput") != null) {
      document.getElementById("dreamInput").value = localStorage.getItem('dreamInputData');
    }
  }, []);

  return (
    <div className="App">
      <main className="w-100 m-auto">
        <div className="container mt-4">
          <div className="row justify-content-md-center">
            <div className="col-md-5">
                <div className="text-center">
                  <img
                    className=""
                    src="img/logo2.svg"
                    alt=""
                    width="auto"
                    height="157"
                  />
                </div>

                {/* Title and Value Prop Component */}
                <h1
                  className="display-2 text-white text-center"
                  style={{ fontWeight: 700}}
                >
                  Dreamsonic
                </h1>
                <h2 className="h3 fw-normal mb-4 text-white text-center">
                  Artificial intelligence for dream interpretation
                </h2>

                {/* Radio Buttons Component */}
                <div className="mb-3 text-white text-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Woman
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Man
                    </label>
                  </div>
                  <br />
                </div>

                <Fragment>
                    <InputTodo />
                    <ListTodos />
                </Fragment>
              
              {/* Footer Component */}
              <p className="text-small text-white text-center">
                © 2023 «Dreamsonic»
                <br />
                Contact &mdash; hello@dreamsonic.ai{" "}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Canvas Component */}
      <Canvas />
    </div>
  );
}

export default App;
