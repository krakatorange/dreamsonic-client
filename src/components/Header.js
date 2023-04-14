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
        </>
    );
}

export default Header;
