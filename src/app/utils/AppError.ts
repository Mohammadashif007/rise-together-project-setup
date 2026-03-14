class AppError extends Error {
    public statusCode: number;
    constructor(statusCode: number, message: string, stack = "") {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        } else {
            console.log("error hoise");
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default AppError;
