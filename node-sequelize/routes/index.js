var express = require('express');
var router = express.Router();

const classroomCtrl = require('../controllers/classroom');
const studentCtrl = require('../controllers/student');
const lecturerCtrl = require('../controllers/lecturer');
const courseCtrl = require('../controllers/course');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Classroom router*/
router.get('/api/classroom', classroomCtrl.list);
router.get('/api/classroom/:id', classroomCtrl.getById);
router.post('/api/classroom', classroomCtrl.add);
router.put('/api/classroom/:id', classroomCtrl.update);
router.delete('/api/classroom/:id', classroomCtrl.delete);
/*Advance route and function for Association*/
router.post('/api/classroom/add_with_students', classroomCtrl.addWithStudents);

/*Student router*/
router.get('/api/student', studentCtrl.list);
router.get('/api/student/:id', studentCtrl.getById);
router.post('/api/student', studentCtrl.add);
router.put('/api/student/:id', studentCtrl.update);
router.delete('/api/student/:id', studentCtrl.delete);
/*Advance route and function for Association*/
router.post('/api/student/add_course', studentCtrl.addCourse);

/*lecturer router*/
router.get('/api/lecturer', lecturerCtrl.list);
router.get('/api/lecturer/:id', lecturerCtrl.getById);
router.post('/api/lecturer', lecturerCtrl.add);
router.put('/api/lecturer/:id', lecturerCtrl.update);
router.delete('/api/lecturer/:id', lecturerCtrl.delete);
/*Advance route and function for Association*/
router.post('/api/lecturer/add_with_course', lecturerCtrl.addWithCourse);

/*Course router*/
router.get('/api/course', courseCtrl.list);
router.get('/api/course/:id', courseCtrl.getById);
router.post('/api/course', courseCtrl.add);
router.put('/api/course/:id', courseCtrl.update);
router.delete('/api/course/:id', courseCtrl.delete);

module.exports = router;
