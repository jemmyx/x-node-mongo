import mongoose from 'mongoose';
import { userSchema } from './model';

require('dotenv').config();

mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connection successful');
}).catch((error) => {
    console.log('DB Connecion error :', error);
});

export const User = mongoose.model('User', userSchema);