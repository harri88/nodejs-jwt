import UserService from '../services/UserService';
import Util from '../utils/Utils';

const config = require('../src/config/config');

const jwt = require('jsonwebtoken');
// const jwt = require('express-jwt');

const util = new Util();

class AccountController {

    static async register(req, res) {
        // if (!req.body.title || !req.body.price || !req.body.description) {
        //     util.setError(400, 'Please provide complete details');
        //     return util.send(res);
        // }
        const newUser = req.body;

        try {
            const createdUser = await UserService.addUser(newUser);
            util.setSuccess(201, 'User Added!', createdUser);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }


    static async login(req, res) {
        // if (!req.body.title || !req.body.price || !req.body.description) {
        //     util.setError(400, 'Please provide complete details');
        //     return util.send(res);
        // }
        const newUser = req.body;
        try {

            const createdUser = await UserService.userLogin(newUser);
            
            const jwtPayload = { phone_number: createdUser.phone_number };
            const jwtSecret = config.development.jwt.jwtSecret;
            const jwtSignOptions =
            {
                expiresIn: config.development.jwt.jwtDuration
            };
            var token = jwt.sign(jwtPayload, jwtSecret, jwtSignOptions);


            createdUser.access_token = token;
            const data = createdUser.dataValues;
            data.access_token = token;

            util.setSuccess(201, 'User login successfully!', data);
            return util.send(res);
        } catch (error) {
            console.log(JSON.stringify(error));
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async forgotPassword(req, res) {
        // if (!req.body.title || !req.body.price || !req.body.description) {
        //     util.setError(400, 'Please provide complete details');
        //     return util.send(res);
        // }
        const newUser = req.body;

        try {
            const createdUser = await UserService.addUser(newUser);
            util.setSuccess(201, 'User Added!', createdUser);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}

export default AccountController;