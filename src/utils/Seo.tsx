import React from 'react';
import { Helmet } from 'react-helmet';

interface seoTypes {
    title?: string,
    description?: string,
    keywords?: string,
    language?: string
}

const Seo = ({ title, description, keywords, language }:seoTypes) =>  {
    return (
        <Helmet>
            {language &&
                <html lang={language} />
            }
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}/>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Helmet>
    );
}

export default Seo;
