import 'reflect-metadata';
import 'express-async-errors';
import '@shared/infra/typeorm';
import '@shared/container';
import AppError from '@shared/errors/AppError';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import uploadConfig from '@config/upload';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started at https://localhost:3333');
});
