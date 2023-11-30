import express from 'express'
import { studentControllers } from './student.controller'

const router = express.Router()

//create student route
// router.post("/create-student", User.createStudent);

//get all students route
router.get('/', studentControllers.getAllStudents)

// get a single student route
router.get('/:studentId', studentControllers.getSingleStudent)

export const studentRoutes = router
