import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState(localStorage.getItem('dreamInputData'));

  // const sendDreamInput = e => {
  //   // get uid
  //   const conditions = ["user_id", "uuid", "uid", "userid"];
  //   let uid = ''
  //   console.log(document.cookie)
  //   const ary = document.cookie.split(";");

  //   for (let i = 0; i < ary.length; i++) {
  //     if (conditions.some(el => ary[i].includes(el))) {
  //       uid = ary[i].split("=")[1]
  //     }
  //   }

  //   let data = {
  //     "user_id": uid,
  //     "role": "user",
  //     "gender": "man",
  //     "content": localStorage.getItem('fieldData')
  //   }

  //   console.log(data)

  //   // fetch(process.env.REACT_APP_AWS_APIGATEWAY_LAMBDA_CHATGPT_ENDPOINT, {
  //   //   method: "POST", // or 'PUT'
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     "x-api-key": process.env.AWS_LAMBDA_CHATGPT_API_KEY
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // })
  // };

  // // const onSubmitForm = async e => {
  // //   e.preventDefault();
  // //   try {
  // //     const body = { description };
  // //     const response = await fetch("http://localhost:5001/todos", {
  // //       method: "POST",
  // //       headers: { "Content-Type": "application/json" },
  // //       body: JSON.stringify(body)
  // //     });

  // //     window.location = "/";
  // //   } catch (err) {
  // //     console.error(err.message);
  // //   }
  // // };

  function handleInput() {
    localStorage.setItem('dreamInputData', document.getElementById("dreamInput").value);
  }

  const onSubmitDreamForm = async e => {
    e.preventDefault();
    try {
      const gender = document.getElementById("flexRadioDefault1").checked ? "woman" : "man";
      const user_id = localStorage.getItem('user_id');
      const body = {
        "user_id": user_id,
        "role": "user",
        "gender": gender,
        "content": description
      };

      console.log(body);
      
      await fetch(`http://${process.env.REACT_APP_DOMAIN}:5001/dream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

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
        >
          Interpret
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
