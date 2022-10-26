require("dotenv/config");
const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const Url = require("../models/modelUrl");
const { setMaxListeners, getMaxListeners } = require("../models/modelUrl");


port=process.env.PORT

router.post("/shortlink", async (req, res) => {
    const { lUrl } = req.body;
    console.log(req.body);
    const baseUrl = `http://localhost:${port}`
    console.log(baseUrl)

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base url");
    }

    const urlCode = shortid.generate()
    console.log(urlCode)

    if (validUrl.isUri(lUrl)) {
        try {
            let newUrl = await Url.findOne({ lUrl });
            if (newUrl) {
                res.json(newUrl);
            } else {
                const sUrl = baseUrl + "/" + urlCode;

                newUrl = new Url({
                    lUrl,
                    sUrl,
                    urlCode
                });

                await newUrl.save();

                res.json(newUrl);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json("Server error");
        }
    } else {
        res.status(401).json("Invalid long newUrl");
    }
});

module.exports = router;