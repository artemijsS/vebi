import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface RedirectPageProps {
    page: string
}

function RedirectPage({ page }: RedirectPageProps): JSX.Element {

    useEffect(() => {
        window.location.replace(page);
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Helmet>
                <title>VEBI</title>
            </Helmet>
        </div>
    )
}

export default RedirectPage;
