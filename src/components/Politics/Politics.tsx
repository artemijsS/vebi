import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/MainContext";


function Politics(): JSX.Element {

    const { t } = useTranslation();
    const { state, updateState } = useContext(MyContext);

    const onExitClick = () => {
        updateState({ ...state, politics: '' })
    }

    return (
        <>
            {state.politics &&
            <div className={"all-screen politics"}>
                <div className="politics-block-wrapper">
                    <div className="politics-block-second-wrapper">
                        <div className="politics-block">
                            <button onClick={onExitClick}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.21963 0.522388L0.524126 3.20896C-0.174709 3.90547 -0.174709 5.0995 0.524126 5.89552L9.70882 15.0498L0.524126 24.204C-0.174709 24.9005 -0.174709 26.0945 0.524126 26.8906L3.1198 29.4776C3.81864 30.1741 5.01664 30.1741 5.81531 29.4776L15 20.3234L24.1847 29.4776C24.8835 30.1741 26.0815 30.1741 26.8802 29.4776L29.4759 26.8906C30.1747 26.194 30.1747 25 29.4759 24.204L20.2912 14.9502L29.4759 5.79602C30.1747 5.0995 30.1747 3.90547 29.4759 3.10945L26.8802 0.522388C26.1814 -0.174129 24.9834 -0.174129 24.1847 0.522388L15 9.67662L5.81531 0.522388C5.11647 -0.174129 3.91847 -0.174129 3.21963 0.522388Z" fill="white"/>
                                </svg>
                            </button>
                            <h1>{t(`translation:politics.${state.politics}.title`)}</h1>
                            <p dangerouslySetInnerHTML={{ __html: t("translation:politics.tempText") }}/>
                            <h3>SIA "A-Level"</h3>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Politics;
