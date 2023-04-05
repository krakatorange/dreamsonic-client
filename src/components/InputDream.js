import React, { Fragment, useState, useEffect } from "react";

const InputDream = (props) => {
  const [description, setDescription] = useState(localStorage.getItem('dreamInputData'));

  function handleInput() {
    localStorage.setItem('dreamInputData', document.getElementById("dreamInput").value);
  }

  const onSubmitDreamForm = async e => {
    e.preventDefault();
    props.setIsLoading(true);
    try {
      const gender = document.getElementById("flexRadioDefault1").checked ? "woman" : "man";
      const user_id = localStorage.getItem('user_id');
      const body = {
        "user_id": user_id,
        "role": "user",
        "gender": gender,
        "content": description
      };
      
      await fetch(`${process.env.REACT_APP_DOMAIN}/dream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
      props.setIsLoading(false);
    }
  };

  const getDream = async id => {
      try {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/dream/${id}`);
        const jsonData = await response.json();
  
        localStorage.setItem('dreamInputData', jsonData["dream"]);
        setDescription(jsonData["dream"]);
      } catch (err) {
        console.error(err.message);
        if (err.message === 'Network Error') {
          // This is a network error.
          console.log('There was a network error.');
      }
      }
  }

  useEffect(() => {
    if(props.share_id === undefined) {
      getDream(localStorage.getItem('user_id'));
    } else {
      getDream(props.share_id);
    }
  },[]);

  return (
    <Fragment>
      <form className="mb-3" onSubmit={onSubmitDreamForm}>
        <textarea
          id="dreamInput"
          type="text"
          className="form-control"
          style={{"resize":"none"}}
          rows="4"
          value={description}
          placeholder="Last night, I dreamt about..."
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Last night, I dreamt about..."}
          onInput={handleInput}
          onChange={e => setDescription(e.target.value)}
        />
        <br></br>
        <button
          className="w-100 btn btn-lg btn-primary mb-3"
          id="rastolkovat"
          type="submit"
          disabled={props.isLoading}
        >
          Interpret
        </button>
      </form>
    </Fragment>
  );
};

export default InputDream;
