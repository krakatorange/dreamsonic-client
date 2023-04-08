import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
        {/* Footer Component */}
        <p className="text-small text-white text-center">
            {t('footer.copywrite')}
            <br />
            {t('footer.contact')} &mdash; {t('footer.email')}{" "}
        </p>
    </>
  );
}

export default Footer;
