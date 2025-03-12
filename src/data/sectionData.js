
export const Hechizos = [

    {
        id: 1,
        nivel: "Cantrip",
        backgroundColor: '#D7EBE1',
        conjuros: [
            {
                icono: "src/assets/agarreElectrizanteIcono.svg",
                texto: "Agarre electrizante",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Cuerpo a cuerpo 1d8 relámpago",
                clases: "Hechicero y Mago",
                informacion: "Un rayo surge de tu mano para golpear a una criatura que estás intentando tocar. Haz un ataque de conjuro cuerpo a cuerpo contra el objetivo. Tienes ventaja en la tirada de ataque si el objetivo lleva una armadura de metal. *Si impactas, el objetivo recibe 1d8 puntos de daño por relámpago y no puede realizar reacciones hasta el inicio de su siguiente turno.*El daño del conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },
            {
                icono: "src/assets/burlaDanina.svg",
                texto: "Burla dañina",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "Contra Salvación 1d4 psíquico",
                clases: "Bardo",
                informacion: "Sueltas una sarta de insultos enlazados con sutiles encantamientos a una criatura que puedas ver dentro del alcance. Si el objetivo puede oírte (aunque no es necesario que te entienda), debe superar una tirada de salvación de Sabiduría para no recibir 1d4 puntos de daño psíquico y tener desventaja en la siguiente tirada de ataque que haga antes del final de su siguiente turno.*El daño de este conjuro aumenta en 1d4 cuando llegas al nivel 5 (2d4), al nivel 11 (3d4) y la nivel 17 (4d4)."
            },

            {
                icono: "src/assets/crearLlama.svg",
                texto: "Crear llama",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "10 minutos",
                ataque: "A distancia 1d8 fuego",
                clases: "Druida",
                informacion: "Una llama parpadeante aparece en tu mano mientras dura el conjuro y no te daña ni a ti ni a tu equipo. La llama emite luz brillante en un radio de 10 pies y luz tenue en 10 pies adicionales. Este conjuro termina si lo disipas como acción o si lo vuelves a lanzar.*También puedes atacar con la llama, aunque hacerlo termina el conjuro. Cuando lanzas este conjuro, o como acción más tarde en tu turno, puedes lanzarle la llama a una criatura que se encuentre a 30 pies de ti. Haz un ataque de conjuro a distancia. Si impactas, el objetivo recibe 1d8 puntos de daño por fuego.*El daño de este conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },

            {
                icono: "src/assets/descargaFuego.svg",
                texto: "Descarga de fuego",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 1d10 fuego",
                clases: "Hechicero y Mago",
                informacion: "Arrojas una mota de fuego a una criatura u objeto que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, este recibe 1d10 puntos de daño por fuego. Este conjuro incinera a cualquier objeto inflamable al que alcance y que nadie lleve puesto ni transporte.*El daño de este conjuro aumenta en 1d10 cuando subes al nivel 5, (2d10), al nivel 11 (3d10) y al nivel 17 (4d10)."
            },
        ],
        
    },

    {
        id: 2,
        nivel: "Nivel 1",
        conjuros: [

            {
                texto: "mikologddrby",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Cuerpo a cuerpo 1d8 relámpago",
                clases: "Hechicero y Mago",
                informacion: "Un rayo surge de tu mano para golpear a una criatura que estás intentando tocar. Haz un ataque de conjuro cuerpo a cuerpo contra el objetivo. Tienes ventaja en la tirada de ataque si el objetivo lleva una armadura de metal. Si impactas, el objetivo recibe 1d8 puntos de daño por relámpago y no puede realizar reacciones hasta el inicio de su siguiente turno.El daño del conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },
        ],
        backgroundColor: '#B0D7C3'

    },

   







];