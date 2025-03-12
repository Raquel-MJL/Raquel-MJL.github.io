
export const Hechizos = [

    {
        id: 1,
        nivel: "Cantrip",
        backgroundColor: '#D7EBE1',
        conjuros: [
            {
                icono: "src/assets/cantrip/agarreElectrizanteIcono.svg",
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
                icono: "src/assets/cantrip/burlaDanina.svg",
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
                icono: "src/assets/cantrip/crearLlama.svg",
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
                icono: "src/assets/cantrip/descargaFuego.svg",
                texto: "Descarga de fuego",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 1d10 fuego",
                clases: "Hechicero y Mago",
                informacion: "Arrojas una mota de fuego a una criatura u objeto que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, este recibe 1d10 puntos de daño por fuego. Este conjuro incinera a cualquier objeto inflamable al que alcance y que nadie lleve puesto ni transporte.*El daño de este conjuro aumenta en 1d10 cuando subes al nivel 5, (2d10), al nivel 11 (3d10) y al nivel 17 (4d10)."
            },

            {
                icono: "src/assets/cantrip/descargaSobrenatural.svg",
                texto: "Descarga sobrenatural",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 1d10 fuerza",
                clases: "Brujo",
                informacion: "Un rayo de energía chispeante alcanza a una criatura que elijas dentro del alcance. Haz una tirada de ataque de conjuro a distancia contra el objetivo. Si impactas, este recibe 1d10 puntos de daño por fuerza.*El conjuro crea más de un rayo cuando subes de nivel: dos rayos en el nivel 5, tres rayos en el nivel 11 y cuatro rayos en el nivel 17. Puedes dirigir los rayos al mismo objetivo o a objetivos diferentes. Haz una tirada de ataque por cada rayo."
            },

            {
                icono: "src/assets/cantrip/garrote.svg",
                texto: "Garrote / Shillelagh",
                componentes: "V,S,M (Muérdago, trébol y bastón)",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Toque",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Druida",
                informacion: "La madera de una clava o de un bastón que estés sosteniendo queda imbuida con el poder de la naturaleza. Mientras dura el conjuro, puedes usar tu característica para lanzar conjuros en lugar de Fuerza para atacar y realizar las tiradas de daño de los ataques cuerpo a cuerpo que hagas usando esa arma, y el dado de daño es d8. El arma también se vuelve mágica, si no lo es ya. El conjuro termina si vuelves a lanzarlo o si sueltas el arma."
            },

            {
                icono: "src/assets/cantrip/guidance.svg",
                texto: "Guía",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Clérigo y Druida",
                informacion: "Tocas a una criatura voluntaria. Una vez antes de que el conjuro termine, el objetivo puede tirar 1d4 y sumar el resultado a una prueba de característica de su elección. Puede tirar el dado antes o después de hacer la prueba. Luego el conjuro termina."
            },

            {
                icono: "src/assets/cantrip/ilusionMenor.svg",
                texto: "Ilusión menor",
                componentes: "S, M (un poco de vellón)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Creas un sonido o una imagen de un objeto dentro del alcance que dura mientras lo haga el conjuro. La ilusión también termina si la disipas como acción o si vuelves a lanzar el conjuro.*Si creas un sonido, su volumen puede ser desde un susurro hasta un grito. Puede ser tu voz, la voz de otra persona, el rugido de un león, un repique de tambores o cualquier otro sonido que elijas. Puedes hacer que el sonido continúe sin cesar mientras dura el conjuro o hacer un sonido discreto en diferentes momentos.*Si creas una imagen de un objeto (como una silla, huellas de barro o un cofre pequeño), debe ser menor que un cubo de 5 pies. La imagen no puede reproducir sonidos, luces, olor ni ningún otro efecto sensorial. Interactuar físicamente con la imagen revela que es una ilusión, dado que las cosas pueden atravesarla.*Si una criatura usa su acción para examinar el sonido o la imagen, esta puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) enfrentada a la CD de tu conjuro. Si la criatura discierne la ilusión por lo que es, esta se vuelve borrosa para ella."
            },

            {
                icono: "src/assets/cantrip/impactoCertero.svg",
                texto: "Impacto certero",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 turno",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Extiendes tu mano y señalas con el dedo a un objetivo dentro del alcance. Tu magia te revela sus defensas. Durante tu siguiente turno, tienes ventaja en la primera tirada de ataque que realices contra el objetivo, siempre y cuando no haya terminado el conjuro."
            },

            {
                icono: "src/assets/cantrip/llamaSagrada.svg",
                texto: "Llama Sagrada",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación 1d8 radiante",
                clases: "Clérigo",
                informacion: "Un resplandor similar al de una llama desciende sobre una criatura que puedes ver dentro del alcance. El objetivo debe superar una tirada de salvación de Destreza para no recibir 1d8 puntos de daño radiante. El objetivo no obtiene ningún beneficio por cubrirse para esta tirada de salvación.*El daño del conjuro aumenta en 1d8 cuando subes al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },

            {
                icono: "src/assets/cantrip/lucesDanzantes.svg",
                texto: "Luces danzantes",
                componentes: "V,S,M (fósforo o corteza de avellano de bruja o una luciérnaga) ",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Creas hasta cuatro luces del tamaño de una antorcha dentro del alcance (antorchas, linternas u orbes brillantes) que flotan en el aire mientras dura el conjuro. También puedes combinar las cuatro luces en una forma brillante vagamente humanoide de tamaño Mediano. Independientemente de lo que elijas, cada luz emite una luz tenue en un radio de 10 pies.*Como acción adicional durante tu turno, puedes mover las luces hasta 60 pies a un nuevo lugar dentro del alcance. Una luz debe estar a 20 pies o menos de otra luz creada mediante este conjuro y se apaga si excede el alcance del conjuro."
            },

            {
                icono: "src/assets/cantrip/luz.svg",
                texto: "Luz",
                componentes: "V, M (una luciérnaga o musgo fosforescente)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Clérigo, Hechicero y Mago",
                informacion: "Tocas un objeto de no más de 10 pies en cualquier dimensión. Hasta que el conjuro termine, el objeto emite luz brillante en un radio de 20 pies y luz tenue en otros 20 pies adicionales. La luz puede ser del color que quieras. Cubrir completamente el objeto con algo opaco bloquea la luz. El conjuro termina si lo lanzas otra vez o si lo disipas como acción.*Si eliges como objetivo a un objeto que una criatura hostil lleva puesto o transporta, dicha criatura debe superar una tirada de salvación de Destreza para evitar el conjuro."
            },

            {
                icono: "src/assets/cantrip/manoDeMago.svg",
                texto: "Mano de Mago",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Una mano espectral aparece flotando en un punto que elijas dentro del alcance. La mano dura mientras lo haga el conjuro o hasta que la disipes como acción. La mano se desvanece si está a más de 30 pies de ti o si vuelves a lanzar este conjuro.*Puedes usar tu acción para controlar la mano. Puedes usar la mano para manipular un objeto, abrir una puerta o un recipiente cerrado, guardar o sacar un objeto de un recipiente abierto o verter el contenido de un vial. Puedes mover la mano hasta 30 pies cada vez que la usas.*La mano no puede atacar, activar objetos mágicos ni transportar más de 10 libras."
            },

            {
                icono: "src/assets/cantrip/mensaje.svg",
                texto: "Mensaje",
                componentes: "V, S, M (Fragmento de hilo de cobre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "1 turno",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Señalas con el dedo a una criatura dentro del alcance y susurras un mensaje. El objetivo (y solo el objetivo) escucha el mensaje y puede responder con un susurro que solo tú puedes escuchar.*Puedes lanzar este conjuro a través de objetos sólidos si conoces al objetivo y sabes que está al otro lado de la barrera. El silencio mágico, una piedra de 1 pie, 1 pulgada de metal común, una delgada capa de plomo o un bloque de madera de 3 pies bloquean el conjuro. El conjuro no tiene por qué seguir una línea recta y puede viajar libremente en las esquinas o aberturas."
            },

            {
                icono: "src/assets/cantrip/piedadMoribundos.svg",
                texto: "Piedad con los moribundos",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Tocas a una criatura viva que tenga 0 puntos de golpe. La criatura se estabiliza. Este conjuro no tiene efecto sobre no muertos ni constructos."
            },
            {
                icono: "src/assets/cantrip/prestidigitacion.svg",
                texto: "Prestidigitación",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo y Brujo",
                informacion: "Este conjuro es un truco de magia menor que los lanzadores principiantes usan para practicar. Produces uno de los siguientes efectos mágicos dentro del alcance:*· Creas un efecto sensorial instantáneo e inofensivo, como una lluvia de chispas, una ráfaga de viento, notas musicales suaves o un olor raro.*· Enciendes o apagas una vela, una antorcha o una pequeña hoguera instantáneamente.*· Limpias o ensucias un objeto que no sea mayor que 1 pie cúbico instantáneamente.*· Enfrías, calientas o das sabor a 1 pie cúbico de material inerte durante 1 hora.*· Haces que aparezca un color, una marca o un símbolo en un objeto o en una superficie durante una hora.*· Creas una baratija no mágica o una imagen ilusoria que cabe en tu mano y que dura hasta el final de tu siguiente turno.* Si lanzas este conjuro varias veces, puedes tener hasta tres de estos efectos no instantáneos activos al mismo tiempo, y puedes disiparlos como acción."
            },

            {
                icono: "src/assets/cantrip/rayoEscarcha.svg",
                texto: "Rayo de escarcha",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 1d8 frío",
                clases: "Hechicero y Mago",
                informacion: "Un rayo helador de luz de color azul blanquecino alcanza a una criatura dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si aciertas, el objetivo recibe 1d8 puntos de daño por frío y su velocidad se reduce en 10 pies hasta el principio de tu siguiente turno.*El daño del conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },

            {
                icono: "src/assets/cantrip/reparar.svg",
                texto: "Reparar",
                componentes: "V, S, M (dos magnetitas)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Hechicero, Mago",
                informacion: "Este conjuro repara una única rotura o rasgadura de un objeto que tocas, como una malla metálica rota, las dos mitades de una llave, una capa rasgada o una bota de vino que gotea. Mientras la rotura o rasgadura no sea mayor de 1 pie en cualquier dimensión, la remiendas y no dejas ningún rastro del daño anterior.*Este conjuro puede reparar físicamente un objeto mágico o un constructo, pero no puede restaurar su magia."
            },

            {
                icono: "src/assets/cantrip/resistencia.svg",
                texto: "Resistencia",
                componentes: "V, S, M (Capa en miniatura)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Clérigo y Druida",
                informacion: "Tocas a una criatura voluntaria. Una vez antes de que el conjuro termine, el objetivo puede tirar 1d4 y añadir el resultado a una tirada de salvación de su elección. Puede tirar el dado antes o después de hacer la tirada de salvación. Entonces, termina el conjuro."
            },

            {
                icono: "src/assets/cantrip/rociadaVenenosa.svg",
                texto: "Rociada venenosa",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación 1d12 veneno",
                clases: "Brujo, Druida, Hechicero y Mago",
                informacion: "Extiendes la mano hacia una criatura que puedas ver dentro del alcance y proyectas una nube de gas nocivo desde tu palma. La criatura debe superar una tirada de salvación de Constitución para no recibir 1d12 puntos de daño por veneno.*El daño de este conjuro aumenta en 1d12 cuando llegas al nivel 5 (2d12), al nivel 11 (3d12) y al nivel 17 (4d12)."
            },

            {
                icono: "src/assets/cantrip/saberDruidico.svg",
                texto: "Saber druídico",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Druida",
                informacion: "Al susurrarles a los espíritus de la naturaleza, creas uno de los siguientes efectos dentro del alcance:*Creas un pequeño efecto sensorial inofensivo que predice el tiempo que hará donde te encuentras durante las próximas 24 horas. El efecto puede manifestarse como un orbe dorado para los cielos despejados, una nube para la lluvia, copos de nieve cayendo para la nieve, etcétera. Este efecto persiste durante 1 ronda.*Haces que instantáneamente florezca un capullo, germine una semilla o brote una hoja.*Creas un sensor instantáneo e inofensivo, como hojas cayendo, una brisa, el sonido de un animalillo o el vago olor de una mofeta. El efecto debe caber en un cubo de 5 pies.*Apagas o enciendes inmediatamente una vela, una antorcha o una hoguera."
            },

            {
                icono: "src/assets/cantrip/salpicaduraAcida.svg",
                texto: "Salpicadura Ácida",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación 1d6 ácido",
                clases: "Hechicero y Mago",
                informacion: "Lanzas un orbe de ácido. Elige una criatura o dos criaturas dentro del alcance que se encuentren a 5 pies o menos entre sí y que puedas ver. El objetivo debe superar una tirada de salvación de Destreza para no recibir 1d6 puntos de daño por ácido.*El daño de este conjuro aumenta en 1d6 cuando alcanzas el nivel 5 (2d6), el nivel 11 (3d6) y el nivel 17 (4d6)."
            },

            {
                icono: "src/assets/cantrip/taumaturgia.svg",
                texto: "Taumaturgia",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Realizas una maravilla menor, una muestra de poder sobrenatural, dentro del alcance. Creas uno de los siguientes efectos mágicos dentro del alcance:*Tu voz retumba hasta tres veces igual de fuerte que tu tono normal durante 1 minuto.*Haces que las llamas titilen, se aviven, se debiliten o cambien de color durante 1 minuto.*Provocas temblores inofensivos en el suelo durante 1 minuto.*Creas un sonido instantáneo que se origina en un punto que elijas dentro del alcance, como el sonido sordo de un trueno, el graznido de un cuervo o unos susurros ominosos.*Haces que una puerta o una ventana se abra de repente o se cierre dando un golpe.*Alteras la apariencia de tus ojos durante 1 minuto.*Si lanzas este conjuro varias veces, puedes tener hasta tres de estos efectos de 1 minuto activos a la vez. Puedes disipar uno de estos efectos como acción."
            },

            {
                icono: "src/assets/cantrip/toqueHelado.svg",
                texto: "Toque helado",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "1 turno",
                ataque: "A distancia 1d8 necrótico",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Creas una mano esquelética y fantasmal en el espacio de una criatura que esté dentro del alcance. Haz un ataque de conjuro a distancia contra la criatura para atacarla con el frío de la tumba. Si impactas, el objetivo recibe 1d8 puntos de daño necrótico y no puede recuperar puntos de golpe hasta que no empiece tu siguiente turno. Hasta entonces, la mano se aferra al objetivo.*Si impactas a un objetivo no muerto, este también tiene desventaja en las tiradas de ataque que haga contra ti hasta que termine tu siguiente turno.*El daño de este conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },
        ],
        
    },

    {
        id: 2,
        nivel: "Nivel 1",
        backgroundColor: '#B0D7C3',
        conjuros: [

            {
                icono: "src/assets/nivel1/alarma.svg",
                texto: "Alarma",
                componentes: "V,S,M (Campanilla y alambre de plata fina)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies (area de 20)",
                duracion: "8 horas",
                ataque: "--",
                clases: "Explorador y Mago",
                informacion: "Activas una alarma contra intrusos. Elige una puerta, ventana o área dentro del alcance que no tenga más de 20 pies cúbicos. Hasta que el conjuro termine, una alarma te alerta cuando una criatura Diminuta o mayor toca o entra en el área protegida. Cuando lanzas el conjuro, puedes designar criaturas que no activarán la alarma. También eliges si la alarma es mental o audible.*Una alarma mental te alerta con un silbido en tu mente si estás a 1 milla o menos del área custodiada. Este silbido te despierta si estás durmiendo.*Una alarma audible produce el sonido de una campanilla durante 10 segundos a 60 pies o menos."
            },

            {
                icono: "src/assets/nivel1/armaduraDeMago.svg",
                texto: "Armadura de Mago",
                componentes: "V,S,M (Cuero encurtido)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Tocas a una criatura voluntaria que no lleve armadura y una fuerza protectora mágica la rodea hasta que el conjuro termina. La CA base del objetivo pasa a ser 13 + su modificador por Destreza. El conjuro termina si el objetivo se pone una armadura o si, como acción, disipas el conjuro."
            },

            {
                icono: "src/assets/nivel1/bendicion.svg",
                texto: "Bendición",
                componentes: "V,S,M (Gotas de agua bendita)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Paladín y Clérigo",
                informacion: "Bendices hasta a tres criaturas de tu elección dentro del alcance. Cuando un objetivo haga una tirada de ataque o de salvación antes de que termine el conjuro, puede tirar 1d4 y sumar el resultado a su tirada.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de nivel 2 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 1."
            },

            {
                icono: "src/assets/nivel1/buenasBayas.svg",
                texto: "Buenas bayas",
                componentes: "V,S,M (Ramito de muérdago)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toques",
                duracion: "24 horas",
                ataque: "--",
                clases: "Explorador y Druida",
                informacion: "En tu mano aparecen hasta diez bayas imbuidas con magia mientras dura el conjuro. Una criatura puede usar su acción para comerse una baya. Comerse una baya hace que se recupere 1 punto de golpe y ofrece suficiente alimento como para mantener a una criatura durante 1 día.*Las bayas pierden su poder si no se consumen en 24 horas después de lanzar el conjuro."
            },

            {
                icono: "src/assets/nivel1/caidaPluma.svg",
                texto: "Caída de pluma",
                componentes: "V,M (Pluma pequeña o plumón)",
                tiempoDeLanzamiento: "1 reacción cuando tú o una criatura caéis",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Elige hasta cinco criaturas que estén cayendo dentro del alcance. Su velocidad de descenso se reduce hasta 60 pies por ronda hasta que el conjuro termine. Si la criatura aterriza antes de que termine el conjuro, no recibe daño a causa de la caída, puede aterrizar de pie y el conjuro termina para ella."
            },

            {
                icono: "src/assets/nivel1/crearDestruirAgua.svg",
                texto: "Crear o destruir agua",
                componentes: "V,S,M (Gota de agua para crear o puñado de arena para destruir)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Druida",
                informacion: "Crear agua. Creas hasta 10 galones de agua limpia en un recipiente abierto dentro del alcance. De manera alternativa, el agua cae como lluvia en un cubo de 30 pies de lado dentro del alcance y extingue las llamas expuestas que haya en el área.*Destruir agua. Destruyes hasta 10 galones de agua en un recipiente abierto dentro del área. De manera alternativa, también puedes destruir una niebla en un cubo de 30 pies de lado dentro del alcance.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, creas o destruyes 10 galones de agua adicionales, o el tamaño del cubo aumenta en 5 pies por cada nivel por encima de 1."
            },

            {
                icono: "src/assets/nivel1/curarHeridas.svg",
                texto: "Curar heridas",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Explorador, Paladín",
                informacion: "Una criatura que tocas recupera un número de puntos de golpe igual a 1d8 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto ni en no muertos ni en constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, la curación aumentan 1d8 por cada nivel por encima del nivel 1."
            },

            {
                icono: "src/assets/nivel1/detectarBienMal.svg",
                texto: "Detectar el bien y el mal",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Clérigo, Paladín",
                informacion: "Mientras dura el conjuro, sabes si hay alguna aberración, celestial, elemental, fatal, infernal o no muerto a 30 pies o menos de ti, así como dónde se encuentra. Del mismo modo, sabes si hay algún lugar u objeto a 30 pies o menos de ti que haya sido consagrado o profanado.*El conjuro puede penetrar la mayoría de las barreras, pero no a partir de 1 pie de piedra, 1 pulgada de metal común, una lámina de plomo o 3 pies de madera o tierra."
            },

            {
                icono: "src/assets/nivel1/detectarMagia.svg",
                texto: "Detectar magia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Explorador, Hechicero, Mago y Paladín",
                informacion: "Mientras dura el conjuro, sientes la presencia de la magia hasta a 30 pies de ti. Si sientes alguna magia, puedes usar tu acción para ver una débil aura alrededor de cualquier criatura u objeto visible dentro del área que la tenga, y puedes averiguar de qué escuela es, si la tiene.*El conjuro puede penetrar la mayoría de las barreras, pero no a partir de 1 pie de piedra, 1 pulgada de metal común, una lámina de plomo o 3 pies de madera o tierra."
            },

            {
                icono: "src/assets/nivel1/detectarVenenoEnfermedad.svg",
                texto: "Detectar venenos y enfermedades",
                componentes: "V,S,M (Una hoja de tejo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador y Paladín",
                informacion: "Mientras dura el conjuro, puedes sentir la presencia y la localización de veneno, criaturas venenosas y enfermedades a 30 pies de ti o menos. También puedes identificar el tipo de veneno, criatura venenosa o enfermedad en cada caso.*El conjuro puede penetrar la mayoría de las barreras, pero no a partir de 1 pie de piedra, 1 pulgada de metal común, una lámina de plomo o 3 pies de madera o tierra."
            },

            {
                icono: "src/assets/nivel1/discoFlotante.svg",
                texto: "Disco flotante de Tenser",
                componentes: "V,S,M (Una gota de mercurio)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Este conjuro crea un plano de fuerza circular y horizontal, de 3 pies de diámetro y 1 pulgada de ancho, que flota 3 pies en un espacio sin ocupar de tu elección que puedas ver dentro del alcance. El disco permanece ahí mientras dura el conjuro y puede aguantar hasta 500 libras. Si se coloca más peso sobre él, el conjuro termina, y todo lo que haya encima del disco cae al suelo.*El disco permanece inmóvil mientras estés a 20 pies o menos de él. Si te alejas más, el disco te sigue para permanecer a 20 pies de ti. Puede moverse por terreno desigual, subir o bajar escaleras o pendientes y similares, pero no puede salvar un desnivel de 10 pies o más. Por ejemplo, el disco no puede bajar a un hoyo de 10 pies de profundidad ni tampoco salir de él si se creó en el fondo del mismo.*Si te alejas más de 100 pies del disco (normalmente porque este no es capaz de rodear un obstáculo para seguirte), el conjuro termina."
            },

        ],
        

    },

   







];