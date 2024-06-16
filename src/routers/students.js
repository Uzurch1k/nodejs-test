// src/routers/students.js

import { Router } from 'express';

import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  upsertStudentController,
  patchStudentController,
  deleteStudentController,
} from '../controllers/students.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post(
  '/students',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController)
);

router.put(
  '/students/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController)
);

router.patch(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController)
);

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

// router.get('/:contactId', isValidId(), ctrlWrapper(createStudentController));

export default router;
