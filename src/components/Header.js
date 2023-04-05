import React from 'react';

const Header = () => {
  return (
    <>
        {/* Header Component */}
        <div className="text-center">
            <img
                className=""
                src="img/logo2.svg"
                alt=""
                width="auto"
                height="157"
            />
        </div>

        {/* Title and Value Prop */}
        <h1 className="display-2 text-white text-center" style={{ fontWeight: 700}}>
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
    </>
  );
}

export default Header;
