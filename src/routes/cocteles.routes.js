import {Router} from 'express';
import { getCocteles, createCocteles, updateCocteles,deleteCocteles  } from "../controllers/cocteles.controller.js";

const router = Router();

router.get('/cocteles', getCocteles )
router.post('/cocteles', createCocteles )
router.put('/cocteles', updateCocteles)
router.delete('/cocteles', deleteCocteles)

export default router;
