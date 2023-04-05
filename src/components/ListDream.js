import React, { Fragment, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ListDream = (props) => {
  const [dreamdata, setDreamData] = useState([]);
  let dreamcard = "";

  const getDream = async id => {
    try {
      const response = await fetch(`${process.env.REACT_APP_DOMAIN}/dream/${id}`);
      const jsonData = await response.json();

      setDreamData(jsonData);
      props.setIsLoading(false)   // Hide loading screen 
    } catch (err) {
      console.error(err.message);
      if (err.message === 'Network Error') {
        // This is a network error.
        console.log('There was a network error.');
      }
      props.setIsLoading(false);
    }
  };

  useEffect(() => {
    if(props.share_id === undefined) {
      getDream(localStorage.getItem('user_id'));
    } else {
      getDream(props.share_id);
    }
  },[]);

  const shareNavigator = (id) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Dreamsonic AI",
          text: "See my dream",
          url: `${id}`,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  function shareComponent(id) {
    return(
      <button
        id="shareMeaning"
        className=" btn btn-sm btn-outline-dark"
        type="submit"
        onClick={() => {
          shareNavigator(id);
        }}
      >
        <svg
          viewBox="0 1 24 24"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 18.5088C1 13.1679 4.90169 8.77098 9.99995 7.84598V5.51119C9.99995 3.63887 12.1534 2.58563 13.6313 3.73514L21.9742 10.224C23.1323 11.1248 23.1324 12.8752 21.9742 13.7761L13.6314 20.2649C12.1534 21.4144 10 20.3612 10 18.4888V16.5189C7.74106 16.9525 5.9625 18.1157 4.92778 19.6838C4.33222 20.5863 3.30568 20.7735 2.55965 20.5635C1.80473 20.3511 1.00011 19.6306 1 18.5088ZM12.4034 5.31385C12.2392 5.18613 11.9999 5.30315 11.9999 5.51119V9.41672C11.9999 9.55479 11.8873 9.66637 11.7493 9.67008C8.09094 9.76836 4.97774 12.0115 3.66558 15.1656C3.46812 15.6402 3.31145 16.1354 3.19984 16.6471C3.07554 17.217 3.00713 17.8072 3.00053 18.412C3.00018 18.4442 3 18.4765 3 18.5088C3.00001 18.6437 3.18418 18.6948 3.25846 18.5822C3.27467 18.5577 3.29101 18.5332 3.30747 18.5088C3.30748 18.5088 3.30746 18.5088 3.30747 18.5088C3.63446 18.0244 4.01059 17.5765 4.42994 17.168C4.71487 16.8905 5.01975 16.6313 5.34276 16.3912C7.05882 15.1158 9.28642 14.3823 11.7496 14.3357C11.8877 14.3331 12 14.4453 12 14.5834V18.4888C12 18.6969 12.2393 18.8139 12.4035 18.6862L20.7463 12.1973C20.875 12.0973 20.875 11.9028 20.7463 11.8027L12.4034 5.31385Z"
              fill="#0F1729"
            ></path>
          </g>
        </svg>
        | Share
      </button>
    );
  }

  if(dreamdata.content) {
    dreamcard = 
      <div id="meaning" className="card w-100 mb-5" style={{"width": "18rem"}}>
        <div className="card-body pb-4">
          <p className="card-text">
            {dreamdata.content}
          </p>
        </div>
        {props.share_id === undefined ?
          <CopyToClipboard text={`${process.env.REACT_APP_URL}/${localStorage.getItem('user_id')}`} >
            {shareComponent(localStorage.getItem('user_id'))}
          </CopyToClipboard>
          :
          <CopyToClipboard text={`${process.env.REACT_APP_URL}/${props.share_id}`} >
            {shareComponent(props.share_id)}
          </CopyToClipboard> 
        }
      </div>
  }

    return (
      <Fragment>
        {dreamcard}
      </Fragment>
    );
};

export default ListDream;