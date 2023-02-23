import {Router} from 'express'
import { accountSearch } from '../Controller/cvConsulta.controller.js';

const router = Router()

router.post('/', accountSearch);

export default router;