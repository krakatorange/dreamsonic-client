import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Canvas from "../canvas";

//components
import InputDream from "../components/InputDream";
import ListDream from "../components/ListDream";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  let { share_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  if (localStorage.getItem('user_id')) {
    if (localStorage.getItem('user_id').length > 0) {
      localStorage.getItem('user_id');
    }
  } else {
    localStorage.setItem('user_id', uuidv4());
  }
  
  useEffect(() => {
    // saving the text into input before reloading the page
    if (document.getElementById("dreamInput") != null) {
      document.getElementById("dreamInput").value = localStorage.getItem('dreamInputData');
    }
  }, []);

  return (
    <div className="App">
      {isLoading &&
        <LoadingSpinner />
      }
      <main className="w-100 m-auto">
        <div className="container mt-4">
          <div className="row justify-content-md-center">
            <div className="col-md-5">
              <Header />
              <Fragment>
                  <InputDream share_id={share_id} isLoading={isLoading} setIsLoading={setIsLoading}/>
                  <ListDream share_id={share_id} isLoading={isLoading} setIsLoading={setIsLoading}/>
              </Fragment>
              <Footer />  
            </div>
          </div>
        </div>
      </main>
      <Canvas />
    </div>
  );
}

export default Home;
