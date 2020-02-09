import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/UserRoutes';
import accountRoutes from './server/routes/AccountRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/account', accountRoutes);

// when a random route is typed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this Energy APP API.',
}));

app.listen(port, () => {
    console.log(`Server Energy APP API is running on PORT ${port}`);
});

export default app;