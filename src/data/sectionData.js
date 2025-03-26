export const Hechizos = [

    {
        id: 1,
        nivel: "Cantrip",
        backgroundColor: '#dbdbdb',
        conjuros: [
            {
                icono: "../assets/cantrip/agarreElectrizanteIcono.svg",
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
                icono: "../assets/cantrip/burlaDanina.svg",
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
                icono: "../assets/cantrip/crearLlama.svg",
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
                icono: "../assets/cantrip/descargaFuego.svg",
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
                icono: "../assets/cantrip/descargaSobrenatural.svg",
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
                icono: "../assets/cantrip/garrote.svg",
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
                icono: "../assets/cantrip/guidance.svg",
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
                icono: "../assets/cantrip/ilusionMenor.svg",
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
                icono: "../assets/cantrip/impactoCertero.svg",
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
                icono: "../assets/cantrip/llamaSagrada.svg",
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
                icono: "../assets/cantrip/lucesDanzantes.svg",
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
                icono: "../assets/cantrip/luz.svg",
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
                icono: "../assets/cantrip/manoDeMago.svg",
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
                icono: "../assets/cantrip/mensaje.svg",
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
                icono: "../assets/cantrip/piedadMoribundos.svg",
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
                icono: "../assets/cantrip/prestidigitacion.svg",
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
                icono: "../assets/cantrip/rayoEscarcha.svg",
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
                icono: "../assets/cantrip/reparar.svg",
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
                icono: "../assets/cantrip/resistencia.svg",
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
                icono: "../assets/cantrip/rociadaVenenosa.svg",
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
                icono: "../assets/cantrip/saberDruidico.svg",
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
                icono: "../assets/cantrip/salpicaduraAcida.svg",
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
                icono: "../assets/cantrip/taumaturgia.svg",
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
                icono: "../assets/cantrip/toqueHelado.svg",
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
        backgroundColor: '#9FB8AC',
        conjuros: [

            {
                icono: "../assets/nivel1/alarma.svg",
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
                icono: "../assets/nivel1/armaduraDeMago.svg",
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
                icono: "../assets/nivel1/bendicion.svg",
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
                icono: "../assets/nivel1/buenasBayas.svg",
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
                icono: "../assets/nivel1/caidaPluma.svg",
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
                icono: "../assets/nivel1/crearDestruirAgua.svg",
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
                icono: "../assets/nivel1/curarHeridas.svg",
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
                icono: "../assets/nivel1/detectarBienMal.svg",
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
                icono: "../assets/nivel1/detectarMagia.svg",
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
                icono: "../assets/nivel1/detectarVenenoEnfermedad.svg",
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
                icono: "../assets/nivel1/discoFlotante.svg",
                texto: "Disco flotante de Tenser",
                componentes: "V,S,M (Una gota de mercurio)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Este conjuro crea un plano de fuerza circular y horizontal, de 3 pies de diámetro y 1 pulgada de ancho, que flota 3 pies en un espacio sin ocupar de tu elección que puedas ver dentro del alcance. El disco permanece ahí mientras dura el conjuro y puede aguantar hasta 500 libras. Si se coloca más peso sobre él, el conjuro termina, y todo lo que haya encima del disco cae al suelo.*El disco permanece inmóvil mientras estés a 20 pies o menos de él. Si te alejas más, el disco te sigue para permanecer a 20 pies de ti. Puede moverse por terreno desigual, subir o bajar escaleras o pendientes y similares, pero no puede salvar un desnivel de 10 pies o más. Por ejemplo, el disco no puede bajar a un hoyo de 10 pies de profundidad ni tampoco salir de él si se creó en el fondo del mismo.*Si te alejas más de 100 pies del disco (normalmente porque este no es capaz de rodear un obstáculo para seguirte), el conjuro termina."
            },

            {
                icono: "../assets/nivel1/disfrazarse.svg",
                texto: "Disfrazarse",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Haces que tu apariencia (así como la de tu ropa, armadura, armas y otras pertenencias que lleves) sea diferente hasta que termine el conjuro o hasta que uses tu acción para disiparlo. Puedes parecer 1 pie más alto o más bajo y delgado, gordo o normal. No puedes cambiar tu tipo de cuerpo, así que debes adoptar una forma que tenga la misma disposición básica de miembros. Si no, el alcance de la ilusión depende de ti.*Los cambios que provoca este conjuro no aguantan una inspección física. Por ejemplo, si usas este conjuro para añadir un sombrero a tu atuendo, los objetos traspasan el sombrero y cualquiera que lo toque no sentirá nada o sentirá tu cabeza y tu pelo. Si usas este conjuro para parecer más delgado de lo que eres, la mano de alguien que estirara el brazo para tocarte se chocará contra ti aunque aparentemente todavía esté en el aire.*Para distinguir si estás disfrazado, una criatura puede usar su acción para inspeccionar tu apariencia y hacer una prueba de Inteligencia (Investigar) enfrentada a la CD de la salvación de tu conjuro."
            },

            {
                icono: "../assets/nivel1/dormir.svg",
                texto: "Dormir",
                componentes: "V,S,M (Pizca de arena fina, pétalos de rosa y un grillo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies (20 de área)",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Este conjuro sume a las criaturas en un sueño ligero. Tira 5d8: el resultado es el número de puntos de golpe de criaturas a los que puede afectar este conjuro. Las criaturas que se encuentren a 20 pies o menos de un punto que elijas dentro del alcance se ven afectadas en orden ascendente de sus puntos de golpe (ignorando a las criaturas inconscientes).*Empezando por la criatura que tenga el menor número de puntos de golpe actuales, cada criatura afectada por este conjuro cae inconsciente hasta que el conjuro termina, hasta que reciba daño o hasta que alguien la zarandee para que se despierte. Resta los puntos de golpe de cada criatura al total antes de pasar a la siguiente criatura con menos puntos de golpe. Los puntos de golpe de una criatura deben ser iguales o menores que el total que quede para que esa criatura resulte afectada.*Los no muertos y las criaturas inmunes a ser hechizadas no se ven afectados por este conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, tira 2d8 adicionales por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/encantarAnimal.svg",
                texto: "Encantar animal",
                componentes: "V,S,M (Comida)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pìes",
                duracion: "24 horas",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Este conjuro sume a las criaturas en un sueño ligero. Tira 5d8: el resultado es el número de puntos de golpe de criaturas a los que puede afectar este conjuro. Las criaturas que se encuentren a 20 pies o menos de un punto que elijas dentro del alcance se ven afectadas en orden ascendente de sus puntos de golpe (ignorando a las criaturas inconscientes).*Empezando por la criatura que tenga el menor número de puntos de golpe actuales, cada criatura afectada por este conjuro cae inconsciente hasta que el conjuro termina, hasta que reciba daño o hasta que alguien la zarandee para que se despierte. Resta los puntos de golpe de cada criatura al total antes de pasar a la siguiente criatura con menos puntos de golpe. Los puntos de golpe de una criatura deben ser iguales o menores que el total que quede para que esa criatura resulte afectada.*Los no muertos y las criaturas inmunes a ser hechizadas no se ven afectados por este conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, tira 2d8 adicionales por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/encontrarFamiliar.svg",
                texto: "Encontrar familiar",
                componentes: "V,S,M (Carbón vegetal, inciendo ,hierbas 10po)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "10 pìes",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Mago",
                informacion: "Consigues el servicio de un familiar, un espíritu con la forma animal que elijas: araña, búho, cangrejo, caballito de mar, comadreja, cuervo, gato, halcón, lagarto, murciélago, pulpo, pez (piraña), rata, rana (sapo) o serpiente venenosa. El familiar aparece en un lugar sin ocupar dentro del alcance y tiene las estadísticas de la forma elegida, aunque sea un celestial, una fata o un infernal (según decidas) en lugar de una bestia.*El familiar actúa de manera independiente, pero siempre obedece tus órdenes. En combate, tira su propia iniciativa y tiene sus propios turnos. No puede atacar, pero puede realizar otras acciones con normalidad. Cuando sus puntos de golpe se reducen a 0, desaparece sin dejar ninguna forma física tras de sí. Aparece de nuevo cuando vuelvas a lanzar este conjuro.*Mientras el familiar esté a 100 pies de ti o menos, puedes comunicarte con él telepáticamente. Además, como acción, puedes ver a través de sus ojos y escuchar a través de sus oídos hasta el principio de tu siguiente turno, lo que hace que consigas los beneficios de los sentidos especiales que tenga el familiar. Durante este tiempo, estás sordo y ciego respecto a tus propios sentidos.*Como acción, puedes desconvocar temporalmente al familiar. Desparece en una dimensión de bolsillo, donde espera hasta que lo convocas. Como acción, puedes hacer que reaparezca en un lugar sin ocupar a 30 pies de ti o menos. También puedes desconvocarlo para siempre.*No puedes tener más de un familiar a la vez. Si lanzas este conjuro mientras ya tienes un familiar, haces que adopte una nueva forma. Elige una de las formas de la lista anterior y el familiar se transformará en la criatura elegida.*Finalmente, cuando lanzas un conjuro con un alcance de toque, el familiar puede transmitirlo como si lo lanzara él. El familiar debe estar a 100 pies de ti o menos y usar su reacción. Si el conjuro requiere hacer una tirada de ataque, usas tu modificador de ataque."
            },

            {
                icono: "../assets/nivel1/enmaranar.svg",
                texto: "Enmarañar",
                componentes: "V,S,",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Druida",
                informacion: "Maleza y enredaderas surgen retorciéndose del suelo en un cuadrado de 20 pies que empieza en un punto de tu elección dentro del alcance. Mientras dura el conjuro, estas plantas convierten el suelo del área en un terreno difícil.*Una criatura que se encuentre en el área cuando lanzas el conjuro debe superar una tirada de salvación de Fuerza para no quedar apresada por las enredaderas hasta que el conjuro termine. Una criatura apresada por las plantas puede usar su acción para realizar una prueba de Fuerza enfrentada a la CD de salvación del conjuro. Si tiene éxito, se libera.*Cuando el conjuro termina, las plantas conjuradas se marchitan."
            },

            {
                icono: "../assets/nivel1/entenderIdioma.svg",
                texto: "Entender idiomas",
                componentes: "V,S,M (Hollin y sal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, entiendes el significado literal de cualquier idioma que escuches. También entiendes cualquier idioma escrito que veas, pero debes estar tocando la superficie en la que las palabras están escritas. Tardas alrededor de 1 minuto en leer una página de texto.*Este conjuro no descodifica mensajes secretos en un texto o en un glifo, como un sigilo arcano, que no estén en el lenguaje escrito."
            },

            {
                icono: "../assets/nivel1/escudo.svg",
                texto: "Escudo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 reacción cuando seas impactado por un ataque o seas objetivo de 'Proyectil Mágico'",
                alcance: "Personal",
                duracion: "1 turno",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Una barrera invisible de fuerza mágica te protege. Hasta el principio de tu siguiente turno, tienes un bonificador de +5 a la CA, incluso contra el ataque que lo activa, y no recibes daño del conjuro Proyectil mágico."
            },

            {
                icono: "../assets/nivel1/escudoFe.svg",
                texto: "Escudo de fe",
                componentes: "V,S,M (Pergamino con texto sagrado)",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Clérigo y Paladín",
                informacion: "Un campo brillante rodea a la criatura que elijas dentro del alcance y le concede un bonificador de +2 a la CA mientras dura el conjuro."
            },

            {
                icono: "../assets/nivel1/falsaVida.svg",
                texto: "Falsa vida",
                componentes: "V,S,M (Alcohol o licor destilado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Te fortaleces con una réplica nigromántica de vida y consigues 1d4+4 puntos de golpe temporales mientras dura el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, consigues 5 puntos de golpe adicionales por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/favorDivino.svg",
                texto: "Favor divino",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concrentración 1 minuto",
                ataque: "--",
                clases: "Paladín",
                informacion: "Tu plegaria te fortalece con un fulgor divino. Hasta que el conjuro termine, tus ataques de arma infligen 1d4 puntos de daño radiante adicionales cuando impactan."
            },

            {
                icono: "../assets/nivel1/fuegoFeerico.svg",
                texto: "Fuego feérico",
                componentes: "V,",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (área 20 pies)",
                duracion: "Concrentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Druida",
                informacion: "El conjuro ilumina con luz azul, verde o violeta, a tu elección, el contorno de todos los objetos en un cubo de 20 pies dentro del alcance. Se ilumina también el contorno de cualquier criatura dentro del área que falle una tirada de salvación de Destreza. Hasta el final de la duración del conjuro, los objetos y criaturas afectados emiten luz tenue en un radio de 10 pies.*Todas las tiradas de ataque contra una criatura u objeto afectado tienen ventaja si el atacante puede ver a su objetivo. Además, aunque sean invisibles no recibirán ninguno de los beneficios de ese estado mientras sigan afectados por fuego feérico."
            },

            {
                icono: "../assets/nivel1/grasa.svg",
                texto: "Grasa",
                componentes: "V,S,M (Corteza o Manteca de cerdo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Mago",
                informacion: "Una grasa resbaladiza cubre el suelo en un cuadrado de 10 pies de lado cuyo centro es un punto dentro del alcance y lo convierte en terreno difícil mientras dure el conjuro.*Cuando la grasa aparece, todas las criaturas que estén de pie en esta área deben superar una tirada de salvación de Destreza para no caer tumbadas. Una criatura que entra en el área o termina su turno en ella también debe superar una tirada de salvación de Destreza para no caer tumbada."
            },

            {
                icono: "../assets/nivel1/hablarAnimales.svg",
                texto: "Hablar con animales",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "10 minutos",
                ataque: "--",
                clases: "Bardo, Explorador y Druida",
                informacion: "Consigues la capacidad de comprender y comunicarte verbalmente con las bestias mientras dura el conjuro. El saber y el conocimiento de muchas bestias están limitados por su inteligencia, pero al menos te pueden dar información sobre lugares cercanos y monstruos, incluyendo cualquier cosa que puedan percibir o que hayan percibido durante el último día. Puedes persuadir a una bestia para que te haga un pequeño favor, a discreción del director de juego."
            },

            {
                icono: "../assets/nivel1/hechizarPersona.svg",
                texto: "Hechizar persona",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Brujo, Druida, Hechicero y Mago",
                informacion: "Intentas hechizar a un humanoide que puedes ver dentro del alcance. Este debe hacer una tirada de salvación de Sabiduría, para la que tendrá ventaja si tus compañeros o tú estáis luchando contra él. Si falla, queda hechizado hasta que el conjuro termina o hasta que tus compañeros o tú lo dañáis. La criatura hechizada te ve como un conocido amistoso. Cuando el conjuro termina, la criatura sabe que estaba hechizada por ti.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 1. Las criaturas deben estar a 30 pies o menos entre sí."
            },

            {
                icono: "../assets/nivel1/heroismo.svg",
                texto: "Heroísmo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Paladín",
                informacion: "Infundes coraje a una criatura voluntaria que tocas. Hasta que el conjuro termine, la criatura es inmune a quedar asustada y, al principio de cada uno de sus turnos, gana puntos de golpe temporales igual a tu modificador por característica para lanzar conjuros. Cuando el conjuro termina, el objetivo pierde los puntos de golpe temporales que le queden debido a este conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, puedes elegir como objetivo a otra criatura adicional por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/identificar.svg",
                texto: "Identificar",
                componentes: "V, S, M (Una perla que valga al menos 100 po y una pluma de búho)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo y Mago",
                informacion: "Eliges un objeto que debes tocar mientras lanzas el conjuro. Si es un objeto mágico o un objeto al que se le ha imbuido magia, aprendes sus propiedades y modo de uso, si requiere sintonizarse con él para usarlo y cuántas cargas le quedan, si las tiene. Sabes si algún conjuro afecta al objeto y cuáles son. Si el objeto fue creado mediante un conjuro, sabes qué conjuro lo hizo.* Si, en cambio, tocas a una criatura mientras lanzas el conjuro, aprendes qué conjuros, si los hay, la afectan en ese momento."
            },

            {
                icono: "../assets/nivel1/imagenSolida.svg",
                texto: "Imagen sólida",
                componentes: "V, S, M (Trozo de vellón)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Creas la imagen de un objeto, criatura o algún otro fenómeno visible que no sea mayor que un cubo de 15 pies. La imagen aparece en un lugar dentro del alcance y dura mientras lo haga el conjuro. La imagen es puramente visual, sin sonido, olfato ni otro efecto sensorial.*Puedes usar tu acción para hacer que la imagen se mueva a cualquier lugar dentro del alcance. Conforme la imagen cambia de lugar, puedes alterar su apariencia para que parezca que sus movimientos son naturales. Por ejemplo, si creas una imagen de una criatura y la mueves, puedes alterarla para que parezca que está andando.*Interactuar físicamente con la imagen revela que es una ilusión, dado que las cosas pueden atravesarla. Una criatura puede determinar que es una ilusión si examina la imagen usando su acción y supera una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu conjuro. Si lo consigue, puede ver a través de la imagen."
            },

            {
                icono: "../assets/nivel1/inflingirHeridas.svg",
                texto: "Infligir heridas",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Cuerpo a cuerpo 3d10 necrótico",
                clases: "Clérigo",
                informacion: "Haces un ataque de conjuro cuerpo a cuerpo contra una criatura que puedas alcanzar. Si impactas, el objetivo recibe 3d10 puntos de daño necrótico.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, el daño aumenta en 1d10 por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/manosArdientes.svg",
                texto: "Manos ardientes",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal, cono de 15 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación 3d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Juntas las manos con los dedos extendidos y una lámina de fuego se dispara desde las puntas de tus dedos. Todas las criaturas que se encuentren en un cono de 15 pies deben hacer una tirada de salvación de Destreza. Si fallan, reciben 3d6 puntos de daño por fuego y, si tienen éxito, la mitad.*El fuego quema cualquier objeto inflamable que se encuentre dentro del área y que nadie lleve puesto ni transporte.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, el daño aumenta en 1d6 por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/marcaCazador.svg",
                texto: "Marca del cazador",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Explorador",
                informacion: "Eliges a una criatura que puedas ver dentro del alcance y la marcas de forma mística como tu presa. Hasta que el conjuro termina, infliges 1d6 puntos de daño adicional en el objetivo cuando lo impactas con un ataque de arma, y tienes ventaja en cualquier prueba de Sabiduría (Percepción) o Sabiduría (Supervivencia) que hagas para encontrarlo. Si los puntos de golpe del objetivo se reducen a 0 antes de que termine el conjuro, puedes usar una acción adicional en uno de tus siguientes turnos para marcar a una nueva criatura.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o 4, puedes mantener la concentración en el conjuro hasta 8 horas. Cuando usas un espacio de conjuro de nivel 5 o superior, puedes mantener la concentración hasta 24 horas."
            },

            {
                icono: "../assets/nivel1/nubeOscurecimiento.svg",
                texto: "Nube de oscurecimiento",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (área circular 20 pies)",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida, Explorador, Hechicero y Mago",
                informacion: "Creas una bruma que cubre un área esférica de 20 pies de radio alrededor de un punto de tu elección. La niebla se extiende más allá en las esquinas y el área se considera muy oscura. Dura mientras lo haga el conjuro o hasta que un viento moderado o de una velocidad mayor (al menos 10 millas por hora) lo disipe.*En niveles superiores. Cuando lances este conjuro usando un espacio de conjuro de nivel 2 o superior, el radio de la niebla aumenta en 20 pies por cada espacio por encima de 1."
            },

            {
                icono: "../assets/nivel1/olaAtronadora.svg",
                texto: "Ola atronadora",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Cubo de 15 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 2d8 trueno",
                clases: "Bardo, Druida, Hechicero y Mago",
                informacion: "Una ola de una fuerza atronadora surge de ti. Cada criatura que se encuentre en un cubo de 15 pies adyacente a ti debe hacer una tirada de salvación de Constitución. Si falla, recibe 2d8 puntos de daño por trueno y es empujada lejos de ti a 10 pies. Si tiene éxito, recibe la mitad del daño y no es empujada.*Además, los objetos que no estén sujetos y que se encuentren completamente dentro del área son alejados de ti 10 pies debido al efecto del conjuro, y el conjuro emite un bum atronador que se oye a una distancia de 300 pies.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, el daño aumenta en 1d8 por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/ordenImperiosa.svg",
                texto: "Orden imperiosa",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Paladín",
                informacion: "Le das una orden de una palabra a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no seguir la orden durante su siguiente turno. El conjuro no tiene efecto si el objetivo es un no muerto, si no entiende tu idioma o si tu orden es directamente dañina para él.* A continuación tienes algunas órdenes comunes y sus efectos. Puedes dar una orden diferente a las que aparecen aquí, en cuyo caso el director de juego determina el comportamiento del objetivo. Si el objetivo no puede seguir tu orden, el conjuro termina.*→ Acércate. El objetivo se mueve hacia ti por la ruta más corta y directa, y termina su turno si se acerca a 5 pies o menos de ti.*→ Detente. El objetivo no se mueve y no realiza acciones. Una criatura que vuela se mantiene en el aire, siempre y cuando sea capaz de hacerlo. Si debe moverse para mantenerse en el aire, vuela la distancia mínima necesaria para hacerlo.*→ Huye.  El objetivo dedica su turno a alejarse de ti lo más rápido posible.*→ Tíralo. El objetivo tira cualquier cosa que esté sujetando y termina su turno.*→ Túmbate. El objetivo se queda tumbado y termina su turno.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, puedes afectar a una criatura adicional por cada nivel por encima de 1. Las criaturas deben estar a 30 pies o menos de distancia entre sí cuando las apuntes."
            },

            {
                icono: "../assets/nivel1/palabraCuracion.svg",
                texto: "Palabra de curación",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Una criatura de tu elección que puedas ver dentro del alcance recupera puntos de golpe iguales a 1d4 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto ni en no muertos ni en constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, la cantidad de los puntos recuperados aumenta en 1d4 por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/perdicion.svg",
                texto: "Perdición",
                componentes: "V,S,M (Gota de Sangre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Clérigo",
                informacion: "Hasta tres criaturas de tu elección que puedas ver y que estén dentro del alcance del conjuro deben hacer una tirada de salvación de Carisma. Cuando un objetivo que haya fallado la salvación haga una tirada de ataque o de salvación antes de que termine el conjuro, debe tirar 1d4 y restar el resultado a la tirada de ataque o de salvación.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de nivel 2 o superior, puedes elegir como objetivo a una criatura más por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/proteccionBienMal.svg",
                texto: "Protección contra el bien y el mal",
                componentes: "V,S,M (Agua bendita o polvo de plata y hierro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Brujo, Clérigo, Mago y Paladín",
                informacion: "Hasta que el conjuro termine, una criatura voluntaria a la que tocas está protegida contra ciertos tipos de criaturas: aberraciones, celestiales, elementales, feéricos, infernales y no muertos.*La protección garantiza varios beneficios. Las criaturas de esos tipos tienen desventaja en las tiradas de ataque que hagan contra el objetivo. El objetivo tampoco puede ser hechizado, asustado o poseído por ellas. Si el objetivo ya está hechizado, asustado o poseído por una criatura de ese tipo, tiene ventaja en una nueva tirada de salvación que haga contra el efecto pertinente."
            },

            {
                icono: "../assets/nivel1/proyectilMagico.svg",
                texto: "Proyectil mágico",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Creas tres dardos brillantes de fuerza mágica. Cada dardo alcanza a una criatura de tu elección que puedas ver dentro del alcance. Cada dardo inflige 1d4 + 1 puntos de daño por fuerza. Todos los dardos se impactan al mismo tiempo y puedes dirigirlos a una criatura o a varias.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, el conjuro crea un dardo más por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/purificarComidaBebida.svg",
                texto: "Purificar comida y bebida",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies (Área de 5 pies)",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo, Druida y Paladín",
                informacion: "La comida y la bebida no mágicas dentro de una esfera de 5 pies de radio cuyo centro sea un punto que elijas dentro del alcance es purificada y queda libre de veneno y enfermedad."
            },

            {
                icono: "../assets/nivel1/represionInfernal.svg",
                texto: "Represión infernal",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 reacción trass haber sido dañado por una criatura que puedas ver",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación 2d10 fuego",
                clases: "Brujo",
                informacion: "Señalas con el dedo a la criatura que te ha dañado y en un momento se ve rodeada por unas llamas infernales. La criatura debe hacer una tirada de salvación de Destreza; si falla, recibe 2d10 puntos de daño de fuego y, si tiene éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, el daño aumenta en 1d10 por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/retiradaExpeditiva.svg",
                texto: "Retirada expeditiva",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Este conjuro te permite moverte a un ritmo increíble. Cuando lo lanzas, y después como acción adicional en cada uno de tus turnos hasta que el conjuro termine, puedes realizar la acción de esprintar."
            },

            {
                icono: "../assets/nivel1/risaHorribleTasha.svg",
                texto: "Risa horrible de Tasha",
                componentes: "V,S, M (Tartas diminutas y una pluma que se ondea en el aire)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Mago",
                informacion: "Una criatura de tu elección que puedas ver dentro del alcance percibe todo como si fuera terriblemente gracioso y llora de la risa si este conjuro la afecta. El objetivo debe tener éxito en una tirada de salvación de Sabiduría para no caer tumbado, lo que hace que quede incapacitado y que no pueda ponerse en pie mientras dure el conjuro. Las criaturas con una puntación de Inteligencia igual a 4 o menos no quedan afectadas.*Al final de cada uno de sus turnos y cada vez que reciba daño, el objetivo puede hacer otra tirada de salvación de Sabiduría (con ventaja si la hace porque ha recibido daño). Si tiene éxito, el conjuro termina."
            },

            {
                icono: "../assets/nivel1/rociadaColor.svg",
                texto: "Rociada de color",
                componentes: "V,S,M (Polvo de arena tintada)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Cono 15 pies)",
                duracion: "1 turno",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Un cegador haz de luz intermitente y colorido surge de tu mano. Tira 6d10: el resultado indica cuántos puntos de golpe de criaturas puede afectar este conjuro. Las criaturas que se encuentren dentro de un cono de 15 pies cuyo origen seas tú quedan afectadas en orden ascendente de acuerdo a sus puntos de golpe actuales (ignora a las criatura inconscientes y a las que no pueden ver).*A partir de la criatura que tiene menos puntos de golpe actuales, cada criatura afectada por este conjuro queda cegada hasta que termina el conjuro. Réstale al total los puntos de golpe de cada criatura antes de pasar a la siguiente criatura con menos puntos de golpe. Para afectar a una criatura, su número de puntos de golpe debe ser igual o menor que el total restante.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, tira 2d10 adicionales por cada nivel por encima de 1."
            },

            {
                icono: "../assets/nivel1/saetaGuiada.svg",
                texto: "Saeta guiada",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "1 turno",
                ataque: "A distancia 4d6 radiante",
                clases: "Clérigo",
                informacion: "Lanzas un rayo de luz hacia una criatura de tu elección dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, la criatura recibe 4d6 de daño radiante. Además, la siguiente tirada de ataque contra el objetivo tiene ventaja si se realiza antes del final de tu siguiente turno, gracias a la tenue luz mística que lo iluminará hasta ese momento.*A niveles superiores. Cuando lanzas este conjuro utilizando un espacio de conjuro de nivel 2 o más, el daño aumenta en 1d6 por cada nivel por encima de 1 que tenga el espacio que hayas"
            },

            {
                icono: "../assets/nivel1/salto.svg",
                texto: "Saeta guiada",
                componentes: "V,S,M (Saltamontes)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Druida, Explorador, Hechicero y Mago",
                informacion: "Tocas una criatura y su distancia de salto se triplica hasta que el conjuro termina."
            },

            {
                icono: "../assets/nivel1/santuario.svg",
                texto: "Santuario",
                componentes: "V,S,M (Espejo de plata)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Proteges de un ataque a una criatura que se encuentra dentro del alcance. Hasta que el conjuro termine, cualquier criatura que elija a la protegida como objetivo de un ataque o un conjuro dañino debe hacer primero una tirada de salvación de Sabiduría. Si falla, debe elegir un nuevo objetivo o perder el ataque o conjuro. Este conjuro no protege a la criatura protegida de un efecto de área, como la explosión de una bola de fuego.*Si la criatura protegida hace una tirada de ataque o lanza un conjuro que afecta a una criatura enemiga, este conjuro termina."
            },

            {
                icono: "../assets/nivel1/sirvienteInvisible.svg",
                texto: "Sirviente invisible",
                componentes: "V,S,M (Cuerda y madera)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Brujo y Mago",
                informacion: "Este conjuro crea una fuerza invisible, inconsciente e informe que realiza tareas simples bajo tus órdenes hasta que el conjuro termine. El sirviente aparece en un lugar sin ocupar en el suelo dentro del alcance. Tiene CA 10, 1 punto de golpe y Fuerza 2, y no puede atacar. Si sus puntos de golpe se reducen a 0, el conjuro termina.*Una vez en cada uno de tus turnos, como acción adicional, puedes darle órdenes mentalmente para que se mueva hasta 15 pies e interactúe con un objeto. El sirviente puede realizar una tarea simple que un sirviente humano podría hacer, como coger cosas, limpiar, remendar, doblar ropa, encender fuego y servir comida y vino. Una vez le das una orden, el sirviente realiza la tarea lo mejor que puede hasta que la completa. Luego espera tu siguiente orden.*Si le ordenas al sirviente que realice una tarea que le haría alejarse más de 60 pies de ti, el conjuro termina."
            },

            {
                icono: "../assets/nivel1/textoIlusorio.svg",
                texto: "Texto ilusorio",
                componentes: "S,M (10 po tinta de plomo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "10 días",
                ataque: "--",
                clases: "Bardo, Brujo y Mago",
                informacion: "Escribes en un pergamino, papel o algún otro material adecuado para escribir, imbuyéndolo de una potente ilusión que dura mientras lo haga el conjuro. Para ti y para cualquier criatura que designes cuando lanzas el conjuro, la escritura parece normal, de tu puño y letra, y transmite lo que pretendías cuando escribiste el mensaje; para todos los demás, parece como si hubiera sido escrito con una grafía desconocida o mágica que es ininteligible. También puedes hacer que la escritura parezca un mensaje completamente diferente, escrito por otra persona y en otro idioma, aunque debe ser un idioma que conozcas.*Cuando el conjuro se desvanece, tanto la escritura original como la ilusoria desaparecen.*Una criatura con vista verdadera puede leer el mensaje escondido."
            },

            {
                icono: "../assets/nivel1/zancadaProdigiosa.svg",
                texto: "Zancada prodigiosa",
                componentes: "V,S,M (Tierra)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "10 hora",
                ataque: "--",
                clases: "Bardo, Druida, Explorador y Mago",
                informacion: "Tocas a una criatura, cuya velocidad aumenta en 10 pies hasta que el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 1."
            },





        ],


    },
    {
        id: 3,
        nivel: "Nivel 2",
        backgroundColor: '#9FCCBF',
        conjuros: [

            {
                icono: "../assets/nivel2/abrir.svg",
                texto: "Abrir",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "10 Instantáneo",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Elige un objeto que puedas ver dentro del alcance. El objeto puede ser una puerta, una caja, un cofre, unas esposas, un candado u otro objeto que evite el acceso por medios mágicos o mundanos.*Un objetivo retenido, atrapado o bloqueado por una cerradura mundana se libera. Si el objetivo tiene varias cerraduras, solo una de ellas se abre.*Si eliges un objetivo que está retenido con Cerradura arcana, ese conjuro se anula durante 10 minutos, durante los cuales el objetivo se puede abrir y cerrar con normalidad.*Cuando lanzas este conjuro, se oye un fuerte golpe hasta una distancia de 300 pies que surge del objetivo. a una criatura, cuya velocidad aumenta en 10 pies hasta que el conjuro termina."
            },

            {
                icono: "../assets/nivel2/agrandarReducir.svg",
                texto: "Agrandar/reducir",
                componentes: "V, S, M (Pizca de hierro pulverizado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "10 Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Haces que una criatura o un objeto que puedes ver dentro del alcance se haga más grande o más pequeño mientras dura el conjuro. Elige cualquier criatura u objeto que nadie lleve puesto ni transporte. Si el objetivo no es voluntario, puede hacer una tirada de salvación de Constitución: si tiene éxito, el conjuro no tiene efecto. Si el objetivo es una criatura, todo lo que lleva puesto y transporte cambia de tamaño con él. Si una criatura afectada suelta un objeto, este vuelve a su tamaño normal inmediatamente.*→ Agrandar. El tamaño del objetivo se duplica en todas las dimensiones y su peso se multiplica por 8. Este crecimiento aumenta su tamaño en una categoría (de Mediano a Grande, por ejemplo). Si no hay espacio suficiente para que el objetivo duplique su tamaño, la criatura o el objeto alcanza el máximo tamaño posible en el espacio disponible. Hasta que el conjuro termine, el objetivo también tiene ventaja en las pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también crecen a la par que su nuevo tamaño. Mientras las empuñe, los ataques que haga con ellas infligen 1d4 puntos de daño adicional.*→ Reducir. El tamaño del objetivo se divide por 2 en todas las dimensiones y su peso se reduce a una octava parte de lo normal. Esta reducción disminuye su tamaño en una categoría (de Mediano a Pequeño, por ejemplo). Hasta que el conjuro termine, el objetivo también tiene desventaja en las pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también se reducen a la par que su nuevo tamaño. Mientras las empuñe, los ataques que haga con ellas infligen 1d4 puntos de daño menos (el daño no se puede reducir por debajo de 1).",
            },

            {
                icono: "../assets/nivel2/alterarPropioAspecto.svg",
                texto: "Alterar el propio aspecto",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Asumes una forma diferente. Cuando lances el conjuro, elige una de las siguientes opciones, cuyos efectos duran mientras lo haga el conjuro. Mientras dure el conjuro, puedes terminar una opción como si fuera una acción para obtener los beneficios de otra.*→ Adaptación acuática. Adaptas tu cuerpo a un entorno acuático, te salen branquias y te crecen membranas entre los dedos. Puedes respirar bajo el agua y conseguir velocidad nadando igual a tu velocidad caminando.*→ Armas naturales. Te crecen garras, colmillos, espinas, cuernos u otra arma natural que elijas. Tus golpes sin armas infligen 1d6 puntos de daño contundente, perforante o cortante, según se corresponda con el arma que hayas elegido, y tienes competencia con tus golpes sin armas. El arma natural es mágica y tienes un bonificador de +1 a las tiradas de ataque y de daño que hagas con ella*→ Cambiar apariencia. Transformas tu apariencia a voluntad, incluyendo tu altura, peso, rasgos faciales, el sonido de tu voz, lo largo que tienes el pelo y su color, así como otras características distintivas. Puedes parecer un miembro de otra raza, aunque tus estadísticas no cambian. Tampoco puedes parecerte a una criatura de un tamaño diferente al tuyo y tu forma básica no cambia; si eres bípedo no puedes usar este conjuro para convertirte en un cuadrúpedo, por ejemplo. En cualquier momento, mientras dure el conjuro, puedes usar tu acción para volver a cambiar tu apariencia de este modo.",
            },

            {
                icono: "../assets/nivel2/armaEspiritual.svg",
                texto: "Arma espiritual",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "Cuerpo a cuerpo 1d8 fuerza",
                clases: "Clérigo",
                informacion: "Creas un arma espectral flotante dentro del alcance que dura mientras lo haga el conjuro o hasta que vuelvas a lanzarlo. Cuando invocas el arma, puedes hacer un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 5 pies o menos del arma. Si impactas, el objetivo recibe daño por fuerza igual a 1d8 + tu modificador por característica para lanzar conjuros.*Como acción adicional en tu turno, puedes mover el arma hasta 20 pies y repetir el ataque contra una criatura que se encuentre a 5 pies o menos de ella.*El arma puede adoptar cualquier forma que elijas. Los clérigos de deidades asociadas con un arma en particular (como san Cuthbert, que es conocido por su maza, y Thor, por su martillo) hacen que el efecto de este conjuro se parezca a esa arma.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 puntos por cada dos niveles por encima de 2.",
            },

            {
                icono: "../assets/nivel2/armaMagica.svg",
                texto: "Arma mágica",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Mago y Paladín",
                informacion: "Tocas un arma no mágica. Hasta que termine el conjuro, el arma se convierte en un arma mágica con un bonificador de +1 a las tiradas de ataque y de daño.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el bonificador aumenta a +2. Cuando usas un espacio de conjuro de nivel 6 o superior, el bonificador aumenta a +3.",
            },

            {
                icono: "../assets/nivel2/augurio.svg",
                texto: "Augurio",
                componentes: "V, S, M (Varillas, huesos o piezas talladas de 25po)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Tirando varillas con gemas engarzadas, haciendo girar huesos de dragón, echando cartas adornadas o empleando alguna otra herramienta divina, recibes un augurio de una entidad de otro mundo sobre el resultado de una acción específica que planeas realizar en los 30 minutos siguientes. El director de juego elige uno de los siguientes augurios posibles:*→ Dicha: buenos resultados.*→ Desdicha: malos resultados.*→ Dicha y desdicha: resultados tanto buenos como malos.*→ Nada: resultados que no son ni especialmente buenos ni especialmente malos.*El conjuro no tiene en cuenta ninguna circunstancia posible que pueda cambiar el resultado, como que se lancen otros conjuros o que se pierda o se gane un compañero.*Si lanzas el conjuro dos o más veces antes de completar tu siguiente descanso prolongado, hay un 25 % de probabilidades acumulativas de conseguir una lectura aleatoria. El director de juego hace esta tirada en secreto.",
            },

            {
                icono: "../assets/nivel2/auraMagicaNystul.svg",
                texto: "Aura mágica de Nystul",
                componentes: "V, S, M (Recuadro de seda)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "24 horas",
                ataque: "--",
                clases: "Mago",
                informacion: "Implantas una ilusión en una criatura o un objeto que toques para que los conjuros de adivinación revelen información falsa sobre él. El objetivo puede ser una criatura voluntaria o un objeto que ninguna criatura lleve puesto ni transporte.*Cuando lances el conjuro, elige uno de los siguientes efectos o los dos. El efecto dura mientras lo haga el conjuro. Si lanzas este conjuro sobre la misma criatura u objeto durante 30 días y colocas el mismo efecto en él todas las veces, la ilusión dura hasta que se disipe.*→ Aura falsa. Cambias el modo en que el objetivo aparece ante conjuros o efectos mágicos que detectan auras mágicas, como Detectar magia. Puedes hacer que un objeto no mágico parezca mágico, que un objeto mágico parezca no mágico o cambiar el aura mágica de un objeto para que parezca que es de una escuela de magia específica. Cuando uses este efecto en un objeto, puedes determinar que cualquier criatura que sujete el objeto perciba esta magia falsa.*→ Máscara. Puedes cambiar el modo en que el objetivo aparece ante conjuros o efectos mágicos que detectan tipos de criaturas, como el Sentido divido del paladín o la activación del conjuro Símbolo. Elige un tipo de criatura: otros conjuros y efectos mágicos considerarán que la criatura objetivo es del tipo o alineamiento del tipo elegido.",
            },

            {
                icono: "../assets/nivel2/auxilio.svg",
                texto: "Auxilio",
                componentes: "V, S, M (Girón tela blanca)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 hora",
                ataque: "--",
                clases: "Clérigo y Paladín ",
                informacion: "Tu conjuro concede a tus aliados dureza y determinación. Elige hasta tres criaturas dentro del alcance. El máximo de puntos de golpe y los puntos de golpe actuales de cada objetivo aumentan en 5 mientras dura el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, los puntos de golpe del objetivo aumentan 5 puntos adicionales por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/bocaMagica.svg",
                texto: "Boca mágica",
                componentes: "V, S, M (Panal, polvo de jade 10po)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Bardo y Mago ",
                informacion: "Colocas un mensaje en un objeto dentro del alcance, el cual se emite cuando se cumple la condición que lo activa. Elige un objeto que puedas ver y que ninguna otra criatura lleve puesto ni transporte. Luego di el mensaje, que debe tener como máximo 25 palabras, aunque se puede entregar a lo largo de 10 minutos. Por último, determina la circunstancia que activa el conjuro para entregar el mensaje.*Cuando se dé esta circunstancia, una boca mágica aparece en el objeto y recita el mensaje con tu voz y al mismo volumen al que la dijiste. Si el objeto que elijes tiene una boca o algo que parece una boca (por ejemplo, la boca de una estatua), la boca mágica aparece ahí para que parezca que las palabras provienen de la boca del objeto. Cuando lanzas este conjuro, puedes decidir que el conjuro termine después de entregar el mensaje o que permanezca y repita el mensaje en cualquier momento en el que se active.*La circunstancia que activa el mensaje puede ser todo lo general o detallada que quieras, aunque debe basarse en una condición visual o auditiva que ocurra a 30 pies o menos del objeto. Por ejemplo, puedes hacer que la boca hable cuando cualquier criatura se mueva a 30 pies o menos del objeto o cuando suene una campana de plata también a 30 pies o menos.",
            },

            {
                icono: "../assets/nivel2/calentarMetal.svg",
                texto: "Calentar metal",
                componentes: "V, S, M (Hierro y llama)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Druida ",
                informacion: "Elige un objeto construido en metal, como un arma de metal o una armadura de metal pesada o mediana, que puedas ver dentro del alcance para calentarlo al rojo vivo. Cualquier criatura que esté en contacto físico con el objetivo cuando lanzas el conjuro recibe 2d8 puntos de daño por fuego. Hasta que el conjuro termine, puedes usar una acción adicional en cada uno de tus siguientes turnos para hacer que vuelva a sufrir ese daño.*Si una criatura sujeta o lleva puesto el objeto y recibe daño de él, debe superar una tirada de salvación de Constitución para no soltar o quitarse el objeto. Si no puede hacer ninguna de estas dos cosas, tiene desventaja en las tiradas de ataque y en las pruebas de característica hasta el principio de tu siguiente turno.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/calmarEmociones.svg",
                texto: "Calmar emociones",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Aura 20 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Clérigo ",
                informacion: "Intentas reprimir emociones fuertes en un grupo de personas. Todos los humanoides que se encuentren dentro de una esfera de 20 pies de radio, cuyo centro es un punto que tú decides, deben realizar una tirada de salvación de Carisma. Si lo desean, pueden decidir fallarla automáticamente. Si una criatura falla la salvación, elige uno de los siguientes dos efectos:*Puedes reprimir cualquier efecto que haga que el objetivo quede hechizado o asustado. Cuando este conjuro termine, cualquier efecto anulado continúa, siempre y cuando su duración no haya terminado mientras tanto.*Puedes hacer que un objetivo que sea hostil hacia determinadas criaturas de tu elección sea indiferente a ellas. Esta indiferencia termina si el objetivo es atacado o dañado por un conjuro, o si ve cómo dañan a un aliado. Cuando el conjuro termine, la criatura se vuelve hostil de nuevo, a menos que el director de juego decida lo contrario.",
            },

            {
                icono: "../assets/nivel2/castigoMarcador.svg",
                texto: "Castigo marcador",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Paladín",
                informacion: "La siguiente vez que alcances a una criatura con un ataque de arma antes de que termine este conjuro, el arma resplandece con un brillo astral cuando impactas. El ataque inflige 2d6 puntos adicionales de daño radiante al objetivo, el cual se vuelve visible si es invisible, irradia la luz tenue en un radio de 5 pies y no puede volverse invisible hasta que termine el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño adicional aumenta en 1d6 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/cerraduraArcana.svg",
                texto: "Cerradura arcana",
                componentes: "V, S, M (25po en polvo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Mago",
                informacion: "Cuando tocas una puerta, ventana, portón, cofre u otra entrada cerrada, esta se bloquea mágicamente mientras dura el conjuro. Las criaturas que elijas cuando lances el conjuro y tú podéis abrir el objeto con normalidad. También puedes establecer una contraseña que, cuando se diga a 5 pies o menos del objeto, anule el conjuro durante 1 minuto. Si no, no se puede traspasar hasta que se rompa o hasta que el conjuro se disipe o se anule. Lanzar Abrir cerraduras sobre el objeto anula Cerradura arcana durante 10 minutos.*Mientras esté afectado por el conjuro, es más difícil romper el objeto o abrirlo a la fuerza. La CD para romperlo o abrirlo con ganzúas aumenta en 10.",
            },

            {
                icono: "../assets/nivel2/contornoBorroso.svg",
                texto: "Contorno borroso",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Tu cuerpo se vuelve borroso, cambiante y parpadea para todos lo que pueden verte. Mientras dura el conjuro, cualquier criatura tiene desventaja en las tiradas de ataque que haga contra ti. Un atacante es inmune a este efecto si no se basa en la vista, como si tiene vista ciega, o puede ver a través de ilusiones, como si tiene vista verdadera.",
            },

            {
                icono: "../assets/nivel2/crecimientoEspinoso.svg",
                texto: "Crecimiento espinoso",
                componentes: "V, S, M (Espinas o rapitas afiladas)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (Área de 20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "El suelo en un radio de 20 pies, cuyo origen es un punto de tu elección dentro del alcance, se retuerce y hace brotar espinas y pinchos. El área se vuelve terreno difícil mientras dura el conjuro. Cuando una criatura entra en el área o se mueve dentro de ella, recibe 2d4 puntos de daño perforante por cada 5 pies.*La transformación del suelo se camufla para parecer natural. Cualquier criatura que no pueda ver el área en el momento en que se lanza el conjuro debe hacer una tirada de Sabiduría (Percepción) enfrentada a la CD de salvación del conjuro para reconocerla como terreno peligroso antes de entrar en ella.",
            },

            {
                icono: "../assets/nivel2/detectarPensamientos.svg",
                texto: "Detectar pensamientos",
                componentes: "V, S, M (1 pc)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minutos",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, puedes leer el pensamiento de ciertas criaturas. Cuando lanzas este conjuro, y como acción en cada uno de tus turnos hasta que termine, puedes concentrarte en cualquier criatura que puedas ver a 30 pies de ti o menos. Si la criatura que eliges tiene Inteligencia 3 o menos o no habla ningún idioma, no queda afectada.*En un principio lees los pensamientos superficiales de la criatura: lo que ocupa la mayor parte de su mente en ese momento. Como acción, puedes desviar tu atención a los pensamientos de otra criatura o intentar profundizar más en la mente de la misma. Si haces esto último, el objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, consigues ver su razonamiento (si tiene), su estado emocional y algo que ocupe su mente (como algo que le preocupa, que ama o que odia). Si tiene éxito, el conjuro termina. En cualquier caso, el objetivo sabe que estás ahondando en sus pensamientos y, a menos que desvíes tu atención hacia los pensamientos de otra criatura, la primera puede usar la acción de su turno para hacer una prueba de Inteligencia enfrentada a tu prueba de Inteligencia; si tiene éxito, el conjuro termina.*Hacer una pregunta directamente a la criatura objetivo afecta de manera natural al curso de sus pensamientos, por ello este conjuro es particularmente efectivo como parte de un interrogatorio.*También puedes usar este conjuro para detectar la presencia de criaturas pensantes que no puedas ver. Cuando lanzas el conjuro o como acción mientras dure este, puedes buscar pensamientos a 30 pies de ti o menos. El conjuro puede traspasar barreras, pero no a partir de 1 pie de piedra, 1 pulgada de metal común, una lámina de plomo o 3 pies de madera o tierra. No puedes detectar a una criatura cuya Inteligencia sea 3 o inferior, ni a una que no hable ningún idioma.*Una vez detectas la presencia de una criatura de este modo, puedes leer sus pensamientos durante lo que quede de la duración del conjuro, como se describe antes, incluso si no puedes verla, pero aun así tiene que estar dentro del alcance.",
            },

            {
                icono: "../assets/nivel2/detectarTrampas.svg",
                texto: "Detectar trampas",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo, Druida y Explorador",
                informacion: "Sientes la presencia de cualquier trampa dentro del alcance y que esté en tu línea de visión. Una trampa, a efectos de este conjuro, es cualquier cosa que podría provocar un efecto repentino o inesperado que consideras dañino o indeseable preparada intencionalmente por su creador. Por ejemplo, el conjuro sentiría un área afectada por el conjuro Alarma, Glifo custodio o una trampa mecánica, pero no revelaría un defecto en el suelo, un tejado inestable o un socavón escondido.*Este conjuro solamente revela que hay una trampa. No detectas su localización, pero sí la naturaleza del peligro que esta supone.",
            },

            {
                icono: "../assets/nivel2/dulceDescanso.svg",
                texto: "Dulce descanso",
                componentes: "V, S, M (Sal y 2pc en los ojos del cadáver hasta que dure el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "10 días",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Tocas un cadáver u otros restos. Mientras dure el conjuro, el objetivo está protegido de la descomposición y no puede convertirse en no muerto.*El conjuro también prolonga el tiempo límite en que el objetivo podrá ser devuelto a la vida, dado que los días que pasa bajo la influencia de este conjuro no se tienen en cuenta para el límite de tiempo posible para usar sobre él conjuros como Revivir a los muertos.",
            },

            {
                icono: "../assets/nivel2/embelesar.svg",
                texto: "Embelesar",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo y Brujo",
                informacion: "Tejes una maraña de palabras de distracción, obligando a que las criaturas que elijas que puedas ver dentro del alcance y que puedan oírte hagan una tirada de salvación de Sabiduría. Cualquier criatura que no pueda ser hechizada tiene éxito automáticamente, y si está luchando contra tus compañeros y tú, tiene ventaja en la tirada. Si falla, el objetivo tiene desventaja en las pruebas de Sabiduría (Percepción) que haga para percibir a cualquier criatura que no seas tú hasta que el conjuro termine o hasta que el objetivo ya no pueda oírte. El conjuro termina si quedas incapacitado o si dejas de poder hablar.",
            },

            {
                icono: "../assets/nivel2/esferaLlamas.svg",
                texto: "Esfera de llamas",
                componentes: "V, S,M (Sebo, azufre y hierro pulverizado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 2d6 fuego",
                clases: "Druida y Mago",
                informacion: "Una esfera de fuego de 5 pies de diámetro aparece en un espacio libre de tu elección dentro del alcance y dura mientras lo haga el conjuro. Cualquier criatura que termine su turno a 5 pies o menos de la esfera debe hacer una tirada de salvación de Destreza. Si falla, recibe 2d6 puntos de daño por fuego y, si tiene éxito, la mitad.*Como acción adicional, puedes mover la esfera hasta 30 pies. Si se la arrojas a una criatura, esta debe hacer una tirada de salvación contra el daño de la esfera y la esfera deja de moverse durante su turno.*Cuando mueves la esfera, esta puede salvar barreras de hasta 5 pies de alto y hoyos de hasta 10 pies de ancho. La esfera incinera objetos inflamables que nadie lleve puestos ni transporte, y emite luz brillante en un radio de 20 pies y luz tenue en otros 20 pies adicionales.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d6 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/flechaAcidaMelf.svg",
                texto: "Flecha ácida de Melf",
                componentes: "V, S,M (Hoja de ruibarbo y estómago de víbora)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Intantáneo",
                ataque: "A distancia 4d4 ácido",
                clases: "Mago",
                informacion: "Una flecha verde reluciente se dirige a un objetivo que esté dentro del alcance y lo rocía con ácido. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo recibe 4d4 puntos de daño por ácido inmediatamente y 2d4 al final de su siguiente turno. Si fallas, la flecha salpica de ácido al objetivo y le hace la mitad de daño inicial y nada de daño al final de su siguiente turno.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño (tanto el inicial como el posterior) incrementa en 1d4 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/hacerAnicos.svg",
                texto: "Hacer añicos",
                componentes: "V, S,M (Mica)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 10 pies)",
                duracion: "Intantáneo",
                ataque: "Contra salvación 3d8 trueno",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Un sonido estridente y dolorosamente intenso surge de un punto que elijas dentro del alcance. Todas las criaturas que se encuentren en una esfera de 10 pies de radio, cuyo centro sea ese punto, deben hacer una tirada de salvación de Constitución. Si fallan, reciben 3d8 puntos de daño por trueno y, si tienen éxito, la mitad. Una criatura hecha de material inorgánico, como piedra, cristal o metal, tiene desventaja en esta tirada de salvación.*Los objetos no mágicos que nadie lleve puesto ni transporte también reciben daño si están dentro del área del conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/hallarCorcel.svg",
                texto: "Hallar corcel",
                componentes: "V, S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Intantáneo",
                ataque: "--",
                clases: "Paladín",
                informacion: "Convocas a un espíritu con la forma de una montura excepcionalmente inteligente, fuerte y leal, y creas un vínculo duradero con ella. Cuando aparece en un lugar sin ocupar dentro del alcance, la montura adopta la forma que elijas: un caballo de guerra, un poni, un camello, un alce o un mastín (el director de juego podría permitirte que convocaras a otros animales como monturas). La montura tiene las estadísticas de la forma elegida, aunque sea un celestial, una fata o un infernal (según elijas). Además, si tiene Inteligencia 5 o menos, su Inteligencia sube a 6 y consigue la capacidad de entender un idioma que hables de tu elección. Mientras tu montura está a 1 milla o menos de ti, puedes comunicarte con ella telepáticamente.*Este animal te sirve como montura, tanto en combate como fuera de él, y tenéis un vínculo instintivo que os permite luchar como una única unidad. Mientras estás montado en tu montura, puedes lanzar cualquier conjuro con alcance personal sobre ella.*Cuando sus puntos de golpe se reduzcan a 0, desaparece sin dejar tras de sí ninguna forma física. También puedes desconvocarla en cualquier momento como acción, lo que hace que desaparezca. En ambos casos, lanzar este conjuro otra vez convoca a la misma montura, con su máximo de puntos de golpe restaurado.*No puedes tener más de una montura vinculada a ti mediante este conjuro a la vez. Como acción, puedes liberar a la montura de su vínculo en cualquier momento, lo que hace que desaparezca.",
            },

            {
                icono: "../assets/nivel2/hojaFuego.svg",
                texto: "Hoja de fuego",
                componentes: "V, S, M (Hoja de zumaque)",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "Cuerpo a cuerpo 3d6 fuego",
                clases: "Druida",
                informacion: "En una mano libre evocas un haz ardiente del tamaño y forma de una cimitarra que dura mientras lo haga el conjuro. Si lo sueltas, desaparece, pero puedes volver a evocarlo como acción adicional.*Puedes usar tu acción para hacer un ataque de conjuro cuerpo a cuerpo con el haz ardiente. Si impactas, el objetivo recibe 3d6 puntos de daño por fuego.*El filo flamígero emite luz brillante en un radio de 10 pies y luz tenue en 10 pies adicionales.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada dos niveles por encima de 2.",
            },

            {
                icono: "../assets/nivel2/imagenMultiple.svg",
                texto: "Imagen múltiple",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 Minuto",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Tres duplicados ilusorios de ti mismo aparecen en tu espacio. Hasta que el conjuro termine, los duplicados se mueven a la vez que tú, imitan tus acciones y se cambian de posición, lo que hace que sea imposible seguir cuál es la imagen real. Puedes usar tu acción para disiparlos.*Cada vez que una criatura te elija como objetivo de un ataque mientras dura el conjuro, tira 1d20 para determinar si el ataque apunta a uno de tus duplicados en lugar de a ti. Si tienes tres duplicados, debes sacar un 6 o más para hacer que el ataque se dirija a un duplicado. Con dos duplicados, debes sacar un 8 o más; y con un duplicado, 11 o más.*La CA de los duplicados es igual a 10 + tu modificador por Destreza. Si un ataque impacta a un duplicado, este se destruye. Solo un ataque que lo impacta puede destruir a un duplicado: este ignora el resto de daño y efectos. El conjuro termina cuando se destruyen los tres duplicados.*Una criatura no queda afectada por este conjuro si no puede ver, si se basa en otros sentidos que no sean la vista, como si tiene vista ciega, o si puede percibir que las ilusiones son falsas, como si tiene vista verdadera.",
            },

            {
                icono: "../assets/nivel2/inmovilizarPersona.svg",
                texto: "Inmovilizar persona",
                componentes: "V, S, M (Pedazo de hierro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Clérigo, Druida, Hechicero y Mago",
                informacion: "Elige a un humanoide que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar paralizado mientras dure el conjuro. Al final de cada uno de sus turnos, puede hacer otra tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a otro humanoide adicional por cada espacio de conjuro por encima de 2. Los humanoides deben estar a 30 pies o menos entre sí.",
            },

            {
                icono: "../assets/nivel2/invisibilidad.svg",
                texto: "Invisibilidad",
                componentes: "V, S, M (Pestaña y goma arábiga)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Una criatura que tocas se vuelve invisible hasta que el conjuro termina. Cualquier cosa que el objetivo lleve puesta o transporte se vuelve invisible siempre y cuando esté en el cuerpo del objetivo. El conjuro termina cuando el objetivo ataque o lance un conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/levitar.svg",
                texto: "Levitar",
                componentes: "V, S, M (Correa de cuero o alambre de oro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Una criatura u objeto suelto de tu elección que puedas ver dentro del alcance se alza en vertical, hasta 20 pies, y permanece suspendido ahí mientras dure el conjuro. El objetivo puede pesar hasta 500 libras. Una criatura no voluntaria que tenga éxito en una tirada de salvación de Constitución no queda afectada por este conjuro.*El objetivo solo puede moverse empujando o tirando de un objeto o superficie fijos dentro de su alcance (como una pared o un techo), que le permite moverse como si estuviera escalando. Puedes cambiar la altitud del objetivo a hasta 20 pies en cualquier dirección durante tu turno. Si eres el objetivo, puedes moverte arriba y abajo como parte del movimiento. Si no, puedes usar tu acción para mover al objetivo, que permanece dentro del alcance del conjuro.*Cuando el conjuro termina, el objetivo desciende suavemente hasta el suelo si todavía está flotando.",
            },

            {
                icono: "../assets/nivel2/llamaPermanente.svg",
                texto: "Llama permanente",
                componentes: "V, S, M (50po de polvo de rubí)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Una llama tan luminosa como una antorcha surge de un objeto que tocas. Parece una llama normal, pero no da calor y no consume oxígeno. La llama se puede cubrir o esconder, pero no apagar ni extinguir.",
            },

            {
                icono: "../assets/nivel2/localizarAnimalesPlantas.svg",
                texto: "Localizar animales o plantas",
                componentes: "V, S, M (Pelaje de sabueso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Describe o nombra un tipo de bestia o planta específica. Al concentrarte en la voz de la naturaleza que te rodea, conoces la dirección y la distancia de la criatura o planta de ese tipo más cercana que se encuentre a 5 millas o menos, si hay alguna.",
            },

            {
                icono: "../assets/nivel2/localizarObjeto.svg",
                texto: "Localizar objeto",
                componentes: "V, S, M (Rama)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Mago y Paladín",
                informacion: "Describe o nombra un objeto que te sea familiar. Sientes la dirección en la que se encuentra dicho objeto, siempre y cuando esté a 1000 pies o menos de ti. Si el objeto se mueve, sabes la dirección.*El conjuro puede localizar un objeto específico que conoces, siempre y cuando lo hayas visto de cerca (a 30 pies o menos) al menos una vez. El conjuro también puede localizar el objeto más cercano de un tipo en particular, como un cierto tipo de vestimenta, joya, mueble, herramienta o arma.*Este conjuro no puede localizar un objeto si algo de plomo, aunque sea una capa fina, bloquea un camino directo entre el objeto y tú.",
            },

            {
                icono: "../assets/nivel2/mensajeroAnimal.svg",
                texto: "Mensajero animal",
                componentes: "V, S, M (Comida)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "24 horas",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Mediante este conjuro, usas un animal para entregar un mensaje. Debes elegir una bestia Diminuta que puedas ver dentro del alcance, como una ardilla, un arrendajo azul o un murciélago, especificar el lugar, donde debes haber estado, y describir en términos generales al receptor, como «un hombre o una mujer con el uniforme de la guardia de la torre» o «un enano pelirrojo que lleva un sombrero puntiagudo». Un mensaje puede ser de hasta 25 palabras.*La bestia objetivo viajará mientras dure el conjuro hacia la localización indicada; si es voladora, cubre unas 50 millas cada 24 horas y, si es otro animal, cubre 25 millas. Cuando llega, entrega tu mensaje a la criatura que has descrito reproduciendo el sonido de tu voz. El mensajero solo hablará a una criatura que encaje con la descripción que le has dado. Si el mensajero no alcanza su destino antes de que termine el conjuro, el mensaje se pierde y la bestia vuelve al lugar donde lanzaste el conjuro.*En niveles superiores. Si lanzas este conjuro usando un espacio de nivel 3 o superior, la duración del conjuro aumenta en 48 horas por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/oscuridad.svg",
                texto: "Oscuridad",
                componentes: "V, M (Pelo murciélago y carbón)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 15 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Una oscuridad mágica se expande desde un punto que elijas dentro del alcance hasta llenar una esfera de 15 pies de radio mientras dura el conjuro. La oscuridad se extiende en las esquinas. Una criatura con visión en la oscuridad no puede ver a través de esta y la luz no mágica no puede iluminarla.*Si el punto que eliges está en un objeto que sostienes o uno que nadie lleva puesto ni transporta, la oscuridad emana del objeto y se mueve con él. Cubrir el objeto completamente con algo opaco, como un cuenco o un yelmo, bloquea la oscuridad.*Si cualquier parte de esta área del conjuro se solapa con un área de luz creada por un conjuro de nivel 2 o inferior, el conjuro que ha creado la luz se disipa.",
            },

            {
                icono: "../assets/nivel2/pasarSinDejarRastro.svg",
                texto: "Pasar sin dejar rastro",
                componentes: "V, M (Hoja de muérdago quemada y rama de picea)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Un velo de sombras y silencio irradia de ti, ocultándote a ti y a tus compañeros de la detección. Mientras dura el conjuro, todas las criaturas que elijas a 30 pies o menos de ti (incluyéndote tú) tienen un bonificador de +10 a las pruebas de Destreza (Sigilo) y solo se las puede rastrear con magia. Una criatura que recibe este bonificador no deja huellas tras de sí ni otras marcas de su paso.",
            },

            {
                icono: "../assets/nivel2/pasoBrumoso.svg",
                texto: "Paso brumoso",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Rodeado brevemente por una bruma plateada, te teleportas hasta 30 pies a un lugar sin ocupar que puedas ver.",
            },

            {
                icono: "../assets/nivel2/pielRobliza.svg",
                texto: "Piel robliza",
                componentes: "V, S, M (Corteza de roble)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Tocas a una criatura voluntaria. Hasta que el conjuro termine, la piel del objetivo tendrá una apariencia rugosa y como de corteza, y su CA no puede ser inferior a 16, independientemente del tipo de armadura que lleve.",
            },


            {
                icono: "../assets/nivel2/plegariaCuracion.svg",
                texto: "Plegaria de curación",
                componentes: "V",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Intanstáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Hasta seis criaturas de tu elección que puedas ver dentro del alcance del conjuro recuperan cada una un número de puntos de golpe igual a 2d8 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto ni sobre no muertos ni sobre constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, la curación aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/potenciarCaracteristica.svg",
                texto: "Potenciar característica",
                componentes: "V,S,M (Pelo o pluma de bestia)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida y Hechicero",
                informacion: "Tocas a una criatura y le otorgas una mejora mágica. Elige uno de los siguientes efectos; el objetivo consigue dicho efecto hasta que termina el conjuro.*→ Astucia de zorro. El objetivo tiene ventaja en las pruebas de Inteligencia.*→ Elegancia de gato. El objetivo tiene ventaja en las pruebas de Destreza. Asimismo, no recibe daño por caer 20 pies o menos si no está incapacitado.*→ Esplendor de águila. El objetivo tiene ventaja en las pruebas de Carisma.*→ Fuerza de toro. El objetivo tiene ventaja en las pruebas de Fuerza y su carga transportable se duplica.*→ Resistencia de oso. El objetivo tiene ventaja en las pruebas de Constitución. También gana 2d6 puntos de golpe temporales, los cuales se pierden cuando termina el conjuro.*→ Sabiduría de búho. El objetivo tiene ventaja en las pruebas de Sabiduría.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/proteccionVeneno.svg",
                texto: "Protección contra veneno",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador y Paladín",
                informacion: "Tocas a una criatura. Si está envenenada, neutralizas el veneno. Si más de un veneno aflige al objetivo, neutralizas un veneno que sabes que está presente o uno al azar.*Mientras dura el conjuro, el objetivo tiene ventaja en las tiradas de salvación que haga contra ser envenenado y tiene resistencia al daño por veneno.",
            },

            {
                icono: "../assets/nivel2/rafagaViento.svg",
                texto: "Ráfaga de viento",
                componentes: "V,S, M (Semilla de legumbre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (↑ 60 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Druida, Hechicero y Mago",
                informacion: "Una línea de viento fuerte de 60 pies de largo y 10 pies de ancho surge de ti en la dirección que elijas y dura mientras lo hace el conjuro. Todas las criaturas que empiezan su turno en la línea deben superar una tirada de salvación de Fuerza para no ser empujadas a 15 pies de ti siguiendo la dirección de la línea.*Cualquier criatura que se encuentre en la línea debe gastar 2 pies de movimiento por cada pie que se mueva para acercarse a ti.*La ráfaga propaga gas o vapor, y apaga velas, antorchas y llamas similares sin proteger dentro del área. Las llamas protegidas, como las linternas, se agitan violentamente y tienen un 50 % de probabilidades de apagarse.*Como acción adicional en cada uno de tus turnos antes de que el conjuro termine, puedes cambiar la dirección en la que la ráfaga surge de ti.",
            },

            {
                icono: "../assets/nivel2/rayoAbrasador.svg",
                texto: "Rayo abrasador",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 2d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Creas tres rayos de fuego y los lanzas hacia objetivos que se encuentren dentro del alcance. Puedes lanzárselo a un objetivo o a varios. Haz un ataque de conjuro a distancia por cada rayo. Si impactas, el objetivo recibe 2d6 puntos de daño por fuego.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, creas un rayo adicional por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/rayoLuna.svg",
                texto: "Rayo de luna",
                componentes: "V,S, M (Semilla de flor de luna y feldespato de ópalo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Área de 5 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 2d10 radiante",
                clases: "Druida",
                informacion: "Un rayo plateado de luz pálida brilla en un cilindro de 5 pies de radio y 40 pies de alto, cuyo centro se encuentra en un punto que elijas dentro del alcance. Hasta que el conjuro termine, una luz tenue llena el cilindro.*Cuando una criatura entra en el área del conjuro por primera vez en un turno o empieza un turno ahí, unas fantasmales llamas la envuelven causándole un dolor agudo. Debe hacer una tirada de salvación de Constitución: si falla, recibe 2d10 puntos de daño radiante y, si tiene éxito, la mitad.*Un cambiaformas hace la tirada de salvación con desventaja. Si falla, también vuelve a su forma original inmediatamente y no puede asumir una forma diferente hasta que deje la luz del conjuro.*En cada uno de tus turnos después de lanzar el conjuro puedes usar una acción para mover el rayo 60 pies en cualquier dirección.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d10 por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/rayoDebilitador.svg",
                texto: "Rayo debilitador",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "A distancia",
                clases: "Brujo y Mago",
                informacion: "Un rayo negro de energía debilitante surge de tu dedo hacia una criatura que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo solo inflige la mitad de daño con ataques de arma que usen Fuerza hasta que termine el conjuro.*Al final de cada uno de los turnos del objetivo, este puede hacer una tirada de salvación de Constitución contra el conjuro. Si tiene éxito, el conjuro termina.",
            },

            {
                icono: "../assets/nivel2/restablecimientoMenor.svg",
                texto: "Restablecimiento menor",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Explorador y Paladín",
                informacion: "Tocas a una criatura y puedes terminar con una enfermedad o con un estado que la aflija. El estado puede ser cegado, ensordecido, paralizado o envenenado.",
            },

            {
                icono: "../assets/nivel2/silencio.svg",
                texto: "Silencio",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Área 20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo y Explorador",
                informacion: "Mientras dura el conjuro, no se puede crear ningún sonido en una esfera de 20 pies de radio cuyo centro es un punto que elijas dentro del alcance, y ningún sonido puede atravesarla. Cualquier criatura u objeto que esté completamente dentro de la esfera es inmune al daño por trueno y las criaturas quedan ensordecidas mientras permanezcan dentro. Es imposible lanzar un conjuro que incluya un componente verbal.",
            },

            {
                icono: "../assets/nivel2/sorderaCeguera.svg",
                texto: "Sordera / Ceguera",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Clérigo, Hechicero y Mago",
                informacion: "Puedes cegar o ensordecer a un enemigo. Elige una criatura que puedas ver dentro del alcance para que haga una tirada de salvación de Constitución. Si falla, queda cegado o ensordecido (según decidas) mientras dura el conjuro. Al final de cada uno de sus turnos, puede hacer una tirada de salvación de Constitución para intentar anular el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes apuntar a una criatura adicional por cada nivel por encima de 2.",
            },

            {
                icono: "../assets/nivel2/sugestion.svg",
                texto: "Sugestión",
                componentes: "V, M (Lengua serpiente y panal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 8 horas",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Sugieres mágicamente un curso de actividad (limitado a una frase o dos) a una criatura que puedas ver dentro del alcance y que te pueda oír y entender. Las criaturas que no pueden ser hechizadas son inmunes a este efecto. La sugerencia debe plantearse de tal modo que el curso de la acción suene razonable. Pedirle a una criatura que se apuñale a sí misma, que se arroje sobre una lanza, que se inmole o que haga algo obviamente dañino anula automáticamente el efecto del conjuro.*El objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, sigue el curso de acción que hayas descrito lo mejor que puede. La acción sugerida puede continuar mientras dure el conjuro. Si se puede completar en poco tiempo, el conjuro acaba cuando el sujeto termina lo que se le pidió que hiciera.*También puedes especificar las condiciones que activarán una tarea especial mientras dure el conjuro. Por ejemplo, puedes sugerir que un soldado le dé su caballo de guerra al primer mendigo que se encuentre. Si la condición no se cumple antes de que el conjuro termine, la actividad no se lleva a cabo.*Si tú o cualquiera de tus compañeros daña al objetivo, el conjuro termina.",
            },

            {
                icono: "../assets/nivel2/telarana.svg",
                texto: "Telaraña",
                componentes: "V, S, M (Telarañas)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Cuadrado 20 pies)",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Conjuras una masa de telarañas pegajosas en un punto de tu elección dentro del alcance. La telaraña llena un cubo de 20 pies que surge de ese punto mientras dure el conjuro. Las telarañas son terreno difícil y un área ligeramente iluminada.*Si las telarañas no están sujetas entre dos cuerpos sólidos (como paredes o árboles) o apoyadas sobre el suelo, un muro o el techo, colapsan por sí mismas y el conjuro termina al principio de tu siguiente turno. Las telarañas apoyadas sobre una superficie lisa tienen una profundidad de 5 pies.*Cada criatura que empieza su turno en las telarañas o que entra en ellas durante su turno debe hacer una tirada de salvación de Destreza. Si falla, queda apresada mientras permanezcan las telarañas o hasta que se libere.*Una criatura apresada por las telarañas puede usar su acción para hacer una prueba de Fuerza enfrentada a la CD de salvación de tu conjuro. Si tiene éxito, deja de estar apresada.*Las telarañas son inflamables. Cualquier cubo de telarañas de 5 pies expuesto al fuego arde en 1 ronda, infligiendo 2d4 puntos de daño por fuego a cualquier criatura que empiece su turno en el fuego.",
            },

            {
                icono: "../assets/nivel2/treparAracnido.svg",
                texto: "Trepar cual arácnido",
                componentes: "V, S, M (Betún y una araña)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Hasta que el conjuro termine, una criatura voluntaria a la que tocas consigue la capacidad de trepar por superficies verticales y techos mientras tenga las manos libres. El objetivo también consigue una velocidad de escalada igual a su velocidad caminando.",
            },

            {
                icono: "../assets/nivel2/trucoCuerda.svg",
                texto: "Truco de la cuerda",
                componentes: "V, S, M (Trigo en polvo y lazo retorcido)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Tocas un trozo de cuerda de hasta 60 pies de largo. Un extremo de la cuerda se alza en el aire hasta que toda la cuerda cuelgue perpendicular al suelo. En su extremo más alto de la cuerda, se abre un portal invisible a un espacio extradimensional que dura hasta que termina el conjuro y al que se puede llegar trepando por la cuerda. El espacio puede contener hasta 8 criaturas Medianas o de un tamaño menor. Se puede tirar de la cuerda hacia el espacio, lo que hace que desaparezca de la vista desde la parte exterior.*Los ataques y los conjuros no pueden cruzar la entrada ni hacia dentro ni hacia fuera del espacio, pero los que están dentro pueden ver fuera como si lo hicieran desde una ventada de 3×5 pies cuyo centro es la cuerda.*Cualquier cosa que esté dentro del espacio extradimensional cae cuando el conjuro termina.",
            },

            {
                icono: "../assets/nivel2/verInvisibilidad.svg",
                texto: "Ver invisibilidad",
                componentes: "V, S, M (Talco y polvo de plata)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, ves criaturas y objetos invisibles como si fueran visibles y puedes mirar en el Plano Etéreo. Las criaturas y los objetos etéreos parecen fantasmales y translúcidos.",
            },

            {
                icono: "../assets/nivel2/vinculoProtector.svg",
                texto: "Vínculo protector",
                componentes: "V, S, M (Anillo 50po para cada uno y llevar puesto durante conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Este conjuro protege a una criatura voluntaria que tocas o crea una conexión mística entre ella y tú hasta que el conjuro termina. Mientras que el objeto esté a 60 pies o menos de ti, consigue un bonificador de +1 a la CA y a las tiradas de salvación y tiene resistencia a todos los daños. Asimismo, cada vez que reciba daño, tú recibes la misma cantidad.*El conjuro termina si tus puntos de golpe se reducen a 0 o si el objetivo se aleja más de 60 pies de ti. También termina si se vuelve a lanzar el conjuro en cualquiera de las dos criaturas conectadas. Puedes disipar el conjuro como acción.",
            },

            {
                icono: "../assets/nivel2/verOscuridad.svg",
                texto: "Visión en la oscuridad",
                componentes: "V, S, M (Zanahoria seca o ágata)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "--",
                clases: "Druida, Explorador, Hechicero y Mago",
                informacion: "Tocas a una criatura voluntaria para concederle la capacidad de ver en la oscuridad. Mientras dura el conjuro, la criatura tiene visión en la oscuridad hasta una distancia de 60 pies.",
            },

            {
                icono: "../assets/nivel2/zonaVerdad.svg",
                texto: "Zona de verdad",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 15 pies)",
                duracion: "10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Paladín",
                informacion: "Creas una zona mágica que te protege del engaño en una esfera de 15 pies de radio cuyo centro es un punto de tu elección dentro del alcance. Hasta que el conjuro termine, toda criatura que entre en el área del conjuro por primera vez en un turno o que empiece su turno ahí debe hacer una tirada de salvación de Carisma. Si falla, no puede decir una mentira deliberadamente mientras se encuentre dentro del radio. Tú sabes si falla o tiene éxito en la tirada de salvación.*La criatura afectada se da cuenta del conjuro y puede evitar responder preguntas a las que normalmente respondería con una mentira. Tal criatura puede dar respuestas evasivas siempre y cuando se mantenga en los límites de la verdad.",
            },

        ],
    },
    {
        id: 4,
        nivel: "Nivel 3",
        backgroundColor: '#9FD7DC',
        conjuros: [
            {
                icono: "../assets/nivel3/acelerar.svg",
                texto: "Acelerar",
                componentes: "V, S, M (Viruta de regaliz)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Elige una criatura voluntaria que puedas ver dentro del alcance. Hasta que el conjuro termine, la velocidad del objetivo se duplica, consigue un bonificador de +2 a la CA, tiene ventaja en las tiradas de salvación de Destreza y consigue una acción adicional en cada uno de sus turnos. Esta acción solo se puede usar para realizar una acción de ataque (solo un ataque de arma), esprintar, retirarse, esconderse o usar un objeto.*Cuando el conjuro termina, el objetivo no puede moverse ni realizar acciones hasta después de su siguiente turno, ya que le invade una ola de letargo.",
            },

            {
                icono: "../assets/nivel3/animarMuertos.svg",
                texto: "Animar muertos",
                componentes: "V, S, M (Gota sangre, carne, polvo de huesos)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Este conjuro crea sirvientes no muertos. Elige una pila de huesos o un cadáver humanoide de tamaño Mediano o Pequeño dentro del alcance. El conjuro imbuye al objetivo con una repugnante imitación de vida y lo reanima como una criatura no muerta. El objetivo se convierte en un esqueleto si eliges huesos o en un zombi si eliges un cadáver (el director de juego determina las estadísticas de la criatura).*Una vez por turno, puedes usar una acción adicional para dar órdenes mentales a cualquier criatura que hayas creado con este conjuro si esta se encuentra a 60 pies o menos de ti (si controlas a varias criaturas, puedes dar órdenes a alguna o a todas ellas al mismo tiempo usando la misma orden para todas). Tú decides qué acción hará la criatura y adónde se moverá durante su siguiente turno, o puedes emitir una orden general, como proteger una habitación o un pasillo en particular. Si no emites ninguna orden, la criatura solo se defiende a sí misma contra las criaturas hostiles. Una vez se le ha dado una orden, la criatura la sigue hasta completar su tarea.*La criatura está bajo tu control durante 24 horas. Pasado este tiempo, deja de obedecer cualquier orden que le hayas dado. Para mantener el control de la criatura durante otras 24 horas, debes lanzarle el conjuro otra vez antes de que acaben las 24 horas actuales. Usar el conjuro de este modo reafirma el control sobre hasta cuatro criaturas que hayas animado de este modo, en lugar de animar a una nueva.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, animas o reafirmas el control sobre dos no muertos adicionales por cada nivel por encima de 3. Cada una de las criaturas debe venir de un cadáver o de una pila de huesos diferente.",
            },

            {
                icono: "../assets/nivel3/bolaFuego.svg",
                texto: "Bola de fuego",
                componentes: "V, S, M (Guano de murciélago y azufre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (Área 20 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 8d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Un rayo brillante surge de tu dedo índice hasta un punto que elijas dentro del alcance y explota con un leve estruendo en un estallido de llamas. Todas las criaturas que se encuentren en una esfera de 20 pies de radio cuyo centro sea ese punto deben hacer una tirada de salvación de Destreza: si fallan, reciben 8d6 puntos de daño por fuego y, si tienen éxito, la mitad.*El fuego se propaga en las esquinas e incinera los objetos inflamables que se encuentren en el área y que nadie lleve puestos ni transporte.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/caminarSobreAgua.svg",
                texto: "Caminar sobre el agua",
                componentes: "V, S, M (Trozo de corcho)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador y Hechicero",
                informacion: "Este conjuro concede la capacidad de moverse por cualquier superficie líquida (como agua, ácido, lodo, nieve, arenas movedizas o lava) como si fuera un terreno sólido inofensivo (caminar sobre lava fundida aún puede provocar daño debido al calor). Hasta tres criaturas voluntarias que puedas ver dentro del alcance consiguen esta capacidad mientras dure el conjuro.*Si tu objetivo es una criatura sumergida en un líquido, el conjuro saca al objetivo a la superficie del líquido a una velocidad de 60 pies por asalto.",
            },

            {
                icono: "../assets/nivel3/circuloMagico.svg",
                texto: "Círculo mágico",
                componentes: "V, S, M (Agua bendita o plata y hierro de 100po)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies (Área 10 pies)",
                duracion: "1 hora",
                ataque: "--",
                clases: "Brujo, Clérigo, Mago y Paladín",
                informacion: "Creas un cilindro de energía mágica de 10 pies de radio y 20 pies de altura cuyo centro se encuentra en un punto del suelo que puedas ver dentro del alcance. En la intersección del cilindro con el suelo u otra superficie aparecen unas runas brillantes.*Elige uno o más de los siguientes tipos de criaturas: celestiales, elementales, fatas, infernales y no muertos. El círculo afecta a una criatura del tipo elegido de los siguientes modos:*→ La criatura no puede entrar en el cilindro voluntariamente por medios no mágicos. Si la criatura intenta usar el teletransporte o el viaje intraplanar para hacerlo, primero debe superar una tirada de salvación de Carisma.*→ La criatura tiene desventaja en las tiradas de ataque contra objetivos que se encuentren dentro del cilindro.*→ Los objetivos que se encuentran dentro del cilindro no pueden quedar hechizados, asustados o poseídos por la criatura.*Cuando lanzas este conjuro, puedes decidir que su magia opere en el sentido inverso: evitando que una criatura de un tipo específico deje el cilindro y protegiendo a los objetivos que se encuentran fuera.*En niveles superiores. Cuando lances este conjuro usando un espacio de conjuro de nivel 4 o superior, la duración aumenta en 1 hora por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/clarividencia.svg",
                texto: "Clarividencia",
                componentes: "V, S, M (Foco 100po)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "5.000 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Hechicero y Mago",
                informacion: "Creas un sensor invisible en una localización que te es familiar (un lugar que hayas visitado o visto) o en una localización obvia que no te es familiar (como detrás de una puerta, en una esquina o en un bosquecillo), siempre que esté dentro del alcance (1 milla). El sensor permanece en el lugar mientras dura el conjuro y no se le puede atacar ni interactuar con él.*Cuando lanzas el conjuro, eliges ver o escuchar. Puedes usar el sentido que elijas a través del sensor como si estuvieras en ese lugar. Como acción, puedes cambiar entre ver y escuchar.*Una criatura que pueda ver el sensor (porque se beneficie de un conjuro de ver invisibilidad o posea visión verdadera, por ejemplo) contempla un orbe luminoso e intangible del tamaño de tu puño.",
            },

            {
                icono: "../assets/nivel3/conjurarAnimales.svg",
                texto: "Conjurar animales",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Convocas espíritus feéricos en forma de bestia que aparecen en lugares libres que puedas ver dentro del alcance. Elige una de las siguientes opciones:*→ Una bestia con un valor de desafío igual a 2 o menos.*→ Dos bestias con un valor de desafío igual a 1 o menos.*→ Cuatro bestias con un valor de desafío igual a 1/2 o menos.*→ Ocho bestias con un valor de desafío igual a 1/4 o menos.*Cada bestia se considera, además, feérica y desaparece cuando sus puntos de golpe se reducen a 0 o cuando el conjuro termina.*Las criaturas convocadas son amistosas hacia ti y tus compañeros. Tira iniciativa por ellas como si fueran un grupo que tiene sus propios turnos. Obedecen cualquier orden verbal que les des (no requiere que realices ninguna acción). Si no les das ninguna orden, se defienden de criaturas hostiles, pero, si no las hay, no realizan ninguna acción.*El director de juego determina las estadísticas de las criaturas.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de un nivel superior determinado, aparecen más criaturas de las que elegiste: con un espacio de nivel 5 aparecen el doble, con nivel 7 el triple y con nivel 9 el cuádruple.",
            },

            {
                icono: "../assets/nivel3/contrahechizo.svg",
                texto: "Contrahechizo",
                componentes: "S",
                tiempoDeLanzamiento: "1 reacción cuando veas una criatura lanzar un conjuro",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Intentas interrumpir el lanzamiento de conjuro de una criatura. Si el conjuro es de nivel 3 o inferior, el lanzamiento falla y no tiene efecto. Si es de nivel 4 o superior, haz una prueba de característica usando tu característica para lanzar conjuros; la CD es 10 + el nivel de conjuro. Si tienes éxito, el lanzamiento falla y su conjuro no tiene efecto.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el conjuro interrumpido no tiene efecto si su nivel es igual o menor que el nivel del espacio de conjuro que uses.",
            },

            {
                icono: "../assets/nivel3/corcelFantasma.svg",
                texto: "Corcel fantasma",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Una criatura cuasirreal de tamaño Grande, similar a un caballo, aparece en el suelo de un lugar sin ocupar que elijas dentro del alcance. Tú decides el aspecto de la criatura, y está equipada con una silla de montar, bocado y brida. Cualquier parte del equipo creado por el conjuro se desvanece en una nube de humo si se aleja más de 10 pies de la montura.*Mientras dura el conjuro, tú o la criatura que elijas podéis montar en la montura. La criatura usa las estadísticas de un caballo de monta, excepto porque tiene una velocidad de 100 pies y puede viajar a 10 millas por hora, o 13 millas a un ritmo rápido. Cuando el conjuro termina, la montura se desvanece poco a poco y el jinete tiene 1 minuto para desmontar. El conjuro termina si usas una acción para disiparlo o si la montura recibe daño.",
            },

            {
                icono: "../assets/nivel3/crearComidaAgua.svg",
                texto: "Crear comida y agua",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Paladín ",
                informacion: "Creas 45 libras de comida y 30 galones de agua en el suelo o en un recipiente dentro del alcance, suficientes para sustentar hasta 15 humanoides o 5 monturas durante 24 horas. La comida es insípida, pero tiene nutrientes, y se estropea si no se come antes de 24 horas. El agua está limpia y no se pudre.",
            },

            {
                icono: "../assets/nivel3/crecimientoVegetal.svg",
                texto: "Crecimiento vegetal",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción u 8 horas",
                alcance: "150 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Este conjuro canaliza la vitalidad de las plantas en un área específica. Hay dos usos posibles para este conjuro, ya sea consiguiendo beneficios inmediatos o a largo plazo.*Si lanzas este conjuro usando 1 acción, elige un punto dentro del alcance. Todas las plantas normales que se encuentren en un radio de 100 pies, cuyo origen sea ese punto, se hacen más gruesas y frondosas. Una criatura que se mueva por el área debe gastar 4 pies de movimiento por cada pie que se mueva.*Puedes excluir del efecto cualquier área de cualquier tamaño dentro del área del conjuro.*Si lanzas este conjuro durante 8 horas, enriqueces la tierra. Todas las plantas que se encuentren en un radio de media milla, cuyo origen sea un punto dentro del alcance, estarán enriquecidas durante 1 año. Las plantas producen el doble de la cantidad normal de comida cuando se cosechan.",
            },

            {
                icono: "../assets/nivel3/desplazamiento.svg",
                texto: "Desplazamiento",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Tiras 1d20 al final de cada uno de tus turnos mientras dure el conjuro. Si sacas 11 o más, te desvaneces del plano de existencia en el que estés y apareces en el Plano Etéreo (el conjuro falla y el lanzamiento se desperdicia si ya estás en ese plano). Al principio de tu siguiente turno, y cuando el conjuro termine si estás en el Plano Etéreo, vuelves al espacio sin ocupar que elijas y que puedas ver a 10 pies o menos del lugar en que te desvaneciste. Si no hay ningún espacio libre en esa distancia, apareces en el espacio libre más cercano (se elige al azar si hay más de un espacio igual de cerca). Puedes disipar este conjuro como acción.*Mientras estás en el Plano Etéreo, puedes ver y escuchar el plano del que provienes, que está sumido en sombras, hasta 60 pies de ti. Solo puedes afectar y ser afectado por otras criaturas del Plano Etéreo. Las criaturas que no estén ahí no pueden percibirte ni interactuar contigo, a menos que tengan la capacidad para hacerlo.",
            },

            {
                icono: "../assets/nivel3/disiparMagia.svg",
                texto: "Disipar magia",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pìes",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Brujo, Clérigo, Druida, Hechicero, Mago y Paladín",
                informacion: "Elige una criatura, objeto o efecto mágico dentro del alcance. Cualquier conjuro de nivel 3 o inferior que se haya lanzado sobre el objetivo termina. Por cada conjuro de nivel 4 o superior que haya sobre él, haz una prueba de característica usando tu característica para lanzar conjuros. La CD es 10 + el nivel del conjuro. Si superas la prueba, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, anulas automáticamente el efecto de un conjuro sobre el objetivo si el nivel del conjuro es igual o menor que el nivel del espacio que usas.",
            },

            {
                icono: "../assets/nivel3/donLenguas.svg",
                texto: "Don de lenguas",
                componentes: "V, M (Maqueta de zigurat de arcilla)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Este conjuro le concede a la criatura que tocas la capacidad de entender cualquier lengua hablada que escuche. Además, cuando el objetivo habla, cualquier criatura que conozca al menos una lengua y que pueda oírlo entiende lo que dice.",
            },

            {
                icono: "../assets/nivel3/espiritusGuardianes.svg",
                texto: "Espíritus guardianes",
                componentes: "V, S, M (Un símbolo sagrado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Área 15 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 3d8 radiante",
                clases: "Clérigo",
                informacion: "Llamas a los espíritus para que acudan en tu auxilio. Hasta el final de la duración del conjuro, estos espíritus revolotean a tu alrededor, moviéndose en un radio de 15 pies. Si eres bueno o neutral, su forma espectral es angelical o feérica (según elijas). Si eres malvado, su forma es infernal.*Cuando lanzas este conjuro, puedes designar cualquier número de criaturas que puedas ver para que no queden afectadas por el conjuro. La velocidad de una criatura afectada se divide por dos y, cuando entra en el área por primera vez en un turno o empieza su turno ahí, debe hacer una tirada de salvación de Sabiduría. Si falla, recibe 3d8 puntos de daño radiante (si eres bueno o neutral) o 3d8 puntos de daño necrótico (si eres maligno). Si tiene éxito, recibe la mitad de daño.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d8 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/formaGaseosa.svg",
                texto: "Forma gaseosa",
                componentes: "V, S, M (Grasa y voluta de humo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Transformas a una criatura voluntaria que tocas, junto con todo lo que lleve puesto y lo que transporte, en una nube brumosa mientras dura el conjuro. El conjuro termina si los puntos de golpe de la criatura se reducen a 0. El conjuro no afecta a criaturas incorpóreas.*Mientras está en esta forma, el único modo de moverse que tiene el objetivo es volar a una velocidad de 10 pies. Puede entrar y ocupar el espacio de otra criatura. Tiene resistencia al daño no mágico y tiene ventaja en las tiradas de salvación de Fuerza, Destreza y Constitución. Puede atravesar agujeros pequeños, aberturas estrechas e incluso meras grietas, aunque considera los líquidos como si fueran superficies sólidas. El objetivo no puede caer y permanece flotando en el aire incluso si está aturdido o incapacitado.*Mientras está en forma de nube brumosa, el objetivo no puede ni hablar ni manipular objetos. Tampoco puede tirar, usar ni interactuar con ningún objeto que lleve puesto o transporte. El objetivo no puede atacar ni lanzar conjuros.",
            },

            {
                icono: "../assets/nivel3/fundirsePiedra.svg",
                texto: "Fundirse con la piedra",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "--",
                clases: "Clérigo y Druida",
                informacion: "Al pisar un objeto o una superficie de piedra lo suficientemente largo como para contener tu cuerpo completamente, tu cuerpo y el equipo que llevas contigo se convierten en piedra mientras dura el conjuro. Usando tu movimiento, pisas la piedra en un punto que puedas tocar. Nada de tu presencia permanece visible ni detectable por medios no mágicos.*Mientras estés fundido con la piedra, no puedes ver y tienes desventaja en cualquier prueba de Sabiduría (Percepción) que hagas para escuchar sonidos, pero eres consciente del paso del tiempo y puedes lanzar conjuros sobre ti mismo. Puedes usar tu movimiento para salir de la piedra por el mismo lugar por donde entraste, lo cual termina con el conjuro. Si no, no puedes moverte.*El daño físico menor que reciba la piedra no te daña, pero si se destruye parcialmente o se cambia de forma a una longitud que no te pueda contener, te expulsa y te inflige 6d6 puntos de daño contundente. Si se destruye totalmente o se transmuta en otra sustancia, te expulsa y te inflige 50 puntos de daño contundente. Si eres expulsado, caes tumbado en el lugar libre que esté más cerca del lugar donde entraste en primer lugar.",
            },

            {
                icono: "../assets/nivel3/glifoCustodio.svg",
                texto: "Glifo custodio",
                componentes: "V, S, M (Incienso, diamante pulverizado 200po)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Hasta disipado o disparado",
                ataque: "--",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Cuando lanzas este conjuro, inscribes un glifo que hiere a otras criaturas, ya sea en la superficie de un objeto (como una mesa o una sección del suelo o de la pared) o dentro de un objeto que se pueda cerrar (como un libro, un pergamino o un cofre de tesoro). Si eliges una superficie, el glifo puede cubrir un área que no tenga más de 10 pies de diámetro. Si eliges un objeto, ese objeto debe permanecer en su lugar: si se mueve a más de 10 pies de donde lanzas el conjuro, el glifo se rompe y el conjuro termina sin haberse activado.*El glifo es prácticamente invisible y para encontrarlo hay que superar una prueba de Inteligencia (Investigación) contra la CD de salvación de tu conjuro.*Tú decides qué activa el glifo cuando lanzas el conjuro. Los desencadenantes más habituales de los glifos inscritos en una superficie son tocar o pisar el glifo, quitar otro objeto que lo cubría, acercarse a cierta distancia o manipular el objeto en el que está inscrito. Los de glifos inscritos en un objeto son abrir el objeto, acercarse a una cierta distancia o ver o leer el glifo. Una vez que el glifo se ha activado, este conjuro termina.*Más aún, puedes refinar la forma de activar el glifo para que lo haga solo bajo determinadas circunstancias o de acuerdo a unas características físicas (como peso o tamaño), a un tipo de criatura (por ejemplo, que solo afecte a las aberraciones o drows), o alineamiento. También puedes establecer condiciones para que ciertas criaturas no activen el glifo, como las que dicen una contraseña determinada.*Cuando inscribes el glifo, eliges si es de conjuro o explosivo.*→ Glifo de conjuro. Puedes almacenar un conjuro preparado de nivel 3 o inferior en el glifo lanzándolo como parte de la creación del glifo. El conjuro debe tener como objetivo una sola criatura o área y no tiene un efecto inmediato cuando se lanza de este modo. Cuando el glifo se activa, el conjuro almacenado se lanza. Si el conjuro tiene un objetivo, este apunta a la criatura que ha activado el glifo. Si el conjuro afecta a un área, su centro será esa criatura. Si el conjuro convoca criaturas hostiles o crea objetos dañinos o trampas, estos aparecen lo más cerca posible del intruso y lo atacan. Si el conjuro requiere concentración, dura hasta el final de toda su duración.*→ Glifo explosivo. Cuando se activa, el glifo explota con energía mágica en una esfera con un radio de 20 pies cuyo centro es el glifo. La esfera se extiende en las esquinas. Todas las criaturas que se encuentren en el área deben hacer una tirada de salvación de Destreza. Si fallan, reciben 5d8 puntos de daño por ácido, frío, fuego, relámpago o trueno (según elijas cuando crees el glifo) y, si tienen éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño de un glifo explosivo aumenta en 1d8 por cada espacio de nivel por encima de 3. Si creas un glifo de conjuro, puedes almacenar cualquier conjuro del mismo nivel que el espacio de conjuro que uses para el Glifo custodio.",
            },

            {
                icono: "../assets/nivel3/hablarPlantas.svg",
                texto: "Hablar con las plantas",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Área 30 pies)",
                duracion: "10 minutos",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Imbuyes a las plantas que se encuentran a 30 pies o menos de ti con una conciencia y una animación limitadas, lo que les da la capacidad de comunicarse contigo y seguir órdenes sencillas. Puedes preguntarles sobre eventos que sucedieron en el área del conjuro en los últimos días, como sobre las criaturas que han pasado, el clima y otras circunstancias.*También, mientras dura el conjuro, puedes convertir un terreno difícil a causa del crecimiento de plantas (como matorrales y broza) en un terreno normal o convertir un terreno normal donde hay plantas en un terreno difícil, haciendo que las vides y las ramas entorpezcan a los perseguidores, por ejemplo.*Las plantas pueden realizar otras tareas en tu beneficio, a discreción del director de juego. El conjuro no permite que las plantas se arranquen ellas mismas y que se muevan, pero pueden mover libremente ramas, zarzas y tallos.*Si hay una criatura planta en el área, puedes comunicarte con ella si compartís un lenguaje en común, pero no consigues ninguna capacidad mágica para influir en ella.*Este conjuro puede hacer que las plantas creadas por el conjuro Enmarañar liberen a una criatura apresada.",
            },

            {
                icono: "../assets/nivel3/hablarMuertos.svg",
                texto: "Hablar con los muertos",
                componentes: "V, S, M (Incienso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "10 minutos",
                ataque: "--",
                clases: "Bardo y Clérigo",
                informacion: "Concedes la apariencia de vida e inteligencia a un cadáver de tu elección dentro del alcance del conjuro, lo que le permite responder a las preguntas que le hagas. El cadáver debe tener todavía boca y no puede ser un no muerto. El conjuro falla si el cadáver ha sido objeto de este conjuro en los últimos diez días.*Hasta que el conjuro termine, puedes hacerle al cadáver hasta cinco preguntas. El cadáver solo sabe lo que sabía en vida, incluyendo el idioma que hablaba. Las respuestas suelen ser breves, crípticas o repetitivas, y el cadáver no está obligado a dar una respuesta verdadera si eres hostil o si te reconoce como un enemigo. Este conjuro no hace que el alma de la criatura vuelva a su cuerpo, solo anima su espíritu. Por ello el cadáver no puede aprender nueva información, no comprende nada de lo que ha pasado desde que murió y no puede especular sobre eventos futuros.",
            },

            {
                icono: "../assets/nivel3/imagenMayor.svg",
                texto: "Imagen mayor",
                componentes: "V, S, M (Vellón)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Cuadro 20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Creas la imagen de un objeto, criatura y algún otro fenómeno visible que no sea mayor que un cubo de 20 pies. La imagen aparece en un lugar que puedas ver dentro del alcance y dura mientras lo haga el conjuro. Parece completamente real, incluyendo los sonidos, los olores y la temperatura correspondiente a lo que representa. No puedes crear calor o frío suficientes para infligir daño, un sonido lo suficientemente alto para producir daño por trueno o ensordecer a una criatura ni un olor que podría marear a una criatura (como el hedor de un troglodita).*Mientras te encuentres dentro del alcance de la ilusión, puedes usar tu acción para hacer que la imagen se mueva a otro lugar dentro del alcance. Cuando la imagen cambia de lugar, puedes alterar su apariencia para que sus movimientos parezcan naturales. Por ejemplo, si creas una imagen de una criatura y la mueves, puedes alterarla para que parezca que está andando. Del mismo modo, puedes hacer que la ilusión haga sonidos diferentes en cada momento, incluso hacer que mantenga una conversación, por ejemplo.*Interaccionar físicamente con la imagen revela que es una ilusión, dado que las cosas pueden atravesarla. Una criatura puede determinar que es una ilusión si examina la imagen usando su acción y supera una prueba de Inteligencia (Investigación) contra la CD de salvación de tu conjuro. Si lo consigue, puede ver a través de la imagen y el resto de cualidades sensoriales se vuelven vagas para ella.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el conjuro dura hasta que se disipa y no hace falta que te concentres en él.",
            },

            {
                icono: "../assets/nivel3/imponerMaldicion.svg",
                texto: "Imponer maldición ",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Tocas a una criatura, la cual debe superar una tirada de salvación de Sabiduría o quedará maldecida hasta que termine el conjuro. Cuando lances este conjuro, elige la naturaleza de la maldición de entre estas opciones:*→ Elige una puntuación de característica. Mientras el objetivo esté maldito, tendrá desventaja en las pruebas de característica y tiradas de salvación hechas con esa puntuación de característica.*→ Mientras el objetivo esté maldito, tendrá desventaja en las tiradas de ataque contra ti.*→ Mientras el objetivo esté maldito, deberá realizar una tirada de salvación de Sabiduría al principio de cada uno de sus turnos. Si la falla, malgastará su acción ese turno sin hacer nada.*→ Mientras el objetivo esté maldito, tus ataques y conjuros le infligirán 1d8 de daño necrótico adicional.*Un conjuro levantar maldición pone fin a este efecto. Si tu GM lo cree conveniente, puedes elegir un efecto alternativo para la maldición, pero este no podrá ser más poderoso que los descritos anteriormente y tu GM tendrá la última palabra sobre él.*A niveles superiores. Si lanzas este conjuro mediante un espacio de conjuro de nivel 4 o superior, su duración será la concentración, hasta 10 minutos. Si usas un espacio de conjuro de nivel 5 o superior, la duración será de 8 horas. Si usas un espacio de conjuro de nivel 7 o superior, la duración será de 24 horas. Si usas un espacio de conjuro de nivel 9, el conjuro durará hasta que sea disipado. Si usas un espacio de conjuro de nivel 5 o superior, la duración no requiere concentración.",
            },

            {
                icono: "../assets/nivel3/indetectable.svg",
                texto: "Indetectable",
                componentes: "V, S, M (Polvo de diamante 25po)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "--",
                clases: "Bardo, Explorador y Mago",
                informacion: "Mientras dura el conjuro, escondes de la adivinación mágica a un objetivo que toques. Este puede ser una criatura voluntaria, un lugar o un objeto que no mida más de 10 pies en cualquier dimensión. Ninguna adivinación mágica puede afectar al objetivo, ni tampoco se le puede percibir mediante sensores predictivos mágicos.",
            },

            {
                icono: "../assets/nivel3/levantarMaldicion.svg",
                texto: "Levantar maldición",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Brujo, Clérigo, Mago y Paladín",
                informacion: "Con tu toque, todas las maldiciones que afectan a una criatura o a un objeto terminan. Si el objeto es un objeto mágico maldito, la maldición permanece, pero el conjuro rompe el vínculo de su dueño con el objeto para que se pueda eliminar o descartar.",
            },

            {
                icono: "../assets/nivel3/llamarRelampago.svg",
                texto: "Llamar al relámpago",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Área 60 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 3d10 relámpago",
                clases: "Druida",
                informacion: "Una nube de tormenta aparece en forma de un cilindro de 10 pies de altura y 60 pies de radio, cuyo centro es un punto que puedas ver directamente encima de ti a 100 pies. El conjuro falla si no puedes ver el punto en el aire en el que aparece la nube de tormenta (por ejemplo, si estás en una habitación en la que no cabe la nube).*Cuando lances el conjuro, elige un punto que puedas ver dentro del alcance y un relámpago surgirá de la nube en ese punto. Cada criatura que se encuentre a 5 pies o menos de ese punto debe hacer una tirada de salvación de Destreza. Si falla, recibe 3d10 puntos de daño por relámpago y, si tiene éxito, la mitad. En cada uno de tus turnos hasta que termine el conjuro, puedes usar tu acción para volver a invocar un relámpago de este modo, sea el objetivo el mismo u otro diferente.*Si estás al aire libre y hay tormenta cuando lanzas el conjuro, este te da control sobre la tormenta que ya existe en lugar de crear una nueva. Bajo tales circunstancias, el daño del conjuro aumenta en 1d10.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d10 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/luzDia.svg",
                texto: "Luz del día",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 60 pies)",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador, Hechicero, Paladín",
                informacion: "Una esfera de luz de 60 pies de radio se expande desde un punto de tu elección dentro del alcance. La esfera es de luz brillante y emite luz tenue en 60 pies adicionales.*Si el punto que eliges está en un objeto que sostienes o uno que nadie lleva puesto ni transporta, la luz emana del objeto y se mueve con él. Cubrirlo completamente con algo opaco, como un cuenco o un yelmo, bloquea la luz.*Si cualquier parte del área del conjuro se solapa con un área de oscuridad creada por un conjuro de nivel 3 o inferior, el conjuro que ha creado la oscuridad se disipa.",
            },

            {
                icono: "../assets/nivel3/muroViento.svg",
                texto: "Muro de viento",
                componentes: "V, S, M (Abanico diminuto y pluma exótica)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 3d8 contundente",
                clases: "Druida y Explorador",
                informacion: "Un muro de fuerte viento surge en el suelo en un punto que elijas dentro del alcance. Puedes hacer que el muro sea de hasta 50 pies de largo, 15 de alto y 1 de grosor. Puedes darle forma como quieras mientras forme un sendero continuo en el suelo. El muro dura mientras lo haga el conjuro.*Cuando el muro aparece, todas las criaturas que se encuentren en el área deben hacer una tirada de salvación de Fuerza. Si fallan, reciben 3d8 puntos de daño contundente y, si tienen éxito, la mitad.*El fuerte viento mantiene la niebla, el humo y otros gases a raya. Las criaturas voladoras u objetos Pequeños o menores no pueden atravesar el muro. Los materiales ligeros sueltos que entran en el muro se elevan hacia arriba. Las flechas, virotes y otros proyectiles ordinarios que se lanzan a los objetivos que hay tras el muro se desvían hacia arriba y fallan automáticamente (las rocas que lanzan los gigantes o las máquinas de asedio, así como los proyectiles similares, no se ven afectados). Las criaturas que tienen forma gaseosa no pueden traspasar el muro.",
            },

            {
                icono: "../assets/nivel3/nubeApestosa.svg",
                texto: "Nube apestosa",
                componentes: "V, S, M (Huevo podrido u hojas de col)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies (Área 20 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Creas una esfera de un gas amarillo y nauseabundo de 20 pies de radio, cuyo centro se encuentra en un punto dentro del alcance. La nube se extiende en las esquinas y su área está muy resguardada. La nube se mantiene en el aire mientras dura el conjuro.*Cada criatura que se encuentre completamente dentro de la nube al principio de su turno debe hacer una tirada de salvación de Constitución contra el veneno. Si falla, la criatura gasta su acción vomitando y tambaleándose. Las criaturas que no necesitan respirar o que son inmunes al veneno tienen éxito automáticamente.*Un viento moderado (de al menos 10 millas por hora) dispersa la nube después de 4 rondas. Un viento fuerte (de al menos 20 millas por hora) la dispersa después de 1 ronda.",
            },

            {
                icono: "../assets/nivel3/palabraCuracion.svg",
                texto: "Palabra de curación en masa",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Al pronunciar unas palabras de recuperación, hasta seis criaturas de tu elección que puedas ver dentro del alcance recuperan una cantidad de puntos de golpe igual a 1d4 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto sobre no muertos ni constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, la curación aumenta en 1d4 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/patronHipnotico.svg",
                texto: "Patrón hipnótico",
                componentes: "S, M (Incienso o vial fosforescente)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Cuadro 30 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Creas un patrón de colores zigzagueante que ondula en el aire dentro de un cubo de 30 pies que se encuentra dentro del alcance. El patrón aparece durante un momento y luego e desvanece. Cada criatura dentro del área que vea el patrón debe hacer una tirada de salvación de Sabiduría. Si falla, queda hechizada mientras dura el conjuro. Mientras esté hechizada por este conjuro, la criatura está incapacitada y tiene una velocidad igual a 0.*El conjuro termina si la criatura recibe daño o si alguien usa una acción para zarandearla y hacer que salga de su estupor.",
            },

            {
                icono: "../assets/nivel3/pequenaChozaLeomund.svg",
                texto: "Pequeña choza de Leomund",
                componentes: "V, S, M (Cristal pequeño)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "8 horas",
                ataque: "--",
                clases: "Bardo y Mago",
                informacion: "Una cúpula de fuerza inmóvil con un radio de 10 pies te rodea por encima mientras dura el conjuro. El conjuro termina si te vas del área.*Nueve criaturas de tamaño Mediano o menor pueden entrar dentro de la cúpula contigo. El conjuro falla si en el área hay una criatura mayor o más de nueve criaturas. Las criaturas y los objetos que se encuentren dentro de la cúpula cuando lanzas el conjuro pueden cruzarla y moverse por ella libremente. Dentro de la cúpula no tienen efecto conjuros ni otros efectos mágicos, ni se pueden lanzar a través de ella desde fuera. La atmósfera que hay dentro del espacio es cómoda y seca, independientemente del clima exterior.*Hasta que el conjuro termine, puedes hacer que el interior esté débilmente iluminado u oscuro. La cúpula es opaca desde el exterior y del color que elijas, pero es transparente desde dentro.",
            },

            {
                icono: "../assets/nivel3/proteccionEnergia.svg",
                texto: "Protección contra energía",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, una criatura voluntaria a la que tocas tiene resistencia al tipo de daño que elijas: ácido, frío, fuego, relámpago o trueno.",
            },

            {
                icono: "../assets/nivel3/ralentizar.svg",
                texto: "Ralentizar",
                componentes: "V, S, M (Gota de melaza)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Cuadro 40 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Alteras el tiempo de hasta seis criaturas de tu elección en un cubo de 40 pies dentro del alcance. Cada objetivo debe superar una tirada de salvación de Sabiduría para no quedar afectado por este conjuro mientras dure.*La velocidad de un objetivo afectado se divide por dos y este recibe un penalizador de –2 a la CA y a las tiradas de salvación de Destreza y no puede usar reacciones. En su turno puede usar una acción o una acción adicional, pero no las dos. Independientemente de las características u objetos mágicos de la criatura, no puede hacer más de un ataque cuerpo a cuerpo o a distancia durante su turno.*Si la criatura intenta lanzar un conjuro que tiene un tiempo de lanzamiento de 1 acción, tira 1d20. Si saca 11 o más, el conjuro no tiene efecto hasta su siguiente turno y debe usar su acción de ese turno para completar el conjuro. Si no puede lanzarlo, el conjuro se desperdicia.*Una criatura afectada por este conjuro hace otra tirada de salvación de Sabiduría al final de su turno. Si tiene éxito, el efecto termina para ella.",
            },

            {
                icono: "../assets/nivel3/recado.svg",
                texto: "Recado",
                componentes: "V, S, M (Hilo de cobre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Ilimitado",
                duracion: "1 turno",
                ataque: "--",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Envías un mensaje corto de 25 palabras o menos a una criatura con la que estés familiarizado. La criatura escucha el mensaje en su mente, te reconoce como la persona que lo envía y puede responder del mismo modo inmediatamente. El conjuro permite que criaturas con al menos Inteligencia 1 entiendan el significado de tu mensaje.*Puedes enviar el mensaje a través de cualquier distancia e incluso a otros planos de existencia, pero si el objetivo está en un plano diferente al tuyo, hay un 5 % de probabilidades de que el mensaje no llegue.",
            },

            {
                icono: "../assets/nivel3/relampago.svg",
                texto: "Relámpago",
                componentes: "V, S, M (Pelaje animal y algún vidrio)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (↑ 100 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 8d6 relámpago",
                clases: "Hechicero y Mago",
                informacion: "Un rayo de luz de 100 pies de longitud y 5 pies de anchura surge de ti en cualquier dirección que elijas. Cada criatura que se encuentre en la línea debe hacer una tirada de salvación de Destreza. Si falla, recibe 8d6 puntos de daño por relámpago y, si tiene éxito, la mitad.*El rayo quema los objetos inflamables que se encuentren dentro del área y que nadie lleve puestos ni transporte.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/respirarBajoAgua.svg",
                texto: "Respirar bajo el agua",
                componentes: "V, S, M (Caña o tallo de paja)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "24 horas",
                ataque: "--",
                clases: "Explorador, Druida, Hechicero y Mago",
                informacion: "Este conjuro concede a diez criaturas voluntarias que puedas ver dentro del alcance la capacidad de respirar bajo el agua hasta que termine el conjuro. Las criaturas afectadas también conservan su forma de respirar habitual.",
            },

            {
                icono: "../assets/nivel3/revivir.svg",
                texto: "Revivir",
                componentes: "V, S, M (diamantes 300po)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Paladín",
                informacion: "Tocas a una criatura que ha muerto en el último minuto y esta regresa a la vida con 1 punto de golpe. Este conjuro no puede hacer que una criatura que ha muerto debido a la edad vuelva a la vida, y tampoco recupera ninguna parte del cuerpo perdida.",
            },

            {
                icono: "../assets/nivel3/senalEsperanza.svg",
                texto: "Señal de esperanza",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Este conjuro confiere esperanza y vitalidad. Elige cualquier número de criaturas dentro del alcance. Mientras dure el conjuro, todos los objetivos tienen ventaja en las tiradas de salvación de Sabiduría y contra muerte, y recuperan el número máximo de puntos de golpe posible de cualquier curación.",
            },

            {
                icono: "../assets/nivel3/terror.svg",
                texto: "Terror",
                componentes: "V, S, M (Pluma blanca o corazón de gallina)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Cono 30 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Proyectas una imagen fantasmal de los peores miedos de una criatura. Cada criatura que se encuentre en un cono de 30 pies debe superar una tirada de salvación de Sabiduría para no tirar cualquier cosa que esté sujetando y quedar asustada mientras dure el conjuro.*Mientras esté asustada a causa de este conjuro, una criatura debe realizar una acción de esprintar y alejarse de ti por la ruta más segura disponible durante cada uno de sus turnos, a menos que no haya ningún lugar al que moverse. Si termina su turno en un lugar donde no te tiene en su línea de visión, puede hacer una tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina para ella.",
            },

            {
                icono: "../assets/nivel3/toqueVampirico.svg",
                texto: "Toque vampírico",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo 3d6 necrótico",
                clases: "Brujo y Mago",
                informacion: "El toque de tu mano cubierta de sombras puede extraer la fuerza vital de otros para curar tus heridas. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura dentro de tu alcance. Si impactas, el objetivo recibe 3d6 puntos de daño necrótico y tú recuperas tantos puntos de golpe como la mitad del daño infligido. Hasta que el conjuro termine, puedes volver a hacer el ataque en cada uno de tus turnos como acción.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada nivel por encima de 3.",
            },

            {
                icono: "../assets/nivel3/tormentaAguanieve.svg",
                texto: "Tormenta de aguanieve",
                componentes: "V, S, M (Polvo y agua)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (Área 40 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Druida, Hechicero y Mago",
                informacion: "Hasta que el conjuro termina, cae una lluvia gélida y granizo en un cilindro de 20 pies de altura con un radio de 40 pies cuyo centro es un punto que elijas dentro del alcance. El área está muy resguardada y las llamas expuestas que haya en ella se apagan.*El suelo del área se cubre de un hielo resbaladizo, lo que lo convierte en terreno difícil. Cuando una criatura entra en el área de efecto del conjuro por primera vez en un turno o empieza su turno ahí, debe hacer una tirada de salvación de Destreza. Si falla, cae tumbada.*Si la criatura está concentrándose en el área del conjuro, debe superar una tirada de salvación de Constitución enfrentada a la CD de salvación de tu conjuro para no perder la concentración.",
            },

            {
                icono: "../assets/nivel3/volar.svg",
                texto: "Volar",
                componentes: "V, S, M (Pluma)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Tocas a una criatura voluntaria. El objetivo consigue una velocidad volando de 60 pies mientras dura el conjuro. Cuando el conjuro termina, el objetivo cae si todavía está flotando, a menos que pueda detener la caída.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 3.",
            },










        ],
    },
    {
        id: 5,
        nivel: "Nivel 4",
        backgroundColor: '#7fb3d5',
        conjuros: [
            {
                
                icono: "../assets/nivel4/adivinacion.svg",
                texto: "Adivinación",
                componentes: "V,S,M (incienso y una ofrenda apropiada para tu religión, de al menos 25 po de valor total, los cuales consume el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Tu magia y tu ofrenda te ponen en contacto con un dios o con el sirviente de un dios al que puedes hacer una única pregunta concerniente a una meta, evento o actividad específica que ocurrirá en un plazo máximo de 7 días. El director de juego te dará una respuesta veraz, la cual puede ser una frase corta, una rima críptica o un augurio.* El conjuro no tiene en cuenta cualquier circunstancia posible que pueda cambiar el resultado, como si se lanza un conjuro adicional o si se gana o se pierde un compañero.* Si lanzas el conjuro dos o más veces antes de terminar tu siguiente descanso prolongado, hay un 25 % de probabilidades acumulativas de obtener una lectura aleatoria cada vez que lances el conjuro después de la primera vez. El director de juego hace esta tirada en secreto."
            },
            {
                icono: "../assets/nivel4/asesinoFantasmal.svg",
                texto: "Asesino fantasmal",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                ataque: "Contra salvación 4d10 psíquico",
                clases: "Mago",
                informacion: "Accedes a las pesadillas de una criatura que puedas ver dentro del alcance y creas una manifestación ilusoria de sus miedos más profundos, que solo puede ver esa criatura. El objetivo debe hacer una tirada de salvación de Sabiduría. Si falla, queda asustado mientras dura el conjuro. Al final de cada uno de sus turnos antes de que termine el conjuro, el objetivo debe superar una tirada de salvación de Sabiduría para no recibir 4d10 puntos de daño psíquico. Si supera la tirada, el conjuro termina.* En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, el daño aumenta en 1d10 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel4/cofreOcultoLeomund.svg",
                texto: "Cofre oculto de Leomund",
                componentes: "V,S,M (un cofre exquisito, de 3×2×2 pies, construido con materiales raros de al menos 5000 po de valor, y una réplica Diminuta hecha con los mismos materiales de al menos 50 po de valor)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Mago",
                informacion: "Escondes un cofre y todo su contenido en el Plano Etéreo. Debes tocar el cofre y la réplica en miniatura que sirve como componente material. El cofre puede contener hasta 12 pies cúbicos de un material inerte (3×2×2 pies).* Mientras el cofre permanezca en el Plano Etéreo, puedes usar una acción y tocar la réplica para retirar el cofre, que aparece en un lugar sin ocupar en el suelo a 5 pies o menos de ti. Puedes volver a enviar el cofre al Plano Etéreo usando una acción y tocando tanto el cofre como la réplica.* Después de 60 días, hay un 5 % de probabilidades por día (acumulativo) de que el efecto del conjuro termine. El efecto termina si vuelves a lanzar el conjuro, si la réplica del cofre se destruye o si eliges terminar el conjuro como acción. Si el conjuro termina y el cofre está en el Plano Etéreo, se pierde irremediablemente."
            },
            {
                icono: "../assets/nivel4/compulsion.svg",
                texto: "Compulsión",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo",
                informacion: "Las criaturas que elijas que estén dentro del alcance y que puedan escucharte deben hacer una tirada de salvación de Sabiduría, que superan automáticamente si no pueden quedar hechizadas. Si falla, el objetivo queda afectado por este conjuro. Hasta que el conjuro termine, puedes usar una acción adicional en cada uno de tus turnos para designar una dirección horizontal que vaya a ti. Cada objetivo afectado debe usar todo su movimiento disponible para moverse en esa dirección durante su siguiente turno. Puede realizar su acción antes de moverse. Después de moverse en ese sentido, puede hacer otra tirada de salvación de Sabiduría para intentar terminar con el efecto.* El objetivo no está obligado a moverse hacia un peligro que es obviamente letal, como un fuego o un socavón, pero provocará ataques de oportunidad al moverse en la dirección designada."
            },
            {
                icono: "../assets/nivel4/confusion.svg",
                texto: "Confusión",
                componentes: "V,S,M (tres cáscaras de nuez)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies (10 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Druida, Hechicero y Mago",
                informacion: "Este conjuro distorsiona la mente de las criaturas creando ilusiones y provocando acciones incontroladas. Todas las criaturas que se encuentren en una esfera de 10 pies de radio, cuyo centro está en un lugar de tu elección dentro del alcance, deben superar una tirada de salvación de Sabiduría cuando lances este conjuro para no quedar afectadas por él.* Un objetivo afectado no puede reaccionar y debe tirar 1d10 al principio de cada uno de sus turnos para determinar su comportamiento.* → 1d10 - La criatura usa todo su movimiento para moverse en una dirección al azar. Para determinar dicha dirección, tira 1d8 y asigna una dirección a cada una de las caras del dado. La criatura no realiza ninguna acción este turno.*→ 2-6 d10 - La criatura no se mueve ni realiza acciones este turno.* → 7-8 d10 - La criatura usa su acción para realizar un ataque cuerpo a cuerpo contra una criatura determinada al azar dentro de su alcance. Si no hay ninguna criatura dentro de su alcance, no hace nada durante este turno.* → 9-10 - La criatura puede actuar y moverse con normalidad. *Al final de cada turno, un objetivo afectado puede hacer una tirada de salvación de Sabiduría. Si tiene éxito, el efecto termina.* En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, el radio de la esfera aumenta en 5 pies por cada nivel por encima de 4."
            },
            {
                icono: "../assets/nivel4/conjurarElemental.svg",
                texto: "Conjurar elementales menores",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                clases: "Druida y Mago",
                informacion: "Convocas elementales que aparecen en un espacio sin ocupar que puedas ver dentro del alcance. Eliges entre estas opciones:* → Un elemental con un valor de desafío igual a 2 o menos* → Dos elementales con un valor de desafío igual a 1 o menos* → Ccuatro elementales con un valor de desafío igual a 1/2 o menos* → Ocho elementales con un valor de desafío igual a 1/4 o menos.* Un elemental convocado mediante este conjuro desaparece cuando sus puntos de golpe se reducen a 0 o cuando finaliza el conjuro.*Las criaturas convocadas son amistosas hacia ti y tus compañeros. Tira iniciativa por ellas como si fueran un grupo, que tiene sus propios turnos. Obedecen cualquier orden verbal que les des (no requiere que realices ninguna acción). Si no les das ninguna orden, se defienden de criaturas hostiles, pero, si no las hay, no realizan ninguna acción.*El director de juego determina las estadísticas de las criaturas.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de un nivel determinado, aparecen más criaturas de las que elegiste: con un espacio de nivel 6 aparecen el doble y con un espacio de nivel 8, el triple."
            },
            {
                icono: "../assets/nivel4/conjurarSeresBosques.svg",
                texto: "Conjurar seres de los bosques",
                componentes: "V,S,M (una baya sagrada por criatura convocada)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                clases: "Explorador y Druida",
                informacion: "Convocas criaturas feéricas que aparecen en espacios sin ocupar que puedas ver dentro del alcance. Elige entre las siguientes opciones:* → Una criatura feérica con un valor de desafío igual a 2 o menos* → Dos criaturas feéricas con un valor de desafío igual a 1 o menos. *→ Cuatro criaturas feéricas con un valor de desafío igual a 1/2 o menos.*→ Ocho criaturas feéricas con un valor de desafío igual a 1/4 o menos. Una criatura convocada desaparece cuando sus puntos de golpe se reducen a 0 o cuando el conjuro termina.*Las criaturas convocadas son amistosas hacia ti y tus compañeros mientras dura el conjuro. Tira iniciativa por las criaturas como si fueran un grupo, que tiene sus propios turnos. Obedecen cualquier orden verbal que les des (no requiere que realices ninguna acción). Si no les das ninguna orden, se defienden de las criaturas hostiles, pero, si no las hay, no realizan ninguna acción.*El director de juego determina las estadísticas de las criaturas.*En niveles superiores. Cuando lances este conjuro usando un espacio de un nivel superior determinado, aparecerán más criaturas de las que elegiste: con un espacio de nivel 6 aparecen el doble de criaturas y con un espacio de nivel 8, el triple."
            },
            {
                icono: "../assets/nivel4/controlarAgua.svg",
                texto: "Controlar agua",
                componentes: "V,S,M (una gota de agua y una pizca de polvo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies",
                duracion: "Concentración 10 minutos",
                clases: "Clérigo, Druida y Mago",
                informacion: "Hasta que el conjuro acaba, controlas el agua corriente que haya dentro del área que elijas, que puede ser un cubo de hasta 100 pies de lado. Puedes elegir cualquiera de los siguientes efectos cuando lanzas el conjuro. Como acción durante tu turno, puedes repetir el mismo efecto o elegir uno diferente.*→ Apartar las aguas. Haces que el agua del área se aparte y cree una fosa que se extiende por el área del conjuro. El agua separada forma una muralla a cada lado. La fosa permanece hasta que el conjuro termina o hasta que elijas un efecto diferente. Luego, el agua vuelve a llenar lentamente la fosa a lo largo de la siguiente ronda hasta que se restablezca el nivel.*→ Inundación. Haces que el nivel del agua corriente estancada en el área aumente hasta 20 pies. Si el área incluye una orilla, el agua se derrama sobre la tierra seca.*En cambio, si eliges un área dentro de un cuerpo de agua grande, creas una ola de 20 pies de altura que va de un extremo al otro del área y luego se desploma. La ola se lleva consigo cualquier vehículo de tamaño Enorme o menor, los cuales tienen un 25 % de probabilidades de volcar.*El nivel de agua permanece elevado hasta que el conjuro termina o hasta que elijas un efecto diferente. Si el efecto produce una ola, esta se repite al principio de tu siguiente turno mientras dure el efecto de inundación.*→ Redirigir la corriente. Haces que la corriente de agua del área se mueva en otro sentido de tu elección, incluso si tiene que fluir a través de obstáculos, subir paredes o en cualquier otro sentido improbable. El agua se mueve mientras la diriges, pero una vez traspasa él área del conjuro, retoma su corriente de acuerdo a las condiciones del terreno. El agua continúa moviéndose en el sentido que elijas hasta que el conjuro termina o hasta que elijas otro efecto.*→ Remolino. Este efecto requiere un cuerpo de agua de al menos 50 pies cuadrados y 25 de profundidad. Haces que se cree un remolino en el centro del área, el cual forma un vórtice de 5 pies de ancho en la base, 50 pies de ancho en lo alto y 25 pies de altura. Cualquier criatura u objeto que se encuentre en el agua a 25 pies o menos del vórtice es empujado a 10 pies de él. Una criatura puede alejarse del vórtice nadando si hace una prueba de Fuerza (Atletismo) contra la CD de salvación del conjuro. *Cuando una criatura entra en el vórtice por primera vez en su turno o empieza su turno en él, debe hacer una tirada de salvación de Fuerza. Si falla, recibe 2d8 puntos de daño contundente y queda atrapada en el vórtice hasta que termina el conjuro. Si tiene éxito, recibe la mitad de daño y no queda atrapada. Una criatura atrapada en el vórtice puede usar su acción para intentar alejarse nadando como se describe arriba, pero tiene desventaja en la prueba de Fuerza (Atletismo) para hacerlo.*La primera vez en cada turno que un objeto entra en el vórtice, recibe 2d8 puntos de daño contundente durante cada ronda que permanezca en él."
            },
            {
                icono: "../assets/nivel4/destierro.svg",
                texto: "Destierro",
                componentes: "V,S,M (un objeto desagradable para el objetivo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Carisma",
                clases: "Paladín, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Intentas enviar a una criatura que puedas ver dentro del alcance a otro plano de existencia. El objetivo debe superar una tirada de salvación de Carisma para no quedar desterrado.*Si el objetivo es nativo del plano de existencia en el que te encuentras, lo destierras a un semiplano inofensivo. Mientras esté allí, está incapacitado. El objetivo permanece allí hasta que el conjuro termina, momento en el cual reaparece en el espacio que dejó o, si está ocupado, en el espacio sin ocupar más cercano.*Si un objetivo es nativo de un plano de existencia diferente al plano en que te encuentras, se desvanece con un leve pop y vuelve a su plano natal. Si el conjuro termina antes de que pase 1 minuto, el objetivo reaparece en el espacio que dejó o, si está ocupado, en el espacio sin ocupar más cercano. Si no, el objetivo no regresa.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 4."
            },
            {
                icono: "../assets/nivel4/dominarBestia.svg",
                texto: "Dominar bestia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Sabiduría",
                clases: "Druida y Hechicero",
                informacion: "Intentas embaucar a una bestia que puedas ver dentro del alcance. La criatura debe superar una tirada de salvación de Sabiduría para no quedar hechizada por ti mientras dura el conjuro. Si tú o las criaturas que son amistosas hacia ti estáis luchando contra dicha bestia, esta tiene ventaja en la tirada de salvación.*Mientras la bestia está hechizada, tienes un vínculo telepático con ella, siempre y cuando los dos estéis en el mismo plano de existencia. Puedes usar este vínculo telepático para darle órdenes mientras estés consciente (no se requiere acción) y la bestia da lo mejor de sí para obedecerlas. Puedes especificar un curso de acción simple o general, como «ataca a esa criatura», «corre por ahí» o «atrapa ese objeto». Si la criatura cumple la orden y no recibe más por tu parte, se defiende y se protege lo mejor que puede.*Puedes usar tu acción para controlar al objetivo de manera total y precisa. Hasta el final de tu siguiente turno, la criatura solo realiza las acciones que elijas y no hace nada que no le permitas hacer. Durante este tiempo, también puedes usar a la criatura para realizar una reacción, pero requiere que también utilices tu propia reacción.*Cada vez que el objetivo recibe daño, debe hacer una nueva tirada de salvación de Sabiduría contra el conjuro. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro con un espacio de nivel 5, la duración es concentración hasta 10 minutos. Cuando uses uno de nivel 6, la duración es concentración hasta 1 hora. Cuando uses uno de nivel 7 o superior, la duración es concentración hasta 8 horas."
            },
            {
                icono: "../assets/nivel4/escudoFuego.svg",
                texto: "Escudo de fuego",
                componentes: "V,S,M (una pizca de fósforo o una luciérnaga)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "10 minutos",
                ataque: "Contra salvación 2d8 fuego o frío",
                clases: "Mago",
                informacion: "Unas tenues llamas envuelven tu cuerpo mientras dura el conjuro, emitiendo luz brillante en un radio de 10 pies y luz tenue en 10 pies adicionales. Puedes terminar el conjuro antes usando una acción para disiparlo.*Las llamas te proporcionan un escudo cálido o un escudo gélido, según elijas. El escudo cálido te proporciona resistencia al daño por frío y el gélido, al daño por fuego. Además, cuando una criatura que se encuentre a 5 pies o menos de ti te impacta con un ataque cuerpo a cuerpo, el escudo lanza llamas. El atacante recibe 2d8 puntos de daño por fuego del escudo cálido o 2d8 de daño por frío del escudo gélido."
            },
            {
                icono: "../assets/nivel4/esferaElasticaOtiluke.svg",
                texto: "Esfera elástica de Otiluke",
                componentes: "V,S,M (un fragmento semiesférico de cristal transparente y otro de goma arábiga que encaje con el cristal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Destreza",
                clases: "Mago",
                informacion: "Una esfera de fuerza brillante encierra a una criatura o un objeto de un tamaño Grande o más pequeño dentro del alcance. Una criatura no voluntaria debe hacer una tirada de salvación de Destreza. Si falla, queda encerrada mientras dura el conjuro.*Nada (ni objetos físicos, energía ni otros efectos de conjuro) pueden atravesar la barrera, ni para salir ni para entrar, aunque la criatura que se encuentra dentro de la esfera puede respirar ahí. La esfera es inmune a todo tipo de daño y la criatura u objeto no puede ser dañada por ataques o efectos que se originen en el exterior, ni tampoco puede dañar nada que se encuentre en el exterior.*La esfera no pesa y es lo suficientemente grande como para contener a la criatura u objeto dentro. Una criatura encerrada puede usar su acción para empujar las paredes de la esfera y hacer que esta ruede hasta la mitad de la velocidad de la criatura. Del mismo modo, otras criaturas pueden coger la esfera y moverla.*El conjuro Desintegrar puede destruir la esfera sin dañar lo que haya dentro si se la elige como objetivo."
            },
            {
                icono: "../assets/nivel4/fabricar.svg",
                texto: "Fabricar",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "120 pies",
                duracion: "Instantáneo",
                clases: "Mago",
                informacion: "Conviertes materia prima en productos del mismo material. Por ejemplo, puedes fabricar un puente de madera con unos cuantos árboles, una cuerda con un trozo de cáñamo y ropas con lino o lana. Elige materias primas que puedas ver dentro del alcance. Puedes fabricar un objeto de tamaño Grande o más pequeño (que entre en un cubo de 10 pies o en 8 cubos de 5 pies conectados) si tienes la cantidad de materia prima suficiente. Si trabajas con metal, piedra u otra sustancia mineral, sin embargo, el objeto fabricado no puede ser de un tamaño superior a Mediano (contenido en un único cubo de 5 pies). La calidad de los objetos que elabora el conjuro es proporcional a la calidad de las materias primas.*No se pueden crear ni transmutar criaturas u objetos mágicos con este conjuro. Tampoco puedes usarlo para crear objetos que normalmente requieren un nivel alto de artesanía, como joyas, armas, cristales o armadura, a menos que tengas competencia con el tipo de herramientas de artesano que se usan para elaborar tales objetos."
            },
            {
                icono: "../assets/nivel4/guardiaContraMuerte.svg",
                texto: "Guardia contra la muerte",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                clases: "Paladín y Clérigo",
                informacion: "Tocas a una criatura y le concedes una forma de protegerse contra la muerte. La primera vez que los puntos de golpe del objetivo se reducirían a 0 como resultado de recibir daño, este se queda con 1 punto de golpe y el conjuro termina.*Si el conjuro sigue teniendo efecto cuando el objetivo está sujeto a un efecto que lo mataría instantáneamente sin infligir daño, dicho efecto queda anulado y el conjuro termina."
            },
            {
                icono: "../assets/nivel4/guardianFe.svg",
                texto: "Guardián de la fe",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 horas",
                ataque: "Contra salvación de Destreza",
                clases: "Clérigo",
                informacion: "Un guardián espectral Grande aparece y flota en un espacio sin ocupar de tu elección que puedas ver dentro del alcance mientras dura el conjuro. El guardián ocupa ese espacio y es borroso excepto por una espada reluciente y un escudo decorado con el símbolo de tu deidad.*Cualquier criatura hostil que se mueva a un espacio que se encuentre a 10 pies o menos del guardián por primera vez en un turno debe superar una tirada de salvación de Destreza. Si falla, recibe 20 puntos de daño radiante y, si tiene éxito, la mitad. El guardián se desvanece cuando ha infligido un total de 60 puntos de daño."
            },
            {
                icono: "../assets/nivel4/insectoGigante.svg",
                texto: "Insecto gigante",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 10 minutos",
                clases: "Druida",
                informacion: "Transformas hasta a diez ciempiés, tres arañas, cinco avispas o un escorpión dentro del alcance en una versión gigante de su forma natural mientras dure el conjuro. Un ciempiés se transforma en un ciempiés gigante, una araña se convierte en una araña gigante, una avispa se convierte en una avispa gigante y un escorpión se convierte en un escorpión gigante.*Todas las criaturas obedecen tus órdenes verbales y, en combate, actúan en tu turno cada ronda. El director de juego determina las estadísticas de estas criaturas y resuelve sus acciones y movimientos.*Una criatura permanece en su tamaño gigante mientras dure el conjuro, hasta que sus puntos de golpe se reduzcan a 0 o hasta que uses una acción para disipar el efecto.*El director de juego puede permitirte elegir otros objetivos diferentes. Por ejemplo, si transformas a una abeja, su versión gigante puede tener las mismas estadísticas que la avispa gigante."
            },
            {
                icono: "../assets/nivel4/invisibilidadMejorada.svg",
                texto: "Invisibilidad mejorada",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Tú o una criatura que tocas se vuelve invisible hasta que el conjuro termina. Cualquier cosa que el objetivo lleve puesta o transporte es invisible siempre y cuando esté en el cuerpo del objetivo."
            },
            {
                icono: "../assets/nivel4/libertadMovimiento.svg",
                texto: "Libertad de movimiento",
                componentes: "V,S,M (una correa de cuero atada alrededor del brazo o una extremidad similar)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Explorador, Bardo, Clérigo y Druida",
                informacion: "Tocas a una criatura voluntaria. Mientras dure el conjuro, el movimiento del objetivo no se ve afectado por el terreno difícil, y los conjuros y otros efectos mágicos no pueden ni reducir la velocidad del objetivo ni hacer que este quede paralizado o apresado.*El objetivo también puede gastar 5 pies para escapar automáticamente de limitaciones como grilletes o una criatura que le hace una presa. Finalmente, estar bajo el agua no le impone penalizadores ni al movimiento ni a los ataques."
            },
            {
                icono: "../assets/nivel4/localizarCriatura.svg",
                texto: "Localizar criatura",
                componentes: "V,S,M (un poco de pelaje de sabueso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                clases: "Explorador, Paladín, Bardo, Clérigo, Druida y Mago",
                informacion: "Describe o nombra a una criatura que te sea familiar. Sientes la dirección en la que se encuentra la criatura, siempre y cuando se encuentre a 1000 pies o menos de ti. Si la criatura se está moviendo, sabes hacia dónde se mueve.*El conjuro puede localizar a una criatura específica que conozcas o a la criatura más cercana de un tipo específico (como un humano o un unicornio), siempre y cuando hayas visto a esa criatura de cerca (a 30 pies o menos) por lo menos una vez. Si la criatura que describes o nombras tiene otra forma, por ejemplo, si está bajo los efectos del conjuro Polimorfar, este conjuro no la localiza.*Este conjuro no puede localizar a una criatura si una corriente de agua de al menos 10 pies de ancho bloquea un camino directo entre la criatura y tú."
            },
            {
                icono: "../assets/nivel4/marchitar.svg",
                texto: "Marchitar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación de Constitución",
                clases: "Brujo, Druida, Hechicero y Mago",
                informacion: "La energía nigromántica anega a una criatura de tu elección que puedas ver dentro del alcance y le drena los humores y la vitalidad. El objetivo debe hacer una tirada de salvación de Constitución: si falla, recibe 8d8 puntos de daño necrótico y, si tiene éxito, la mitad. Este conjuro no tiene efecto sobre no muertos ni constructos. *Si el objetivo es una criatura planta o a una planta mágica, esta tiene desventaja en la tirada de salvación y el conjuro le inflige el máximo de daño. *Si el objetivo es una planta no mágica que no es una criatura, como un árbol o un arbusto, no hace tirada de salvación, simplemente se seca y muere. *En niveles superiores. Cuando lanzas este conjuro usando un espacio de nivel 5 o superior, el daño aumenta en 1d8 por cada nivel por encima de 4."
            },
            {
                icono: "../assets/nivel4/mastinFielMordenkainen.svg",
                texto: "Mastín fiel de Mordenkainen",
                componentes: "V,S,M (un silbato de plata pequeño, un hueso y un hilo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 horas",
                ataque: "Cuerpo a cuerpo 4d8 perforante",
                clases: "Mago",
                informacion: "Conjuras un perro guardián espectral en un espacio sin ocupar que puedas ver dentro del alcance, donde permanece mientras dura el conjuro, hasta que lo desconvoques como acción o hasta que te alejes más de 100 pies de él.*El mastín es invisible para todas las criaturas excepto para ti y no puede recibir daño. Cuando una criatura de tamaño Pequeño o más grande se acerque a 30 pies o menos de él sin decir primero la contraseña que especifiques cuando lances el conjuro, el mastín empieza a ladrar fuerte. El mastín ve criaturas invisibles, puede ver en el Plano Etéreo e ignora las ilusiones.*Al principio de cada uno de tus turnos, el mastín intenta morder a una criatura que se encuentre a 5 pies o menos de él y que sea hostil hacia ti. El bonificador por ataque del mastín es igual a tu modificador por característica para lanzar conjuros + tu bonificador por competencia. Si impacta, inflige 4d8 puntos de daño perforante."
            },
            {
                icono: "../assets/nivel4/moldearPiedra.svg",
                texto: "Moldear la piedra",
                componentes: "V,S,M (arcilla blanda, que debes modelar para convertirla más o menos en la forma que deseas del objeto de piedra)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Clérigo, Druida, Mago",
                informacion: "Tocas un objeto de piedra de tamaño Mediano o más pequeño o una sección de piedra de no más de 5 pies en cualquier dimensión y le das la forma que se adapte a tu propósito. Así, por ejemplo, puedes convertir una roca grande en un arma, un ídolo o un cofre, o hacer un pequeño pasaje a través de una pared, siempre y cuando esta tenga menos de 5 pies de profundidad. También puedes darle forma a una puerta de piedra o a su marco para sellarla. El objeto que crees puede tener hasta dos bisagras y un pestillo, pero no es posible hacer mecanismos con detalles más finos."
            },
            {
                icono: "../assets/nivel4/muroFuego.svg",
                texto: "Muro de fuego",
                componentes: "V,S,M (un trocito de fósforo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Destreza 5d8 fuego",
                clases: "Druida, Hechicero y Mago",
                informacion: "Creas un muro de fuego en una superficie sólida dentro del alcance. Puedes crear un muro de hasta 60 pies de largo, 20 de alto y 1 de anchura o un muro con forma de anillo de hasta 20 pies de diámetro, 20 de altura y 1 anchura. El muro es opaco y dura mientras dure el conjuro.*Cuando el muro aparece, todas las criaturas que se encuentren en su área deben hacer una tirada de salvación de Destreza. Si fallan, reciben 5d8 puntos de daño por fuego y, si tienen éxito, la mitad.*Un lado del muro, que seleccionas cuando lanzas el conjuro, inflige 5d8 puntos de daño por fuego a cada criatura que termine su turno a 10 pies o menos de él o dentro del muro. Una criatura recibe el mismo daño cuando entra en el muro por primera vez en un turno que cuando termina su turno en él. El otro lado del muro no inflige daño.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, el daño aumenta en 1d8 por cada nivel por encima de 4."
            },
            {
                icono: "../assets/nivel4/ojoArcano.svg",
                texto: "Ojo arcano",
                componentes: "V,S,M (un poco de pelo de murciélago)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 hora",
                clases: "Mago",
                informacion: "Creas un ojo mágico e invisible dentro del alcance que planea en el aire mientras dura el conjuro. Recibes información visual mentalmente del ojo, que tiene visión normal y visión en la oscuridad hasta 30 pies. El ojo ve en cualquier dirección.*Como acción, puedes mover el ojo hasta 30 pies en cualquier dirección. No hay límite de lo lejos que puede estar el ojo de ti, pero no puede entrar en otro plano de existencia. Una barrera sólida bloquea el movimiento del ojo, pero puede pasar por una abertura de hasta 1 pulgada."
            },
            {
                icono: "../assets/nivel4/pielPetrea.svg",
                texto: "Piel pétrea",
                componentes: "V,S,M (polvo de diamante de 100 po de valor, el cual consume el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                clases: "Explorador, Druida, Hechicero y Mago",
                informacion: "Este conjuro hace que la carne de una criatura voluntaria que toques sea tan dura como la piedra. Hasta que el conjuro termine, el objetivo tiene resistencia al daño contundente, perforante y cortante no mágico."
            },
            {
                icono: "../assets/nivel4/polimorfar.svg",
                texto: "Polimorfar",
                componentes: "V,S,M (un capullo de oruga)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                ataque: "Contra salvación de Sabiduría",
                clases: "Bardo, Druida, Hechicero y Mago",
                informacion: "Este conjuro transforma a una criatura que puedas ver dentro del alcance en una nueva forma. Una criatura involuntaria debe superar una tirada de salvación de Sabiduría para evitar el efecto. El conjuro no tiene efecto en los cambiaformas o en criaturas con 0 puntos de golpe.*La transformación dura mientras lo haga el conjuro, hasta que los puntos de golpe del objetivo se reduzcan a 0 o hasta que muera. La nueva forma puede ser cualquier bestia cuyo valor de desafío sea igual o menor que el del objetivo (o que su nivel si no tiene valor de desafío). Las estadísticas de juego del objetivo, incluyendo las puntuaciones de las características mentales, se remplazan por las estadísticas de la bestia elegida, aunque mantiene su alineamiento y su personalidad.*El objetivo asume los puntos de golpe de su nueva forma y, cuando vuelve a su forma normal, recupera el número de puntos de golpe que tenía antes de transformarse. Si vuelve a su forma original porque sus puntos de golpe se han reducido a 0, cualquier exceso de daño se aplica a su forma normal. Siempre y cuando el exceso de daño no reduzca los puntos de golpe de la forma normal a 0, la criatura no queda inconsciente.*La naturaleza de la nueva forma de la criatura limita las acciones que puede realizar y no puede hablar, lanzar conjuros o realizar cualquier otra acción que requiera manos o hablar.*El equipo del objetivo se funde con la nueva forma. La criatura no puede activar, usar, empuñar o beneficiarse de su equipo."
            },
            {
                icono: "../assets/nivel4/puertaDimensional.svg",
                texto: "Puerta dimensional",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "500 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Te teleportas desde tu localización actual a cualquier otro lugar que desees dentro del alcance. Puede ser un lugar que puedas ver, visualizar o describir indicando la distancia y la dirección, como «200 pies todo recto hacia abajo» o «subiendo 300 pies hacia el noroeste en un ángulo de 45 grados».*Puedes llevar objetos siempre y cuando su peso no exceda el que puedes transportar. También puedes llevar una criatura voluntaria de tu tamaño o más pequeña que lleve equipo hasta su capacidad de carga. La criatura debe estar a 5 pies de ti o menos cuando lances este conjuro.*Si llegas a un lugar que ya está ocupado por un objeto o una criatura, la criatura que viaja contigo y tú recibís cada uno 4d6 puntos de daño por fuerza y el conjuro no consigue teleportaros."
            },
            {
                icono: "../assets/nivel4/sanctasanctorumPrivadoMordenkainen.svg",
                texto: "Sanctasanctórum privado de Mordenkainen",
                componentes: "V,S,M (una lámina de plomo, un trozo de cristal opaco, un fajo de algodón o de tela y crisolita en polvo)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "120 pies",
                duracion: "24 horas",
                clases: "Mago",
                informacion: "Creas un área mágicamente segura dentro del alcance. El área es un cubo que puede tener de 5 a 100 pies de lado. El conjuro permanece mientras dure o hasta que uses una acción para disiparlo.*Cuando lanzas este conjuro, decide qué tipo de seguridad ofrece y cuáles de las siguientes propiedades tiene:*→ El sonido no puede atravesar la barrera en el límite del área protegida.*→ La barrera del área protegida parece oscura y vaga; evita que se vea a través de ella (incluyendo la visión en la oscuridad).*→ Los conjuros de adivinación no pueden crear sensores dentro del área protegida ni pasar el perímetro de la barrera.*→ Las criaturas que estén dentro del área no pueden ser el objetivo de los conjuros de adivinación.*→ Nada puede teleportarse dentro o fuera del área protegida.*→ El viaje planar está bloqueado dentro del área protegida.*Lanzar este conjuro en el mismo lugar todos los días durante un año hace que este efecto sea permanente.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, puedes aumentar el tamaño del cubo en 100 pies por cada nivel por encima de 4. De este modo, puedes proteger un cubo que puede tener un lateral de hasta 200 pies utilizando un espacio de conjuro de nivel 5."
            },
            {
                icono: "../assets/nivel4/tentaculosNegrosEvard.svg",
                texto: "Tentáculos negros de Evard",
                componentes: "V,S,M (un tentáculo de un pulpo o calamar gigante)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies (20 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                ataque: "Contra salvación 3d6 contundente",
                clases: "Mago",
                informacion: "Unos tentáculos como el ébano se retuercen llenando un cuadrado del suelo de 20 pies que puedas ver dentro del alcance. Mientras dura el conjuro, los tentáculos hacen que el terreno del área sea terreno difícil.* Cuando una criatura entra en el área afectada por primera vez en un turno o empieza su turno en ella, debe superar una tirada de salvación de Destreza para no recibir 3d6 puntos de daño contundente y quedar apresada por los tentáculos hasta que termine el conjuro. Una criatura que empieza su turno en esta área y ya está apresada por los tentáculos recibe 3d6 puntos de daño perforante. *Una criatura apresada por los tentáculos puede usar su acción para hacer una prueba de Fuerza o Destreza (a su elección) contra la CD de salvación del conjuro. Si tiene éxito, se libera."
            },
            {
                icono: "../assets/nivel4/terrenoAlucinatorio.svg",
                texto: "Terreno alucinatorio",
                componentes: "V,S,M (una piedra, una ramita y un fragmento de una planta de color verde)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "300 pies (150 pies)",
                duracion: "24 horas",
                clases: "Bardo, Brujo, Druida, Mago",
                informacion: "Creas un terreno natural en un cubo de 150 pies dentro del alcance que parece, suena y huele como otro tipo de terreno natural. De este modo, un campo abierto o una carretera pueden parecer un pantano, una colina, una grieta o cualquier otro terreno difícil o intransitable. Se puede hacer que un estanque parezca un prado cubierto de hierba, que un precipicio parezca una leve pendiente o que un barranco cubierto de rocas parezca un camino ancho y allanado. La apariencia de estructuras, equipo y criaturas que se encuentren dentro del área no cambia.* Las características táctiles del terreno permanecen inalterables, así que es posible que las criaturas que entran en el área vean a través de la ilusión. Si la diferencia no es obvia al tacto, una criatura que examine la ilusión cuidadosamente puede realizar una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu conjuro para ponerlo en duda. Una criatura que discierne la ilusión por lo que es, la ve como una imagen vaga superpuesta en el terreno."
            },
            {
                icono: "../assets/nivel4/tormentaHielo.svg",
                texto: "Tormenta de hielo",
                componentes: "V,S,M (una pizca de polvo y unas gotas de agua)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación de Destreza 2d8 contundente + 4d6 frío",
                clases: "Druida, Hechicero y Mago",
                informacion: "Cae granizo en un cilindro de 20 pies de radio y 40 de altura cuyo centro se encuentra en un punto dentro del alcance. Todas las criaturas que se encuentren dentro del cilindro deben hacer una tirada de salvación de Destreza. Si fallan, reciben 2d8 puntos de daño contundente y 4d6 de daño por frío o, si tienen éxito, la mitad.* El granizo convierte el área de efecto de la tormenta en terreno difícil hasta el final de tu siguiente turno.* En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 5 o superior, el daño contundente aumenta en 1d8 por cada nivel por encima de 4."
            },
        ]
    },
    {
        id: 6,
        nivel: "Nivel 5",
        backgroundColor: '#d2b4de',
        conjuros: [
            {
                icono: "../assets/nivel5/alterarRecuerdos.svg",
                texto: "Alterar los recuerdos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo y Mago",
                informacion: "Intentas remodelar los recuerdos de otra criatura. Una criatura que puedas ver debe hacer una tirada de salvación de Sabiduría. Si estás luchando contra ella, esta tiene ventaja. Si falla la tirada, el objetivo queda hechizado por ti mientras dura el conjuro. El objetivo hechizado está incapacitado y no se da cuenta de lo que lo rodea, aunque todavía puede escucharte. Si recibe daño o es el objetivo de otro conjuro, este conjuro termina y no se modifica ninguno de sus recuerdos.*Mientras dure este encantamiento, puedes afectar el recuerdo del objetivo sobre un evento que experimentara en las últimas 24 horas y que no durara más de 10 minutos. Puedes eliminar permanente cualquier recuerdo sobre el evento, permitir que el objetivo lo recuerde claramente y en detalle, cambiar los detalles o crear un recuerdo de cualquier otro evento.*Debes hablar con el objetivo para describir de qué manera son afectados sus recuerdos y este debe ser capaz de entender tu idioma para que los recuerdos modificados se arraiguen. Su mente completa cualquier lapsus en tu descripción. Si el conjuro termina antes de que acabes de describir los recuerdos modificados, estos no se alteran. Si no, los recuerdos modificados se asientan cuando el conjuro termina.*Modificar un recuerdo no afecta necesariamente a cómo se comporta la criatura, especialmente si el recuerdo contradice las inclinaciones naturales de la criatura, su alineamiento o sus creencias. Implantar un recuerdo con poca lógica, como cuánto se divirtió la criatura bañándose en ácido, se descarta, quizás como un mal sueño. El director de juego puede considerar que un recuerdo modificado es demasiado absurdo para afectar a una criatura de una forma importante.*Los conjuros Quitar maldición y Restablecimiento mayor restauran el verdadero recuerdo de la criatura.*En niveles superiores. Si lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, puedes alterar los recuerdos del objetivo sobre un evento que sucedió hasta hace 7 días (nivel 6), 30 días (nivel 7), 1 año (nivel 8) o en cualquier momento del pasado de la criatura (nivel 9)."
            },
            {
                icono: "../assets/nivel5/alzarMuertos.svg",
                texto: "Alzar a los muertos",
                componentes: "V,S,M (un diamante de al menos 500 po de valor)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Paladín, Bardo y Clérigo",
                informacion: "Devuelves a la vida a una criatura muerta que tocas, siempre y cuando no lleve muerta más de 10 días. Si el alma de la criatura es voluntaria y está en libertad para volver al cuerpo, la criatura vuelve a la vida con 1 punto de golpe.*Este conjuro también neutraliza cualquier veneno y cura las enfermedades no mágicas que afectaban a la criatura en el momento de su muerte. Sin embargo, este conjuro no elimina las enfermedades mágicas, maldiciones o efectos similares; si estos no se eliminan antes de lanzar el conjuro, tienen efecto cuando la criatura vuelve a la vida. El conjuro no puede hacer que un no muerto vuelva a la vida.*Este conjuro cierra todas las heridas mortales, pero no restaura las partes del cuerpo que falten. Si a la criatura le faltan partes del cuerpo u órganos fundamentales para su supervivencia (como la cabeza, por ejemplo), el conjuro falla automáticamente.*Volver de entre los muertos es una experiencia dura. El objetivo recibe un penalizador de –4 a todas las tiradas de ataque, tiradas de salvación y pruebas de característica. Cada vez que el objetivo termine un descanso prolongado, el penalizador se reduce en 1 hasta que desaparezca."
            },
            {
                icono: "../assets/nivel5/animarObjeto.svg",
                texto: "Animar objetos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Los objetos pueden cobrar vida bajo tus órdenes. Elige hasta diez objetos no mágicos dentro del alcance que nadie lleve puestos ni transporte. Un objeto Mediano cuenta como dos objetos, uno Grande cuenta como cuatro y uno Enorme cuenta como ocho. No puedes animar objetos de un tamaño superior a Enorme. Cada objetivo cobra vida y se convierte en una criatura que controlas hasta que el conjuro se acabe o hasta que sus puntos de golpe se reduzcan a 0.*Como acción adicional, puedes darle órdenes mentalmente a cualquier criatura que hayas creado con este conjuro y que se encuentre a 500 pies de ti o menos (si controlas varias criaturas, puedes dar órdenes a cualquiera o a todas ellas al mismo tiempo, emitiendo la misma orden para todas). Tú decides qué acción hará la criatura y adónde se moverá durante su siguiente turno. También puedes emitir una orden general, como proteger una habitación o un pasillo en particular. Si no emites órdenes, la criatura solo se defiende a sí misma contra criaturas hostiles. Una vez se le da una orden, la criatura no se detendrá hasta cumplirla.*Estadísticas de objetos animados (según tamaño):*→ Diminuto: 20 PG, CA 18, +8 al ataque, 1d4+4 daño, Fue 4, Des 18*→ Pequeño: 25 PG, CA 16, +6 al ataque, 1d8+2 daño, Fue 6, Des 14*→ Mediano: 40 PG, CA 13, +5 al ataque, 2d6+1 daño, Fue 10, Des 12*→ Grande: 50 PG, CA 10, +6 ataque, 2d10+2 daño, Fue 14, Des 10*→ Enorme: 80 PG, CA 10, +8 ataque, 2d12+4 daño, Fue 18, Des 6*Un objeto animado es un constructo con CA, puntos de golpe, ataques, Fuerza y Destreza, estadísticas que vienen determinadas por su tamaño. Su Constitución es 10, su Inteligencia y su Sabiduría 3 y su Carisma 1. Su velocidad es de 30 pies; si el objeto no tiene piernas u otras extremidades que pueda usar para moverse, en su lugar tiene velocidad volando de 30 pies y puede planear. Si el objeto está enganchado firmemente a una superficie o a un objeto más grande, como una cadena sujeta a una pared, su velocidad es 0. Tiene vista ciega en un radio de 30 pies y es ciego más allá de esa distancia. Cuando los puntos de golpe de un objeto animado se reducen a 0, vuelve a su forma original y cualquier daño restante repercute sobre esta.*Si le ordenas a un objeto que ataque, puede hacer un único ataque cuerpo a cuerpo contra una criatura que se encuentre a 5 pies de él. Hace un ataque sin armas con bonificador de ataque e inflige daño contundente determinado por su tamaño. El director de juego puede decidir que un objeto específico hace daño cortante o perforante de acuerdo a su forma.*En niveles superiores. Si lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, puedes animar a dos objetos adicionales por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/apariencia.svg",
                texto: "Apariencia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 horas",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Este conjuro te permite cambiar la apariencia de cualquier número de criaturas que puedas ver dentro del alcance. A cada objetivo que elijas le das una nueva apariencia ilusoria. Un objetivo que no sea voluntario puede hacer una tirada de salvación de Carisma para intentar evitar que el conjuro la afecte.*El conjuro disfraza la apariencia física, así como la ropa, la armadura, las armas y el equipo. Puedes hacer que cada criatura parezca 1 pie más pequeña o más grande y que parezca delgada, gorda o normal. No puedes cambiar el tipo de cuerpo, así que debes elegir una forma que tenga la misma cantidad de miembros básicos. Por otro lado, la extensión de la ilusión depende de ti. Dura lo que dura el conjuro, a menos que uses tu acción para disiparlo antes.*Los cambios que provoca este conjuro no aguantan una inspección física. Por ejemplo, si usas este conjuro para añadir un sombrero al atuendo de una criatura, los objetos atraviesan el sombrero y cualquiera que lo toque no sentirá nada o sentirá la cabeza y el pelo de la criatura. Si usas este conjuro para parecer más delgado de lo que eres, la mano de alguien que consiga tocarte se apoyará en ti mientras aparentemente se queda en medio del aire.*Una criatura puede usar su acción para inspeccionar un objetivo y hacer una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu objetivo. Si tiene éxito, se da cuenta de que el objetivo está disfrazado."
            },
            {
                icono: "../assets/nivel5/ataduraPlanar.svg",
                texto: "Atadura planar",
                componentes: "V,S,M (una joya de al menos 1000 po de valor)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "60 pies",
                duracion: "24 horas",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo, Druida y Mago",
                informacion: "Con este conjuro intentas vincular a tu servicio a un celestial, un elemental, una fata o un infernal. La criatura debe estar dentro del alcance mientras dure el lanzamiento del conjuro (normalmente, primero se convoca a la criatura en el centro de un Círculo mágico invertido para mantenerla atrapada mientras se lanza este conjuro). Cuando se completa el lanzamiento, el objetivo debe hacer una tirada de salvación de Carisma. Si falla, queda ligado para servirte mientras dure el conjuro. Si la criatura ha sido convocada o creada mediante otro conjuro, su duración se extiende hasta igualar la de este conjuro.*Una criatura ligada debe seguir tus instrucciones lo mejor que pueda. Puedes ordenarle que te acompañe en una aventura, que proteja un lugar o que entregue un mensaje. La criatura obedece tus instrucciones, pero si es hostil hacia ti, se esfuerza por tergiversar tus palabras para conseguir sus propios objetivos. Si la criatura cumple tus instrucciones antes de que termine el conjuro, viaja hasta ti para informarte de este hecho si estáis en el mismo plano de existencia. Si estáis en un plano diferente, la criatura regresa al lugar en que la ligaste y permanece allí hasta que el conjuro termine.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de un nivel superior, la duración aumenta a 10 días con un espacio de nivel 6, a 30 días con uno de nivel 7, a 180 días con uno de nivel 8, y a un año y un día con uno de nivel 9."
           },
            {
                icono: "../assets/nivel5/caparazonAntivida.svg",
                texto: "Caparazón antivida",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (10 pies)",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Druida",
                informacion: "Una barrera reluciente se extiende desde ti en un radio de 10 pies, moviéndose al mismo tiempo que tú, y repele a todas las criaturas salvo a los no muertos y a los constructos. La barrera dura mientras lo haga el conjuro. La barrera impide que las criaturas a las que afecta la traspasen, aunque pueden lanzar conjuros y hacer ataques con armas a distancia y de alcance a través de ella.*Si al moverte obligas a una criatura a la que afecta a que traspase la barrera, el conjuro termina."
            },
            {
                icono: "../assets/nivel5/circuloTeletransportacion.svg",
                texto: "Círculo de teletransportación",
                componentes: "V,S,M (gemas preciosas de 50 po de valor)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "1 asalto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Cuando lanzas el conjuro, dibujas un círculo de 10 pies de diámetro en el suelo con símbolos que conectan tu localización con un círculo de teletransporte permanente de tu elección cuya secuencia de símbolos conoces y que está en tu mismo plano de existencia. Un portal reluciente se abre dentro del círculo y permanece abierto hasta el final de tu siguiente turno. Cualquier criatura que entra en el portal aparece instantáneamente a 5 pies del círculo de destino o en el espacio sin ocupar más cercano si ese está ocupado.*Muchos templos grandes, gremios y otros lugares importantes tienen círculos de teletransporte permanentes inscritos en algún lugar de sus confines. Cada uno de estos círculos tiene una secuencia de símbolos única, una sucesión de runas mágicas colocadas siguiendo un patrón particular. Cuando consigues la capacidad para lanzar este conjuro por primera vez, aprendes la secuencia de símbolos de dos destinos del Plano Material determinados por el director de juego. Puedes aprender otras secuencias de símbolos durante tus aventuras. Puedes memorizar una nueva secuencia de símbolos después de estudiar durante 1 minuto.*Puedes crear un círculo de teletransporte permanente lanzando este conjuro en el mismo lugar todos los días durante un año. No necesitas usar el círculo para teleportarte cuando lanzas el conjuro de este modo."
            },
            {
                icono: "../assets/nivel5/comunion.svg",
                texto: "Comunión",
                componentes: "V,S,M (incienso y un vial de agua bendita o sacrílega)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "1 minuto",
                ataque: "Ninguno",
                clases: "Clérigo",
                informacion: "Contactas con tu deidad o con un representante divino y, antes de que termine el conjuro, le haces hasta tres preguntas que se puedan responder con sí o no. Recibes una respuesta correcta para cada una.*Los seres divinos no son necesariamente omniscientes, así que puedes recibir como respuesta «incierto» si la pregunta pertenece a un ámbito más allá de su conocimiento. En caso de que una respuesta de una palabra sea confusa o contraria a los intereses de la deidad, el director de juego puede ofrecer una frase corta como respuesta.*Si lanzas el conjuro dos o más veces antes de terminar tu siguiente descanso prolongado, hay un 25 % de probabilidades acumulativas de que recibas una respuesta negativa cada vez lo lances después de la primera. El director de juego hace esta tirada en secreto."
            },
            {
                icono: "../assets/nivel5/comunionNaturaleza.svg",
                texto: "Comunión con la naturaleza",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Explorador y Druida",
                informacion: "Durante un breve espacio de tiempo te conviertes en uno con la naturaleza y obtienes conocimiento del territorio que te rodea. Al aire libre, el conjuro te da conocimiento sobre la tierra que está a 3 millas o menos de ti. En cuevas o en otros lugares subterráneos, el radio se limita a 300 pies. El conjuro no funciona donde se haya construido sobre la naturaleza, como en dungeons y ciudades.*Consigues conocimiento instantáneo de hasta tres hechos de tu elección sobre cualquiera de los siguientes temas en relación con la zona:*→ Terrenos y cuerpos de agua.*→ Plantas, minerales, animales y gente importante.*→ Celestiales, fatas, infernales, elementales y no muertos poderosos.*→ Influencia de otros planos de existencia.*→ Edificios.*Por ejemplo, puedes determinar la localización de un poderoso no muerto de la zona, una fuente importante de agua potable y los pueblos cercanos."
            },
            {
                icono: "../assets/nivel5/conjurarElemental.svg",
                texto: "Conjurar elemental",
                componentes: "V,S,M (incienso, arcilla blanda, azufre y fósforo o agua y tierra)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Druida y Mago",
                informacion: "Conjuras a un sirviente elemental. Elige un área de aire, tierra, fuego o agua de 10 pies cúbicos dentro del alcance. Un elemental con un valor de desafío igual a 5 o menos que se corresponda con el área que has elegido aparece en un espacio sin ocupar a 10 pies o menos del cubo. Por ejemplo, un elemental de fuego surge de una hoguera y un elemental de tierra se levanta del suelo. El elemental desaparece cuando sus puntos de golpe se reducen a 0, o cuando el conjuro termina.*El elemental es amistoso hacia ti y tus compañeros mientras dure el conjuro. Tira iniciativa por el elemental, que tiene sus propios turnos. Obedece cualquier orden verbal que le des (no requiere que realices ninguna acción). Si no le das ninguna orden, el elemental se defiende de criaturas hostiles, pero, si no las hay, no realiza ninguna acción.*Si te desconcentras, el elemental no desaparece, sino que pierdes el control sobre él, se vuelve hostil hacia ti y tus compañeros y podría atacar. No puedes desconvocar a un elemental descontrolado y desaparece una hora después de que lo hayas convocado.*El director de juego determina las estadísticas del elemental.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el valor de desafío aumenta en 1 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/conoFrio.svg",
                texto: "Cono de frío",
                componentes: "V,S,M (un cristal pequeño o un cono de cristal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 8d8 frío",
                clases: "Hechicero y Mago",
                informacion: "Una explosión de aire frío brota de tus manos. Cada criatura que se encuentre en un cono de 60 pies debe hacer una tirada de salvación de Constitución. Si falla, recibe 8d8 puntos de daño por frío y, si tiene éxito, la mitad.*Una criatura que muera a causa de este conjuro se convierte en una estatua de hielo hasta que se derrita.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el daño aumenta en 1d8 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/conocerLeyendas.svg",
                texto: "Conocer las leyendas",
                componentes: "V,S,M (incienso de 250 po y cuatro trozos de marfil de 50 po)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Nombra o describe a una persona, lugar u objeto. El conjuro te proporciona un resumen del conocimiento popular sobre lo que has nombrado: relatos actuales, historias olvidadas o incluso un saber secreto que nunca ha sido de conocimiento general. Si la cosa que nombras no tiene una importancia legendaria, no consigues información. Cuanta más información tengas ya, más precisa y detallada será la información que recibas.*La información que aprendes es precisa pero puede estar formulada con un lenguaje figurativo. Por ejemplo, si tienes un hacha misteriosa en las manos, el conjuro podría facilitarte esta información: «Ay del malhechor que ponga sus manos sobre esta hacha, pues aún su mango podrá cortarle en la mano. Solo un verdadero Hijo de la Piedra, que ame y sea amado por Moradin, podrá despertar los verdaderos poderes del hacha, y solo con la palabra sagrada Rudnogg en sus labios»."
            },
            {
                icono: "../assets/nivel5/consagrar.svg",
                texto: "Consagrar",
                componentes: "V,S,M (hierbas, óleos e incienso de 1000 po)",
                tiempoDeLanzamiento: "24 horas",
                alcance: "Toque (60 pies)",
                duracion: "Hasta disipado",
                ataque: "Ninguno",
                clases: "Clérigo",
                informacion: "Tocas un punto e infundes el área que lo rodea con un poder sagrado (o sacrílego). El área puede tener un radio de hasta 60 pies y el conjuro falla si en el radio incluye un área que ya se encuentra bajo el conjuro Consagrar. El área afectada está sujeta a los siguientes efectos.*En primer lugar, los celestiales, elementales, fatas, infernales y no muertos no pueden entrar, ni tampoco pueden hacerlo criaturas hechizadas, asustados o poseídas por ellos. Cualquier criatura hechizada, asustada o poseída por una criatura de este tipo deja de estarlo tras entrar en el área. Puedes excluir uno o más de estos tipos de criaturas para que no sufran este efecto.*En segundo lugar, puedes vincular un efecto adicional al área. Elige el efecto de la siguiente lista o uno que te ofrezca el director de juego. Algunos de estos efectos se aplican a las criaturas que hay dentro del área: puedes indicar si el efecto se aplica a todas las criaturas, a criaturas que siguen a un líder o a una deidad específicos o a criaturas de un tipo concreto, como orcos o trolls. Cuando una criatura que quedaría afectada entra en el área del conjuro por primera vez en un turno o empieza un turno en ella, puede hacer una tirada de salvación de Carisma. Si tiene éxito, ignora el efecto adicional hasta que salga del área.*→ Descanso eterno. Los cadáveres enterrados en el área no se pueden convertir en no muertos.*→ Idiomas. Las criaturas afectadas pueden comunicarse con otra criatura que se encuentre dentro del área, incluso si no comparten ningún idioma.*→ Interferencia extradimensional. Las criaturas afectadas no pueden moverse ni viajar usando teletransporte o medios extradimensionales o extraplanares.*→ Luz diurna. Luz brillante inunda el área. La oscuridad mágica creada por conjuros de un nivel inferior al del espacio de conjuro que uses para lanzar este conjuro no puede extinguir la luz.*→ Miedo. Las criaturas afectadas están asustadas mientras estén dentro del área.*→ Oscuridad. La oscuridad inunda el área. La luz normal, así como la luz mágica creada por conjuros que tengan un nivel inferior al del espacio de conjuro que uses para lanzar este conjuro, no puede iluminar el área.*→ Protección energética. Las criaturas afectadas dentro del área tienen resistencia a un tipo de daño de tu elección, excepto contundente, perforante y cortante.*→ Silencio. Ningún sonido puede surgir de dentro del área y ningún sonido puede llegar a ella.*→ Valor. Las criaturas afectadas no pueden asustarse dentro del área.*→ Vulnerabilidad energética. Las criaturas afectadas dentro del área son vulnerables a un tipo de daño de tu elección, excepto contundente, perforante y cortante."
            },
            {
                icono: "../assets/nivel5/contactarOtroPlano.svg",
                texto: "Contactar con otro plano",
                componentes: "V",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "1 minuto",
                ataque: "Ninguno",
                clases: "Brujo y Mago",
                informacion: "Contactas mentalmente con un semidiós, el espíritu de un sabio que murió hace mucho u otra entidad misteriosa de otro plano. Contactar con esta inteligencia extraplanar puede forzar e incluso romper tu mente. Cuando lances este conjuro, haz una tirada de salvación de Inteligencia CD 15. Si fallas, recibes 6d6 puntos de daño psíquico y quedas enloquecido hasta que terminas un descanso prolongado. Mientras estás enloquecido, no puedes entender lo que dicen otras criaturas, no puedes leer y solo dices galimatías. Si te lanzan el conjuro Restablecimiento mayor, este efecto termina.*Si tienes éxito en la tirada de salvación, puedes hacerle cinco preguntas a la entidad antes de que termine el conjuro. El director de juego responde a cada pregunta con una palabra, como «sí», «no», «quizás», «nunca», «irrelevante» o «impreciso» (si la entidad no sabe la respuesta a la pregunta). Si una respuesta de una palabra puede resultar confusa, el director de juego puede ofrecer en su lugar una frase corta."
            },
            {
                icono: "../assets/nivel5/contagio.svg",
                texto: "Contagio",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "7 días",
                ataque: "Cuerpo a cuerpo",
                clases: "Clérigo y Druida",
                informacion: "Tu toque inflige enfermedad. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura dentro de tu alcance. Si impactas, el objetivo está envenenado.*Al final de cada uno de los turnos del objetivo, este debe realizar una tirada de salvación de Constitución. Si supera tres salvaciones, la criatura ya no está envenenada y el conjuro termina. Si fallar tres de estas tiradas, la criatura ya no está envenenada, pero escoges una de las enfermedades a continuación. El objetivo se verá afectado por la enfermedad escogida mientras dure el conjuro.*Dado que este conjuro induce una enfermedad natural en el objetivo, cualquier efecto que elimine la enfermedad o que mejore sus efectos funcionará.*→ Ascua mental. La mente de la criatura está febril. La criatura tiene desventaja en las pruebas y en las tiradas de salvación de Inteligencia, y durante el combate se comporta como si estuviera bajos los efectos del conjuro Confusión.*→ Carne putrefacta. La carne de la criatura se pudre. La criatura tiene desventaja en las pruebas de Carisma y es vulnerable a todo tipo de daño.*→ Epilepsia. La criatura tiene temblores y desventaja en las pruebas y tiradas de salvación de Destreza, así como en las tiradas de ataque que usen dicha característica.*→ Fiebre de la mugre. Una fiebre aguda se extiende por el cuerpo de la criatura. Esta tiene desventaja en las pruebas y tiradas de salvación de Fuerza y en las tiradas de ataque que usen dicha característica.*→ Mal de la ceguera. El dolor afecta a la mente de la criatura y sus ojos se vuelven de un color blanco lechoso. La criatura está cegada y tiene desventaja en las pruebas y tiradas de salvación de Sabiduría.*→ Muerte viscosa. La criatura empieza a sangrar descontroladamente. La criatura tiene desventaja en las pruebas y tiradas de salvación de Constitución. Además, cuando reciba daño, queda aturdida hasta el final de su siguiente turno."
            },
            {
                icono: "../assets/nivel5/creacion.svg",
                texto: "Creación",
                componentes: "V,S,M (un trozo diminuto de materia del mismo objeto que planeas crear)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies (5 pies)",
                duracion: "Especial",
                ataque: "Ninguno",
                clases: "Hechicero y Mago",
                informacion: "Sacas hebras de materia de las sombras del Páramo Sombrío para crear un objeto inerte de materia vegetal dentro del alcance: textiles, cuerda, madera o algo similar. También puedes usar este conjuro para crear objetos minerales como piedra, cristal o metal. El objeto creado no debe ser mayor que un cubo de 5 pies y debe ser de una forma y un material que hayas visto antes.*La duración depende del material del objeto. Si está compuesto por varios materiales, usa la duración más corta.*→ Materia vegetal	→ 1 día*→ Piedra o cristal	→ 12 horas*→ Metales preciosos → 1 hora*→ Gemas → 10 minutos*→ Adamantina o mithril	→ 1 minuto*Usar un material creado por este conjuro como componente material para otro conjuro hace que dicho conjuro falle.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el cubo aumenta 5 pies por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/curarHeridasEnMasa.svg",
                texto: "Curar heridas en masa",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (30 pies)",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Una ola de energía curativa emana de un punto de tu elección dentro del alcance. Elige hasta seis criaturas en una esfera de 30 pies de radio cuyo centro sea ese punto. Cada objetivo recupera una cantidad de puntos de golpe igual a 3d8 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto sobre no muertos ni constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, la curación aumenta 1d8 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/despertar.svg",
                texto: "Despertar",
                componentes: "V,S,M (un ágata de al menos 1000 po de valor, la cual consume el conjuro)",
                tiempoDeLanzamiento: "8 horas",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo y Druida",
                informacion: "Después de dedicar el tiempo de lanzamiento a trazar senderos mágicos en una piedra preciosa, tocas a una bestia o planta de tamaño Enorme o menor. El objetivo debe tener una puntuación de Inteligencia de 3 o menos o directamente no tener Inteligencia. El objetivo consigue Inteligencia 10 y la capacidad de hablar un idioma que conozcas. Si el objetivo es una planta, consigue la capacidad de mover sus ramas, raíces, vides, enredaderas, etcétera, y recibe sentidos similares a los humanos. El director de juego elige las estadísticas apropiadas para la enredadera o el árbol consciente.*La bestia o planta consciente está hechizada durante 30 días o hasta que tú o tus compañeros hagáis algo para dañarla. Cuando termine el estado hechizado, la criatura consciente elige si sigue siendo amistosa hacia ti, de acuerdo a cómo la hayas tratado mientras estaba encantada."
            },
            {
                icono: "../assets/nivel5/disiparBienMal.svg",
                texto: "Disipar el bien y el mal",
                componentes: "V,S,M (agua bendita o plata y hierro pulverizados)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo",
                clases: "Paladín y Clérigo",
                informacion: "Una energía titilante te rodea y te protege de fatas, no muertos y criaturas originarias de más allá del Plano Material. Mientras dura el conjuro, celestiales, elementales, fatas, infernales y no muertos tienen desventaja en las tiradas de ataque que hagan contra ti.*Puedes terminar el conjuro antes usando cualquiera de las siguientes funciones especiales.*→ Romper encantamiento. Como acción, tocas a una criatura que puedas alcanzar y que esté encantada, asustada o poseída por un celestial, un elemental, una fata, un infernal o un no muerto. La criatura deja de estar encantada, asustada o poseída por tal ser.*→ Desconvocar. Como acción, haces un ataque de conjuro cuerpo a cuerpo contra un celestial, un elemental, una fata, un infernal o un no muerto que puedas alcanzar. Si impactas, intentas devolver a la criatura a su plano natal. La criatura debe superar una tirada de salvación de Carisma para no volver a su plano natal (si no está ya ahí). Si no están en su plano natal, los no muertos son enviados al Páramo Sombrío y las fatas, a las Tierras Salvajes de las Hadas."
            },
            {
                icono: "../assets/nivel5/dominarPersona.svg",
                texto: "Dominar persona",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Intentas embaucar a un humanoide que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar hechizado por ti mientras dure el conjuro. Si tú o las criaturas que son amistosas hacia ti estáis luchando contra él, este tiene ventaja en la tirada de salvación.*Mientras el objetivo está hechizado, tienes un vínculo telepático con él siempre y cuando los dos estéis en el mismo plano de existencia. Puedes usar este vínculo telepático para darle órdenes mientras estés consciente (no se requiere acción) y la bestia da lo mejor de sí para obedecerlas. Puedes especificar un curso de acción simple o general, como «ataca a esa criatura», «corre por ahí» o «atrapa ese objeto». Si la criatura cumple la orden y no recibe más por tu parte, se defiende y se protege lo mejor que puede.*Puedes usar tu acción para controlar al objetivo de manera total y precisa. Hasta el final de tu siguiente turno, este solo realiza las acciones que elijas y no hace nada que no le permitas hacer. Durante este tiempo, también puedes usar a la criatura para realizar una reacción, pero requiere que también utilices tu propia reacción.*Cada vez que el objetivo recibe daño, debe hacer una nueva tirada de salvación de Sabiduría contra el conjuro. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro con un espacio de nivel 6, la duración es concentración hasta 10 minutos. Cuando uses uno de nivel 7, la duración es concentración hasta 1 hora. Cuando uses uno de nivel 8 o superior, la duración es concentración hasta 8 horas."
            },
            {
                icono: "../assets/nivel5/enganar.svg",
                texto: "Engañar",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Bardo y Mago",
                informacion: "Te vuelves invisible al mismo tiempo que un doble ilusorio tuyo aparece donde estabas. El doble permanece ahí mientras dura el conjuro, pero la invisibilidad termina si atacas o lanzas un conjuro.*Puedes usar tu acción para mover a tu doble ilusorio hasta dos veces tu velocidad y hacerle gesticular, hablar y comportarse como decidas.*Eres capaz de ver a través de sus ojos y escuchar a través de sus oídos como si estuvieras donde está él. En cada uno de tus turnos, como acción adicional, puedes cambiar para usar tus propios sentidos o los suyos de nuevo. Mientras uses sus sentidos, estás cegado y ensordecido respecto a lo que te rodea."
            },
            {
                icono: "../assets/nivel5/enlaceTelepaticoRary.svg",
                texto: "Enlace telepático de Rary",
                componentes: "V,S,M (dos trozos de cáscara de huevo de dos tipos de criatura distintos)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Forjas un vínculo telepático entre hasta 8 criaturas voluntarias de tu elección dentro del alcance mientras dure el conjuro. Las criaturas con puntuaciones de Inteligencia de 2 o menos no se ven afectadas por este conjuro.*Hasta que el conjuro termine, los objetivos pueden comunicarse telepáticamente a través del vínculo tengan o no un idioma común. Pueden comunicarse a distancia, aunque no entre distintos planos de existencia."
            },
            {
                icono: "../assets/nivel5/ensueno.svg",
                texto: "Ensueño",
                componentes: "V,S,M (un puñado de arena, unas gotitas de tinta y una pluma de escribir de un pájaro dormido)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Ilimitado",
                duracion: "8 horas",
                ataque: "Ninguno",
                clases: "Bardo, Brujo y Mago",
                informacion: "Este conjuro da forma a los sueños de una criatura. Elige como objetivo a una criatura que conozcas y que esté en tu mismo plano de existencia. Mediante este conjuro no se puede contactar con criaturas que no duerman, como los elfos. Tú o una criatura voluntaria que tocas entráis en un estado de trance y actuáis como mensajeros. Mientras está en trance, el mensajero percibe lo que le rodea, pero no puede realizar acciones ni moverse.*Si el objetivo está durmiendo, el mensajero aparece en sus sueños y puede hablar con él mientras permanezca dormido y dure el conjuro. El mensajero también puede darle forma al entorno del sueño, crear paisajes, objetos y otras imágenes. El mensajero puede salir del trance y terminar con el efecto del conjuro en cualquier momento. El objetivo recuerda el sueño perfectamente cuando se despierta. Si el objetivo está despierto cuando lanzas el conjuro, el mensajero lo sabe y puede terminar el trance (y el conjuro) o esperar a que el objetivo se duerma, momento en el que aparece en el sueño del objetivo.*Puedes hacer que el mensajero parezca monstruoso y aterrador ante el objetivo. Si lo haces, el mensajero no puede entregar un mensaje de más de diez palabras y luego el objetivo debe hacer una tirada de salvación de Sabiduría. Si falla, los ecos de la monstruosidad fantasmal crean una pesadilla que dura mientras lo haga el sueño del objetivo y evita que este obtenga beneficios por descansar. Además, cuando el objetivo se despierta, recibe 3d6 puntos de daño psicótico.*Si tienes una parte del cuerpo del objetivo —un mechón de pelo, una uña o algo similar—, este tiene desventaja en la tirada de salvación."
            },
            {
                icono: "../assets/nivel5/escudrinar.svg",
                texto: "Escudriñar",
                componentes: "V,S,M (un foco de al menos 1000 po de valor como una bola de cristal o un espejo de plata)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Bardo, Brujo, Clérigo, Druida y Mago",
                informacion: "Puedes ver y escuchar a una criatura que elijas y que se encuentre en el mismo plano de existencia que tú. El objetivo debe hacer una tirada de salvación de Sabiduría, la cual está condicionada por lo bien que conoces al objetivo y el tipo de conexión física que tienes con él. Si el objetivo sabe que estás lanzando este conjuro, puede fallar esta tirada de salvación voluntariamente si quiere ser observado.*Conocimiento: *→ De segunda mano (has oído hablar del objetivo) → +5 MOD salvación*→ De primera mano (conoces al objetivo) → +0 MOD salvación*→ Familiar (conoces al objetivo muy bien) → –5 MOD salvación*Conexión:	*→ Retrato o cuadro → –2 MOD salvación*→ Posesión o prenda → –4 MOD salvación*→ Parte del cuerpo, mechón de cabello, uñas o similares → –10 MOD salvación*Si supera la salvación, el objetivo no queda afectado y no puedes volver a usar este conjuro hasta que no pasen 24 horas.*Si falla, el conjuro crea un sensor invisible a 10 pies o menos del objetivo a través del cual puedes ver y escuchar. El sensor de mueve con el objetivo y permanece a 10 pies o menos de él mientras dure el conjuro. Una criatura que pueda ver objetos invisibles ve el sensor como un orbe luminoso más o menos del tamaño de tu puño.*En lugar de a la criatura, puedes elegir como objetivo un lugar que hayas visto antes, en cuyo caso el sensor aparece en ese lugar y no se mueve."
            },
            {
                icono: "../assets/nivel5/geas.svg",
                texto: "Geas",
                componentes: "V",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "60 pies",
                duracion: "30 días",
                ataque: "Ninguno",
                clases: "Paladín, Bardo, Clérigo, Druida y Mago",
                informacion: "Das una orden mágica a una criatura que puedas ver dentro del alcance, lo que la obliga a llevar a cabo algún servicio, a abstenerse de hacer una acción o a seguir una actividad, según decidas. Si la criatura puede entenderte, debe superar una tirada de salvación de Sabiduría para no quedar hechizada por ti mientras dure el conjuro. Mientras que la criatura está hechizada por ti, recibe 5d10 puntos de daño psíquico cada vez que actúe directamente contra tus instrucciones, pero no más de una vez cada día. El conjuro no puede afectar a una criatura que no te pueda entender.*Puedes dar la orden que quieras, a menos que sea algo que resultaría en una muerte certera. Si das una orden suicida, el conjuro termina.*Puedes terminar el conjuro antes usando una acción para disiparlo. Los conjuros Quitar maldición, Restablecimiento mayor o Deseo también terminan el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando este espacio de conjuro de nivel 7 u 8, la duración es 1 año. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 9, el conjuro dura hasta que se termina mediante uno de los conjuros nombrados anteriormente."
            },
            {
                icono: "../assets/nivel5/golpeFlamigero.svg",
                texto: "Golpe flamígero",
                componentes: "V,S,M (una pizca de azufre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (10 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 4d6 fuego + 4d6 radiante",
                clases: "Clérigo",
                informacion: "Una columna vertical de fuego divino cae desde los cielos en el lugar que especifiques. Todas las criaturas que se encuentren dentro de un cilindro de 40 pies de altura y 10 pies de radio, cuyo centro sea un punto dentro del alcance, deben hacer una tirada de salvación de Destreza. Si fallan, reciben 4d6 puntos de daño por fuego y 4d6 puntos de daño radiante y, si tienen éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el daño por fuego o el radiante (según elijas) aumenta en 1d6 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/inmovilizarMonstruo.svg",
                texto: "Inmovilizar monstruo",
                componentes: "V,S,M (un trozo de hierro pequeño y liso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Conjuros de hechicero y Conjuros de mago*Elige a una criatura que puedas ver dentro del alcance que no sea un no muerto. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar paralizado mientras dura el conjuro. Al final de cada uno de sus turnos, puede hacer otra tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, puedes elegir como objetivo a otra criatura adicional por cada nivel por encima de 5. Las criaturas deben estar a 30 pies o menos entre sí."
            },
            {
                icono: "../assets/nivel5/manoBigby.svg",
                texto: "Mano de Bigby",
                componentes: "V,S,M (un cascarón de huevo y un guante de piel de serpiente)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "4d8 fuerza",
                clases: "Mago",
                informacion: "Creas una mano Grande de una fuerza reluciente y traslúcida en un espacio libre que puedas ver dentro del alcance. La mano dura mientras lo haga el conjuro y se mueve a tus órdenes, imitando los movimientos de tu propia mano.*La mano es un objeto que tiene CA 20 y tantos puntos de golpe como tu máximo de puntos de golpe. Si sus puntos de golpe se reducen a 0, el conjuro termina. Tiene Fuerza 26 (+8) y Destreza 10 (+0). La mano no llena su espacio.*Cuando lanzas el conjuro, y como acción adicional en los siguientes turnos, puedes mover la mano hasta 60 pies y provocar uno de los siguientes efectos.*→ Puño cerrado. La mano golpea a una criatura u objeto que se encuentre a 5 pies o menos de ella. Realiza un ataque de conjuro cuerpo a cuerpo usando tus estadísticas del juego. Si impactas, el objetivo recibe 4d8 de daño por fuerza.*→ Mano apresadora. La mano intenta hacerle una presa a una criatura Enorme o de menor tamaño que esté a 5 pies o menos de ella. Usas la Fuerza de la mano para resolver la presa. Si el objetivo es Mediano o más pequeño, tienes ventaja en la prueba. Mientras que la mano le está haciendo una presa al objetivo, puedes usar una acción adicional para que la mano lo aplaste. Cuando lo hagas, el objetivo recibe daño contundente igual a 2d6 + tu modificador por característica para lanzar conjuros.*→ Mano interpuesta. La mano se interpone entre la criatura que elijas y tú hasta que le des otra orden. La mano se mueve para permanecer entre tú y el objetivo, ofreciéndote cobertura media contra este. El objetivo no puede moverse por el espacio que ocupa la mano si su Fuerza es menor o igual que la de la mano. Si su Fuerza es mayor, el objetivo puede moverse hacia ti a través del espacio de la mano, pero para él se considera terreno difícil.*→ Mano contundente. La mano intenta empujar a una criatura que se encuentre a 5 pies o menos de ella en la dirección que elijas. Haz una prueba con la Fuerza de la mano enfrentada a una prueba de Fuerza (Atletismo) del objetivo. Si este es Mediano o de un tamaño menor, tienes ventaja. Si tienes éxito, la mano empuja al objetivo hasta 5 pies más un número de pies igual a cinco veces el modificador que te da tu característica para lanzar conjuros. La mano se mueve con el objetivo hasta quedar a 5 pies de ti o menos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el daño del puño cerrado aumenta en 2d8 y el daño por agarrar aumenta en 2d6 por cada nivel por encima de 5."
            },
            {
                icono: "../assets/nivel5/muroFuerza.svg",
                texto: "Muro de fuerza",
                componentes: "V,S,M (una pizca de gema diáfana pulverizada)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Un muro de fuerza surge en un punto que elijas dentro del alcance en cualquier orientación que elijas, como una barrera horizontal, vertical o en ángulo. Puede estar flotando o apoyado en una superficie sólida. Puedes formarlo en una cúpula semiesférica o en una esfera con un radio de hasta 10 pies, o darle la forma de una superficie lisa de hasta 10 paneles cuadrados de 10 pies. Cada panel debe ser contiguo a otro panel. En cualquiera de estas formas, el muro es de 1/4 pulgadas de ancho y dura mientras lo haga el conjuro. Si el muro atraviesa el espacio de una criatura cuando aparece, esta es empujada a uno de los lados del muro (tú eliges cuál).*Nada puede atravesar el muro físicamente. Es inmune a todo tipo de daño y no se puede disipar con Disipar magia. Sin embargo, el conjuro Desintegrar lo destruye inmediatamente. El muro también se extiende en el Plano Etéreo y bloquea el viaje etéreo a través de sí."
            },
            {
                icono: "../assets/nivel5/muroPiedra.svg",
                texto: "Muro de piedra",
                componentes: "V,S,M (un pedrusco de granito)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Druida, Hechicero y Mago",
                informacion: "Una pared no mágica de piedra sólida surge en un punto que elijas dentro del alcance. El muro tiene 6 pulgadas de grosor y está compuesto por 10 paneles cuadrados de 10 pies. Cada panel debe ser contiguo a otro panel. De manera alternativa, puedes crear paneles de 10 × 20 pies que solo tengan 3 pulgadas de grosor.*Si el muro atraviesa el espacio de una criatura cuando aparece, esta es empujada a uno de los lados del muro (tú eliges cuál). Si la criatura queda rodeada completamente por el muro (o el muro y otra superficie sólida), puede hacer una tirada de salvación de Destreza. Si tiene éxito, puede usar su reacción para moverse hasta su velocidad para no quedarse encerrada.*El muro puede tener cualquier forma que desees, aunque no puede ocupar el mismo espacio que una criatura o un objeto. El muro no tiene por qué ser vertical ni apoyarse en ninguna base firme. Sin embargo, debe estar unido y firmemente sujeto a la piedra ya existente. De esta forma, puedes usar este conjuro para crear un puente sobre un abismo o una rampa.*Si mide más de 20 pies, debes dividir por dos el tamaño de cada panel para crear soportes. Puedes darle forma al muro toscamente para crear almenas, cresterías, etcétera.*El muro es un objeto de piedra que puede dañarse y, por tanto, romperse. Cada panel tiene CA 15 y 30 puntos de golpe por cada pulgada de grosor. Reducir los puntos de golpe del muro a 0 lo destruye y, a discreción del director de juego, puede hacer que los paneles que estén conectados a él también colapsen.*Si mantienes la concentración mientras dura el conjuro, el muro se vuelve permanente y no se puede disipar. Si no, el muro desaparece cuando termina el conjuro."
            },
            {
                icono: "../assets/nivel5/nubeAniquiladora.svg",
                texto: "Nube aniquiladora",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 5d8 veneno",
                clases: "Hechicero y Mago",
                informacion: "Creas una esfera de una niebla venenosa de color verde amarillo, con 20 pies de radio cuyo centro se encuentra en un punto que elijas dentro del alcance. La niebla se extiende en las esquinas y dura mientras lo haga el conjuro o hasta que un viento fuerte la disperse y termine con el conjuro. Esta área está muy resguardada. Cuando una criatura entra en ella por primera vez en un turno o empiece su turno ahí, debe hacer una tirada de salvación de Constitución. Si falla, recibe 5d8 puntos de daño por veneno y, si tiene éxito, la mitad. La criatura queda afectada incluso si contiene el aliento o si no necesita respirar.*La niebla se aleja 10 pies de ti al principio de cada uno de tus turnos, fluyendo sobre la superficie del suelo. Sus vapores, al ser más pesados que el aire, bajan hasta el nivel más bajo del terreno e incluso se cuelan por las aberturas.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el daño aumenta en 1d8 por cada nivel por encima de 5."

            },
            {
                icono: "../assets/nivel5/pasamuros.svg",
                texto: "Pasamuros",
                componentes: "V,S,M (un pellizco de semillas de sésamo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "En un punto que elijas y que puedas ver en una superficie de madera, yeso o piedra (como un muro, un techo o un suelo) dentro del alcance aparece un pasaje que dura mientras lo haga el conjuro. Tú eliges las dimensiones de la abertura: hasta 5 pies de ancho, 8 pies de alto y 20 pies de profundidad. El pasaje no hace que la estructura que lo rodea se desestabilice.*Cuando la abertura desaparece, cualquier criatura u objeto que todavía esté en el pasaje que ha creado el conjuro son expulsados sanos y salvos al lugar libre más cercano a la superficie en la que lanzaste el conjuro."
            },
            {
                icono: "../assets/nivel5/pasoArboreo.svg",
                texto: "Paso arbóreo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Explorador y Druida",
                informacion: "Consigues la capacidad de entrar en un árbol y moverte desde ahí a otro árbol del mismo tipo que se encuentre a 500 pies o menos. Ambos árboles deben estar vivos y tener al menos el mismo tamaño que tú. Usando 5 pies de movimiento para entrar en un árbol, sabes instantáneamente la localización del resto de árboles del mismo tipo a 500 pies o menos. Como parte del movimiento, puedes pasar a uno de esos árboles o salir del árbol en el que estás. Usando otros 5 pies de movimiento, apareces en un lugar de tu elección a 5 pies o menos del árbol de destino. Si no te queda movimiento, apareces a 5 pies del árbol en el que entraste.*Puedes usar esta capacidad para teleportarte una vez por ronda mientras dure el conjuro. Debes terminar cada turno fuera de un árbol."
            },
            {
                icono: "../assets/nivel5/plagaInsectos.svg",
                texto: "Plaga de insectos",
                componentes: "V,S,M (unos cuantos granos de azúcar, algunas semillas de grano y un poco de grasa)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies (20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 4d10 perforante",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Un enjambre de langostas mordaces llena una esfera de 20 pies de radio cuyo centro se encuentra en un punto que elijas dentro del alcance. La esfera se extiende en las esquinas. La esfera permanece mientras dure el conjuro y su área está poco resguardada. El área de la esfera es terreno difícil.*Cuando el área aparece, cada criatura que se encuentre dentro de ella debe hacer una tirada de salvación de Constitución. Si falla, recibe 4d10 puntos de daño perforante y, si tiene éxito, la mitad. Una criatura también debe realizar esta tirada de salvación cuando entre en el área del conjuro por primera vez en un turno o si termina su turno en ella.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 6 o superior, el daño aumenta en 1d10 por cada espacio por encima de nivel 5."
            },
            {
                icono: "../assets/nivel5/reencarnar.svg",
                texto: "Reencarnar",
                componentes: "V,S,M (aceites y ungüentos raros de al menos 1000 po de valor, los cuales consume el conjuro)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Druida",
                informacion: "Tocas el cadáver de un humanoide o un trozo de él. Siempre y cuando la criatura no lleve muerta más de 10 días, el conjuro forma un nuevo cuerpo adulto y luego llama al alma para que entre en él. Si el alma del objetivo no es libre o no está dispuesta a volver, el conjuro falla.*La magia crea un nuevo cuerpo para que lo habite la criatura y es posible que haga que cambie su raza. El director de juego debe determinar al azar qué forma toma cuando vuelve a la vida o elegir una directamente.*La criatura reencarnada recuerda su antigua vida y experiencias. Mantiene las capacidades que tenía en su forma original, salvo por la raza y sus rasgos raciales."
            },
            {
                icono: "../assets/nivel5/restablecimientoMayor.svg",
                texto: "Restablecimiento mayor",
                componentes: "V,S,M (polvo de diamante de al menos 100 po de valor, el cual consume el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Imbuyes a una criatura que tocas con energía positiva para que se deshaga de un efecto que la debilita. Puedes reducir un nivel de agotamiento del objetivo o terminar con uno de los siguientes efectos:*→ Un efecto que tenga hechizado o petrificado al objetivo.*→ Una maldición, incluyendo la sintonía del objetivo con un objeto maldecido con magia.*→ Cualquier reducción en las características del objetivo.*→ Un efecto que reduzca el máximo de puntos de golpe del objetivo."
            },
            {
                icono: "../assets/nivel5/telequinesis.svg",
                texto: "Telequinesis",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Hechicero y Mago",
                informacion: "Consigues la capacidad de mover o manipular criaturas u objetos mediante el pensamiento. Cuando lanzas este conjuro, y como acción durante cada ronda mientras dure, puedes ejercer tu voluntad sobre una criatura o un objeto que puedas ver dentro del alcance, provocando uno de los siguientes efectos según corresponda. Puedes afectar al mismo objetivo ronda tras ronda o elegir uno nuevo cada vez. Si cambias de objetivo, el anterior ya no estará afectado por el conjuro.*→ Criatura. Puedes intentar mover a una criatura Enorme o más pequeña. Haz una prueba de tu característica para lanzar conjuros enfrentada a la prueba de Fuerza de la criatura. Si ganas el enfrentamiento, mueves a la criatura hasta 30 pies en cualquier dirección, incluyendo hacia arriba, pero no fuera del alcance de este conjuro. Hasta el final de tu siguiente turno, la criatura está apresada en tu sujeción telequinética. Una criatura que se eleva hacia arriba queda suspendida en medio del aire.*En las siguientes rondas, puedes usar tu acción para intentar mantener tu sujeción telequinética sobre la criatura repitiendo el enfrentamiento.*→ Objeto. Puedes intentar mover un objeto que pese hasta 1000 libras. Si nadie lleva el objeto puesto ni lo transporta, lo mueves automáticamente hasta 30 pies en cualquier dirección, pero no más allá del alcance del conjuro.*Si una criatura lleva el objeto puesto o lo transporta, debes hacer una prueba de tu característica para lanzar conjuros enfrentada a la prueba de Fuerza de esa criatura. Si tienes éxito, alejas el objeto de la criatura y puedes moverlo hasta 30 pies en cualquier dirección, pero no más allá del alcance del conjuro.*Tienes mucha capacidad de control sobre los objetos que sujetas telequinéticamente: por ejemplo, puedes manipular una herramienta simple, abrir una puerta o un recipiente o verter los contenidos de un vial."
            }
        ]
    },
    {
        id: 7,
        nivel: "Nivel 6",
        backgroundColor: '#f9e79f',
        conjuros: [
            {
                icono: "../assets/nivel6/aliadoPlanar.svg",
                texto: "Aliado planar",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Suplicas ayuda a una entidad de otro mundo que conozcas: un dios, un primordial, un príncipe demonio u otro ser con poder cósmico. La entidad envía un celestial, un elemental o un infernal que le sea leal a un lugar sin ocupar dentro del alcance para que te ayude. Si conoces el nombre de una criatura específica, puedes decirlo cuando lances el conjuro para solicitarla, aunque la entidad puede enviarte cualquier otra de todos modos (a elección del director de juego).*Cuando la criatura aparece, no se encuentra coaccionada para actuar de un modo en particular. Puedes pedirle que realice un servicio a cambio de un pago, pero no está obligada a hacerlo. La tarea solicitada puede ser desde una actividad simple (cruzar un abismo volando o ayudar a luchar en la batalla) a una compleja (espiar a vuestros enemigos o protegeros durante vuestra incursión en el dungeon). Debes ser capaz de comunicarte con la criatura para hacer un trato a cambio de sus servicios.*El pago puede tener muchas formas. Un celestial puede requerir una donación considerable de oro u objetos mágicos a un templo aliado, mientras que un infernal puede exigir el sacrificio de una vida o un tesoro. Algunas criaturas pueden intercambiar sus servicios por que realices una misión.*Como normal general, una tarea que se puede medir en minutos requiere un pago de 100 po por minuto, una tarea que se mide en horas requiere 1000 po por hora y una tarea que se mide en días (hasta 10 días) requiere 10 000 po por día. El director de juego puede ajustar estos pagos de acuerdo a las circunstancias bajo las que se lanza el conjuro. Si la tarea está alineada con el ethos de la criatura, el pago se podría dividir por dos o incluso obviar. Las tareas que no son peligrosas normalmente requieren la mitad del pago requerido, mientras que las tareas especialmente peligrosas pueden requerir un obsequio mayor. Las criaturas rara vez aceptan tareas que parecen suicidas.*Después de que la criatura complete su tarea o cuando la duración del servicio acordado expire, la criatura regresa a su plano natal después de informarte sobre el cumplimiento de la tarea, si es posible. Si no eres capaz de acordar un precio por el servicio de la criatura, esta regresa inmediatamente a su plano natal.*Una criatura a la que reclutas para que se una a tu grupo se considera un miembro de este, por lo que recibe su parte correspondiente de los puntos de experiencia ganados."
            },
            {
                icono: "../assets/nivel6/baileIrresistibleOto.svg",
                texto: "Baile irresistible de Otto",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                clases: "Bardo y Mago",
                informacion: "Elige una criatura que puedas ver dentro del alcance. El objetivo se pone a bailar de manera cómica, moviendo manos y pies, mientras dura el conjuro. Las criaturas que no pueden ser hechizadas son inmunes a este conjuro.*Una criatura que baila debe usar todo su movimiento para bailar sin moverse de su espacio y tiene desventaja en las tiradas de salvación de Destreza y en las tiradas de ataque. Mientras que el objetivo está afectado por este conjuro, las demás criaturas tienen ventaja en las tiradas de ataque que hagan contra él. Como acción, la criatura puede hacer una tirada de salvación de Sabiduría para recuperar el control sobre sí misma. Si tiene éxito, el conjuro termina."
            },
            {
                icono: "../assets/nivel6/barreraCuchillas.svg",
                texto: "Barrera de cuchillas",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Concentración 10 minutos",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 6d10 cortante",
                clases: "Clérigo",
                informacion: "Creas una pared vertical de afiladas cuchillas de energía mágica que giran. La pared aparece dentro del alcance del conjuro y dura mientras este lo haga. La pared puede medir hasta 100 pies de largo, 20 pies de alto y 5 pies de grosor. Proporciona tres cuartos de cobertura y el espacio que ocupa es terreno difícil.*Cuando una criatura entra en el área de la pared por primera vez en un turno o empieza su turno dentro de ella, debe superar una tirada de salvación de Destreza. Si falla, recibe 6d10 puntos de daño cortante; si tiene éxito, recibe la mitad."
            },
            {
                icono: "../assets/nivel6/circuloMuerte.svg",
                texto: "Círculo de muerte",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 8d6 necrótico",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Un cúmulo de energía negativa flota dentro de una esfera de 60 pies de radio cuyo centro es un punto que esté dentro del alcance. Todas las criaturas que se encuentren dentro de esa área deben hacer una tirada de salvación de Constitución. Si fallan, reciben 8d6 puntos de daño necrótico y, si tienen éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, el daño aumenta en 2d6 por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/conjurarFeerico.svg",
                texto: "Conjurar feérico",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                clases: "Brujo y Druida",
                informacion: "Convocas a una criatura feérica con un valor de desafío igual a 5 o menos o un espíritu feérico en forma de bestia con un valor de desafío igual a 6 o menos. La criatura feérica aparece en un espacio sin ocupar que puedas ver dentro del alcance y desaparece cuando sus puntos de golpe se reducen a 0 o cuando el conjuro termina.*La criatura feérica es amistosa hacia ti y tus compañeros mientras dura el conjuro. Tira iniciativa por la criatura, que tiene sus propios turnos. Obedece cualquier orden verbal que le des (no requiere que realices ninguna acción), siempre y cuando no violes su alineamiento. Si no le das ninguna orden, se defiende de las criaturas hostiles, pero, si no las hay, no realiza ninguna acción.*Si pierdes la concentración, la criatura feérica no desaparece, sino que pierdes el control sobre ella, se vuelve hostil hacia ti y tus compañeros y podría atacaros. No puedes desconvocar a una criatura feérica descontrolada, y esta desaparece una hora después de que la hayas convocado.*El director de juego determina las estadísticas de la criatura feérica.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, el valor de desafío aumenta en 1 por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/contingencia.svg",
                texto: "Contingencia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "10 días",
                clases: "Mago",
                informacion: "Elige un conjuro de nivel 5 o inferior que puedas lanzar, que tenga un tiempo de lanzamiento de 1 acción y cuyo objetivo puedas ser tú. Lanzas dicho conjuro (que recibe el nombre de conjuro de contingencia) como parte del lanzamiento de Contingencia, gastando espacios de conjuro para los dos, pero el de contingencia no tiene efecto ahora, sino cuando se dé una circunstancia determinada. Describes esa circunstancia cuando lanzas dos conjuros. Por ejemplo, el conjuro Contingencia que se lanza con Respirar agua puede estipular que el segundo surte efecto cuando estás rodeado de agua o en un líquido similar. El conjuro de contingencia surte efecto inmediatamente después de que se cumpla la circunstancia por primera vez, quieras o no, y entonces el conjuro Contingencia termina.*El conjuro de contingencia solo tiene efecto sobre ti, incluso si normalmente puede tener a otros como objetivo. Solo puedes usar un conjuro de contingencia a la vez. Si vuelves a lanzar Contingencia, termina el efecto del conjuro que hayas lanzado antes. Asimismo, termina si dejas de llevar contigo los componentes materiales."
            },
            {
                icono: "../assets/nivel6/crearMuertoViviente.svg",
                texto: "Crear muerto viviente",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "Instantáneo",
                clases: "Brujo, Clérigo y Mago",
                informacion: "Solo puedes lanzar este conjuro por la noche. Elige hasta tres cadáveres humanoides de tamaño Mediano o Pequeño dentro del alcance. Cada uno se convierte en un necrófago bajo tu control (el director de juego determina las estadísticas para estas criaturas).*Como acción adicional en cada uno de tus turnos, puedes dar órdenes mentalmente a cualquier criatura a la que hayas dado vida con este conjuro si esta se encuentra a 120 pies o menos de ti (si controlas varias criaturas, puedes dar órdenes a cualquiera de ellas o a todas al mismo tiempo usando la misma orden). Tú decides qué acción realizará la criatura y adónde se moverá durante su siguiente turno, o puedes dar una orden general, como proteger una habitación o un pasillo en particular. Si no das ninguna orden, la criatura solo se defiende a sí misma de las criaturas hostiles. Una vez se le da una orden, la criatura la sigue hasta que su tarea está completada.*La criatura se encuentra bajo tu control durante 24 horas, tras las cuales deja de obedecer cualquier orden que le hayas dado. Para mantener el control sobre la criatura durante otras 24 horas, debes lanzarle otra vez este conjuro antes de que el periodo actual de 24 horas termine. Usar el conjuro de este modo reinicia el control sobre otras tres criaturas que hayas animado con el mismo en lugar de animar a otras nuevas.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, puedes animar o reafirmar el control sobre cuatro necrófagos. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 8, puedes animar o reafirmar el control sobre cinco necrófagos o dos necrarios o tumularios. Cuando lanzas este conjuro con espacios de conjuro de nivel 9, puedes animar o restablecer el control sobre seis necrófagos, tres necrarios o tumularios, o dos momias."
            },
            {
                icono: "../assets/nivel6/curar.svg",
                texto: "Curar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Elige a una criatura que puedas ver dentro del alcance. Una explosión de energía positiva la invade, haciéndole recuperar 70 puntos de golpe. Este conjuro también termina con los estados ceguera, sordera y cualquier enfermedad que afecte al objetivo. Este conjuro no tiene efecto ni en constructos ni en no muertos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, la cantidad de puntos recuperados aumenta en 10 por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/danar.svg",
                texto: "Dañar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 14d6 necrótico",
                clases: "Clérigo",
                informacion: "Liberas una enfermedad virulenta en una criatura que puedas ver dentro del alcance. El objetivo debe hacer una tirada de salvación de Constitución. Si falla, recibe 14d6 puntos de daño necrótico y, si tiene éxito, la mitad. El daño no puede reducir sus puntos de golpe a menos de 1. Si el objetivo falla la tirada de salvación, su máximo de puntos de golpe se reduce durante 1 hora en una cantidad igual al daño necrótico recibido. Cualquier efecto que elimine una enfermedad permite que el máximo de puntos de golpe de la criatura vuelva a la normalidad antes de que pase ese tiempo."
            },
            {
                icono: "../assets/nivel6/carnePiedra.svg",
                texto: "De la carne a la piedra",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución niega",
                clases: "Brujo y Mago",
                informacion: "Intentas convertir en piedra a una criatura que puedas ver dentro del alcance. Si el cuerpo del objetivo es de carne, este debe hacer una tirada de salvación de Constitución. Si falla, queda apresado como si su carne fuera demasiado dura. Si tiene éxito, la criatura no se ve afectada.*Una criatura apresada por este conjuro debe hacer otra tirada de salvación de Constitución al final de cada uno de sus turnos. Cuando supere tres tiradas, el conjuro termina. Si falla tres veces, se convierte en piedra y queda petrificado mientras dure el conjuro. Los éxitos y los fallos no tienen que ser consecutivos; lleva la cuenta de ambos hasta que el objetivo consiga tres de un tipo.*Si la criatura se rompe físicamente mientras está petrificada, sufre una deformidad similar si vuelve a su estado original.*Si mantienes la concentración en este conjuro hasta la duración máxima, la criatura se convierte en piedra hasta que se elimine el efecto."
            },
            {
                icono: "../assets/nivel6/desintegrar.svg",
                texto: "Desintegrar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza niega",
                ataque: "Contra salvación 10d6+40 fuerza",
                clases: "Hechicero y Mago",
                informacion: "Apuntando a un objetivo que puedas ver dentro del alcance, de tu dedo sale un delgado rayo verde. El objetivo puede ser una criatura, un objeto o una creación de fuerza mágica, como el muro creado por Muro de fuerza.*Una criatura objetivo debe hacer una tirada de salvación de Destreza. Si falla, recibe 10d6+40 puntos de daño por fuerza. Si este daño reduce sus puntos de golpe a 0, esta se desintegra.*Una criatura desintegrada, y todo lo que lleve puesto o transporte, excepto los objetos mágicos, queda reducida o un montón de polvillo gris. La criatura solo puede volver a la vida mediante los conjuros Resurrección verdadera o Deseo.*Este conjuro desintegra automáticamente un objeto de tamaño Grande o menor. Si el objetivo es un objeto o una creación de fuerza mágica de tamaño Enorme o mayor, el conjuro desintegra una porción de él igual a un cubo de 10 pies. Este conjuro no afecta a objetos mágicos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, el daño aumenta en 3d6 por cada espacio de conjuro por encima de 6."
            },
            {
                icono: "../assets/nivel6/encontrarCamino.svg",
                texto: "Encontrar el camino",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Concentración 1 día",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Este conjuro te permite encontrar la ruta física más corta y directa hacia una localización física específica con la que estés familiarizado y que se encuentre en el mismo plano de existencia que tú. Si nombras un destino de otro plano de existencia, un destino que se mueve (como una fortaleza móvil) o un destino inespecífico (como la guarida de un dragón verde), el conjuro falla.*Mientras dura el conjuro, siempre y cuando estés en el mismo plano de existencia que el destino, sabes lo lejos que está y en qué dirección se encuentra. Mientras viajas allí, cuando se te presenta una elección de sendas a lo largo del camino, sabes de manera automática cuál es la ruta más corta y directa hacia el destino (pero no necesariamente la más segura)."
            },
            {
                icono: "../assets/nivel6/esferaCongelanteOtiluke.svg",
                texto: "Esfera congelante de Otiluke",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 10d6 frío",
                clases: "Mago",
                informacion: "Un globo helado de energía fría surge de la punta de tus dedos hasta un punto que elijas dentro del alcance, donde explota en una esfera de 60 pies de radio. Cada criatura dentro del área debe hacer una tirada de salvación de Constitución. Si falla, recibe 10d6 puntos de daño por frío; si tiene éxito, la mitad.*Si el globo golpea un cuerpo de agua o un líquido que sea principalmente de agua (sin incluir a las criaturas basadas en agua), congela el líquido a una profundidad de 6 pulgadas sobre un área de 30 pies cuadrados. Este hielo dura 1 minuto. Las criaturas que estaban nadando en la superficie del agua quedan atrapadas en el hielo. Una criatura atrapada puede usar una acción para hacer una prueba de Fortaleza contra la CD de salvación de tu conjuro para liberarse.*Puedes evitar disparar el globo después de lanzar el conjuro si lo deseas, en cuyo caso un globo de más o menos el tamaño de una piedra lisa y fría al tacto aparece en tu mano. En cualquier momento, tú o una criatura a la que le das el globo podéis tirarlo con la mano (hasta una distancia de 40 pies) o con una honda (alcance normal de una honda). El globo se destroza al impactar, con el mismo efecto que tiene cuando lanzas el conjuro con normalidad. También puedes colocar el globo sin destrozarlo. Después de 1 minuto, si el globo aún no ha estallado, explota.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, el daño aumenta en 1d6 por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/festinHeroes.svg",
                texto: "Festín de héroes",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Creas un gran festín de comida y bebida magníficas. El festín se consume en 1 hora y desaparece después de ese tiempo, y los efectos beneficiosos no surten efecto hasta que no termina esta hora. Hasta doce criaturas aparte de ti pueden participar en el festín.*Una criatura que participa en el festín consigue varios beneficios: se cura de todas las enfermedades y venenos, se vuelve inmune al veneno y a quedar asustada, y tiene ventaja en todas las tiradas de salvación de Sabiduría. Su máximo de puntos de golpe también aumenta en 2d10 y consigue el mismo número de puntos de golpe. Estos beneficios duran 24 horas."
            },
            {
                icono: "../assets/nivel6/globoInvulnerabilidad.svg",
                texto: "Globo de invulnerabilidad",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                clases: "Hechicero y Mago",
                informacion: "Una barrera inmóvil y ligeramente reluciente te rodea en un radio de 10 pies y dura mientras lo haga el conjuro.*Cualquier conjuro de nivel 5 o inferior que se lance desde fuera de la barrera no puede afectar a las criaturas u objetos que se encuentren dentro de ella, incluso si el conjuro se lanza usando un espacio de conjuro superior. Un conjuro de este tipo puede tener como objetivo a criaturas u objetos dentro de la barrera, pero el conjuro no tiene efecto sobre ellos. Del mismo modo, el área dentro de la barrera está excluida de las áreas afectadas por tales conjuros.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, la barrera bloquea los conjuros de un nivel superior por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/guardasGuardias.svg",
                texto: "Guardas y guardias",
                escuela: "Abjuración",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Toque",
                duracion: "24 horas",
                clases: "Bardo, Mago",
                informacion: "Creas una custodia que protege 2500 pies cuadrados de un espacio del suelo (1 cuadrado de 50 pies, 100 cuadrados de 5 pies o 25 cuadrados de 10 pies). El área custodiada puede ser de hasta 20 pies de altura y tener la forma que quieras. Puedes custodiar varios pisos de una fortaleza dividiendo el área entre ellos, siempre y cuando andes por cada una de las áreas contiguas mientras lanzas el conjuro.*Cuando lanzas este conjuro, puedes especificar individuos que no se vean afectados por alguno o por ninguno de los efectos que elijas. También puedes indicar una contraseña que hace que quien la diga en voz alta sea inmune a estos efectos.*Guardas y custodias crea los siguientes efectos dentro del área:*Escaleras. Las escaleras del área custodiada se llenan de telarañas de arriba abajo, como en el conjuro Telaraña. Si estas hebras se queman o se desgarran, vuelven a crecer en 10 minutos mientras dure el conjuro Guardas y custodias. Pasillos. Una bruma invade los pasillos custodiados, lo que hace que sean muy oscuros. Además, en cada intersección o cada ramificación que supone elegir una dirección, hay un 50 % de probabilidades de que una criatura que no seas tú crea que está yendo en dirección opuesta a la que elije. Puertas. Todas las puertas del área custodiada están cerradas mágicamente, como si estuvieran selladas mediante el conjuro Cerradura arcana. Además, puedes cubrir hasta 10 puertas con una ilusión (equivalente a la función de objeto ilusorio del conjuro Ilusión menor) para hacer que parezca una simple sección de la pared. Otros efectos del conjuro. Puedes colocar uno de los siguientes efectos mágicos que elijas dentro del área custodiada de la fortaleza.*→ Colocas Luces danzantes en cuatro pasillos. Puedes designar un patrón simple para que las luces lo repitan mientras dure Guardas y custodias.*→ Colocas Boca mágica en dos lugares.*→ Colocas Nube apestosa en dos lugares. Los vapores aparecen en los lugares que indicas y vuelven a los 10 minutos si el aire los disipa mientras dure Guardas y custodias.*→ Colocas una Ráfaga de viento constante en un pasillo o en una habitación.*→ Colocas Sugestión en un lugar. Selecciona un área de hasta 5 pies cuadrados y cualquier criatura que entre o pase por esa área experimentará la sugestión mentalmente.*Toda el área custodiada irradia magia. Lanzar Disipar magia sobre un efecto específico solo elimina ese efecto si tiene éxito.*Puedes crear una estructura guardada y custodiada permanentemente lanzando este conjuro ahí todos los días del año."
            },
            {
                icono: "../assets/nivel6/ilusionProgramada.svg",
                texto: "Ilusión programada",
                escuela: "Ilusión",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (30 pies)",
                duracion: "Hasta disipado",
                clases: "Bardo, Mago",
                informacion: "Creas una ilusión de un objeto, criatura o algún otro fenómeno visible dentro del alcance que se activa cuando se da una condición específica. La ilusión es impredecible hasta entonces. No debe ser más grande que un cubo de 30 pies, y tú decides cómo se comporta la ilusión y qué sonidos hace cuando lanzas el conjuro. Esta actuación programada puede durar hasta 5 minutos.*Cuando la condición que especificas tiene lugar, la ilusión aparece y se mueve como describiste. Una vez la ilusión termina de actuar, desaparece y permanece inactiva durante 10 minutos. Después de ese tiempo, la ilusión se puede volver a activar.*La condición que la activa puede ser tan general o tan detallada como quieras, aunque se debe basar en condiciones visuales o audibles que ocurran a 30 pies o menos del área. Por ejemplo, puedes crear una ilusión de ti mismo para que aparezca y desaconseje a quien intente abrir una puerta cerrada que lo haga, o establecer que la ilusión se active solo cuando una criatura diga la palabra o la frase correcta.*Interactuar físicamente con la imagen revela que es una ilusión, dado que las cosas pueden atravesarla. Una criatura puede determinar que es una ilusión si examina la imagen usando su acción y supera una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu conjuro. Si lo consigue, puede ver a través de la imagen y cualquier sonido que haga le suena vacío."
            },
            {
                icono: "../assets/nivel6/invocacionInstantaneaDrawmij.svg",
                texto: "Invocación instantánea de Drawmij",
                escuela: "Conjuración (ritual)",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Tocas un objeto que pese 10 libras o menos, de 6 pies o menos. El conjuro deja una marca invisible en su superficie e inscribe de manera invisible el nombre del objeto en el zafiro que usas como componente material. Cada vez que lanzas este conjuro, debes usar un zafiro diferente. En cualquier momento, puedes usar tu acción para decir el nombre del objeto y romper el zafiro. El objeto aparece instantáneamente en tu mano independientemente de la distancia física o planar, y el conjuro termina.*Si otra criatura sujeta el objeto o lo lleva puesto, el objeto no se teleporta al romper el zafiro, sino que sabes quién es la criatura que posee el objeto y dónde se encuentra aproximadamente en ese momento.*Disipar magia o un efecto similar que se aplique con éxito en el zafiro termina con el efecto de este conjuro."
            },
            {
                icono: "../assets/nivel6/malOjo.svg",
                texto: "Mal de ojo",
                escuela: "Nigromancia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero, Mago",
                informacion: "Mientras dura el conjuro, tus ojos se convierten en un vacío negro imbuido con poder maligno. Una criatura de tu elección a 60 pies o menos de ti y que pueda verte debe superar una tirada de salvación de Sabiduría para no quedar afectada por uno de los siguientes efectos de tu elección mientras dura el conjuro. En cada turno hasta que el conjuro termine, puedes usar tu acción para elegir como objetivo a otra criatura, pero no puedes volver a elegir a una criatura que haya superado la tirada de salvación contra este conjuro.*→ Asqueado. El objetivo tiene desventaja en las tiradas de ataque y en las pruebas de característica. Al final de cada uno de sus turnos, puede hacer otra tirada de salvación de Sabiduría. Si tiene éxito, el efecto termina.*→ Aterrado. Aterras al objetivo. En cada uno de sus turnos, la criatura aterrada debe realizar la acción de esprintar y alejarse de ti por la ruta más corta y rápida disponible, a menos que no haya dónde moverse. Si el objetivo se mueve a un lugar que esté al menos a 60 pies de ti y desde donde ya no pueda verte, el efecto termina.*→ Dormido. El objetivo cae inconsciente. Se despierta si recibe daño o si otra criatura utiliza su acción para despertarlo."
            },
            {
                icono: "../assets/nivel6/moverTierra.svg",
                texto: "Mover la tierra",
                escuela: "Transmutación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 2 horas",
                clases: "Druida, Hechicero, Mago",
                informacion: "Elige un área de terreno dentro del alcance que no tenga más de 40 pies de lado. Puedes remodelar la tierra, la arena o la arcilla del área como quieras mientras dure el conjuro. Puedes aumentar o disminuir la elevación del área, crear o llenar una zanja, alzar o derrumbar un muro o formar una columna. La extensión de tales cambios no puede exceder la mitad del área de la dimensión más larga. Es decir, si afectas a un cuadrado de 40 pies de lado, puedes crear un pilar de hasta 20 pies de altura, aumentar o disminuir la elevación del cuadrado en 20 pies, cavar una zanja de 20 pies de profundidad, etcétera. Estos cambios tardan 10 minutos en completarse.*Cada 10 minutos que pasas concentrado en el conjuro, puedes elegir una nueva área de terreno para afectarla.*Dado que la transformación del terreno ocurre lentamente, normalmente las criaturas que se encuentran dentro del área no quedan atrapadas ni resultan dañadas por el movimiento del suelo.*Este conjuro no puede manipular la piedra natural o las construcciones de piedra. Las rocas y las estructuras cambian para acomodarse al nuevo terreno. Si el modo en que cambias un terreno hace que una estructura sea inestable, esta puede colapsar.*Del mismo modo, este conjuro no afecta directamente al crecimiento de las plantas. La tierra se lleva consigo las plantas al moverse."
            },
            {
                icono: "../assets/nivel6/muroEspinas.svg",
                texto: "Muro de espinas",
                escuela: "Conjuración",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 7d8 perforante",
                clases: "Druida",
                informacion: "Creas un muro de arbustos duros, flexibles y enmarañados con espinas afiladas como agujas. El muro aparece dentro del alcance en una superficie sólida y dura mientras lo haga el conjuro. Puedes elegir entre crear un muro de hasta 60 pies de largo, 10 de alto y 5 de ancho o un círculo de 20 pies de diámetro y hasta 20 de alto y 5 de grosor. El muro bloquea la línea de visión.*Cuando el muro aparece, todas las criaturas que se encuentren dentro del área deben hacer una tirada de salvación de Destreza. Si fallan, reciben 7d8 puntos de daño perforante y, si tienen éxito, la mitad.*Una criatura puede moverse por el muro, aunque lenta y dolorosamente. Por cada pie que se desplace, debe gastar 4 pies de movimiento. Además, la primera vez que entre en el muro en un turno o si termina su turno en él, debe hacer una tirada de salvación de Destreza. Si falla, recibe 7d8 puntos de daño cortante y, si tiene éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, ambos tipos de daño aumentan en 1d8 puntos por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/muroHielo.svg",
                texto: "Muro de hielo",
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                clases: "Mago",
                informacion: "Creas un muro de hielo en una superficie sólida dentro del alcance. Puedes darle la forma de una cúpula semiesférica o una esfera con un radio de hasta 10 pies, o de una superficie lisa de hasta 10 paneles cuadrados de 10 pies. Cada panel debe ser contiguo a otro panel. En cualquiera de estas formas, el muro es de 1 pulgada de ancho y dura mientras lo haga el conjuro.*Si el muro atraviesa el espacio de una criatura cuando aparece, esta es empujada a uno de los lados del muro y debe hacer una tirada de salvación de Destreza. Si falla, recibe 10d6 puntos de daño por frío y, si tiene éxito, la mitad.*Este muro es un objeto que puede resultar dañado y, por tanto, se puede romper. Tiene CA 12 y 30 puntos de golpe por cada sección de 10 pies, y es vulnerable al daño por fuego. Reducir a 0 los puntos de golpe de una sección de 10 pies la destruye y deja detrás de sí una cortina de aire frío en el espacio del muro que ocupaba. Una criatura que se mueva a través de esta cortina por primera vez en un turno debe hacer una tirada de Constitución. Si falla, recibe 5d6 puntos de daño por frío y, si tiene éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, el daño que inflige el muro aumenta en 2d6 y el daño que se recibe por traspasar la cortina de aire frío aumenta en 1d6 por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/palabraRegreso.svg",
                texto: "Palabra de regreso",
                escuela: "Conjuración",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "5 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Tú y hasta 5 criaturas voluntarias que se encuentren a 5 pies o menos de ti os teleportáis instantáneamente a un santuario designado de antemano. Tú y cualquier criatura que teleportas contigo aparecéis en el espacio libre más cercano al lugar que indicaste cuando preparaste tu santuario (ver a continuación). Si lanzas este conjuro sin preparar primero un santuario, el conjuro no tiene efecto.*Debes designar un santuario lanzando este conjuro en un lugar, como en un templo dedicado a tu deidad o muy vinculado a ella. Si intentas lanzar el conjuro de este modo en un área que no esté dedicada a tu deidad, el conjuro no tiene efecto."
            },
            {
                icono: "../assets/nivel6/prohibicion.svg",
                texto: "Prohibición",
                escuela: "Abjuración (ritual)",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Toque",
                duracion: "1 día",
                clases: "Clérigo",
                informacion: "Creas una guardia contra el viaje mágico que protege hasta 40.000 pies cuadrados de un espacio hasta una altura de 30 pies. Mientras dura el conjuro, las criaturas no pueden teleportarse a esta área ni usar portales, como el que crea el conjuro Umbral, para entrar en ella. El conjuro protege el área contra el viaje planar y, por tanto, evita que las criaturas accedan a ella desde el Plano Astral, el Plano Etéreo, las Tierras Salvajes de las Hadas, el Páramo Sombrío o mediante el conjuro Desplazamiento de plano.*Además, el conjuro daña a los siguientes tipos de criaturas que elijas cuando lo lanzas: celestiales, elementales, fatas, infernales y no muertos. Cuando una criatura elegida entra en el área del conjuro por primera vez en un turno o empieza su turno ahí, recibe 5d10 puntos de daño radiante o necrótico (según elijas cuando lances el conjuro).*Cuando lances este conjuro, puedes establecer una contraseña y la criatura que la diga cuando entre en el área no recibirá daño.*El área de este conjuro no puede solaparse con el área de otro conjuro de Interdicción. Si lanzas este conjuro cada 30 días en el mismo lugar, este dura hasta que se disipe y los componentes materiales se consumen en el último lanzamiento."
            },
            {
                icono: "../assets/nivel6/rayoSolar.svg",
                texto: "Rayo solar",
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 6d8 radiante",
                clases: "Druida, Hechicero, Mago",
                informacion: "Un rayo de luz brillante surge de tu mano en una línea de 5 pies de ancho y 60 pies de largo. Todas las criaturas que se encuentren en la línea deben hacer una tirada de salvación de Constitución. Si fallan, reciben 6d8 puntos de daño radiante y quedan cegadas hasta el siguiente turno. Si tienen éxito, reciben la mitad de ese daño y no quedan cegadas. Los no muertos y los limos tienen desventaja en la tirada de salvación.*Puedes crear un nuevo rayo como acción en cualquier turno hasta que termine el conjuro.*Mientras dura el conjuro, una mota de rayo resplandece en tu mano. Emite luz brillante en un radio de 30 pies y luz tenue en 30 pies adicionales. Esta luz es luz del sol."
            },
            {
                icono: "../assets/nivel6/relampagoCadena.svg",
                texto: "Relámpago en cadena",            
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d8 relámpago",
                clases: "Hechicero, Mago",
                informacion: "Creas un relámpago que forma un arco hacia un objetivo de tu elección que puedas ver dentro del alcance. Después, desde el objetivo surgen otros tres rayos que van hacia sendos objetivos, cada uno de los cuales debe estar a 30 pies o menos del primero. Los objetivos pueden ser criaturas u objetos y solo pueden ser alcanzados por uno de los rayos.*El objetivo debe hacer una tirada de salvación de Destreza. Si falla, recibe 10d8 puntos de daño por relámpago y, si tiene éxito, la mitad.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7 o superior, un rayo adicional surge del primer objetivo hacia otro por cada nivel por encima de 6."
            },
            {
                icono: "../assets/nivel6/sugestionEnMasa.svg",
                texto: "Sugestión en masa",            
                escuela: "Encantamiento",
                componentes: "V,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "24 horas",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero, Mago",
                informacion: "SSugieres mágicamente un curso de actividad (limitado a una frase o dos) hasta a 12 criaturas de tu elección que puedas ver dentro del alcance y que puedan escucharte y entenderte. Las criaturas que no pueden ser hechizadas son inmunes a este efecto. La sugerencia debe plantearse de tal modo que el curso de la acción suene razonable. Pedirle a una criatura que se apuñale a sí misma, que se arroje sobre una lanza, que se inmole o que haga algo obviamente dañino anula automáticamente el efecto del conjuro.*Cada objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, el objetivo sigue el curso de acción que hayas descrito lo mejor que puede. La acción sugerida puede continuar mientras dure el conjuro. Si se puede completar en poco tiempo, el conjuro acaba cuando el sujeto termina lo que se le pidió que hiciera.*También puedes especificar las condiciones que activarán una tarea especial mientras dure el conjuro. Por ejemplo, puedes sugerir que un grupo de soldados le dé todo su dinero al primer mendigo que se encuentre. Si la condición no se cumple antes de que el conjuro termine, la actividad no se lleva a cabo.*Si tú o cualquiera de tus compañeros daña a una criatura que se encuentre bajo los efectos de este conjuro, este termina para esa criatura.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 7, la duración es de 10 días. Cuando usas un espacio de conjuro de nivel 8, la duración es de 30 días. Cuando usas un espacio de conjuro de nivel 9, la duración es un año y un día."
            },
            {
                icono: "../assets/nivel6/urnaMagica.svg",
                texto: "Urna mágica",            
                escuela: "Nigromancia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Hasta disipado",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Mago",
                informacion: "Tu cuerpo entra en un estado catatónico conforme tu alma lo abandona y entra en el recipiente que has usado como componente material del conjuro. Mientras tu alma reside en el recipiente, percibes lo que te rodea como si estuvieras en el espacio del recipiente. La única acción que puedes hacer es proyectar tu alma hasta 100 pies fuera del recipiente, ya sea volviendo a tu cuerpo vivo (con lo que se termina el conjuro) o intentado poseer el cuerpo de un humanoide.*Puedes intentar poseer a un humanoide que se encuentre a 100 pies o menos de ti y que puedas ver (las criaturas protegidas por el conjuro Protección contra el mal y el bien o Círculo mágico no se pueden poseer). El objetivo debe hacer una tirada de salvación de Carisma. Si falla, tu alma se desplaza a su cuerpo y su alma queda atrapada en el recipiente. Si tiene éxito, el objetivo resiste tus esfuerzos por poseerlo y no puedes volver a intentarlo hasta dentro de 24 horas.*Una vez poseas el cuerpo de una criatura, lo controlas. Tus estadísticas de juego se remplazan por las de la criatura, aunque mantienes tu alineamiento, tus puntuaciones de Inteligencia, Sabiduría y Carisma y los beneficios de tus rasgos de clase. Si el objetivo tiene algún nivel de clase, no puedes usar ninguno de sus rasgos de clase.*Mientras tanto, el alma de la criatura poseída puede percibir desde el recipiente usando sus propios sentidos, pero no puede moverse ni realizar ninguna acción.*Mientras posees un cuerpo, puedes usar tu acción para volver al recipiente si este se encuentra a 100 pies o menos de ti, lo que hace que el alma del huésped vuelva a su cuerpo. Si el cuerpo del huésped muere mientras tú estás dentro, la criatura muere y tú debes hacer una tirada de salvación de Carisma contra la CD de tu propio conjuro. Si tienes éxito, vuelves al recipiente si este se encuentra a 100 pies o menos de ti. Si no, mueres.*Si el recipiente se destruye o si el conjuro termina, tu alma vuelve inmediatamente a tu cuerpo. Si tu cuerpo está a más de 100 pies de ti o está muerto cuando intentas regresar a él, mueres. Si el alma de otra criatura se encuentra en el recipiente cuando este se destruye, su alma regresa a su cuerpo si este está vivo y a 100 pies o menos. Si no, la criatura muere.*Cuando el conjuro termina, el recipiente se destruye"
            },
            {
                icono: "../assets/nivel6/viajarViento.svg",
                texto: "Viajar con el viento",            
                escuela: "Transmutación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "8 horas",
                clases: "Druida",
                informacion: "Tú y hasta diez criaturas voluntarias que puedas ver dentro del alcance asumís una forma gaseosa, como volutas de nube, mientras dura el conjuro. Mientras está en esta forma de nube, una criatura tiene una velocidad volando de 300 pies y tiene resistencia al daño de las armas mágicas. Las únicas acciones que puede realizar en esta forma son la acción de esprintar y volver a su forma original. Volver a la forma original lleva 1 minuto, durante el cual la criatura está incapacitada y no puede moverse. Hasta que termine el conjuro, la criatura puede volver a la forma de nube, lo cual también lleva 1 minuto.*Si una criatura está volando en forma de nube cuando el conjuro termina, esta desciende 60 pies por ronda durante 1 minuto hasta que aterriza de manera segura. Si no puede aterrizar después de 1 minuto, la criatura cae la distancia que falte."
            },
            {
                icono: "../assets/nivel6/viajarPlantas.svg",
                texto: "Viajar mediante plantas",            
                escuela: "Conjuración",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "1 asalto",
                clases: "Druida",
                informacion: "Este conjuro crea un vínculo mágico entre una planta inanimada de tamaño Grande o mayor dentro del alcance y otra planta que esté en el mismo plano de existencia. Debes haber visto o tocado antes la planta de destino al menos una vez. Mientras dure el conjuro, cualquier criatura puede caminar sobre la planta objetivo y salir en la planta de destino usando 5 pies de movimiento."
            },
            {
                icono: "../assets/nivel6/visionVeraz.svg",
                texto: "Visión veraz",            
                escuela: "Adivinación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Bardo, Brujo, Clérigo, Hechicero, Mago",
                informacion: "Este conjuro le da a una criatura voluntaria que toques la capacidad de ver las cosas como realmente son. Mientras dura el conjuro, la criatura tiene vista verdadera, percibe las puertas mágicas escondidas mediante magia y puede ver en el Plano Etéreo, todo ello hasta una distancia de 120 pies."
            }
             ]
    },
    {
        id: 8,
        nivel: "Nivel 7",
        backgroundColor: '#edbb99',
        conjuros: [
            {
                icono: "../assets/nivel7/bolaFuegoRetardada.svg",
                texto: "Bola de fuego de explosión retardada",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (20 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 12d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Un haz de luz amarilla surge de tu dedo índice y se condensa en una burbuja brillante en un punto que elijas dentro del alcance del conjuro. Cuando este termine, ya sea porque pierdes la concentración o porque decides acabarlo, la burbuja explota con un leve estruendo en un estallido de llamas que se propagan en las esquinas. Cada criatura que se encuentre en una esfera de 20 pies de radio cuyo centro sea ese punto debe hacer una tirada de salvación de Destreza. Si falla, recibe daño por fuego igual al daño total acumulado y, si tiene éxito, la mitad. El daño base del conjuro es 12d6. Si al final de tu turno la burbuja aún no ha estallado, el daño aumenta 1d6.*Si una criatura toca la burbuja antes del fin del conjuro, debe hacer una tirada de salvación de Destreza. Si falla, el conjuro termina inmediatamente y la burbuja explota con una llamarada. Si tiene éxito, la criatura puede lanzar la burbuja hasta 40 pies. Cuando esta golpee a una criatura o a un objeto sólido, el conjuro termina y la burbuja explota.*El fuego daña a los objetos que se encuentren dentro del área e incinera a los objetos inflamables que nadie lleve puestos ni transporte.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 8 o superior, el daño base aumenta en 1d6 por cada nivel por encima de 7.."
            },
            {
                icono: "../assets/nivel7/conjurarCelestial.svg",
                texto: "Conjurar celestial",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                clases: "Clérigo",
                informacion: "Convocas a un celestial con un valor de desafío igual a 4 o menos, el cual aparece en un espacio sin ocupar que puedas ver dentro del alcance. El celestial desaparece cuando sus puntos de golpe se reducen a 0 o cuando el conjuro termina.*El celestial es amistoso hacia ti y tus compañeros mientras dura el conjuro. Tira iniciativa por el celestial, que tiene sus propios turnos. Obedece cualquier orden verbal que le des (no requiere que realices ninguna acción), siempre y cuando no viole su alineamiento. Si no le das ninguna orden, se defiende de criaturas hostiles, pero, si no las hay, no realiza ninguna acción.*El director de juego determina las estadísticas del celestial.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 9, conjuras un celestial con un valor de desafío igual a 5 o menos."
            },
            {
                icono: "../assets/nivel7/dedoMuerte.svg",
                texto: "Dedo de la muerte",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 7d8+30 necrótico",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Envías energía negativa a una criatura que puedas ver dentro del alcance, lo que le provoca un dolor agudo. El objetivo debe realizar una tirada de salvación de Constitución. Si falla, recibe 7d8+30 puntos de daño necrótico y, si tiene éxito, la mitad.*Un humanoide que muera a causa de este conjuro se levanta al principio de tu siguiente turno como un zombi que está bajo tu control de manera permanente y sigue tus órdenes verbales lo mejor que puede."
            },
            {
                icono: "../assets/nivel7/desplazamientoPlanos.svg",
                texto: "Desplazamiento entre planos",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Brujo, Clérigo, Druida, Hechicero y Mago",
                informacion: "Tú y hasta ocho criaturas voluntarias os cogéis de la mano formando un círculo y sois transportadas a otro plano de existencia. Puedes especificar el destino en términos generales, como la Ciudad de Oropel en el Plano Elemental de Fuego o el Palacio de Dispater en el segundo nivel de los Nueve Infiernos, y apareceréis en ese lugar o cerca de él. Si pretendes llegar a la Ciudad de Oropel, por ejemplo, puedes llegar a la calle del Acero, enfrente de la Puerta de las Cenizas, o de cara a la ciudad al otro lado del Mar de Fuego, a discreción del director de juego.*De forma alternativa, si conoces la secuencia de símbolos de un círculo de teletransporte en otro plano de existencia, este conjuro puede llevarte a ese círculo. Si el círculo es demasiado pequeño como para contener a todas las criaturas que transportas, estas aparecen en los espacios sin ocupar que estén más cerca del círculo.*Puedes usar este conjuro para expulsar a una criatura involuntaria a otro plano. Elige una criatura dentro del alcance y haz un ataque de conjuro cuerpo a cuerpo contra él. Si impactas, la criatura debe hacer una tirada de salvación de Carisma. Si falla, es transportada a una localización aleatoria en el plano de existencia que especifiques. Una criatura transportada de este modo, debe encontrar su propio camino de vuelta a tu plano de existencia actual."
            },
            {
                icono: "../assets/nivel7/espadaMordenkainen.svg",
                texto: "Espada de Mordenkainen",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo 3d10 fuerza",
                clases: "Bardo y Mago",
                informacion: "Creas un plano de fuerza con forma de espada que planea dentro del alcance. Dura mientras lo haga el conjuro.*Cuando aparece la espada, haces un ataque de conjuro cuerpo a cuerpo contra un objetivo de tu elección que se encuentre a 5 pies o menos de la espada. Si impactas, el objetivo recibe 3d10 puntos de daño por fuerza. Hasta que el conjuro termine, puedes usar una acción adicional en cada uno de tus turnos para mover la espada hasta 20 pies a un lugar donde puedas verla y repetir este ataque contra el mismo objetivo o contra otro diferente"
            },
            {
                icono: "../assets/nivel7/espejismoArcano.svg",
                texto: "Espejismo arcano",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Visión",
                duracion: "10 días",
                clases: "Bardo, Druida y Mago",
                informacion: "Haces que un terreno que se encuentra dentro de una milla cuadrada se parezca, se escuche, se huela o incluso se sienta como otro tipo de terreno. Sin embargo, la forma general del terreno sigue siendo la misma. Un campo abierto o una carretera pueden parecer un pantano, una colina, una grieta o cualquier otro terreno difícil o intransitable. Se puede hacer que un estanque parezca un prado cubierto de hierba, que un precipicio parezca una pendiente suave o que un barranco cubierto de rocas parezca un camino ancho y allanado.*Del mismo modo, puedes alterar la apariencia de estructuras o incluirlas donde no están. El conjuro no disfraza, oculta ni añade criaturas.*La ilusión incluye elementos audibles, visuales, táctiles y olfatorios, así que puede convertir un terreno despejado en un terreno difícil (o viceversa) o dificultar el movimiento a través del área. Cualquier elemento del terreno ilusorio (como una roca o un palo) que se saque del área del conjuro desaparece inmediatamente.*Las criaturas con vista verdadera pueden ver la forma real del terreno; sin embargo, el resto de elementos de la ilusión permanecen, así que, aunque la criatura esté al tanto de la presencia de la ilusión, todavía puede interactuar con ella físicamente."
            },
            {
                icono: "../assets/nivel7/excursionEterea.svg",
                texto: "Excursión etérea",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Entras en las regiones limítrofes del Plano Etéreo, en la zona en la que se solapa con tu plano actual, y permaneces en la frontera etérea mientras dura el conjuro o hasta que uses una acción para disiparlo. Durante ese tiempo, puedes moverte en cualquier dirección. Si te mueves hacia arriba o hacia abajo, cada pie de movimiento te cuesta un pie adicional. Puedes ver y escuchar el plano del que provienes, pero todo lo que hay ahí parece gris y no puedes ver nada más allá de 60 pies.*Mientras estás en el Plano Etéreo, solo puedes afectar o ser afectado por otras criaturas de ese plano. Las criaturas que no son del Plano Etéreo no pueden percibirte y no pueden interactuar contigo, a menos que tengas una característica especial o magia que se lo permita.*Ignoras todos los objetos y efectos que no están en el Plano Etéreo, lo que te permite moverte a través de los objetos que percibes del plano del que provienes.*Cuando el conjuro termina, vuelves inmediatamente al plano del que provienes en el lugar que ocupas en ese momento. Si ocupas el mismo espacio que un objeto sólido o una criatura cuando esto sucede, pasas inmediatamente al espacio sin ocupar más cercano que puedas y recibes daño por fuerza igual al doble de pies que te hayas movido.*Este conjuro no tiene efecto si lo lanzas mientras estás en el Plano Etéreo o en un plano que no tiene frontera con este, como uno de los Planos Exteriores.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 8 o superior, puedes elegir como objetivos a tres criaturas voluntarias (incluyéndote a ti) por cada nivel por encima de 7. Las criaturas deben estar a 10 pies o menos de ti cuando lances el conjuro."
            },
            {
                icono: "../assets/nivel7/invertirGravedad.svg",
                texto: "Invertir gravedad",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies (50 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Druida, Hechicero y Mago",
                informacion: "Este conjuro invierte la gravedad en un cilindro de 50 pies de radio y 100 pies de alto cuyo centro es un punto dentro del alcance. Todas las criaturas y objetos que no estén sujetos al suelo de ninguna manera en el área cuando lances este conjuro caen hacia arriba hasta lo alto del área. Una criatura puede hacer una tirada de salvación de Destreza para agarrarse a un objeto fijado que pueda alcanzar y evitar la caída.*Si durante esta caída las criaturas y objetos que caen se encuentran algún objeto sólido (como un techo), reciben un golpe como lo harían en una caída normal hacia abajo. Si un objeto o una criatura alcanza lo alto del área sin golpear nada, permanece ahí, oscilando ligeramente, mientras dura el conjuro.*Al final de la duración, los objetos y las criaturas afectados vuelven a caer hacia abajo."
            },
            {
                icono: "../assets/nivel7/jaulaFuerza.svg",
                texto: "Jaula de fuerza",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies",
                duracion: "1 hora",
                clases: "Bardo, Brujo y Mago",
                informacion: "Una prisión de fuerza mágica con forma de cubo, inmóvil e invisible, surge alrededor de un área que elijas dentro del alcance. La prisión puede ser una jaula o una caja sólida, según decidas: con forma de jaula puede tener hasta 20 pies de lado y estar hecha con barrotes de media pulgada de grosor separados otra media pulgada entre sí; con forma de caja puede tener hasta 10 pies de lado, crea una barrera sólida que evita que cualquier materia sólida la traspase y bloquea cualquier conjuro que se lance dentro o fuera de esa área.*Cuando lanzas el conjuro, cualquier criatura que esté completamente dentro del área de la jaula queda atrapada. Las criaturas que solo están parcialmente dentro de la jaula y las que son demasiado grandes como para entrar en ella son expulsadas hasta que están completamente fuera de ella.*Una criatura dentro de la jaula no puede salir de ella por medios no mágicos. Si intenta teleportarse o hacer un viaje intraplanar, primero debe hacer una tirada de salvación de Carisma. Si tiene éxito, puede salir. Si no, no puede salir y desperdicia un uso del conjuro o efecto. La jaula también afecta el Plano Etéreo y bloquea el viaje etéreo.*Este conjuro no se puede disipar con Disipar magia."
            },
            {
                icono: "../assets/nivel7/mansionMordenkainen.svg",
                texto: "Magnífica mansión de Mordenkainen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "300 pies",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Conjuras una vivienda extradimensional dentro del alcance que dura mientras lo haga el conjuro. Tú eliges dónde se encuentra su entrada, que centellea débilmente y tiene 5 pies de ancho y 10 de alto. Tú y cualquier criatura que indiques cuando lanzas el conjuro podéis entrar en la vivienda extradimensional siempre y cuando el portal permanezca abierto. Puedes abrir o cerrar el portal si estás a 30 pies o menos de él. Mientras está cerrado, el portal es invisible.*Más allá del portal se encuentra una casa magnífica con numerosas habitaciones. La atmósfera es limpia, fresca y acogedora. Puede tener la distribución que quieras, pero no puede superar los 50 cubos de 10 pies de lado. El lugar está amueblado y decorado como quieras. Contiene comida suficiente como para servir un banquete de 9 platos a 100 personas y 100 sirvientes traslúcidos de apariencia y atuendo de tu elección que obedecen todas tus órdenes. Cada sirviente puede realizar cualquier tarea que pueda realizar un sirviente humano, salvo atacar o realizar ninguna acción que dañe a otra criatura directamente. Así, estos sirvientes pueden coger cosas, limpiar, hacer arreglos, doblar ropa, encender fuegos, servir comida, servir vino, etcétera. Pueden ir a cualquier lugar de la mansión, pero no marcharse de ella. Los muebles y otros objetos que crea este conjuro se convierten en humo si se sacan de la casa.*Cuando el conjuro termina, cualquier criatura que se encuentre dentro del espacio extradimensional es expulsada al espacio abierto que esté más cerca de la entrada."
            },
            {
                icono: "../assets/nivel7/palabraDivina.svg",
                texto: "Palabra divina",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "30 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Clérigo",
                informacion: "Pronuncias una palabra divina, imbuida con el poder que dio forma al mundo en los albores de la creación. Elige cualquier número de criaturas que puedas ver dentro del alcance. Cada criatura que pueda escucharte debe hacer una tirada de salvación de Carisma. Si falla, sufre un efecto diferente dependiendo de sus puntos de golpe actuales:*→ 50 puntos de golpe o menos: ensordecida durante 1 minuto.*→ 40 puntos de golpe o menos: ensordecida y cegada durante 10 minutos.*→ 30 puntos de golpe o menos: ensordecida, cegada y aturdida durante 1 hora.*→ 20 puntos de golpe o menos: muere instantáneamente.*Independientemente de sus puntos de golpe actuales, los celestiales, elementales, fatas e infernales fallan esta tirada y se ven obligados a volver a su plano de origen (si no están allí ya) y no pueden volver a tu plano actual durante 24 horas por ningún medio salvo por el conjuro Deseo."
            },
            {
                icono: "../assets/nivel7/proyectarImagen.svg",
                texto: "Proyectar imagen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "2650000 pies",
                duracion: "Concentración 1 día",
                clases: "Bardo y Mago",
                informacion: "Creas una copia ilusoria de ti mismo que dura mientras lo hace el conjuro. La copia puede aparecer en cualquier lugar que hayas visto antes dentro del alcance, independientemente de los obstáculos. La ilusión es como tú y suena como tú, pero es intangible. Si recibe daño, desaparece y el conjuro termina.*Puedes usar tu acción para mover esta ilusión hasta el doble de tu velocidad y hacer que gesticule, hable o se comporte como elijas. Imita tus gestos a la perfección.*Puedes ver a través de sus ojos y escuchar a través de sus oídos como si estuvieras en su espacio. Durante tu turno, como acción adicional, puedes pasar de usar sus sentidos a usar los tuyos, o a la inversa. Mientras estás usando sus sentidos, estás cegado y ensordecido respecto a lo que te rodea.*Interactuar físicamente con la imagen revela que es una ilusión, dado que las cosas pueden atravesarla. Una criatura que use su acción para examinar la imagen puede determinar que es una ilusión si supera una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu conjuro. Si lo consigue, puede ver a través de la imagen y cualquier sonido que haga le suena vacío."
            },
            {
                icono: "../assets/nivel7/recluir.svg",
                texto: "Recluir",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Mediante este conjuro, se puede esconder a una criatura voluntaria o un objeto mientras dura el conjuro. Cuando lanzas el conjuro y tocas al objetivo, este se vuelve invisible y no pude ser el objetivo de conjuros de adivinación ni ser percibido mediante sensores de escudriñamiento creados por conjuros de adivinación.*Si el objetivo es una criatura, cae en un estado de suspensión animada. El tiempo deja de pasar para él y no envejece.*Puedes establecer una condición para que el conjuro termine antes, cualquier cosa que elijas, pero debe ocurrir o ser visible a 1 milla o menos del objetivo. Algunos ejemplos son: «después de 1000 años» o «cuando la tarasca despierte». Este conjuro también termina si el objetivo recibe daño."
            },
            {
                icono: "../assets/nivel7/regenerar.svg",
                texto: "Regenerar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Tocas a una criatura y estimulas su capacidad de curación natural. El objetivo recupera 4d8 + 15 puntos de golpe. Mientras dura el conjuro, el objetivo recupera 1 punto de golpe al principio de cada uno de sus turnos (10 puntos de golpe cada minuto).*Si tiene algún miembro amputado (dedos, piernas, colas, etcétera), se restaura después de 2 minutos. Si tienes el miembro y lo sujetas al muñón, el conjuro hace que se cosa inmediatamente."
            },
            {
                icono: "../assets/nivel7/resurreccion.svg",
                texto: "Resurrección",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Bardo y Clérigo",
                informacion: "Tocas a una criatura muerta que falleció hace menos de un siglo, que no murió debido a la edad y que no es un no muerto. Si su alma es libre y voluntaria, el objetivo regresa a la vida con todos sus puntos de golpe.*Este conjuro neutraliza cualquier veneno y cura las enfermedades normales que afectaban a la criatura cuando murió. Sin embargo, no elimina las enfermedades mágicas, las maldiciones y similares; si tales efectos no se eliminan antes de lanzar el conjuro, afectan al objetivo cuando este vuelva a la vida.*Este conjuro cierra todas las heridas mortales y restablece todas las partes del cuerpo que falten.*Volver de entre los muertos es una experiencia dura. El objetivo recibe un penalizador de –4 a todas las tiradas de ataque, tiradas de salvación y pruebas de característica. Cada vez que el objetivo termine un descanso prolongado, el penalizador se reduce en 1 hasta que desaparece.*Lanzar este conjuro para restablecer la vida de una criatura que ha estado muerta durante un año o más cuesta mucho. Hasta que no termines un descanso prolongado, no puedes volver a lanzar conjuros y tienes desventaja en todas las tiradas de ataque, pruebas de característica y tiradas de salvación."
            },
            {
                icono: "../assets/nivel7/rociadaPrismatica.svg",
                texto: "Rociada prismática",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d6",
                clases: "Hechicero y Mago",
                informacion: "Ocho rayos de luz multicolor surgen de tu mano. Cada rayo es de un color diferente y tiene un poder y un propósito diferentes. Todas las criaturas que se encuentren en un cono de 60 pies deben hacer una tirada de salvación de Destreza. Por cada objetivo, tira 1d8 para determinar qué rayo de color lo afecta.*→ Rojo. El objetivo recibe 10d6 puntos de daño por fuego si falla la salvación o la mitad si tiene éxito.*→ Naranja. El objetivo recibe 10d6 puntos de daño por ácido si falla la salvación o la mitad si tiene éxito.*→ Amarillo. El objetivo recibe 10d6 puntos de daño por relámpago si falla la salvación o la mitad si tiene éxito.*→ Verde. El objetivo recibe 10d6 puntos de daño por veneno si falla la salvación o la mitad si tiene éxito.*→ Azul. El objetivo recibe 10d6 puntos de daño por frío si falla la salvación o la mitad si tiene éxito.*→ Añil. Si falla la salvación, el objetivo queda apresado y debe hacer una tirada de salvación de Constitución al final de cada uno de sus turnos. Si supera la prueba tres veces, el conjuro termina; si falla tres veces, se convierte en piedra permanentemente y queda sujeto al estado petrificado. No es necesario que los éxitos y los fallos sean consecutivos; lleva la cuenta de ambos hasta que el objetivo consiga tres de cualquier tipo.*→ Violeta. Si falla la salvación, el objetivo queda cegado y debe hacer una tirada de salvación de Sabiduría al principio de tu siguiente turno. Si tiene éxito, el estado cegado termina; si falla, la criatura es transportada a otro plano de existencia que elija el director de juego y ya no está cegada. (Normalmente, una criatura que está en un plano que no es su plano natal es expulsada a su hogar, mientras que otras criaturas son transportadas a los planos Astral o Etéreo).*→ Especial. El objetivo es alcanzado por dos rayos. Tira dos dados más y vuelve a tirar los resultados de 8."
            },
            {
                icono: "../assets/nivel7/simbolo.svg",
                texto: "Símbolo",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Hasta disipado o disparado",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Cuando lanzas este conjuro, inscribes un glifo dañino en una superficie (como una sección del suelo, una pared o una mesa) o en un objeto que se pueda cerrar para ocultar el glifo (como un libro, un pergamino o un cofre del tesoro). Si eliges una superficie, el glifo puede cubrir un área de superficie de no más de 10 pies de diámetro. Si eliges un objeto, ese objeto debe permanecer en su lugar; si se mueve a más de 10 pies de donde lanzaste este conjuro, el glifo se rompe y el conjuro termina sin activarse.*El glifo es prácticamente invisible: para encontrarlo es necesaria una prueba de Inteligencia (Investigación) enfrentada a la CD de salvación de tu conjuro.*Tú decides qué activa el glifo cuando lanzas el conjuro. Las activaciones más comunes de los glifos inscritos en una superficie son tocar o pisar el glifo, quitar otro objeto que lo cubre, aproximarse a una cierta distancia o manipular el objeto que lo tiene. Las de los glifos inscritos en objetos son abrir el objeto, acercase a él a una distancia determinada o ver o leer el glifo.*Más adelante puedes refinar la activación para que el conjuro solo se active bajo ciertas circunstancias o de acuerdo a las características físicas de una criatura (como el peso o el tamaño) o al tipo de criatura (por ejemplo, se puede establecer que la custodia afecta a sagas o a cambiaformas). También puedes especificar criaturas que no activen el glifo, como las que dicen una contraseña determinada.*Cuando inscribas el glifo, elige una de las siguientes opciones como efecto. Una vez se activa, el glifo brilla, creando una esfera de 60 pies de radio con luz tenue durante 10 minutos, después de lo cual el conjuro termina. Todas las criaturas que se encuentren en la esfera cuando el glifo se active se convierten en el objetivo de este efecto, al igual que una criatura que entre en la esfera por primera vez durante un turno o termine su turno en ella.*→ Aturdimiento. Cada objetivo debe superar una tirada de salvación de Sabiduría para no quedar aturdido durante 1 minuto.*→ Desacuerdo. Cada objetivo debe hacer una tirada de salvación de Constitución. Si falla, discute y riñe con otras criaturas durante 1 minuto. Durante ese tiempo, es incapaz de comunicarse de manera efectiva y tiene desventaja en las tiradas de ataque y en las pruebas de característica.*→ Dolor. Cada objetivo debe hacer una tirada de salvación de Constitución y se queda incapacitado con un dolor insoportable durante 1 minuto si falla la salvación.*→ Dormir. Cada objetivo debe superar una tirada de salvación de Sabiduría para no quedar inconsciente durante 10 minutos. El objetivo se despierta si recibe daño o si alguien usa una acción para sacudirlo o pegarle para que se despierte.*→ Locura. Cada objetivo debe realizar una tirada de salvación de Inteligencia. Si falla, el objetivo se vuelve loco durante 1 minuto. Una criatura loca no puede realizar acciones, entender lo que dicen otras criaturas ni leer, y solo dice galimatías. El director de juego controla su movimiento, el cual es errático.*→ Miedo. Cada objetivo debe superar una tirada de salvación de Sabiduría para no quedar asustada durante 1 minuto. Mientras está asustado, el objetivo tira cualquier cosa que esté sujetando y, si puede, debe alejarse al menos 30 pies del glifo en cada uno de sus turnos.*→ Muerte. Cada objetivo debe hacer una tirada de salvación de Constitución; si falla, recibe 10d10 puntos de daño necrótico y, si tiene éxito, la mitad.*→ Sin esperanza. Cada objetivo debe realizar una tirada de salvación de Carisma. Si falla, el objeto está abrumado por la desesperación durante 1 minuto. Durante este tiempo, no puede atacar a ninguna criatura ni elegirla como objetivo de rasgos, conjuros u otros efectos mágicos dañinos."
            },
            {
                icono: "../assets/nivel7/simulacro.svg",
                texto: "Simulacro",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "12 horas",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Le das forma a un duplicado ilusorio de una bestia o de un humanoide que está dentro del alcance durante todo el tiempo que dure el lanzamiento del conjuro. El duplicado es una criatura, en parte real y en parte formada por hielo o nieve, que puede realizar acciones y ser afectada igual que una criatura normal. Su apariencia es igual que la del original, pero su máximo de puntos de golpe es la mitad que el de la criatura y no tiene equipo. Por otro lado, la ilusión usa todas las estadísticas de la criatura a la que duplica.*El simulacro es amistoso hacia ti y las criaturas que indiques. Obedece las órdenes que le des, se mueve y actúa de acuerdo a tus deseos y actúa en tu turno de combate. Al simulacro le falta la capacidad de aprender y volverse más poderoso, así que no sube de nivel ni aumenta otras características, ni tampoco recupera los espacios de conjuro gastados.*Si el simulacro recibe daño, puedes repararlo en un laboratorio alquímico usando hierbas y minerales raros de 100 po de valor por cada punto de golpe a recuperar. El simulacro dura hasta que sus puntos de golpe se reduzcan a 0, momento en el que se convierte en nieve y se derrite inmediatamente.*Si lanzas este conjuro de nuevo, cualquier duplicado activo que hayas creado con él se destruye de manera inmediata."
            },
            {
                icono: "../assets/nivel7/teletransporte.svg",
                texto: "Teletransporte",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Este conjuro te transporta instantáneamente a un destino que selecciones a ti y a otras 8 criaturas voluntarias de tu elección que puedas ver dentro del alcance, o a un único objeto que puedas ver dentro del alcance. Si el objetivo es un objeto, debe caber en un cubo de 10 pies y no puede llevarlo ninguna criatura involuntaria.*Debes conocer el destino, que debe estar en el mismo plano de existencia que tú. Tu familiaridad con el destino determina si llegas a él con éxito. El director de juego debe tirar 1d100 y consultar la tabla.*CONSULTAR TABLA EN EL MANUAL"
            },
            {
                icono: "../assets/nivel7/tormentaFuego.svg",
                texto: "Tormenta de fuego",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 7d10 fuego",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Una tormenta compuesta por una cortina de llamas crepitantes aparece en un lugar que elijas dentro del alcance. El área de la tormenta está compuesta por hasta diez cubos de 10 pies, que puedes distribuir a voluntad. Cada cubo debe tener al menos una cara adyacente a la cara de otro cubo. Cada criatura que se encuentre dentro del área debe hacer una tirada de salvación de Destreza. Si falla, recibe 7d10 puntos de daño por fuego o, si tiene éxito, la mitad.*El fuego daña a los objetos que se encuentren dentro del área e incinera a los objetos inflamables que nadie lleve puestos ni transporte. Si quieres, las plantas del área no se ven afectadas por el conjuro."
            }
        ]
    },
    {
        id: 9,
        nivel: "Nivel 8",
        backgroundColor: '#f5b7b1',
        conjuros: [
            {
                icono: "../assets/nivel8/antipatiaSimpatia.svg",
                texto: "Antipatía/simpatía",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "60 pies (200 pies)",
                duracion: "10 días",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Druida y Mago",
                informacion: "Este conjuro atrae o repele a las criaturas que elijas. Elige como objetivo a algo que esté dentro del alcance, ya sea un objeto o una criatura Enorme o de un tamaño menor, o un área que no tenga más de 200 pies cúbicos. Luego especifica un tipo de criatura inteligente, como dragones rojos, trasgos o vampiros. Imbuyes al objetivo con un aura que atrae o repele a las criaturas determinadas mientras dure el conjuro. Elige Antipatía o Simpatía como efecto del aura.*→ Antipatía. El conjuro hace que el tipo de criaturas indicado sientan una urgencia inmensa de marcharse del área y evitar al objetivo. Cuando una criatura de ese tipo pueda ver al objetivo o se acerque a 60 pies o menos de él, debe superar una tirada de salvación de Sabiduría para no asustarse. La criatura permanece asustada mientras pueda ver al objetivo o esté a 60 pies o menos de él. En este estado, debe usar su movimiento para desplazarse hasta el lugar seguro más cercano desde el que no pueda ver al objetivo. Si se aleja más de 60 pies del objetivo y no puede verlo, ya no estará asustada, pero volverá a estarlo si sigue viendo al objetivo o si se acerca a 60 pies o menos de él.*→ Simpatía. El conjuro hace que el tipo de criaturas indicado sientan una urgencia inmensa de acercarse al objetivo mientras esté a 60 pies o menos de él o pueda verlo. Cuando una criatura de ese tipo pueda ver al objetivo o se acerque a 60 pies o menos de él, debe superar una tirada de salvación de Sabiduría para no tener que usar su movimiento en cada uno de sus turnos para entrar en el área o ponerse al alcance del objetivo. Cuando lo haya hecho, no puede alejarse voluntariamente.*Si el objetivo daña de algún modo a la criatura afectada, esta puede hacer una tirada de salvación de Sabiduría para acabar con el efecto, como se describe a continuación.*→ Acabar con el efecto. Si una criatura afectada termina su turno a más de 60 pies del objetivo o no es capaz de verlo, debe hacer una tirada de salvación de Sabiduría. Si tiene éxito, deja de estar afectada por el objetivo, se da cuenta de que el sentimiento de repugnancia o atracción es mágico y se vuelve inmune al efecto durante 1 minuto. Una criatura afectada puede hacer una tirada de salvación de Sabiduría cada 24 horas mientras persista el conjuro."
            },
            {
                icono: "../assets/nivel8/aspectosAnimales.svg",
                texto: "Aspectos animales",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 24 horas",
                clases: "Druida",
                informacion: "Tu magia convierte a otros en bestias. Elige cualquier número de criaturas voluntarias que puedas ver dentro del alcance. Transformas a cada objetivo en la forma de una bestia de tamaño Grande o menor con un valor de desafío igual a 4 o menos. Durante los siguientes turnos, puedes usar tu acción para volver a transformar a las criaturas afectadas en otra cosa.*La transformación dura mientras lo haga el conjuro, hasta que los puntos de golpe del objetivo se reduzcan a 0 o hasta que muera. Puedes elegir una forma diferente para cada objetivo. Las estadísticas de juego de un objetivo se remplazan por las de la bestia elegida, aunque mantiene su alineamiento y sus puntuaciones de Inteligencia, Sabiduría y Carisma. El objetivo asume los puntos de golpe de su nueva forma y, cuando vuelve a su forma habitual, recupera los puntos de golpe que tenía antes de transformarse. Si vuelve a su forma original como consecuencia de que sus puntos de golpe se hayan reducido a 0, cualquier exceso de daño se aplica a su forma original. Mientras el exceso de daño no reduzca a 0 los puntos de golpe de la forma habitual de la criatura, esta no se queda inconsciente. La criatura está limitada en las acciones que puede realizar debido a la naturaleza de su nueva forma, y no puede hablar ni lanzar conjuros.*El equipo del objetivo se funde con la nueva forma. El objetivo no puede activar, ni empuñar su equipo, ni beneficiarse de otro modo de él."
            },
            {
                icono: "../assets/nivel8/auraSagrada.svg",
                texto: "Aura sagrada",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (30 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución niega",
                clases: "Clérigo",
                informacion: "La luz divina surge de ti y se fusiona en un tenue resplandor en un radio de 30 pies. Las criaturas que elijas dentro de ese radio cuando lances este conjuro emiten luz tenue en un radio de 5 pies y tienen ventaja en las tiradas de salvación, mientras que el resto tiene desventaja en las tiradas de ataque que se hagan contra ellas hasta que el conjuro termine. Además, cuando un infernal o un no muerto impacte a una criatura afectada con un ataque cuerpo a cuerpo, el aura destella con una luz brillante. El atacante debe superar una tirada de salvación de Constitución para no quedar cegado hasta que termine el conjuro."
            },
            {
                icono: "../assets/nivel8/campoAntimagia.svg",
                texto: "Campo antimagia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (10 pies)",
                duracion: "Concentración 1 hora",
                clases: "Clérigo y Mago",
                informacion: "Te rodea una esfera antimagia invisible con un radio de 10 pies que crea un área apartada de la energía mágica que envuelve el multiverso. Dentro de la esfera no se pueden lanzar conjuros, convocar criaturas ni desaparecer, e incluso los objetos mágicos se vuelven mundanos. Hasta que el conjuro termina, la esfera se mueve contigo (tú eres su centro).*Los conjuros y otros efectos mágicos, excepto los creados por un artefacto o una deidad, se anulan si están dentro de la esfera y no pueden introducirse en ella. El espacio usado para lanzar un conjuro que al final queda anulado se consume igualmente. Mientras un efecto está anulado, no funciona, pero el tiempo que pasa anulado cuenta para su duración.*→ Efectos dirigidos. Los conjuros y otros efectos mágicos, como Proyectil mágico o Hechizar persona, que van dirigidos a una criatura o a un objeto que se encuentra en la esfera no tienen efecto sobre ese objetivo.*→ Áreas de magia. El área de otro conjuro o efecto mágico, como Bola de fuego, no puede entrar en la esfera. Si la esfera se solapa con un área de magia, la parte del área cubierta por la esfera queda anulada. Por ejemplo, las llamas creadas por el conjuro Muro de fuego quedan anuladas dentro de la esfera y crean un hueco en el muro si el solapamiento es lo suficientemente grande.*→ Conjuros. Cualquier conjuro o efecto mágico activo sobre una criatura o un objeto que estén dentro de la esfera queda anulado mientras permanezca ahí.*→ Objetos mágicos. Las propiedades y poderes de los objetos mágicos quedan anulados dentro de la esfera. Por ejemplo, una espada larga +1 en la esfera funciona como una espada larga no mágica.*Las propiedades y los poderes de un arma mágica quedan anulados si el objetivo o el usuario están dentro de la esfera. Si un arma o munición mágica abandona completamente la esfera (por ejemplo, si disparas una flecha mágica o si arrojas una lanza mágica a un objetivo que se encuentra fuera de la esfera), la magia del objeto deja de estar anulada en cuanto sale.*→ Viaje mágico. El teletransporte y el viaje entre planos no funcionan dentro de la esfera, independientemente de si la esfera es el punto de partida o el de llegada para tales viajes mágicos. Los portales que dan a otro lugar, mundo o plano de existencia, así como una abertura a un espacio extradimensional como los que crea el conjuro Truco de la cuerda, se cierran temporalmente mientras están en la esfera.*→ Criaturas y objetos. Las criaturas y objetos convocados o creados temporalmente mediante magia desaparecen. Vuelven a aparecer instantáneamente cuando el espacio que ocupaban deja de estar dentro de la esfera.*→ Disipar magia. Los conjuros y los efectos mágicos como Disipar magia no tienen efecto en la esfera. Del mismo modo, las esferas creadas por otro conjuro de Campo antimagia no se anulan entre sí."
            },
            {
                icono: "../assets/nivel8/clon.svg",
                texto: "Clon",
                componentes: "V,S,M (Diamante 1000po y pulgada de carne a clonar. Recipiente 2000po, un cofre, agua salada)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Mago",
                informacion: "Este conjuro crea un duplicado inerte de una criatura viva como una salvaguardia contra la muerte. El clon se forma dentro de un recipiente sellado y termina de desarrollarse a los 120 días; también puedes clonar una versión más joven de la criatura. Siempre y cuando su recipiente permanezca inalterable, el clon permanece inerte y sin deteriorarse.*En cualquier momento a partir de que el clon madure, si la criatura original muere, su alma se transfiere al clon, siempre y cuando el alma sea libre y esté dispuesta a regresar. El clon es físicamente idéntico al original y tiene su misma personalidad, recuerdos y características, pero no el equipo. Los restos físicos de la criatura original, si aún existen, se vuelven inertes y no se pueden devolver a la vida, dado que el alma de la criatura está en otra parte."
            },
            {
                icono: "../assets/nivel8/controlarClima.svg",
                texto: "Controlar el clima",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 8 horas",
                clases: "Clérigo, Druida y Mago",
                informacion: "Controlas el clima a 5 millas o menos de ti mientras dura el conjuro. Debes estar al aire libre para lanzarlo. Si te mueves a un lugar donde no puedes ver el cielo, el conjuro termina.*Cuando lanzas el conjuro, cambias las condiciones climáticas actuales, las cuales determina el director de juego de acuerdo al clima y a la estación. Puedes cambiar las precipitaciones, la temperatura y el viento. Las nuevas condiciones tardan en surtir efecto 1d4×10 minutos. Una vez lo hacen, puedes volver a cambiar las condiciones. Cuando el conjuro acaba, el tiempo vuelve a la normalidad gradualmente.*Cuando cambies las condiciones climáticas, busca la condición actual en las siguientes tablas y cámbiala un nivel, arriba o abajo. Cuando cambies el viento, puedes cambiar su dirección. CONSULTAR TABLA"
            },
            {
                icono: "../assets/nivel8/dominarMonstruo.svg",
                texto: "Dominar monstruo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Intentas embaucar a una criatura que puedas ver dentro del alcance. La criatura debe superar una tirada de salvación de Sabiduría para no quedar hechizada por ti mientras dure el conjuro. Si tú o las criaturas que son amistosas hacia ti estáis luchando contra dicho monstruo, este tiene ventaja en la tirada de salvación.*Mientras la criatura está hechizada, tienes un vínculo telepático con ella, siempre y cuando los dos estéis en el mismo plano de existencia. Puedes usar este vínculo telepático para darle órdenes mientras estés consciente (no se requiere acción) y la criatura da lo mejor de sí para obedecerlas. Puedes especificar un curso de acción simple o general, como «ataca a esa criatura», «corre por ahí» o «atrapa ese objeto». Si la criatura cumple la orden y no recibe más por tu parte, se defiende y se protege lo mejor que puede.*Puedes usar tu acción para controlar al objetivo de manera total y precisa. Hasta el final de tu siguiente turno, la criatura solo realiza las acciones que elijas y no hace nada que no le permitas hacer. Durante este tiempo, también puedes usar a la criatura para realizar una reacción, pero requiere que también utilices tu propia reacción.*Cada vez que el objetivo recibe daño, debe hacer una nueva tirada de salvación de Sabiduría contra el conjuro. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro con un espacio de conjuro de nivel 9 o superior, la duración es concentración hasta 8 horas."
            },
            {
                icono: "../assets/nivel8/explosionSolar.svg",
                texto: "Explosión solar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 12d6 radiante",
                clases: "Druida, Hechicero y Mago",
                informacion: "Un rayo de sol brillante de 60 pies de radio surge de un punto de tu elección dentro del alcance. Todas las criaturas que se encuentren en esa luz deben hacer una tirada de salvación de Constitución. Si falla, una criatura recibe 12d6 puntos de daño radiante y queda cegada durante 1 minuto. Si tiene éxito, recibe la mitad de ese daño y no queda cegada. Los no muertos y los limos tienen desventaja en la tirada de salvación.*Una criatura cegada por este conjuro debe hacer otra tirada de salvación de Constitución al final de cada uno de sus turnos. Si tiene éxito, dejar de estar cegada.*Este conjuro disipa cualquier oscuridad que haya en el área que haya sido creada por un conjuro."
            },
            {
                icono: "../assets/nivel8/laberinto.svg",
                texto: "Laberinto",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                clases: "Mago",
                informacion: "Destierras a una criatura que puedas ver dentro del alcance a un semiplano laberíntico. El objetivo permanece ahí mientras dure el conjuro o hasta que escape del laberinto.*El objetivo puede usar su acción para intentar escapar haciendo una prueba de Inteligencia CD 20. Si tiene éxito, escapa y el conjuro termina (los minotauros y los demonios goristros tienen éxito automáticamente).*Cuando el conjuro termina, el objetivo reaparece en el espacio que dejó o, si está ocupado, en el espacio libre más cercano."
            },
            {
                icono: "../assets/nivel8/labia.svg",
                texto: "Labia",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                clases: "Bardo y Brujo",
                informacion: "Hasta que el conjuro termine, cuando hagas una prueba de Carisma, puedes remplazar el resultado que saques por 15. Además, no importa lo que digas, la magia que determinaría si estás diciendo la verdad indica que estás siendo veraz."
            },
            {
                icono: "../assets/nivel8/menteBlanco.svg",
                texto: "Mente en blanco",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Hasta que el conjuro termina, una criatura voluntaria que tocas es inmune al daño psíquico, a cualquier efecto que sentiría sus emociones o sus verdaderos pensamientos, a conjuros de adivinación y al estado hechizado. El conjuro ignora incluso el conjuro Deseo y los conjuros o efectos de poder similar que se usan para afectar la mente del objetivo o para conseguir información sobre él."
            },
            {
                icono: "../assets/nivel8/nubeIncendiaria.svg",
                texto: "Nube incendiaria",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (20 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d8 fuego",
                clases: "Hechicero y Mago",
                informacion: "Una turbulenta nube de humo atravesada por ardientes brasas blancas aparece en una esfera de un radio de 20 pies cuyo centro se encuentra en un punto dentro del alcance. La nube se extiende en las esquinas y su área está muy resguardada. Dura mientras lo haga el conjuro o hasta que un viento de velocidad moderada o superior (al menos 10 millas por hora) la disipe.*Cuando la nube aparece, cada criatura que se encuentre en ella debe hacer una tirada de salvación de Destreza. Si falla, recibe 10d8 puntos de daño por fuego y, si tiene éxito, la mitad. Una criatura también debe hacer una tirada de salvación cuando entre en el área del conjuro por primera vez durante un turno o si termina su turno ahí. La nube se aleja 10 pies de ti en una dirección que elijas al principio de cada uno de tus turnos."
            },
            {
                icono: "../assets/nivel8/palabraPoderAturdir.svg",
                texto: "Palabra de poder: aturdir",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que puede aturdir la mente de una criatura que puedas ver dentro del alcance, lo que la deja pasmada. Si el objetivo tiene 150 puntos de golpe o menos, queda aturdido. Si no, el conjuro no tiene efecto.El objetivo aturdido debe hacer una tirada de salvación de Constitución al final de cada uno de sus turnos. Si la supera, el efecto aturdidor termina."
            },
            {
                icono: "../assets/nivel8/romperMente.svg",
                texto: "Romper la mente",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Inteligencia niega",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Haces estallar la mente de una criatura que puedas ver dentro del alcance para destrozar su intelecto y su personalidad. El objetivo recibe 4d6 puntos de daño psíquico y debe hacer una tirada de salvación de Inteligencia. Si falla, sus puntuaciones de Inteligencia y Carisma se reducen a 0 y no puede lanzar conjuros, activar objetos mágicos, entender idiomas o comunicarse de un modo inteligible. Sin embargo, puede identificar a sus amigos, seguirlos y protegerlos.*Cada 30 días, la criatura puede repetir la tirada de salvación. Si tiene éxito, el conjuro termina.*El conjuro también se puede terminar con Restablecimiento mayor, Sanar o Deseo."
            },
            {
                icono: "../assets/nivel8/semiplano.svg",
                texto: "Semiplano",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 hora",
                clases: "Brujo y Mago",
                informacion: "Creas una puerta de sombras en una superficie lisa y sólida que puedas ver dentro del alcance. La puerta es lo suficientemente grande como para permitir que criaturas Medianas la crucen sin problemas. Cuando se abre, la puerta conduce a un semiplano que parece ser una habitación vacía de 30 pies en cada dimensión, y está hecha de madera o piedra. Cuando el conjuro termina, la puerta desaparece y cualquier criatura u objeto que se encuentre dentro del semiplano queda atrapado ahí, ya que la puerta también desaparece en el otro lado.*Cada vez que lanzas este conjuro, puedes crear un nuevo semiplano o hacer que la puerta de sombras conecte con un semiplano que hayas creado antes al lanzar el mismo conjuro. Además, si conoces la naturaleza o el contenido de un semiplano que otra criatura ha creado con este conjuro, puedes conectar la puerta de sombras con él."
            },
            {
                icono: "../assets/nivel8/terremoto.svg",
                texto: "Terremoto",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "500 pies (100 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Creas una turbulencia sísmica en un punto del suelo que puedas ver dentro del alcance. Mientras dure el conjuro, un intenso temblor se desplaza rápidamente por el suelo en un círculo de 100 pies de radio cuyo centro es ese punto y sacude a las criaturas y estructuras que están en contacto con el suelo de esa área.*El suelo de esa área se vuelve terreno difícil. Todas las criaturas que estén en el suelo concentrándose deben hacer una tirada de salvación de Constitución. Si fallan, pierden la concentración.*Cuando lanzas este conjuro y al final de cada turno que pases concentrado en él, todas las criaturas que estén en el suelo deben hacer una tirada de salvación de Destreza. Si fallan, quedan tumbadas.*Este conjuro tiene efectos adicionales dependiendo del terreno de la zona, según determine el director de juego.*→ Fisuras. Se abren fisuras en el área donde empieza el conjuro el turno siguiente al que lo lanzas. Un total de 1d6 fisuras se abren donde decida el director de juego. Cada una tiene 1d10×10 pies de profundidad y 10 pies de anchura y se extiende desde un extremo del área del conjuro al otro. Una criatura que se encuentre en un lugar donde se abre una fisura debe superar una tirada de salvación de Destreza para no caer por ella. Si tiene éxito, consigue moverse al extremo de la fisura conforme se abre.*Una fisura que se abre por debajo de una estructura hace que esta colapse automáticamente (ver a continuación).*→ Estructuras. El temblor inflige 50 puntos de daño contundente a cualquier estructura que esté en contacto con el suelo del área en la que lanzas el conjuro. Esto sucede al principio de cada uno de tus turnos hasta que el conjuro termina. Si los puntos de golpe de una estructura se reducen a 0, esta se derrumba y posiblemente daña a las criaturas cercanas. Una criatura que se encuentre a una distancia igual a la mitad de la altura de la estructura debe hacer una tirada de salvación de Destreza. Si falla, recibe 5d6 puntos de daño contundente, queda tumbada y sepultada por los escombros, con lo que necesita realizar una prueba de Destreza (Atletismo) como acción para escapar. El director de juego puede ajustar la CD dependiendo de la naturaleza de los escombros. Si tiene éxito, la criatura recibe la mitad del daño y no queda tumbada ni sepultada."
            }
        ]
    },
    {
        id: 10,
        nivel: "Nivel 9",
        backgroundColor: '#d98880',
        conjuros: [
            {
                icono: "../assets/nivel9/cambiarForma.svg",
                texto: "Cambiar de forma",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                clases: "Druida y Mago",
                informacion: "Asumes la forma de otra criatura mientras dura el conjuro. Puede ser cualquier criatura con un valor de desafío igual a tu nivel o inferior. La criatura no puede ser un constructo ni un no muerto, y debes haber visto ese tipo de criatura al menos una vez. Te transformas en un prototipo normal de esa criatura, sin niveles de clase y sin el rasgo Lanzamiento de conjuros.*Las estadísticas de la criatura elegida remplazan a las tuyas, salvo tu alineamiento y tus puntuaciones de Inteligencia, Sabiduría y Carisma. También mantienes todas tus habilidades y competencias de tiradas de salvación, además de obtener las de la criatura. Si la criatura tiene la misma competencia que tú y el bonificador que indica sus estadísticas es mayor que el tuyo, usa el bonificador de la criatura en su lugar. No puedes realizar acciones legendarias o de guarida de la nueva forma.*Asumes los puntos de golpe y los dados de golpe de la nueva forma. Cuando vuelves a tu forma original, vuelves al número de puntos de golpe que tenías antes de transformarte. Si vuelves a tu forma como resultado de que tus puntos de golpe se reduzcan a 0, cualquier exceso de daño se aplica a tu forma original. Siempre y cuando ese exceso no reduzca los puntos de golpe de tu forma original a 0, no te quedas inconsciente.*Mantienes los beneficios de cualquier rasgo de tu clase, raza u otra fuente y puedes usarlos siempre y cuando tu nueva forma sea físicamente capaz de hacerlo. No puedes usar tus sentidos especiales (por ejemplo, visión en la oscuridad) a menos que tu nueva forma también los tenga. Solo puedes hablar si la criatura también puede hacerlo.*Cuando te transformas, eliges si tu equipo cae al suelo, si se funde con la nueva forma o si esta lo lleva puesto, en cuyo caso el equipo funciona con normalidad. El director de juego determina si la nueva forma puede llevarlo de acuerdo a la forma y el tamaño de la criatura, puesto que el equipo no cambia para ajustarse a la nueva forma. El equipo que no puedas llevar en la nueva forma debe caer al suelo o fundirse con la nueva forma. El equipo que se funde no tiene efecto en este estado.*Mientras dura el conjuro, puedes usar tu acción para asumir una forma diferente con las mismas restricciones y reglas, con una excepción: si tu nueva forma tiene más puntos de golpe que la actual, tus puntos de golpe permanecen en el valor actual."
            },
            
            {
                icono: "../assets/nivel9/cautiverio.svg",
                texto: "Cautiverio",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Brujo y Mago",
                informacion: "Creas un límite mágico para retener a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar vinculado por el conjuro; si tiene éxito, se vuelve inmune a este conjuro si lo vuelves a lanzar. Mientras esté afectada por el conjuro, la criatura no necesita respirar, comer ni beber, y no envejece. Los conjuros de adivinación no pueden ni localizarla ni percibirla.*Cuando lances el conjuro, elige una de las siguientes formas de cautiverio.*→ Contención diminuta. El objetivo se encoge a una altura de 1 pulgada y queda aprisionado dentro de una gema o un objeto similar. La luz puede atravesar la gema con normalidad (lo que permite que el objetivo vea fuera y que otras criaturas lo vean), pero nada más puede traspasarla, ni siquiera mediante teletransporte o viaje planar. La gema no puede cortarse ni romperse mientras se mantenga el efecto del conjuro.*El componente especial de esta versión del conjuro es una gema grande y transparente, como un corindón, un diamante o un rubí.*→ Hibernación. El objetivo cae dormido y no se puede despertar.*El componente especial para esta versión del conjuro consiste en unas hierbas soporíferas raras.*→ Encadenado. Unas pesadas cadenas, firmemente sujetadas al suelo, retienen al objetivo, que queda apresado hasta que el conjuro termina y no puede moverse ni ser movido por ningún medio hasta entonces.*El componente especial de esta versión del conjuro es una cadena fina de un metal precioso.*→ Prisión encubierta. El conjuro transporta al objetivo a un semiplano diminuto protegido contra el teletransporte y el viaje planar. Puede ser un laberinto, una jaula, una torre o una estructura o área similar confinada que elijas.*El componente especial para esta versión del conjuro es una representación en miniatura de una prisión hecha de jade.*→ Tumba. El objetivo es enterrado a gran profundidad en una esfera de fuerza mágica lo suficientemente grande como para contenerlo. Nada puede atravesar la esfera y la criatura tampoco puede teleportarse o usar el viaje planar para salir de ella.*El componente especial que se necesita para esta versión del conjuro es una esfera de mithril.*→ Terminar el conjuro. Mientras lanzas el conjuro, en cualquiera de sus versiones, puedes indicar una condición que hará que el conjuro termine y libere al objetivo. Dicha condición puede ser tan específica o tan elaborada como decidas, pero el director de juego debe estar de acuerdo en que es plausible. Las condiciones se pueden basar en el nombre, identidad o deidad de una criatura, o, si no, en acciones observables o cualidades, pero no en cosas intangibles como el nivel, la clase o los puntos de golpe.*El conjuro Disipar magia puede anular el conjuro solo si se lanza como un conjuro de nivel 9, independientemente de que se lance contra la prisión o contra el componente especial que se usa para crearla.*Puedes usar un componente especial en particular para crear solo una prisión a la vez. Si vuelves a lanzar el conjuro usando el mismo componente, el objetivo del primer lanzamiento queda liberado inmediatamente de su cautiverio."
            },
            
            {
                icono: "../assets/nivel9/curarEnMasa.svg",
                texto: "Curar en masa",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Una corriente de energía curativa fluye desde ti hacia las criaturas heridas que te rodean, que recuperan hasta 700 puntos de golpe divididos como quieras entre cualquier número de criaturas que puedas ver dentro del alcance. Las criaturas que se curan mediante este conjuro también se curan de todas las enfermedades y de los efectos cegado y ensordecido. Este conjuro no tiene efecto sobre no muertos ni constructos."
            },
            {
                icono: "../assets/nivel9/deseo.svg",
                texto: "Deseo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "Deseo es el conjuro más poderoso que puede lanzar una criatura mortal. Simplemente hablando en voz alta, puedes alterar las propias bases de la realidad de acuerdo a tus deseos. El uso básico de este conjuro es duplicar cualquier otro conjuro de hasta nivel 8. No necesitas reunir ninguno de los requisitos de ese conjuro, ni siquiera los componentes caros. El conjuro simplemente surte efecto.*De manera alternativa, puedes crear uno de los siguientes efectos de tu elección:*→ Creas un objeto de hasta 25.000 po de valor que no sea un objeto mágico. El objeto no puede tener más de 300 pies de cualquier tipo de dimensión y aparece en un espacio libre que puedas ver en el suelo.*→ Permites que hasta 20 criaturas que puedas ver recuperen todos sus puntos de golpe y anulas todos los efectos que tengan y que se describan en el conjuro Restablecimiento mayor.*→ Haces que hasta 10 criaturas que puedas ver sean resistentes a un tipo de daño que elijas.*→ Concedes inmunidad a un único conjuro o a otro efecto mágico durante 8 horas a 10 criaturas que puedas ver. Por ejemplo, puedes hacer que tú y todos tus compañeros seáis inmunes al ataque de drenar vida de un liche.*→ Deshaces un único evento reciente forzando que se vuelvan a tirar los dados en cualquier tirada que se haya hecho en la última ronda (incluyendo tu último turno). La realidad se transforma para acomodarse al resultado. Por ejemplo, puedes deshacer una salvación en la que un oponente ha tenido éxito, el crítico de un enemigo o la tirada de salvación fallida de un aliado. Puedes forzar que se repita una tirada para que se haga con ventaja o desventaja y puedes elegir si se usa el nuevo resultado o el anterior.*Puedes conseguir otras cosas además de los ejemplos anteriores. Indícale al director de juego lo que deseas con toda la precisión que puedas. El director de juego tiene total libertad para decidir lo que ocurre en tal caso; cuanto mayor sea el deseo, más posibilidades hay de que algo salga mal. El conjuro puede simplemente fallar, puede surtir efecto solo en parte o puedes sufrir una consecuencia imprevista como resultado de la forma en que has pronunciado el deseo. Por ejemplo, desear que un villano esté muerto puede adelantarte en el tiempo hacia un periodo en el que el villano ya no esté vivo, lo que te sacaría de la historia. Del mismo modo, desear un objeto mágico legendario o un artefacto puede transportarte directamente adonde se encuentra su actual propietario.*El estrés de lanzar este conjuro para producir cualquier otro efecto que no sea duplicar otro conjuro te debilita. Después de aguantar este estrés, cada vez que lances un conjuro hasta que termines un descaso prolongado recibes 1d10 puntos de daño necrótico por cada nivel de dicho conjuro. Este daño no se puede reducir ni evitar de ningún modo. Además, durante 2d4 días tu Fuerza baja a 3 si es superior. Por cada uno de estos días que pases descansando y no haciendo más que actividades ligeras, tu tiempo de recuperación se reduce en 2 días. Por último, hay un 33 % de probabilidades de que seas incapaz de volver a lanzar Deseo si sufres este estrés."
            },
            {
                icono: "../assets/nivel9/muroPrismatico.svg",
                texto: "Muro prismático",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "10 minutos",
                clases: "Mago",
                informacion: "Un plano de brillante luz multicolor se forma en una pared opaca y vertical (de hasta 90 pies de largo, 30 de alto y 1 pulgada de ancho), cuyo centro es un punto que puedas ver dentro del alcance. También puedes convertir el muro en una esfera de hasta 30 pies de diámetro cuyo centro es un punto que elijas dentro del alcance. El muro permanece en ese lugar mientras dure el conjuro. Si lo colocas para que atraviese un lugar que ya ocupa una criatura, el conjuro falla y tu acción y tu espacio de conjuro se desperdician.*El muro emite luz brillante en un alcance de 100 pies y luz tenue en 100 pies adicionales. Tú y las criaturas que designas en el momento en que lanzas el conjuro podéis atravesar el muro y quedaros cerca de él sin recibir daño. Si otra criatura que puede ver el muro se acerca a 20 pies o menos de este o empieza su turno ahí, debe superar una tirada de salvación de Constitución para no quedar cegada durante 1 minuto.*El muro está compuesto por siete capas, cada una de un color diferente. Cuando una criatura intenta alcanzar o traspasar el muro, lo hace capa por capa. Conforme pretenda cruzar cada capa, la criatura debe hacer una tirada de salvación de Destreza para no quedar afectada por las propiedades que se describen a continuación.*El muro se puede destruir, una capa cada vez en orden, del rojo al violeta, y cada una de una forma diferente. Una vez que una capa es destruida, permanece así hasta que termina el conjuro. Un cetro de cancelación destruye el Muro prismático, pero el Campo antimagia no tiene efecto sobre él.*→ Rojo. La criatura recibe 10d6 puntos de daño por fuego si falla la salvación y, si tiene éxito, la mitad. Mientras esta capa se encuentre en su lugar, los ataques a distancia no mágicos no pueden atravesar el muro. La capa se puede destruir infligiéndole al menos 25 puntos de daño por fuego.*→ Naranja. La criatura recibe 10d6 puntos de daño por ácido si falla la salvación y, si tiene éxito, la mitad. Mientras esta capa se encuentre en su lugar, los ataques a distancia no mágicos no pueden atravesar el muro. La capa se destruye con un fuerte viento.*→ Amarillo. La criatura recibe 10d6 puntos de daño por relámpago si falla la salvación y, si tiene éxito, la mitad. Esta capa se puede destruir infligiéndole al menos 60 puntos de daño por fuerza.*→ Verde. La criatura recibe 10d6 puntos por veneno si falla la salvación y, si tiene éxito, la mitad. El conjuro Atravesar muro o un conjuro del mismo nivel o superior que pueda abrir un portal en una superficie sólida destruye esta capa.*→ Azul. La criatura recibe 10d6 puntos de daño por frío si falla la salvación y, si tiene éxito, la mitad. Esta capa se puede destruir infligiéndole al menos 25 puntos de daño por fuego.*→ Añil. Si falla la salvación, la criatura queda apresada y debe realizar una tirada de salvación de Constitución al final de cada uno de sus turnos. Si supera tres salvaciones, el conjuro termina; si falla tres veces, se convierte en piedra de forma permanente y está sujeta al estado petrificado. Los éxitos y los fallos no tienen por qué ser consecutivos; lleva la cuenta de ambos hasta que la criatura consiga tres de un tipo. Mientras esta capa esté en su lugar, no se pueden lanzar conjuros a través del muro. La capa se destruye mediante un rayo de luz brillante del conjuro Luz del día o un conjuro similar del mismo nivel o superior.*→ Violeta. Si falla la salvación, la criatura queda cegada y debe realizar una tirada de salvación de Sabiduría al principio de tu siguiente turno. Si tiene éxito, el conjuro termina; si falla, la criatura es transportada a otro plano que decida el director de juego y ya no está cegada (normalmente, una criatura que está en un plano que no es su plano natal es expulsada a su hogar, mientras que otras criaturas se lanzan hacia los planos Astral y Etéreo). Esta capa se destruye con Disipar magia o un conjuro similar de un nivel superior que pueda terminar con conjuros y con efectos mágicos."
            },
            {
                icono: "../assets/nivel9/palabraPoderMatar.svg",
                texto: "Palabra de poder: matar",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que puede obligar a una criatura que veas dentro del alcance a morir. Si la criatura que eliges tiene 100 puntos de golpe o menos, muere. Si no, el conjuro no tiene efecto."
            },
            {
                icono: "../assets/nivel9/pararTiempo.svg",
                texto: "Parar el tiempo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "Detienes brevemente el flujo del tiempo para todo el mundo menos para ti. El tiempo no pasa para otras criaturas, mientras tú haces 1d4+1 turnos seguidos, durante los cuales puedes usar acciones y moverte con normalidad.*Este conjuro termina si una de las acciones que usas durante este periodo, o si cualquiera de los efectos que creas, afecta a una criatura que no seas tú o a un objeto que lleva puesto o transporte otra persona. Además, el conjuro termina si te mueves a un lugar que se encuentre a más de 1000 pies del lugar donde lo lanzaste."
            },
            {
                icono: "../assets/nivel9/polimorfarVerdadero.svg",
                texto: "Polimorfar verdadero",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo y Mago",
                informacion: "Elige a una criatura o un objeto mágico que puedas ver dentro del alcance. Transformas la criatura en una criatura diferente o en un objeto, o el objeto en una criatura (nadie debe llevar el objeto puesto ni transporte). La transformación dura mientras lo haga el conjuro, hasta que sus puntos de golpe se reduzcan a 0 o hasta que muera. Si te concentras en este conjuro toda la duración, la transformación dura hasta que se disipa.*Este conjuro no tiene efecto sobre cambiaformas o criaturas con 0 puntos de golpe. Una criatura no voluntaria puede hacer una tirada de salvación de Sabiduría para intentar no quedar afectada.*→ Criatura en criatura. Si conviertes a una criatura en otro tipo de criatura, la nueva forma puede ser cualquier cosa que tenga un valor de desafío igual o menor al del objetivo (o nivel si el objetivo no tiene un valor de desafío). Las estadísticas de juego de la nueva forma remplazan las del objetivo, incluyendo las puntuaciones de las características mentales, pero mantiene su alineamiento y su personalidad.*El objetivo asume los puntos de golpe de la nueva forma y, cuando vuelve a su forma normal, vuelve a tener el número de puntos de golpe que tenía antes de transformarse. Si vuelve a su forma normal como resultado de que sus puntos de golpe se hayan reducido a 0, cualquier exceso de daño se aplica a su forma normal. Mientras el exceso de daño no reduzca los puntos de golpe de la forma normal a 0, la criatura no queda inconsciente.*Las acciones que puede realizar la criatura están limitadas por la naturaleza de su nueva forma y no puede hablar, lanzar conjuros o realizar cualquier otra acción que requiera manos o hablar, a menos que la nueva forma sea capaz de realizar tales acciones.*El equipo del objetivo se funde en la nueva forma. La criatura no puede activar, usar, empuñar o beneficiarse de otro modo de este equipo.*→ Objeto en criatura. Puedes convertir a un objeto en cualquier tipo de criatura, siempre y cuando el tamaño de la criatura no sea mayor que el del objeto y que su valor de desafío sea 9 o menos. La criatura es amistosa hacia ti y hacia tus compañeros. Actúa en cada uno de tus turnos y tú decides qué acción realiza y cómo se mueve. El director de juego determina sus estadísticas y resuelve sus acciones y movimientos.*Si el conjuro se vuelve permanente, dejas de controlar a la criatura. Puede seguir siendo amistosa hacia ti dependiendo de cómo la hayas tratado.*→ Criatura en objeto. Si conviertes a una criatura en un objeto, se transforma junto con cualquier cosa que lleve puesta y encima. Las estadísticas de la criatura son las del objeto y no tiene memoria del tiempo que pasó en esa forma después de que el conjuro termine y vuelva a su forma habitual."
            },
            {
                icono: "../assets/nivel9/portal.svg",
                texto: "Portal",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                clases: "Clérigo, Hechicero y Mago",
                informacion: "Conjuras un portal que conecta un espacio sin ocupar que puedas ver dentro del alcance con otro plano de existencia. El portal es una abertura circular. Puedes hacer que tenga un diámetro de 5 a 20 pies y que esté orientado en cualquier dirección que elijas. El portal dura mientras lo haga el conjuro.*El portal tiene una parte delantera y una parte trasera en cada plano en que aparece. Solo es posible viajar a través de él por su parte delantera. Cualquier cosa que lo haga es transportada instantáneamente al otro plano y aparece en el lugar sin ocupar más cercano al portal.*Las deidades y otros gobernantes planares pueden evitar que los umbrales creados mediante este conjuro se abran en su presencia o en cualquiera de sus dominios.*Cuando lanzas este conjuro, puedes decir el nombre de una criatura específica (seudónimos, títulos o motes no funcionan). Si esa criatura está en un plano diferente al plano en el que estás tú, el portal se abre inmediatamente cerca de la criatura nombrada y la arrastra a través de él hasta el lugar sin ocupar más cercano en tu lado del portal. No consigues ningún poder especial sobre la criatura y esta es libre de actuar como el director de juego considere apropiado. Puede marcharse, atacarte o ayudarte."
            },
            {
                icono: "../assets/nivel9/presagio.svg",
                texto: "Presagio",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Tocas una criatura voluntaria y le concedes una capacidad limitada para ver el futuro inmediato. Mientras dura el conjuro, el objetivo no puede ser sorprendido y tiene ventaja en las tiradas de ataque, pruebas de característica y tiradas de salvación. Además, las criaturas que le ataquen tienen desventaja en la tirada de ataque.*Este conjuro termina inmediatamente si lo vuelves a lanzar antes de que termine su duración."
            },
            {
                icono: "../assets/nivel9/proyeccionAstral.svg",
                texto: "Proyección astral",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "10 pies",
                duracion: "Especial",
                clases: "Brujo, Clérigo y Mago",
                informacion: "Tú y hasta 8 criaturas voluntarias dentro del alcance proyectáis vuestros cuerpos astrales en el Plano Astral (el conjuro falla y se desperdicia el lanzamiento si ya estás en dicho plano). El cuerpo material que dejas detrás está inconsciente y en un estado de animación suspendida. No necesita ni comida ni aire y tampoco envejece.*Tu cuerpo astral se parece a tu forma mortal en casi todo y replica tus estadísticas de juego y posesiones. La principal diferencia es el cordón de plata que se extiende desde tus omóplatos, que va dejando una huella detrás de ti y se vuelve invisible después de 1 pie. Este cordón es lo que te ata a tu cuerpo material. Mientras permanezca intacto, puedes encontrar el camino de regreso a casa. Si se corta (algo que solo puede pasar cuando un efecto indica específicamente que eso sucede), tu alma y tu cuerpo se separan, lo que te mata al instante.*Tu forma astral puede viajar libremente por el Plano Astral y puede cruzar portales que conducen a otro plano. Si entras en un nuevo plano o regresas al plano en el que estabas cuando lanzaste el conjuro, tu cuerpo y tus posesiones se transportan junto con el cordón de plata, lo que te permite volver a tu cuerpo cuando entras en el nuevo plano. Tu forma astral es una encarnación independiente. Cualquier daño o efecto que se le aplique no tiene efecto en tu cuerpo físico y tampoco persiste cuando vuelvas a él.*El conjuro termina para ti y tus compañeros si usas tu acción para disiparlo. En ese momento, la criatura afectada vuelve a su cuerpo físico y se despierta.*El conjuro también puede terminar antes para ti o para uno de tus compañeros si se usa el conjuro Disipar magia sobre el cuerpo físico o el astral. Si los puntos de golpe del cuerpo original de una criatura o de su forma astral se reducen a 0, el conjuro termina para ella. Si el conjuro termina y el cordón de plata está intacto, este tira de la criatura de vuelta a su cuerpo y termina con el estado de animación suspendida.*Si vuelves a tu cuerpo antes de tiempo, tus compañeros permanecen en sus formas astrales y deben encontrar su propio camino de vuelta, normalmente reduciendo sus puntos de golpe a 0."
            },
            {
                icono: "../assets/nivel9/resurreccionVerdadera.svg",
                texto: "Resurrección verdadera",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Tocas a una criatura que no haya estado muerta durante más de 200 años y que murió por cualquier razón menos por envejecimiento. Si el alma de la criatura es libre y voluntaria, la criatura vuelve a la vida con todos sus puntos de golpe.*Este conjuro cierra todas las heridas, neutraliza cualquier veneno, cura todas las enfermedades y elimina cualquier maldición que afectara a la criatura cuando murió. El conjuro remplaza los órganos y los miembros dañados o perdidos.*El conjuro puede incluso proporcionar un nuevo cuerpo si el original ya no existe. Para ello, debes decir el nombre de la criatura. Luego la criatura aparece en un espacio sin ocupar que elijas a 10 pies o menos de ti."
            },
            {
                icono: "../assets/nivel9/terrorAbyecto.svg",
                texto: "Terror abyecto",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                ataque: "Contra salvación 4d10 psíquico",
                clases: "Mago",
                informacion: "Utilizando los miedos más profundos de un grupo de criaturas, creas criaturas ilusorias en sus mentes que solo ellas pueden ver. Cada criatura que se encuentre en una esfera de 30 pies de radio cuyo centro sea un punto de tu elección dentro del alcance debe hacer una tirada de salvación de Sabiduría. Si falla, se queda asustada mientras dure el conjuro. La ilusión recurre a los miedos más profundos de la criatura y pone de manifiesto sus peores pesadillas como una amenaza implacable. Al final de cada uno de sus turnos, debe superar una tirada de salvación de Sabiduría para no recibir 4d10 puntos de daño psíquico. Si tiene éxito, el conjuro termina para ella."
            },
            {
                icono: "../assets/nivel9/tormentaMeteoritos.svg",
                texto: "Tormenta de meteoritos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "5000 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 20d6 fuego + 20d6 contundente",
                clases: "Hechicero y Mago",
                informacion: "Abrasadores orbes de fuego caen en picado sobre el suelo en cuatro puntos diferentes que puedas ver dentro del alcance. Todas las criaturas que se encuentren en una de las esferas de 40 pies de radio cuyo centro se encuentre en cada uno de los puntos que elijas deben hacer una tirada de salvación de Destreza. Las esferas se extienden en las esquinas. Una criatura recibe 20d6 puntos de daño por fuego y 20d6 puntos de daño contundente si falla la tirada o, si tiene éxito, la mitad. Una criatura que se encuentre en el área de más de una explosión solo queda afectada por una.*El conjuro daña a objetos que estén en el área e incinera objetos inflamables que nadie lleve puestos ni transporte."
            },
            {
                icono: "../assets/nivel9/tormentaVenganza.svg",
                texto: "Tormenta de venganza",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Visión",
                duracion: "Concentración 1 minuto",
                clases: "Druida",
                informacion: "Se crea una enorme nube de tormenta cuyo centro es un punto que puedas ver y se expande en un radio de 360 pies. Los rayos iluminan el área, los truenos estallan y el viento de la tormenta ruge. Todas las criaturas que se encuentran bajo la nube (no más de 5.000 pies por debajo de la misma) deben hacer una tirada de salvación de Constitución cuando esta aparece. Si fallan, reciben 2d6 puntos de daño por trueno y quedan ensordecidas durante 5 minutos.*Cada ronda que mantengas la concentración en este conjuro, la tormenta produce efectos adicionales en tu turno.*→ Ronda 2. Cae lluvia ácida de la nube. Todas las criaturas y objetos que haya debajo la nube reciben 1d6 puntos de daño por ácido.*→ Ronda 3. Puedes convocar seis rayos de luz de la nube para que golpeen a seis criaturas u objetos de tu elección que se encuentren debajo de la nube. Cada uno no puede ser golpeado por más de un rayo. Una criatura que ha sido golpeada debe hacer una tirada de salvación de Destreza: si falla, recibe 10d6 puntos de daño por relámpago y, si tiene éxito, la mitad.*→ Ronda 4. Cae granizo de la nube. Todas las criaturas que se encuentren debajo de ella reciben 2d6 puntos de daño contundente.*→ Ronda 5-10. Ráfagas y lluvia gélida embisten la zona que se encuentra debajo de la nube. El área se convierte en terreno difícil y está muy resguardada. Todas las criaturas que se encuentren en ella reciben 1d6 puntos de daño por frío. Es imposible realizar ataques a distancia en el área. El viento y la lluvia cuentan como distracciones graves a la hora de mantener la concentración en los conjuros. Por último, una ráfaga de viento fuerte (de 20 a 50 millas por hora) dispersa automáticamente la niebla, la bruma y los fenómenos similares en el área, independientemente de que sean mundanos o mágicos."
            }
        ]
      }
] 