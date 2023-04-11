import React from "react";
import { useTranslation } from 'react-i18next';
import "../spinner.css";

export default function LoadingSpinner() {
    const { t } = useTranslation();
    
    return (
      <div className="spinner-container">
        <div className="loading-spinner">
          <div className="loading-overlay">
              {/* <div class="loader"><span class="pulsate ">Анализируем ваш сон</span></div> */}
            <div className="loader">
              <span className="pulsate ">
                 {t('home.spinner')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}