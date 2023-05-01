import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const InputDream = (props) => {
  const [description, setDescription] = useState(localStorage.getItem('dreamInputData'));
  const { t } = useTranslation();

  function handleInput() {
    localStorage.setItem('dreamInputData', document.getElementById("dreamInput").value);
  }
  
  const onSubmitDreamForm = async e => {
    e.preventDefault();
    props.setIsLoading(true);
    try {
      const user_id = localStorage.getItem('user_id');
      
      const body = {
        "user_id": user_id,
        "role": "user",
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

  const getUserDream = async id => {
      try {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/dream/${id}`);
        const jsonData = await response.json();
  
        localStorage.setItem('dreamInputData', jsonData["dream"]);
        setDescription(jsonData["dream"]);
        props.setDreamId(jsonData["dream_id"]);
      } catch (err) {
        console.error(err.message);
        if (err.message === 'Network Error') {
          // This is a network error.
          console.log('There was a network error.');
      }
      }
  }

  const getShareDream = async id => {
    try {
      const response = await fetch(`${process.env.REACT_APP_DOMAIN}/share_dream/${id}`);
      const jsonData = await response.json();

      localStorage.setItem('dreamInputData', jsonData["dream"]);
      setDescription(jsonData["dream"]);
      props.setDreamId(jsonData["dream_id"]);
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
      getUserDream(localStorage.getItem('user_id'));
    } else {
      getShareDream(props.share_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        {/* Radio Buttons Component */}
        {/* <div className="mb-3 text-white text-center">
            <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                {t('header.woman')}
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
                {t('header.man')}
            </label>
            </div>
            <br />
        </div> */}

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
