import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("Database connected is successful");
}).catch(() => {
    console.log("No connection found ")
});