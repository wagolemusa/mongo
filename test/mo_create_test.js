const Student = require('../app/student')
const assert = require('assert');

// Create user test
describe("Create tests", () => {
    it("create a user in DB", ()=> {
        // assert(true);
        const sam = new Student({name: "sam"});
        sam
        .save()
        .then(() =>{
            assert(!sam.isNew);
        })
        .catch(() => {
            console.log("error")
        });

    });
});

// Read test
describe("Read Test", ()=>{
    let reader;
    beforeEach((done) =>{
        reader = Student({name: "Reader"})
        reader.save()
         .then(() =>{
             done(); 
         })
    })
    it("Read a user: Reader", () =>{
        Student.find({name: "Reader"})
            .then((students) => {
                assert(render._id.toString() === students[0]._id.toString());
                done()
            })
        
    })
})
// All delete user
describe("Delete Tests", () =>{
    let deleter;
    beforeEach(done =>{
        deleter = new Student({ name: "Deleter" });
        deleter.save().then(() => done());

    })
    it("A delete test deleter", (done)=>{
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({ name: "Deleter" }))
            .then(student => {
                assert(student === null);
                done();
            })
    })

})

describe('update  Test', ()=>{
    let updater;
    beforeEach((done)=>{
        updater = new Student({name: 'Updater'})
        updater.save()
            .then(() => done());
    })
    it('Set n save test', ()=>{
        updater.set('name', "UpUpdater");
        updater.save()
         .then(() => Student.find({}))
         .then(student => {
             assert(student[0].name !== 'Updater')
         })
    })
})