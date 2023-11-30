import express from 'express'

import { UserControllers } from './user.controller'

const router = express.Router()

//create student route
router.post('/create-student', UserControllers.createStudent)

//get all students route
// router.get('/', studentControllers.getAllStudents)

// get a single student route
// router.get('/:studentId', studentControllers.getSingleStudent)

export const UserRoutes = router
