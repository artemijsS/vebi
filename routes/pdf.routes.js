const fs = require('fs');
const {Router} = require('express');

const router = Router();

// api/pdf
router.get('', async (req, res) => {

    try {
        const filename = req.query.file;
        const language = req.query.language || "en";

        if (!filename || !["en","ru","lv"].includes(language)) {
            res.redirect('/');
            return;
        }

        let pdf;

        try {
            pdf = fs.readFileSync(`./pdfs/${language}/${filename}.pdf`);
        } catch {
            res.redirect('/');
            return;
        }

        res.contentType("application/pdf");
        res.send(pdf);
    } catch (e) {
        res.status(500).json({ message: "Error" })
    }
})

module.exports = router;
