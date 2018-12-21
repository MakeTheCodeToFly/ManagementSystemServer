const statusCode = {
    ERROR(code, msg, data) {
        return {
            code,
            msg,
            data
        }
    },
    SUCCESS(msg, data) {
        return {
            msg,
            data
        }
    }
}
module.exports=statusCode