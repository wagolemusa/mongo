const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connection to the database
before(done => {
    mongoose.connect('mongodb+srv://refuge:djrefuge@12@cluster0.gvhev.mongodb.net/nija?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });
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