import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const InputDream = (props) => {
  const [description, setDescription] = useState(localStorage.getItem('dreamInputData'));
  const { t, i18n } = useTranslation();

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
      <form className="mb-0" onSubmit={onSubmitDreamForm}>
        <textarea
          id="dreamInput"
          type="text"
          className="form-control"
          style={{"resize":"none"}}
          rows="4"
          value={description}
          placeholder={t('input.placeholder')}
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = t('input.placeholder') }
          onInput={handleInput}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          className="w-100 btn btn-lg btn-primary mb-3"
          id="rastolkovat"
          type="submit"
          disabled={props.isLoading}
        >
          {t('input.submit')}
        </button>
      </form>
    </Fragment>
  );
};

export default InputDream;
