const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  // This mean we will use Es6 promises

// mongoose.connect('mongodb+srv://refuge:djrefuge@12@cluster0.gvhev.mongodb.net/mongotube?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true }).then(result =>{ // 127.0.0.1:27017
//     console.log("Successfully connected to db!");
// }).catch(error =>{
//     console.log(error)
// })

before(done => {
    mongoose.connect('mongodb+srv://refuge:djrefuge@12@cluster0.gvhev.mongodb.net/mongotube?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once("open", () =>{
            done();
        })
        .on("error", error => {
            console.log("Your Error", error);
        });
});

beforeEach(done =>{
    mongoose.connection.collections.students.drop(() =>{
        done()
    });
});
