require('dotenv').config();

const config = {
    secret: '23rfewwef2f3deASFf9iwgefjqifdWA',
    env: process.env.MONGODB_URI,
    port: 3300,
    db: {
        /*dbUrl: 'mongodb://127.0.0.1:27017',*/
        dbUrl: process.env.MONGODB_URI,
        dbName: 'freelancers',
        dbHost: 'localhost',
        dbPort: 27017,
    },
    orderStatuses: {
        new: 'new',
        confirmed: 'confirmed',
        success: 'success',
        canceled: 'canceled',
    },
    freelancerLevels: {
        junior: 'junior',
        middle: 'middle',
        senior: 'senior',
    },
    freelancerAvatarsPath: '/images/freelancers/avatars/',
    defaultFreelancerAvatar: '/images/freelancers/avatar-stub.png',
};

module.exports = config;