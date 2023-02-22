import React, { useEffect } from 'react';
import Seo from '../utils/Seo';

interface RedirectPageProps {
    page: string
}

function RedirectPage({ page }: RedirectPageProps): JSX.Element {

    useEffect(() => {
        window.location.replace(page);
    }, [page])

    return (
        <div>
            <Seo title={"VEBI"} />
        </div>
    )
}

export default RedirectPage;
