const verifyotp = async (req, res) => {
    let { otp, session_id } = req.body;
    try {
        var url = `https://2factor.in/API/V1/${api_key}/SMS/VERIFY/${session_id}/${otp}`
        request.get(url, function (err, response, body) {
            body = JSON.parse(body)
            if (err)
                return res.json(err)
            return res.json(body.Details)
        })
    }
    catch (err) {
        return res.json(err.message)
    }
}
exports.verifyotp = verifyotp