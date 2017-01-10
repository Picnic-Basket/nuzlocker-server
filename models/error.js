function Error() {

    this.connection = function (res, code) {
        if (code) {
            return res.status(500).send({ status: 500, code: code })
        } else {
            return res.status(500).send({ status: 500, code: '1001' })
        }
    }

    this.sql = function (res, code) {
        if (code) {
            return res.status(500).send({ status: 500, code: code })
        } else {
            return res.status(500).send({ status: 500, code: '2000' })
        }
    }

    this.pdf = function (res, code) {
        if (code) {
            return res.status(500).send({ status: 500, code: code })
        } else {
            return res.status(500).send({ status: 500, code: '3000' })
        }
    }
}

module.exports = new Error();