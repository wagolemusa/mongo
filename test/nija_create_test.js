const mocha = require("mocha")
const assert = require("assert")
const MarioChar = require('../nija/dbconnection');

// Describe test
describe("Saving  records", function(){
    // create tests
    it("Save a record to the database", function(done){
        let char = new MarioChar({
            name: "refuge"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done()
        })
    })
})