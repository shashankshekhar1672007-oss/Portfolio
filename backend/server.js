require('dotenv').config();
const app = require('./src/app.js');
const connectDB = require('./src/db/db.js');

const PORT = process.env.PORT || 4000;

// Connect to MongoDB and then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Portfolio server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Database connection failure:", err);
});
