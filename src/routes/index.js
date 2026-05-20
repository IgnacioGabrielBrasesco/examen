import { Router } from 'express';
import PacienteRoutes from './PacienteRoutes.js'
// ... aqui importaríamos routers de otros modelos

/*
Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
*/
const router = Router(); 

router.use('/api/Paciente', PacienteRoutes)

export default router;