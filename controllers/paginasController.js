import { Viaje } from "../models/Viajes.js";
import { Testimoniales } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    // Consulta 3 viajes
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimoniales.findAll({ limit: 3 }));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (e) {
        console.log(e)
    }
}

const paginaNosotros = (req, res) => {
    const viajes = 'viaje a Alemania';

    res.render('nosotros', {
        viajes,
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar a la BBDD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    // Buscar testimoniales
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (e) {
        console.log(e);
    }
}

const paginaContacto = (req, res) => {
    res.send('Contacto');
}

/**
 * Muestra un viaje por su slug
 * @var viaje
 * @param req
 * @param res
 */
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({ where: { slug } })
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (e) {
        console.log(e);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje
}