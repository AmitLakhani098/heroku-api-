import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://student:Amit@stu098@portfolio.octmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("Database connected is successful");
}).catch(() => {
    console.log("No connection found ")
});