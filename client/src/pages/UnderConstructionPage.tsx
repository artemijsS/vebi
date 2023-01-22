import React from 'react';
import { Helmet } from 'react-helmet';
import UnderConstructionLogo from '../assets/services/underConstructionLogo';

function UnderConstructionPage () {
    return (
        <div>
            <Helmet>
                <title>vebi | Under construction</title>
            </Helmet>
            <div className={"all-screen"}>
                <div className="center-info fl-center">
                    <UnderConstructionLogo />
                </div>
            </div>
        </div>
    )
}

export default UnderConstructionPage;
