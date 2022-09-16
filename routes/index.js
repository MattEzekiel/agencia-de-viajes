import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje
} from "../controllers/paginasController.js";
import {
    guardarTestimonial
} from "../controllers/testimonialController.js";

const router = express.Router();
/**
 * req: lo que enviamos. res: lo que express responde
 */

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/testimoniales", paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get("/contacto", paginaContacto);

export default router;