import express from 'express';
import Student from '../models/student_model.js';
var router = express.Router();

router.get("/", (req, res) => {
    console.log("API TEST ");

    res.send("Hello world from Student routes");
});

router.post("/students", async (req, res) => {
    try{
        const student = new Student(req.body);
        const createStudent = await student.save();
        res.status(201).send(createStudent);
    }catch(e) {
        res.status(400).send(`Something went wrong ${e}`);
    }
})


router.get("/students", async (req, res) => {
    try{
         const studentsData = await   Student.find();
         res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})


router.get("/students/:id", async (req, res) => {
         try{
            const _id = await req.params.id;
            //  Student.findById({_id : _id})
             const  studentData =  await Student.findById(_id);
             if(!studentData){
                return res.status(500).send(); 
             }else{
                return res.status(200).send(studentData);
             }
         }catch(e){
             res.send(e);
         }
});


router.patch("/students/:id", async (req, res) => {
    try{
       const _id = req.params.id;
        const  updateStudents =  await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
});

router.delete("/students/:id", async (req, res) => {
    try{
        const  deleteStudents =  await Student.findByIdAndDelete(req.params.id);
        if(req.params.id){
            return res.status(404).send();
        }
        res.send(deleteStudents);
    }catch(e){
        res.status(500).send(e);
    }
});
// module.exports = router;
export default router;