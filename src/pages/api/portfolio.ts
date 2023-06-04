import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs'
const mime = require('mime-types');


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        if (req.method === 'GET') {
            return await portfolioGet(req, res)
        } else {
            return res.status(405).json({ message: 'Method not allowed' });
        }

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const portfolioGet = (req: NextApiRequest, res: NextApiResponse) => {
    const filename = req.query.file;

    let file;

    try {
        file = fs.readFileSync(`./portfolio/${filename}`);
    } catch (e) {
        res.redirect('/');
        return;
    }

    const contentType = mime.contentType(filename);


    res.setHeader('Content-Type', contentType);
    res.send(file);
}
