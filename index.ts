import app from './src/app';
let server: any;

const config = {
    port: process.env.PORT || 3000,
};

server = app.listen(config.port, () => {
    console.info(`Listening to port ${config.port}`);
});
const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error: any) => {
    console.error(error);
    exitHandler();
};
