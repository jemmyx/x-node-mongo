// titiimport { User } from "./database/mongoose";

export default async function (fastify, opts) {
    fastify.get('/', async (req, res) => {
        return 'API - Welcome';
    });

    fastify.post('/users', async (req, res) => {
        const { name, email } = req.body;
        const newUser = new User({
            name,
            email
        });
        await newUser.save();
        return newUser;
    });

};
