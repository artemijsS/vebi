import React from "react";

export default function Logo() {

    const onLogoClick = () => {
        window.scrollTo(0,0);
    }

    return (
        <svg onClick={onLogoClick} width="143" height="71" viewBox="0 0 143 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="143" height="71" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_2302_1490" transform="matrix(0.00409836 0 0 0.00825444 0 -0.00352113)"/>
                </pattern>
                <image id="image0_2302_1490" width="244" height="122" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}
