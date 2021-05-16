module.exports = app => {
    app.post("/api/login", async(req, res) => {
        console.log(req.body)
        res.json({ status: 'ok' })
    })
}