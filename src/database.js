const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOTS, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOTS}/${NOTES_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));