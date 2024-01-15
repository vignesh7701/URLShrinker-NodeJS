const shortid = require('shortid');
const URL = require('../models/url')
async function handleGenerateNewURL(req, res) { 
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortId = shortid(8)
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortId });

    async function handleGetAnalytics(req,res){
        const shortId = req.pramas.shortId;
        const result = await URL.findOn({ shortId });
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    }
}

module.exports = {
    handleGenerateNewURL,
}