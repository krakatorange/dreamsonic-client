import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

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
                {t('header.title')}
            </h1>
            <h2 className="h3 fw-normal mb-4 text-white text-center">
                {t('header.proposition')}
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
            </div>
        </>
    );
}

export default Header;
