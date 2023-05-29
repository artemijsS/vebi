import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        if (req.method === 'GET') {
            return await pdfGet(req, res)
        } else {
            return res.status(405).json({ message: 'Method not allowed' });
        }

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const pdfGet = (req: NextApiRequest, res: NextApiResponse) => {
    const filename = req.query.file;
    const language = req.query.language as string || "en";
    if (!filename || !["en","ru","lv"].includes(language)) {
        res.redirect('/');
        return;
    }

    let pdf;

    try {
        pdf = fs.readFileSync(`./pdfs/${language}/${filename}.pdf`);
    } catch (e) {
        res.redirect('/');
        return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
}
