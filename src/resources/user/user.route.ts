import { Router } from 'express';

import controller, { me } from './user.controller';

const router = Router();


router
.route('/')
.get(controller.getMany)
.post(controller.createOne)

router
  .route('/me')
  .get(me);

router
  .route('/:id')
  .get(controller.getOneById)
  .patch(controller.updateOne)
  .delete(controller.removeOne)

export default router;