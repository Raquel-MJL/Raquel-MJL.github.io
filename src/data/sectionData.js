
export const Hechizos = [

    {
        id: 1,
        nivel: "Cantrip",
        backgroundColor: '#dbdbdb',
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
        backgroundColor: '#D7EBE1',
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

            {
                icono: "src/assets/nivel1/disfrazarse.svg",
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
                icono: "src/assets/nivel1/dormir.svg",
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
                icono: "src/assets/nivel1/encantarAnimal.svg",
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
                icono: "src/assets/nivel1/encontrarFamiliar.svg",
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
                icono: "src/assets/nivel1/enmaranar.svg",
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
                icono: "src/assets/nivel1/entenderIdioma.svg",
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
                icono: "src/assets/nivel1/escudo.svg",
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
                icono: "src/assets/nivel1/escudoFe.svg",
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
                icono: "src/assets/nivel1/falsaVida.svg",
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
                icono: "src/assets/nivel1/favorDivino.svg",
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
                icono: "src/assets/nivel1/fuegoFeerico.svg",
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
                icono: "src/assets/nivel1/grasa.svg",
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
                icono: "src/assets/nivel1/hablarAnimales.svg",
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
                icono: "src/assets/nivel1/hechizarPersona.svg",
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
                icono: "src/assets/nivel1/heroismo.svg",
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
                icono: "src/assets/nivel1/identificar.svg",
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
                icono: "src/assets/nivel1/imagenSolida.svg",
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
                icono: "src/assets/nivel1/inflingirHeridas.svg",
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
                icono: "src/assets/nivel1/manosArdientes.svg",
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
                icono: "src/assets/nivel1/marcaCazador.svg",
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
                icono: "src/assets/nivel1/nubeOscurecimiento.svg",
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
                icono: "src/assets/nivel1/olaAtronadora.svg",
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
                icono: "src/assets/nivel1/ordenImperiosa.svg",
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
                icono: "src/assets/nivel1/palabraCuracion.svg",
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
                icono: "src/assets/nivel1/perdicion.svg",
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
                icono: "src/assets/nivel1/proteccionBienMal.svg",
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
                icono: "src/assets/nivel1/proyectilMagico.svg",
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
                icono: "src/assets/nivel1/purificarComidaBebida.svg",
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
                icono: "src/assets/nivel1/represionInfernal.svg",
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
                icono: "src/assets/nivel1/retiradaExpeditiva.svg",
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
                icono: "src/assets/nivel1/risaHorribleTasha.svg",
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
                icono: "src/assets/nivel1/rociadaColor.svg",
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
                icono: "src/assets/nivel1/saetaGuiada.svg",
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
                icono: "src/assets/nivel1/salto.svg",
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
                icono: "src/assets/nivel1/santuario.svg",
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
                icono: "src/assets/nivel1/sirvienteInvisible.svg",
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
                icono: "src/assets/nivel1/textoIlusorio.svg",
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
                icono: "src/assets/nivel1/zancadaProdigiosa.svg",
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
    {   id: 3,
        nivel: "Nivel 2",
        backgroundColor: '#B0D7C3',
        conjuros: [

            {   icono: "src/assets/nivel2/abrir.svg",
                texto: "Abrir",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "10 Instantáneo",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Elige un objeto que puedas ver dentro del alcance. El objeto puede ser una puerta, una caja, un cofre, unas esposas, un candado u otro objeto que evite el acceso por medios mágicos o mundanos.*Un objetivo retenido, atrapado o bloqueado por una cerradura mundana se libera. Si el objetivo tiene varias cerraduras, solo una de ellas se abre.*Si eliges un objetivo que está retenido con Cerradura arcana, ese conjuro se anula durante 10 minutos, durante los cuales el objetivo se puede abrir y cerrar con normalidad.*Cuando lanzas este conjuro, se oye un fuerte golpe hasta una distancia de 300 pies que surge del objetivo. a una criatura, cuya velocidad aumenta en 10 pies hasta que el conjuro termina."
            },

            {   icono: "src/assets/nivel2/agrandarReducir.svg",
                texto: "Agrandar/reducir",
                componentes: "V, S, M (Pizca de hierro pulverizado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "10 Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Haces que una criatura o un objeto que puedes ver dentro del alcance se haga más grande o más pequeño mientras dura el conjuro. Elige cualquier criatura u objeto que nadie lleve puesto ni transporte. Si el objetivo no es voluntario, puede hacer una tirada de salvación de Constitución: si tiene éxito, el conjuro no tiene efecto. Si el objetivo es una criatura, todo lo que lleva puesto y transporte cambia de tamaño con él. Si una criatura afectada suelta un objeto, este vuelve a su tamaño normal inmediatamente.*→ Agrandar. El tamaño del objetivo se duplica en todas las dimensiones y su peso se multiplica por 8. Este crecimiento aumenta su tamaño en una categoría (de Mediano a Grande, por ejemplo). Si no hay espacio suficiente para que el objetivo duplique su tamaño, la criatura o el objeto alcanza el máximo tamaño posible en el espacio disponible. Hasta que el conjuro termine, el objetivo también tiene ventaja en las pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también crecen a la par que su nuevo tamaño. Mientras las empuñe, los ataques que haga con ellas infligen 1d4 puntos de daño adicional.*→ Reducir. El tamaño del objetivo se divide por 2 en todas las dimensiones y su peso se reduce a una octava parte de lo normal. Esta reducción disminuye su tamaño en una categoría (de Mediano a Pequeño, por ejemplo). Hasta que el conjuro termine, el objetivo también tiene desventaja en las pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también se reducen a la par que su nuevo tamaño. Mientras las empuñe, los ataques que haga con ellas infligen 1d4 puntos de daño menos (el daño no se puede reducir por debajo de 1).",
            },

            {   icono: "src/assets/nivel2/alterarPropioAspecto.svg",
                texto: "Alterar el propio aspecto",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Asumes una forma diferente. Cuando lances el conjuro, elige una de las siguientes opciones, cuyos efectos duran mientras lo haga el conjuro. Mientras dure el conjuro, puedes terminar una opción como si fuera una acción para obtener los beneficios de otra.*→ Adaptación acuática. Adaptas tu cuerpo a un entorno acuático, te salen branquias y te crecen membranas entre los dedos. Puedes respirar bajo el agua y conseguir velocidad nadando igual a tu velocidad caminando.*→ Armas naturales. Te crecen garras, colmillos, espinas, cuernos u otra arma natural que elijas. Tus golpes sin armas infligen 1d6 puntos de daño contundente, perforante o cortante, según se corresponda con el arma que hayas elegido, y tienes competencia con tus golpes sin armas. El arma natural es mágica y tienes un bonificador de +1 a las tiradas de ataque y de daño que hagas con ella*→ Cambiar apariencia. Transformas tu apariencia a voluntad, incluyendo tu altura, peso, rasgos faciales, el sonido de tu voz, lo largo que tienes el pelo y su color, así como otras características distintivas. Puedes parecer un miembro de otra raza, aunque tus estadísticas no cambian. Tampoco puedes parecerte a una criatura de un tamaño diferente al tuyo y tu forma básica no cambia; si eres bípedo no puedes usar este conjuro para convertirte en un cuadrúpedo, por ejemplo. En cualquier momento, mientras dure el conjuro, puedes usar tu acción para volver a cambiar tu apariencia de este modo.",
            },

            {   icono: "src/assets/nivel2/armaEspiritual.svg",
                texto: "Arma espiritual",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "Cuerpo a cuerpo 1d8 fuerza",
                clases: "Clérigo",
                informacion: "Creas un arma espectral flotante dentro del alcance que dura mientras lo haga el conjuro o hasta que vuelvas a lanzarlo. Cuando invocas el arma, puedes hacer un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 5 pies o menos del arma. Si impactas, el objetivo recibe daño por fuerza igual a 1d8 + tu modificador por característica para lanzar conjuros.*Como acción adicional en tu turno, puedes mover el arma hasta 20 pies y repetir el ataque contra una criatura que se encuentre a 5 pies o menos de ella.*El arma puede adoptar cualquier forma que elijas. Los clérigos de deidades asociadas con un arma en particular (como san Cuthbert, que es conocido por su maza, y Thor, por su martillo) hacen que el efecto de este conjuro se parezca a esa arma.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 puntos por cada dos niveles por encima de 2.",
            },

            {   icono: "src/assets/nivel2/armaMagica.svg",
                texto: "Arma mágica",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Mago y Paladín",
                informacion: "Tocas un arma no mágica. Hasta que termine el conjuro, el arma se convierte en un arma mágica con un bonificador de +1 a las tiradas de ataque y de daño.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el bonificador aumenta a +2. Cuando usas un espacio de conjuro de nivel 6 o superior, el bonificador aumenta a +3.",
            },

            {   icono: "src/assets/nivel2/augurio.svg",
                texto: "Augurio",
                componentes: "V, S, M (Varillas, huesos o piezas talladas de 25po)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Tirando varillas con gemas engarzadas, haciendo girar huesos de dragón, echando cartas adornadas o empleando alguna otra herramienta divina, recibes un augurio de una entidad de otro mundo sobre el resultado de una acción específica que planeas realizar en los 30 minutos siguientes. El director de juego elige uno de los siguientes augurios posibles:*→ Dicha: buenos resultados.*→ Desdicha: malos resultados.*→ Dicha y desdicha: resultados tanto buenos como malos.*→ Nada: resultados que no son ni especialmente buenos ni especialmente malos.*El conjuro no tiene en cuenta ninguna circunstancia posible que pueda cambiar el resultado, como que se lancen otros conjuros o que se pierda o se gane un compañero.*Si lanzas el conjuro dos o más veces antes de completar tu siguiente descanso prolongado, hay un 25 % de probabilidades acumulativas de conseguir una lectura aleatoria. El director de juego hace esta tirada en secreto.",
            },

            {   icono: "src/assets/nivel2/auraMagicaNystul.svg",
                texto: "Aura mágica de Nystul",
                componentes: "V, S, M (Recuadro de seda)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "24 horas",
                ataque: "--",
                clases: "Mago",
                informacion: "Implantas una ilusión en una criatura o un objeto que toques para que los conjuros de adivinación revelen información falsa sobre él. El objetivo puede ser una criatura voluntaria o un objeto que ninguna criatura lleve puesto ni transporte.*Cuando lances el conjuro, elige uno de los siguientes efectos o los dos. El efecto dura mientras lo haga el conjuro. Si lanzas este conjuro sobre la misma criatura u objeto durante 30 días y colocas el mismo efecto en él todas las veces, la ilusión dura hasta que se disipe.*→ Aura falsa. Cambias el modo en que el objetivo aparece ante conjuros o efectos mágicos que detectan auras mágicas, como Detectar magia. Puedes hacer que un objeto no mágico parezca mágico, que un objeto mágico parezca no mágico o cambiar el aura mágica de un objeto para que parezca que es de una escuela de magia específica. Cuando uses este efecto en un objeto, puedes determinar que cualquier criatura que sujete el objeto perciba esta magia falsa.*→ Máscara. Puedes cambiar el modo en que el objetivo aparece ante conjuros o efectos mágicos que detectan tipos de criaturas, como el Sentido divido del paladín o la activación del conjuro Símbolo. Elige un tipo de criatura: otros conjuros y efectos mágicos considerarán que la criatura objetivo es del tipo o alineamiento del tipo elegido.",
            },

            {   icono: "src/assets/nivel2/auxilio.svg",
                texto: "Auxilio",
                componentes: "V, S, M (Girón tela blanca)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 hora",
                ataque: "--",
                clases: "Clérigo y Paladín ",
                informacion: "Tu conjuro concede a tus aliados dureza y determinación. Elige hasta tres criaturas dentro del alcance. El máximo de puntos de golpe y los puntos de golpe actuales de cada objetivo aumentan en 5 mientras dura el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, los puntos de golpe del objetivo aumentan 5 puntos adicionales por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/bocaMagica.svg",
                texto: "Boca mágica",
                componentes: "V, S, M (Panal, polvo de jade 10po)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Bardo y Mago ",
                informacion: "Colocas un mensaje en un objeto dentro del alcance, el cual se emite cuando se cumple la condición que lo activa. Elige un objeto que puedas ver y que ninguna otra criatura lleve puesto ni transporte. Luego di el mensaje, que debe tener como máximo 25 palabras, aunque se puede entregar a lo largo de 10 minutos. Por último, determina la circunstancia que activa el conjuro para entregar el mensaje.*Cuando se dé esta circunstancia, una boca mágica aparece en el objeto y recita el mensaje con tu voz y al mismo volumen al que la dijiste. Si el objeto que elijes tiene una boca o algo que parece una boca (por ejemplo, la boca de una estatua), la boca mágica aparece ahí para que parezca que las palabras provienen de la boca del objeto. Cuando lanzas este conjuro, puedes decidir que el conjuro termine después de entregar el mensaje o que permanezca y repita el mensaje en cualquier momento en el que se active.*La circunstancia que activa el mensaje puede ser todo lo general o detallada que quieras, aunque debe basarse en una condición visual o auditiva que ocurra a 30 pies o menos del objeto. Por ejemplo, puedes hacer que la boca hable cuando cualquier criatura se mueva a 30 pies o menos del objeto o cuando suene una campana de plata también a 30 pies o menos.",
            },

            {   icono: "src/assets/nivel2/calentarMetal.svg",
                texto: "Calentar metal",
                componentes: "V, S, M (Hierro y llama)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Druida ",
                informacion: "Elige un objeto construido en metal, como un arma de metal o una armadura de metal pesada o mediana, que puedas ver dentro del alcance para calentarlo al rojo vivo. Cualquier criatura que esté en contacto físico con el objetivo cuando lanzas el conjuro recibe 2d8 puntos de daño por fuego. Hasta que el conjuro termine, puedes usar una acción adicional en cada uno de tus siguientes turnos para hacer que vuelva a sufrir ese daño.*Si una criatura sujeta o lleva puesto el objeto y recibe daño de él, debe superar una tirada de salvación de Constitución para no soltar o quitarse el objeto. Si no puede hacer ninguna de estas dos cosas, tiene desventaja en las tiradas de ataque y en las pruebas de característica hasta el principio de tu siguiente turno.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/calmarEmociones.svg",
                texto: "Calmar emociones",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (Aura 20 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo y Clérigo ",
                informacion: "Intentas reprimir emociones fuertes en un grupo de personas. Todos los humanoides que se encuentren dentro de una esfera de 20 pies de radio, cuyo centro es un punto que tú decides, deben realizar una tirada de salvación de Carisma. Si lo desean, pueden decidir fallarla automáticamente. Si una criatura falla la salvación, elige uno de los siguientes dos efectos:*Puedes reprimir cualquier efecto que haga que el objetivo quede hechizado o asustado. Cuando este conjuro termine, cualquier efecto anulado continúa, siempre y cuando su duración no haya terminado mientras tanto.*Puedes hacer que un objetivo que sea hostil hacia determinadas criaturas de tu elección sea indiferente a ellas. Esta indiferencia termina si el objetivo es atacado o dañado por un conjuro, o si ve cómo dañan a un aliado. Cuando el conjuro termine, la criatura se vuelve hostil de nuevo, a menos que el director de juego decida lo contrario.",
            },

            {   icono: "src/assets/nivel2/castigoMarcador.svg",
                texto: "Castigo marcador",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Paladín",
                informacion: "La siguiente vez que alcances a una criatura con un ataque de arma antes de que termine este conjuro, el arma resplandece con un brillo astral cuando impactas. El ataque inflige 2d6 puntos adicionales de daño radiante al objetivo, el cual se vuelve visible si es invisible, irradia la luz tenue en un radio de 5 pies y no puede volverse invisible hasta que termine el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño adicional aumenta en 1d6 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/cerraduraArcana.svg",
                texto: "Cerradura arcana",
                componentes: "V, S, M (25po en polvo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Mago",
                informacion: "Cuando tocas una puerta, ventana, portón, cofre u otra entrada cerrada, esta se bloquea mágicamente mientras dura el conjuro. Las criaturas que elijas cuando lances el conjuro y tú podéis abrir el objeto con normalidad. También puedes establecer una contraseña que, cuando se diga a 5 pies o menos del objeto, anule el conjuro durante 1 minuto. Si no, no se puede traspasar hasta que se rompa o hasta que el conjuro se disipe o se anule. Lanzar Abrir cerraduras sobre el objeto anula Cerradura arcana durante 10 minutos.*Mientras esté afectado por el conjuro, es más difícil romper el objeto o abrirlo a la fuerza. La CD para romperlo o abrirlo con ganzúas aumenta en 10.",
            },

            {   icono: "src/assets/nivel2/contornoBorroso.svg",
                texto: "Contorno borroso",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Tu cuerpo se vuelve borroso, cambiante y parpadea para todos lo que pueden verte. Mientras dura el conjuro, cualquier criatura tiene desventaja en las tiradas de ataque que haga contra ti. Un atacante es inmune a este efecto si no se basa en la vista, como si tiene vista ciega, o puede ver a través de ilusiones, como si tiene vista verdadera.",
            },
            
            {   icono: "src/assets/nivel2/crecimientoEspinoso.svg",
                texto: "Crecimiento espinoso",
                componentes: "V, S, M (Espinas o rapitas afiladas)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (Área de 20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "El suelo en un radio de 20 pies, cuyo origen es un punto de tu elección dentro del alcance, se retuerce y hace brotar espinas y pinchos. El área se vuelve terreno difícil mientras dura el conjuro. Cuando una criatura entra en el área o se mueve dentro de ella, recibe 2d4 puntos de daño perforante por cada 5 pies.*La transformación del suelo se camufla para parecer natural. Cualquier criatura que no pueda ver el área en el momento en que se lanza el conjuro debe hacer una tirada de Sabiduría (Percepción) enfrentada a la CD de salvación del conjuro para reconocerla como terreno peligroso antes de entrar en ella.",
            },

            {   icono: "src/assets/nivel2/detectarPensamientos.svg",
                texto: "Detectar pensamientos",
                componentes: "V, S, M (1 pc)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minutos",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, puedes leer el pensamiento de ciertas criaturas. Cuando lanzas este conjuro, y como acción en cada uno de tus turnos hasta que termine, puedes concentrarte en cualquier criatura que puedas ver a 30 pies de ti o menos. Si la criatura que eliges tiene Inteligencia 3 o menos o no habla ningún idioma, no queda afectada.*En un principio lees los pensamientos superficiales de la criatura: lo que ocupa la mayor parte de su mente en ese momento. Como acción, puedes desviar tu atención a los pensamientos de otra criatura o intentar profundizar más en la mente de la misma. Si haces esto último, el objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, consigues ver su razonamiento (si tiene), su estado emocional y algo que ocupe su mente (como algo que le preocupa, que ama o que odia). Si tiene éxito, el conjuro termina. En cualquier caso, el objetivo sabe que estás ahondando en sus pensamientos y, a menos que desvíes tu atención hacia los pensamientos de otra criatura, la primera puede usar la acción de su turno para hacer una prueba de Inteligencia enfrentada a tu prueba de Inteligencia; si tiene éxito, el conjuro termina.*Hacer una pregunta directamente a la criatura objetivo afecta de manera natural al curso de sus pensamientos, por ello este conjuro es particularmente efectivo como parte de un interrogatorio.*También puedes usar este conjuro para detectar la presencia de criaturas pensantes que no puedas ver. Cuando lanzas el conjuro o como acción mientras dure este, puedes buscar pensamientos a 30 pies de ti o menos. El conjuro puede traspasar barreras, pero no a partir de 1 pie de piedra, 1 pulgada de metal común, una lámina de plomo o 3 pies de madera o tierra. No puedes detectar a una criatura cuya Inteligencia sea 3 o inferior, ni a una que no hable ningún idioma.*Una vez detectas la presencia de una criatura de este modo, puedes leer sus pensamientos durante lo que quede de la duración del conjuro, como se describe antes, incluso si no puedes verla, pero aun así tiene que estar dentro del alcance.",
            },

            {   icono: "src/assets/nivel2/detectarTrampas.svg",
                texto: "Detectar trampas",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo, Druida y Explorador",
                informacion: "Sientes la presencia de cualquier trampa dentro del alcance y que esté en tu línea de visión. Una trampa, a efectos de este conjuro, es cualquier cosa que podría provocar un efecto repentino o inesperado que consideras dañino o indeseable preparada intencionalmente por su creador. Por ejemplo, el conjuro sentiría un área afectada por el conjuro Alarma, Glifo custodio o una trampa mecánica, pero no revelaría un defecto en el suelo, un tejado inestable o un socavón escondido.*Este conjuro solamente revela que hay una trampa. No detectas su localización, pero sí la naturaleza del peligro que esta supone.",
            },

            {   icono: "src/assets/nivel2/dulceDescanso.svg",
                texto: "Dulce descanso",
                componentes: "V, S, M (Sal y 2pc en los ojos del cadáver hasta que dure el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "10 días",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Tocas un cadáver u otros restos. Mientras dure el conjuro, el objetivo está protegido de la descomposición y no puede convertirse en no muerto.*El conjuro también prolonga el tiempo límite en que el objetivo podrá ser devuelto a la vida, dado que los días que pasa bajo la influencia de este conjuro no se tienen en cuenta para el límite de tiempo posible para usar sobre él conjuros como Revivir a los muertos.",
            },
            
            {   icono: "src/assets/nivel2/embelesar.svg",
                texto: "Embelesar",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo y Brujo",
                informacion: "Tejes una maraña de palabras de distracción, obligando a que las criaturas que elijas que puedas ver dentro del alcance y que puedan oírte hagan una tirada de salvación de Sabiduría. Cualquier criatura que no pueda ser hechizada tiene éxito automáticamente, y si está luchando contra tus compañeros y tú, tiene ventaja en la tirada. Si falla, el objetivo tiene desventaja en las pruebas de Sabiduría (Percepción) que haga para percibir a cualquier criatura que no seas tú hasta que el conjuro termine o hasta que el objetivo ya no pueda oírte. El conjuro termina si quedas incapacitado o si dejas de poder hablar.",
            },

            {   icono: "src/assets/nivel2/esferaLlamas.svg",
                texto: "Esfera de llamas",
                componentes: "V, S,M (Sebo, azufre y hierro pulverizado)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 2d6 fuego",
                clases: "Druida y Mago",
                informacion: "Una esfera de fuego de 5 pies de diámetro aparece en un espacio libre de tu elección dentro del alcance y dura mientras lo haga el conjuro. Cualquier criatura que termine su turno a 5 pies o menos de la esfera debe hacer una tirada de salvación de Destreza. Si falla, recibe 2d6 puntos de daño por fuego y, si tiene éxito, la mitad.*Como acción adicional, puedes mover la esfera hasta 30 pies. Si se la arrojas a una criatura, esta debe hacer una tirada de salvación contra el daño de la esfera y la esfera deja de moverse durante su turno.*Cuando mueves la esfera, esta puede salvar barreras de hasta 5 pies de alto y hoyos de hasta 10 pies de ancho. La esfera incinera objetos inflamables que nadie lleve puestos ni transporte, y emite luz brillante en un radio de 20 pies y luz tenue en otros 20 pies adicionales.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d6 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/flechaAcidaMelf.svg",
                texto: "Flecha ácida de Melf",
                componentes: "V, S,M (Hoja de ruibarbo y estómago de víbora)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Intantáneo",
                ataque: "A distancia 4d4 ácido",
                clases: "Mago",
                informacion: "Una flecha verde reluciente se dirige a un objetivo que esté dentro del alcance y lo rocía con ácido. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo recibe 4d4 puntos de daño por ácido inmediatamente y 2d4 al final de su siguiente turno. Si fallas, la flecha salpica de ácido al objetivo y le hace la mitad de daño inicial y nada de daño al final de su siguiente turno.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño (tanto el inicial como el posterior) incrementa en 1d4 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/hacerAnicos.svg",
                texto: "Hacer añicos",
                componentes: "V, S,M (Mica)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 10 pies)",
                duracion: "Intantáneo",
                ataque: "Contra salvación 3d8 trueno",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Un sonido estridente y dolorosamente intenso surge de un punto que elijas dentro del alcance. Todas las criaturas que se encuentren en una esfera de 10 pies de radio, cuyo centro sea ese punto, deben hacer una tirada de salvación de Constitución. Si fallan, reciben 3d8 puntos de daño por trueno y, si tienen éxito, la mitad. Una criatura hecha de material inorgánico, como piedra, cristal o metal, tiene desventaja en esta tirada de salvación.*Los objetos no mágicos que nadie lleve puesto ni transporte también reciben daño si están dentro del área del conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/hallarCorcel.svg",
                texto: "Hallar corcel",
                componentes: "V, S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Intantáneo",
                ataque: "--",
                clases: "Paladín",
                informacion: "Convocas a un espíritu con la forma de una montura excepcionalmente inteligente, fuerte y leal, y creas un vínculo duradero con ella. Cuando aparece en un lugar sin ocupar dentro del alcance, la montura adopta la forma que elijas: un caballo de guerra, un poni, un camello, un alce o un mastín (el director de juego podría permitirte que convocaras a otros animales como monturas). La montura tiene las estadísticas de la forma elegida, aunque sea un celestial, una fata o un infernal (según elijas). Además, si tiene Inteligencia 5 o menos, su Inteligencia sube a 6 y consigue la capacidad de entender un idioma que hables de tu elección. Mientras tu montura está a 1 milla o menos de ti, puedes comunicarte con ella telepáticamente.*Este animal te sirve como montura, tanto en combate como fuera de él, y tenéis un vínculo instintivo que os permite luchar como una única unidad. Mientras estás montado en tu montura, puedes lanzar cualquier conjuro con alcance personal sobre ella.*Cuando sus puntos de golpe se reduzcan a 0, desaparece sin dejar tras de sí ninguna forma física. También puedes desconvocarla en cualquier momento como acción, lo que hace que desaparezca. En ambos casos, lanzar este conjuro otra vez convoca a la misma montura, con su máximo de puntos de golpe restaurado.*No puedes tener más de una montura vinculada a ti mediante este conjuro a la vez. Como acción, puedes liberar a la montura de su vínculo en cualquier momento, lo que hace que desaparezca.",
            },
            
            {   icono: "src/assets/nivel2/hojaFuego.svg",
                texto: "Hoja de fuego",
                componentes: "V, S, M (Hoja de zumaque)",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "Cuerpo a cuerpo 3d6 fuego",
                clases: "Druida",
                informacion: "En una mano libre evocas un haz ardiente del tamaño y forma de una cimitarra que dura mientras lo haga el conjuro. Si lo sueltas, desaparece, pero puedes volver a evocarlo como acción adicional.*Puedes usar tu acción para hacer un ataque de conjuro cuerpo a cuerpo con el haz ardiente. Si impactas, el objetivo recibe 3d6 puntos de daño por fuego.*El filo flamígero emite luz brillante en un radio de 10 pies y luz tenue en 10 pies adicionales.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada dos niveles por encima de 2.",
            },

            {   icono: "src/assets/nivel2/imagenMultiple.svg",
                texto: "Imagen múltiple",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 Minuto",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Tres duplicados ilusorios de ti mismo aparecen en tu espacio. Hasta que el conjuro termine, los duplicados se mueven a la vez que tú, imitan tus acciones y se cambian de posición, lo que hace que sea imposible seguir cuál es la imagen real. Puedes usar tu acción para disiparlos.*Cada vez que una criatura te elija como objetivo de un ataque mientras dura el conjuro, tira 1d20 para determinar si el ataque apunta a uno de tus duplicados en lugar de a ti. Si tienes tres duplicados, debes sacar un 6 o más para hacer que el ataque se dirija a un duplicado. Con dos duplicados, debes sacar un 8 o más; y con un duplicado, 11 o más.*La CA de los duplicados es igual a 10 + tu modificador por Destreza. Si un ataque impacta a un duplicado, este se destruye. Solo un ataque que lo impacta puede destruir a un duplicado: este ignora el resto de daño y efectos. El conjuro termina cuando se destruyen los tres duplicados.*Una criatura no queda afectada por este conjuro si no puede ver, si se basa en otros sentidos que no sean la vista, como si tiene vista ciega, o si puede percibir que las ilusiones son falsas, como si tiene vista verdadera.",
            },

            {   icono: "src/assets/nivel2/inmovilizarPersona.svg",
                texto: "Inmovilizar persona",
                componentes: "V, S, M (Pedazo de hierro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Bardo, Brujo, Clérigo, Druida, Hechicero y Mago",
                informacion: "Elige a un humanoide que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar paralizado mientras dure el conjuro. Al final de cada uno de sus turnos, puede hacer otra tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a otro humanoide adicional por cada espacio de conjuro por encima de 2. Los humanoides deben estar a 30 pies o menos entre sí.",
            },

            {   icono: "src/assets/nivel2/invisibilidad.svg",
                texto: "Invisibilidad",
                componentes: "V, S, M (Pestaña y goma arábiga)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Una criatura que tocas se vuelve invisible hasta que el conjuro termina. Cualquier cosa que el objetivo lleve puesta o transporte se vuelve invisible siempre y cuando esté en el cuerpo del objetivo. El conjuro termina cuando el objetivo ataque o lance un conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/levitar.svg",
                texto: "Levitar",
                componentes: "V, S, M (Correa de cuero o alambre de oro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Una criatura u objeto suelto de tu elección que puedas ver dentro del alcance se alza en vertical, hasta 20 pies, y permanece suspendido ahí mientras dure el conjuro. El objetivo puede pesar hasta 500 libras. Una criatura no voluntaria que tenga éxito en una tirada de salvación de Constitución no queda afectada por este conjuro.*El objetivo solo puede moverse empujando o tirando de un objeto o superficie fijos dentro de su alcance (como una pared o un techo), que le permite moverse como si estuviera escalando. Puedes cambiar la altitud del objetivo a hasta 20 pies en cualquier dirección durante tu turno. Si eres el objetivo, puedes moverte arriba y abajo como parte del movimiento. Si no, puedes usar tu acción para mover al objetivo, que permanece dentro del alcance del conjuro.*Cuando el conjuro termina, el objetivo desciende suavemente hasta el suelo si todavía está flotando.",
            },

            {   icono: "src/assets/nivel2/llamaPermanente.svg",
                texto: "Llama permanente",
                componentes: "V, S, M (50po de polvo de rubí)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Hasta disipado",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Una llama tan luminosa como una antorcha surge de un objeto que tocas. Parece una llama normal, pero no da calor y no consume oxígeno. La llama se puede cubrir o esconder, pero no apagar ni extinguir.",
            },

            {   icono: "src/assets/nivel2/localizarAnimalesPlantas.svg",
                texto: "Localizar animales o plantas",
                componentes: "V, S, M (Pelaje de sabueso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Describe o nombra un tipo de bestia o planta específica. Al concentrarte en la voz de la naturaleza que te rodea, conoces la dirección y la distancia de la criatura o planta de ese tipo más cercana que se encuentre a 5 millas o menos, si hay alguna.",
            },

            {   icono: "src/assets/nivel2/localizarAnimalesPlantas.svg",
                texto: "Localizar animales o plantas",
                componentes: "V, S, M (Pelaje de sabueso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Describe o nombra un tipo de bestia o planta específica. Al concentrarte en la voz de la naturaleza que te rodea, conoces la dirección y la distancia de la criatura o planta de ese tipo más cercana que se encuentre a 5 millas o menos, si hay alguna.",
            },

            {   icono: "src/assets/nivel2/localizarObjeto.svg",
                texto: "Localizar objeto",
                componentes: "V, S, M (Rama)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Mago y Paladín",
                informacion: "Describe o nombra un objeto que te sea familiar. Sientes la dirección en la que se encuentra dicho objeto, siempre y cuando esté a 1000 pies o menos de ti. Si el objeto se mueve, sabes la dirección.*El conjuro puede localizar un objeto específico que conoces, siempre y cuando lo hayas visto de cerca (a 30 pies o menos) al menos una vez. El conjuro también puede localizar el objeto más cercano de un tipo en particular, como un cierto tipo de vestimenta, joya, mueble, herramienta o arma.*Este conjuro no puede localizar un objeto si algo de plomo, aunque sea una capa fina, bloquea un camino directo entre el objeto y tú.",
            },

            {   icono: "src/assets/nivel2/mensajeroAnimal.svg",
                texto: "Mensajero animal",
                componentes: "V, S, M (Comida)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "24 horas",
                ataque: "--",
                clases: "Bardo, Druida y Explorador",
                informacion: "Mediante este conjuro, usas un animal para entregar un mensaje. Debes elegir una bestia Diminuta que puedas ver dentro del alcance, como una ardilla, un arrendajo azul o un murciélago, especificar el lugar, donde debes haber estado, y describir en términos generales al receptor, como «un hombre o una mujer con el uniforme de la guardia de la torre» o «un enano pelirrojo que lleva un sombrero puntiagudo». Un mensaje puede ser de hasta 25 palabras.*La bestia objetivo viajará mientras dure el conjuro hacia la localización indicada; si es voladora, cubre unas 50 millas cada 24 horas y, si es otro animal, cubre 25 millas. Cuando llega, entrega tu mensaje a la criatura que has descrito reproduciendo el sonido de tu voz. El mensajero solo hablará a una criatura que encaje con la descripción que le has dado. Si el mensajero no alcanza su destino antes de que termine el conjuro, el mensaje se pierde y la bestia vuelve al lugar donde lanzaste el conjuro.*En niveles superiores. Si lanzas este conjuro usando un espacio de nivel 3 o superior, la duración del conjuro aumenta en 48 horas por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/oscuridad.svg",
                texto: "Oscuridad",
                componentes: "V, M (Pelo murciélago y carbón)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Área 15 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Una oscuridad mágica se expande desde un punto que elijas dentro del alcance hasta llenar una esfera de 15 pies de radio mientras dura el conjuro. La oscuridad se extiende en las esquinas. Una criatura con visión en la oscuridad no puede ver a través de esta y la luz no mágica no puede iluminarla.*Si el punto que eliges está en un objeto que sostienes o uno que nadie lleva puesto ni transporta, la oscuridad emana del objeto y se mueve con él. Cubrir el objeto completamente con algo opaco, como un cuenco o un yelmo, bloquea la oscuridad.*Si cualquier parte de esta área del conjuro se solapa con un área de luz creada por un conjuro de nivel 2 o inferior, el conjuro que ha creado la luz se disipa.",
            },

            {   icono: "src/assets/nivel2/pasarSinDejarRastro.svg",
                texto: "Pasar sin dejar rastro",
                componentes: "V, M (Hoja de muérdago quemada y rama de picea)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Un velo de sombras y silencio irradia de ti, ocultándote a ti y a tus compañeros de la detección. Mientras dura el conjuro, todas las criaturas que elijas a 30 pies o menos de ti (incluyéndote tú) tienen un bonificador de +10 a las pruebas de Destreza (Sigilo) y solo se las puede rastrear con magia. Una criatura que recibe este bonificador no deja huellas tras de sí ni otras marcas de su paso.",
            },

            {   icono: "src/assets/nivel2/pasoBrumoso.svg",
                texto: "Paso brumoso",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Rodeado brevemente por una bruma plateada, te teleportas hasta 30 pies a un lugar sin ocupar que puedas ver.",
            },

            {   icono: "src/assets/nivel2/pielRobliza.svg",
                texto: "Piel robliza",
                componentes: "V, S, M (Corteza de roble)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Tocas a una criatura voluntaria. Hasta que el conjuro termine, la piel del objetivo tendrá una apariencia rugosa y como de corteza, y su CA no puede ser inferior a 16, independientemente del tipo de armadura que lleve.",
            },

            
            {   icono: "src/assets/nivel2/plegariaCuracion.svg",
                texto: "Plegaria de curación",
                componentes: "V",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Intanstáneo",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Hasta seis criaturas de tu elección que puedas ver dentro del alcance del conjuro recuperan cada una un número de puntos de golpe igual a 2d8 + tu modificador por característica para lanzar conjuros. Este conjuro no tiene efecto ni sobre no muertos ni sobre constructos.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, la curación aumenta en 1d8 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/potenciarCaracteristica.svg",
                texto: "Potenciar característica",
                componentes: "V,S,M (Pelo o pluma de bestia)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida y Hechicero",
                informacion: "Tocas a una criatura y le otorgas una mejora mágica. Elige uno de los siguientes efectos; el objetivo consigue dicho efecto hasta que termina el conjuro.*→ Astucia de zorro. El objetivo tiene ventaja en las pruebas de Inteligencia.*→ Elegancia de gato. El objetivo tiene ventaja en las pruebas de Destreza. Asimismo, no recibe daño por caer 20 pies o menos si no está incapacitado.*→ Esplendor de águila. El objetivo tiene ventaja en las pruebas de Carisma.*→ Fuerza de toro. El objetivo tiene ventaja en las pruebas de Fuerza y su carga transportable se duplica.*→ Resistencia de oso. El objetivo tiene ventaja en las pruebas de Constitución. También gana 2d6 puntos de golpe temporales, los cuales se pierden cuando termina el conjuro.*→ Sabiduría de búho. El objetivo tiene ventaja en las pruebas de Sabiduría.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/proteccionVeneno.svg",
                texto: "Protección contra veneno",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador y Paladín",
                informacion: "Tocas a una criatura. Si está envenenada, neutralizas el veneno. Si más de un veneno aflige al objetivo, neutralizas un veneno que sabes que está presente o uno al azar.*Mientras dura el conjuro, el objetivo tiene ventaja en las tiradas de salvación que haga contra ser envenenado y tiene resistencia al daño por veneno.",
            },

            {   icono: "src/assets/nivel2/rafagaViento.svg",
                texto: "Ráfaga de viento",
                componentes: "V,S, M (Semilla de legumbre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (↑ 60 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Druida, Hechicero y Mago",
                informacion: "Una línea de viento fuerte de 60 pies de largo y 10 pies de ancho surge de ti en la dirección que elijas y dura mientras lo hace el conjuro. Todas las criaturas que empiezan su turno en la línea deben superar una tirada de salvación de Fuerza para no ser empujadas a 15 pies de ti siguiendo la dirección de la línea.*Cualquier criatura que se encuentre en la línea debe gastar 2 pies de movimiento por cada pie que se mueva para acercarse a ti.*La ráfaga propaga gas o vapor, y apaga velas, antorchas y llamas similares sin proteger dentro del área. Las llamas protegidas, como las linternas, se agitan violentamente y tienen un 50 % de probabilidades de apagarse.*Como acción adicional en cada uno de tus turnos antes de que el conjuro termine, puedes cambiar la dirección en la que la ráfaga surge de ti.",
            },

            {   icono: "src/assets/nivel2/rayoAbrasador.svg",
                texto: "Rayo abrasador",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "A distancia 2d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Creas tres rayos de fuego y los lanzas hacia objetivos que se encuentren dentro del alcance. Puedes lanzárselo a un objetivo o a varios. Haz un ataque de conjuro a distancia por cada rayo. Si impactas, el objetivo recibe 2d6 puntos de daño por fuego.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, creas un rayo adicional por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/rayoLuna.svg",
                texto: "Rayo de luna",
                componentes: "V,S, M (Semilla de flor de luna y feldespato de ópalo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Área de 5 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 2d10 radiante",
                clases: "Druida",
                informacion: "Un rayo plateado de luz pálida brilla en un cilindro de 5 pies de radio y 40 pies de alto, cuyo centro se encuentra en un punto que elijas dentro del alcance. Hasta que el conjuro termine, una luz tenue llena el cilindro.*Cuando una criatura entra en el área del conjuro por primera vez en un turno o empieza un turno ahí, unas fantasmales llamas la envuelven causándole un dolor agudo. Debe hacer una tirada de salvación de Constitución: si falla, recibe 2d10 puntos de daño radiante y, si tiene éxito, la mitad.*Un cambiaformas hace la tirada de salvación con desventaja. Si falla, también vuelve a su forma original inmediatamente y no puede asumir una forma diferente hasta que deje la luz del conjuro.*En cada uno de tus turnos después de lanzar el conjuro puedes usar una acción para mover el rayo 60 pies en cualquier dirección.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d10 por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/rayoDebilitador.svg",
                texto: "Rayo debilitador",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "A distancia",
                clases: "Brujo y Mago",
                informacion: "Un rayo negro de energía debilitante surge de tu dedo hacia una criatura que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo solo inflige la mitad de daño con ataques de arma que usen Fuerza hasta que termine el conjuro.*Al final de cada uno de los turnos del objetivo, este puede hacer una tirada de salvación de Constitución contra el conjuro. Si tiene éxito, el conjuro termina.",
            },

            {   icono: "src/assets/nivel2/restablecimientoMenor.svg",
                texto: "Restablecimiento menor",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Bardo, Clérigo, Druida, Explorador y Paladín",
                informacion: "Tocas a una criatura y puedes terminar con una enfermedad o con un estado que la aflija. El estado puede ser cegado, ensordecido, paralizado o envenenado.",
            },

            {   icono: "src/assets/nivel2/silencio.svg",
                texto: "Restablecimiento menor",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (Área 20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo y Explorador",
                informacion: "Mientras dura el conjuro, no se puede crear ningún sonido en una esfera de 20 pies de radio cuyo centro es un punto que elijas dentro del alcance, y ningún sonido puede atravesarla. Cualquier criatura u objeto que esté completamente dentro de la esfera es inmune al daño por trueno y las criaturas quedan ensordecidas mientras permanezcan dentro. Es imposible lanzar un conjuro que incluya un componente verbal.",
            },

            {   icono: "src/assets/nivel2/sorderaCeguera.svg",
                texto: "Sordera / Ceguera",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 minuto",
                ataque: "--",
                clases: "Bardo, Clérigo, Hechicero y Mago",
                informacion: "Puedes cegar o ensordecer a un enemigo. Elige una criatura que puedas ver dentro del alcance para que haga una tirada de salvación de Constitución. Si falla, queda cegado o ensordecido (según decidas) mientras dura el conjuro. Al final de cada uno de sus turnos, puede hacer una tirada de salvación de Constitución para intentar anular el conjuro.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, puedes apuntar a una criatura adicional por cada nivel por encima de 2.",
            },

            {   icono: "src/assets/nivel2/sugestion.svg",
                texto: "Sugestión",
                componentes: "V, M (Lengua serpiente y panal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 8 horas",
                ataque: "--",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Sugieres mágicamente un curso de actividad (limitado a una frase o dos) a una criatura que puedas ver dentro del alcance y que te pueda oír y entender. Las criaturas que no pueden ser hechizadas son inmunes a este efecto. La sugerencia debe plantearse de tal modo que el curso de la acción suene razonable. Pedirle a una criatura que se apuñale a sí misma, que se arroje sobre una lanza, que se inmole o que haga algo obviamente dañino anula automáticamente el efecto del conjuro.*El objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, sigue el curso de acción que hayas descrito lo mejor que puede. La acción sugerida puede continuar mientras dure el conjuro. Si se puede completar en poco tiempo, el conjuro acaba cuando el sujeto termina lo que se le pidió que hiciera.*También puedes especificar las condiciones que activarán una tarea especial mientras dure el conjuro. Por ejemplo, puedes sugerir que un soldado le dé su caballo de guerra al primer mendigo que se encuentre. Si la condición no se cumple antes de que el conjuro termine, la actividad no se lleva a cabo.*Si tú o cualquiera de tus compañeros daña al objetivo, el conjuro termina.",
            },

            {   icono: "src/assets/nivel2/telarana.svg",
                texto: "Telaraña",
                componentes: "V, S, M (Telarañas)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (Cuadrado 20 pies)",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Conjuras una masa de telarañas pegajosas en un punto de tu elección dentro del alcance. La telaraña llena un cubo de 20 pies que surge de ese punto mientras dure el conjuro. Las telarañas son terreno difícil y un área ligeramente iluminada.*Si las telarañas no están sujetas entre dos cuerpos sólidos (como paredes o árboles) o apoyadas sobre el suelo, un muro o el techo, colapsan por sí mismas y el conjuro termina al principio de tu siguiente turno. Las telarañas apoyadas sobre una superficie lisa tienen una profundidad de 5 pies.*Cada criatura que empieza su turno en las telarañas o que entra en ellas durante su turno debe hacer una tirada de salvación de Destreza. Si falla, queda apresada mientras permanezcan las telarañas o hasta que se libere.*Una criatura apresada por las telarañas puede usar su acción para hacer una prueba de Fuerza enfrentada a la CD de salvación de tu conjuro. Si tiene éxito, deja de estar apresada.*Las telarañas son inflamables. Cualquier cubo de telarañas de 5 pies expuesto al fuego arde en 1 ronda, infligiendo 2d4 puntos de daño por fuego a cualquier criatura que empiece su turno en el fuego.",
            },

            {   icono: "src/assets/nivel2/treparAracnido.svg",
                texto: "Trepar cual arácnido",
                componentes: "V, S, M (Betún y una araña)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Hasta que el conjuro termine, una criatura voluntaria a la que tocas consigue la capacidad de trepar por superficies verticales y techos mientras tenga las manos libres. El objetivo también consigue una velocidad de escalada igual a su velocidad caminando.",
            },

            {   icono: "src/assets/nivel2/trucoCuerda.svg",
                texto: "Truco de la cuerda",
                componentes: "V, S, M (Trigo en polvo y lazo retorcido)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Tocas un trozo de cuerda de hasta 60 pies de largo. Un extremo de la cuerda se alza en el aire hasta que toda la cuerda cuelgue perpendicular al suelo. En su extremo más alto de la cuerda, se abre un portal invisible a un espacio extradimensional que dura hasta que termina el conjuro y al que se puede llegar trepando por la cuerda. El espacio puede contener hasta 8 criaturas Medianas o de un tamaño menor. Se puede tirar de la cuerda hacia el espacio, lo que hace que desaparezca de la vista desde la parte exterior.*Los ataques y los conjuros no pueden cruzar la entrada ni hacia dentro ni hacia fuera del espacio, pero los que están dentro pueden ver fuera como si lo hicieran desde una ventada de 3×5 pies cuyo centro es la cuerda.*Cualquier cosa que esté dentro del espacio extradimensional cae cuando el conjuro termina.",
            },

            {   icono: "src/assets/nivel2/verInvisibilidad.svg",
                texto: "Ver invisibilidad",
                componentes: "V, S, M (Talco y polvo de plata)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                ataque: "--",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Mientras dura el conjuro, ves criaturas y objetos invisibles como si fueran visibles y puedes mirar en el Plano Etéreo. Las criaturas y los objetos etéreos parecen fantasmales y translúcidos.",
            },

            {   icono: "src/assets/nivel2/vinculoProtector.svg",
                texto: "Vínculo protector",
                componentes: "V, S, M (Anillo 50po para cada uno y llevar puesto durante conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo",
                informacion: "Este conjuro protege a una criatura voluntaria que tocas o crea una conexión mística entre ella y tú hasta que el conjuro termina. Mientras que el objeto esté a 60 pies o menos de ti, consigue un bonificador de +1 a la CA y a las tiradas de salvación y tiene resistencia a todos los daños. Asimismo, cada vez que reciba daño, tú recibes la misma cantidad.*El conjuro termina si tus puntos de golpe se reducen a 0 o si el objetivo se aleja más de 60 pies de ti. También termina si se vuelve a lanzar el conjuro en cualquiera de las dos criaturas conectadas. Puedes disipar el conjuro como acción.",
            },

            {   icono: "src/assets/nivel2/verOscuridad.svg",
                texto: "Visión en la oscuridad",
                componentes: "V, S, M (Zanahoria seca o ágata)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "--",
                clases: "Druida, Explorador, Hechicero y Mago",
                informacion: "Tocas a una criatura voluntaria para concederle la capacidad de ver en la oscuridad. Mientras dura el conjuro, la criatura tiene visión en la oscuridad hasta una distancia de 60 pies.",
            },

            {   icono: "src/assets/nivel2/zonaVerdad.svg",
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
        id: 5,
        nivel: "Nivel 4",
        backgroundColor: '#74B995',
        conjuros: [
            {
                texto: "Adivinación",
                componentes: "V,S,M (incienso y una ofrenda apropiada para tu religión, de al menos 25 po de valor total, los cuales consume el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Clérigo",
                informacion: "Tu magia y tu ofrenda te ponen en contacto con un dios o con el sirviente de un dios al que puedes hacer una única pregunta concerniente a una meta, evento o actividad específica que ocurrirá en un plazo máximo de 7 días..."
            },
            {
                texto: "Asesino fantasmal",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación 4d10 psíquico",
                clases: "Mago",
                informacion: "Accedes a las pesadillas de una criatura que puedas ver dentro del alcance y creas una manifestación ilusoria de sus miedos más profundos, que solo puede ver esa criatura..."
            },
            {
                texto: "Cofre oculto de Leomund",
                componentes: "V,S,M (un cofre exquisito, de 3×2×2 pies, construido con materiales raros de al menos 5000 po de valor, y una réplica Diminuta hecha con los mismos materiales de al menos 50 po de valor)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Escondes un cofre y todo su contenido en el Plano Etéreo..."
            },
            {
                texto: "Compulsión",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo",
                informacion: "Las criaturas que elijas que estén dentro del alcance y que puedan escucharte deben hacer una tirada de salvación de Sabiduría..."
            },
            {
                texto: "Confusión",
                componentes: "V,S,M (tres cáscaras de nuez)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies (10 pies)",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Sabiduría",
                clases: "Bardo, Druida, Hechicero y Mago",
                informacion: "Este conjuro distorsiona la mente de las criaturas creando ilusiones y provocando acciones incontroladas..."
            },
            {
                texto: "Conjurar elementales menores",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Druida y Mago",
                informacion: "Convocas elementales que aparecen en un espacio sin ocupar que puedas ver dentro del alcance..."
            },
            {
                texto: "Conjurar seres de los bosques",
                componentes: "V,S,M (una baya sagrada por criatura convocada)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Explorador y Druida",
                informacion: "Convocas criaturas feéricas que aparecen en espacios sin ocupar que puedas ver dentro del alcance..."
            },
            {
                texto: "Controlar agua",
                componentes: "V,S,M (una gota de agua y una pizca de polvo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Clérigo, Druida y Mago",
                informacion: "Hasta que el conjuro acaba, controlas el agua corriente que haya dentro del área que elijas..."
            },
            {
                texto: "Destierro",
                componentes: "V,S,M (un objeto desagradable para el objetivo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Carisma",
                clases: "Paladín, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Intentas enviar a una criatura que puedas ver dentro del alcance a otro plano de existencia..."
            },
            {
                texto: "Dominar bestia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Sabiduría",
                clases: "Druida y Hechicero",
                informacion: "Intentas embaucar a una bestia que puedas ver dentro del alcance..."
            },
            {
                texto: "Escudo de fuego",
                componentes: "V,S,M (una pizca de fósforo o una luciérnaga)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "10 minutos",
                ataque: "2d8 de daño por fuego o frío",
                clases: "Mago",
                informacion: "Unas tenues llamas envuelven tu cuerpo mientras dura el conjuro..."
            },
            {
                texto: "Esfera elástica de Otiluke",
                componentes: "V,S,M (un fragmento semiesférico de cristal transparente y otro de goma arábiga que encaje con el cristal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Contra salvación de Destreza",
                clases: "Mago",
                informacion: "Una esfera de fuerza brillante encierra a una criatura o un objeto de un tamaño Grande o más pequeño dentro del alcance..."
            },
            {
                texto: "Fabricar",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "120 pies",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Conviertes materia prima en productos del mismo material..."
            },
            {
                texto: "Guardia contra la muerte",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "8 horas",
                ataque: "Ninguno",
                clases: "Paladín y Clérigo",
                informacion: "Tocas a una criatura y le concedes una forma de protegerse contra la muerte..."
            },
            {
                texto: "Guardián de la fe",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 horas",
                ataque: "Contra salvación de Destreza 20 radiante",
                clases: "Clérigo",
                informacion: "Un guardián espectral Grande aparece y flota en un espacio sin ocupar de tu elección..."
            },
            {
                texto: "Insecto gigante",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Druida",
                informacion: "Transformas hasta a diez ciempiés, tres arañas, cinco avispas o un escorpión dentro del alcance en una versión gigante..."
            },
            {
                texto: "Invisibilidad mejorada",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Tú o una criatura que tocas se vuelve invisible hasta que el conjuro termina..."
            },
            {
                texto: "Libertad de movimiento",
                componentes: "V,S,M (una correa de cuero atada alrededor del brazo o una extremidad similar)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                ataque: "Ninguno",
                clases: "Explorador, Bardo, Clérigo y Druida",
                informacion: "Tocas a una criatura voluntaria y le otorgas libertad de movimiento..."
            },
            {
                texto: "Localizar criatura",
                componentes: "V,S,M (un poco de pelaje de sabueso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Explorador, Paladín, Bardo, Clérigo, Druida y Mago",
                informacion: "Describe o nombra a una criatura que te sea familiar. Sientes la dirección en la que se encuentra..."
            },
            {
                texto: "Marchitar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Instantáneo",
                ataque: "Contra salvación de Constitución 8d8 necrótico",
                clases: "Brujo, Druida, Hechicero y Mago",
                informacion: "La energía nigromántica anega a una criatura de tu elección dentro del alcance y le drena los humores y la vitalidad..."
            }
        ]
    },
    {
        id: 5,
        nivel: "Nivel 4",
        backgroundColor: '#74B995',
        conjuros: [
            {
                texto: "Alterar los recuerdos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo y Mago",
                informacion: "Intentas remodelar los recuerdos de otra criatura. Una criatura que puedas ver debe hacer una tirada de salvación de Sabiduría. Si estás luchando contra ella, esta tiene ventaja. Si falla la tirada, el objetivo queda hechizado por ti mientras dura el conjuro..."
            },
            {
                texto: "Alzar a los muertos",
                componentes: "V,S,M (un diamante de al menos 500 po de valor)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Paladín, Bardo y Clérigo",
                informacion: "Devuelves a la vida a una criatura muerta que tocas, siempre y cuando no lleve muerta más de 10 días. Si el alma de la criatura es voluntaria y está en libertad para volver al cuerpo, la criatura vuelve a la vida con 1 punto de golpe..."
            },
            {
                texto: "Animar objetos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Los objetos pueden cobrar vida bajo tus órdenes. Elige hasta diez objetos no mágicos dentro del alcance que nadie lleve puestos ni transporte. Un objeto Mediano cuenta como dos objetos, uno Grande cuenta como cuatro y uno Enorme cuenta como ocho..."
            },
            {
                texto: "Apariencia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "8 horas",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Este conjuro te permite cambiar la apariencia de cualquier número de criaturas que puedas ver dentro del alcance. A cada objetivo que elijas le das una nueva apariencia ilusoria. Un objetivo que no sea voluntario puede hacer una tirada de salvación de Carisma para intentar evitar que el conjuro la afecte..."
            },
            {
                texto: "Atadura planar",
                componentes: "V,S,M (una joya de al menos 1000 po de valor)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "60 pies",
                duracion: "24 horas",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo, Druida y Mago",
                informacion: "Con este conjuro intentas vincular a tu servicio a un celestial, un elemental, una fata o un infernal. La criatura debe estar dentro del alcance mientras dure el lanzamiento del conjuro..."
            },
            {
                texto: "Caparazón antivida",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (10 pies)",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Druida",
                informacion: "Una barrera reluciente se extiende desde ti en un radio de 10 pies, moviéndose al mismo tiempo que tú, y repele a todas las criaturas salvo a los no muertos y a los constructos..."
            },
            {
                texto: "Círculo de teletransportación",
                componentes: "V,S,M (gemas preciosas de 50 po de valor)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "1 asalto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Cuando lanzas el conjuro, dibujas un círculo de 10 pies de diámetro en el suelo con símbolos que conectan tu localización con un círculo de teletransporte permanente..."
            },
            {
                texto: "Comunión",
                componentes: "V,S,M (incienso y un vial de agua bendita o sacrílega)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "1 minuto",
                ataque: "Ninguno",
                clases: "Clérigo",
                informacion: "Contactas con tu deidad o con un representante divino y, antes de que termine el conjuro, le haces hasta tres preguntas que se puedan responder con sí o no..."
            },
            {
                texto: "Comunión con la naturaleza",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Explorador y Druida",
                informacion: "Durante un breve espacio de tiempo te conviertes en uno con la naturaleza y obtienes conocimiento del territorio que te rodea. Al aire libre, el conjuro te da conocimiento sobre la tierra que está a 3 millas o menos de ti. En cuevas o en otros lugares subterráneos, el radio se limita a 300 pies..."
            },
            {
                texto: "Conjurar elemental",
                componentes: "V,S,M (incienso, arcilla blanda, azufre y fósforo o agua y tierra)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Druida y Mago",
                informacion: "Conjuras a un sirviente elemental. Elige un área de aire, tierra, fuego o agua de 10 pies cúbicos dentro del alcance. Un elemental con un valor de desafío igual a 5 o menos que se corresponda con el área que has elegido aparece en un espacio sin ocupar a 10 pies o menos del cubo..."
            },
            {
                texto: "Cono de frío",
                componentes: "V,S,M (un cristal pequeño o un cono de cristal)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 8d8 frío",
                clases: "Hechicero y Mago",
                informacion: "Una explosión de aire frío brota de tus manos. Cada criatura que se encuentre en un cono de 60 pies debe hacer una tirada de salvación de Constitución. Si falla, recibe 8d8 puntos de daño por frío y, si tiene éxito, la mitad..."
            },
            {
                texto: "Conocer las leyendas",
                componentes: "V,S,M (incienso de 250 po y cuatro trozos de marfil de 50 po)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Nombra o describe a una persona, lugar u objeto. El conjuro te proporciona un resumen del conocimiento popular sobre lo que has nombrado: relatos actuales, historias olvidadas o incluso un saber secreto que nunca ha sido de conocimiento general..."
            },
            {
                texto: "Consagrar",
                componentes: "V,S,M (hierbas, óleos e incienso de 1000 po)",
                tiempoDeLanzamiento: "24 horas",
                alcance: "Toque (60 pies)",
                duracion: "Hasta disipado",
                ataque: "Ninguno",
                clases: "Clérigo",
                informacion: "Tocas un punto e infundes el área que lo rodea con un poder sagrado (o sacrílego). El área puede tener un radio de hasta 60 pies y el conjuro falla si en el radio incluye un área que ya se encuentra bajo el conjuro Consagrar..."
            },
            {
                texto: "Contactar con otro plano",
                componentes: "V",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "1 minuto",
                ataque: "Ninguno",
                clases: "Brujo y Mago",
                informacion: "Contactas mentalmente con un semidiós, el espíritu de un sabio que murió hace mucho u otra entidad misteriosa de otro plano. Contactar con esta inteligencia extraplanar puede forzar e incluso romper tu mente..."
            },
            {
                texto: "Contagio",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "7 días",
                ataque: "Cuerpo a cuerpo",
                clases: "Clérigo y Druida",
                informacion: "Tu toque inflige enfermedad. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura dentro de tu alcance. Si impactas, el objetivo está envenenado..."
            },
            {
                texto: "Creación",
                componentes: "V,S,M (un trozo diminuto de materia del mismo objeto que planeas crear)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies (5 pies)",
                duracion: "Especial",
                ataque: "Ninguno",
                clases: "Hechicero y Mago",
                informacion: "Sacas hebras de materia de las sombras del Páramo Sombrío para crear un objeto inerte de materia vegetal dentro del alcance: textiles, cuerda, madera o algo similar. También puedes usar este conjuro para crear objetos minerales como piedra, cristal o metal..."
            },
            {
                texto: "Curar heridas en masa",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (30 pies)",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Una ola de energía curativa emana de un punto de tu elección dentro del alcance. Elige hasta seis criaturas en una esfera de 30 pies de radio cuyo centro sea ese punto. Cada objetivo recupera una cantidad de puntos de golpe igual a 3d8 + tu modificador por característica..."
            },
            {
                texto: "Despertar",
                componentes: "V,S,M (un ágata de al menos 1000 po de valor, la cual consume el conjuro)",
                tiempoDeLanzamiento: "8 horas",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo y Druida",
                informacion: "Después de dedicar el tiempo de lanzamiento a trazar senderos mágicos en una piedra preciosa, tocas a una bestia o planta de tamaño Enorme o menor. El objetivo debe tener una puntuación de Inteligencia de 3 o menos..."
            },
            {
                texto: "Disipar el bien y el mal",
                componentes: "V,S,M (agua bendita o plata y hierro pulverizados)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo",
                clases: "Paladín y Clérigo",
                informacion: "Una energía titilante te rodea y te protege de fatas, no muertos y criaturas originarias de más allá del Plano Material. Mientras dura el conjuro, celestiales, elementales, fatas, infernales y no muertos tienen desventaja en las tiradas de ataque que hagan contra ti..."
            },
            {
                texto: "Dominar persona",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Intentas embaucar a un humanoide que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar hechizado por ti mientras dure el conjuro..."
            },
            {
                texto: "Engañar",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "Ninguno",
                clases: "Bardo y Mago",
                informacion: "Te vuelves invisible al mismo tiempo que un doble ilusorio tuyo aparece donde estabas. El doble permanece ahí mientras dura el conjuro, pero la invisibilidad termina si atacas o lanzas un conjuro..."
            },
            {
                texto: "Enlace telepático de Rary",
                componentes: "V,S,M (dos trozos de cáscara de huevo de dos tipos de criatura distintos)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Forjas un vínculo telepático entre hasta 8 criaturas voluntarias de tu elección dentro del alcance mientras dure el conjuro. Las criaturas con puntuaciones de Inteligencia de 2 o menos no se ven afectadas por este conjuro..."
            },
            {
                texto: "Ensueño",
                componentes: "V,S,M (un puñado de arena, unas gotitas de tinta y una pluma de escribir de un pájaro dormido)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Ilimitado",
                duracion: "8 horas",
                ataque: "Ninguno",
                clases: "Bardo, Brujo y Mago",
                informacion: "Este conjuro da forma a los sueños de una criatura. Elige como objetivo a una criatura que conozcas y que esté en tu mismo plano de existencia. Mediante este conjuro no se puede contactar con criaturas que no duerman..."
            },
            {
                texto: "Escudriñar",
                componentes: "V,S,M (un foco de al menos 1000 po de valor como una bola de cristal o un espejo de plata)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Bardo, Brujo, Clérigo, Druida y Mago",
                informacion: "Puedes ver y escuchar a una criatura que elijas y que se encuentre en el mismo plano de existencia que tú. El objetivo debe hacer una tirada de salvación de Sabiduría, la cual está condicionada por lo bien que conoces al objetivo..."
            },
            {
                texto: "Geas",
                componentes: "V",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "60 pies",
                duracion: "30 días",
                ataque: "Ninguno",
                clases: "Paladín, Bardo, Clérigo, Druida y Mago",
                informacion: "Das una orden mágica a una criatura que puedas ver dentro del alcance, lo que la obliga a llevar a cabo algún servicio, a abstenerse de hacer una acción o a seguir una actividad, según decidas..."
            },
            {
                texto: "Golpe flamígero",
                componentes: "V,S,M (una pizca de azufre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies (10 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 4d6 fuego + 4d6 radiante",
                clases: "Clérigo",
                informacion: "Una columna vertical de fuego divino cae desde los cielos en el lugar que especifiques. Todas las criaturas que se encuentren dentro de un cilindro de 40 pies de altura y 10 pies de radio, cuyo centro sea un punto dentro del alcance, deben hacer una tirada de salvación de Destreza..."
            },
            {
                texto: "Inmovilizar monstruo",
                componentes: "V,S,M (un trozo de hierro pequeño y liso)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Elige a una criatura que puedas ver dentro del alcance que no sea un no muerto. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar paralizado mientras dura el conjuro..."
            },
            {
                texto: "Mano de Bigby",
                componentes: "V,S,M (un cascarón de huevo y un guante de piel de serpiente)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                ataque: "4d8 fuerza",
                clases: "Mago",
                informacion: "Creas una mano Grande de una fuerza reluciente y traslúcida en un espacio libre que puedas ver dentro del alcance. La mano dura mientras lo haga el conjuro y se mueve a tus órdenes, imitando los movimientos de tu propia mano..."
            },
            {
                texto: "Muro de fuerza",
                componentes: "V,S,M (una pizca de gema diáfana pulverizada)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "Un muro de fuerza surge en un punto que elijas dentro del alcance en cualquier orientación que elijas, como una barrera horizontal, vertical o en ángulo..."
            },
            {
                texto: "Muro de piedra",
                componentes: "V,S,M (un pedrusco de granito)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Druida, Hechicero y Mago",
                informacion: "Una pared no mágica de piedra sólida surge en un punto que elijas dentro del alcance. El muro tiene 6 pulgadas de grosor y está compuesto por 10 paneles cuadrados de 10 pies..."
            },
            {
                texto: "Nube aniquiladora",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 5d8 veneno",
                clases: "Hechicero y Mago",
                informacion: "Creas una esfera de una niebla venenosa de color verde amarillo, con 20 pies de radio cuyo centro se encuentra en un punto que elijas dentro del alcance..."
            },
            {
                texto: "Pasamuros",
                componentes: "V,S,M (un pellizco de semillas de sésamo)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "Ninguno",
                clases: "Mago",
                informacion: "En un punto que elijas y que puedas ver en una superficie de madera, yeso o piedra (como un muro, un techo o un suelo) dentro del alcance aparece un pasaje que dura mientras lo haga el conjuro..."
            },
            {
                texto: "Paso arbóreo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                ataque: "Ninguno",
                clases: "Explorador y Druida",
                informacion: "Consigues la capacidad de entrar en un árbol y moverte desde ahí a otro árbol del mismo tipo que se encuentre a 500 pies o menos..."
            },
            {
                texto: "Plaga de insectos",
                componentes: "V,S,M (unos cuantos granos de azúcar, algunas semillas de grano y un poco de grasa)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies (20 pies)",
                duracion: "Concentración 10 minutos",
                ataque: "Contra salvación 4d10 perforante",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Un enjambre de langostas mordaces llena una esfera de 20 pies de radio cuyo centro se encuentra en un punto que elijas dentro del alcance..."
            },
            {
                texto: "Reencarnar",
                componentes: "V,S,M (aceites y ungüentos raros de al menos 1000 po de valor, los cuales consume el conjuro)",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Druida",
                informacion: "Tocas el cadáver de un humanoide o un trozo de él. Siempre y cuando la criatura no lleve muerta más de 10 días, el conjuro forma un nuevo cuerpo adulto y luego llama al alma para que entre en él..."
            },
            {
                texto: "Restablecimiento mayor",
                componentes: "V,S,M (polvo de diamante de al menos 100 po de valor, el cual consume el conjuro)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Ninguno",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Imbuyes a una criatura que tocas con energía positiva para que se deshaga de un efecto que la debilita..."
            },
            {
                texto: "Telequinesis",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                ataque: "Ninguno",
                clases: "Hechicero y Mago",
                informacion: "Consigues la capacidad de mover o manipular criaturas u objetos mediante el pensamiento..."
            },
            {
                "texto": "Mastín fiel de Mordenkainen",
                "componentes": "V,S,M (un silbato de plata pequeño, un hueso y un hilo)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "30 pies",
                "duracion": "8 horas",
                "ataque": "Cuerpo a cuerpo 4d8 perforante",
                "clases": "Mago",
                "informacion": "Conjuras un perro guardián espectral en un espacio sin ocupar que puedas ver dentro del alcance..."
            },
            {
                "texto": "Moldear la piedra",
                "componentes": "V,S,M (arcilla blanda, que debes modelar para convertirla más o menos en la forma que deseas del objeto de piedra)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "Toque",
                "duracion": "Instantáneo",
                "clases": "Clérigo, Druida y Mago",
                "informacion": "Tocas un objeto de piedra de tamaño Mediano o más pequeño o una sección de piedra de no más de 5 pies en cualquier dimensión..."
            },
            {
                "texto": "Muro de fuego",
                "componentes": "V,S,M (un trocito de fósforo)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "120 pies",
                "duracion": "Concentración 1 minuto",
                "ataque": "Contra salvación de Destreza 5d8 fuego",
                "clases": "Druida, Hechicero y Mago",
                "informacion": "Creas un muro de fuego en una superficie sólida dentro del alcance..."
            },
            {
                "texto": "Ojo arcano",
                "componentes": "V,S,M (un poco de pelo de murciélago)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "30 pies",
                "duracion": "Concentración 1 hora",
                "clases": "Mago",
                "informacion": "Creas un ojo mágico e invisible dentro del alcance que planea en el aire mientras dura el conjuro..."
            },
            {
                "texto": "Piel pétrea",
                "componentes": "V,S,M (polvo de diamante de 100 po de valor, el cual consume el conjuro)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "Toque",
                "duracion": "Concentración 1 hora",
                "clases": "Explorador, Druida, Hechicero y Mago",
                "informacion": "Este conjuro hace que la carne de una criatura voluntaria que toques sea tan dura como la piedra..."
            },
            {
                "texto": "Polimorfar",
                "componentes": "V,S,M (un capullo de oruga)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "60 pies",
                "duracion": "Concentración 1 hora",
                "ataque": "Contra salvación de Sabiduría",
                "clases": "Bardo, Druida, Hechicero y Mago",
                "informacion": "Este conjuro transforma a una criatura que puedas ver dentro del alcance en una nueva forma..."
            },
            {
                "texto": "Puerta dimensional",
                "componentes": "V",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "500 pies",
                "duracion": "Instantáneo",
                "clases": "Bardo, Brujo, Hechicero y Mago",
                "informacion": "Te teleportas desde tu localización actual a cualquier otro lugar que desees dentro del alcance..."
            },
            {
                "texto": "Sanctasanctórum privado de Mordenkainen",
                "componentes": "V,S,M (una lámina de plomo, un trozo de cristal opaco, un fajo de algodón o de tela y crisolita en polvo)",
                "tiempoDeLanzamiento": "10 minutos",
                "alcance": "120 pies",
                "duracion": "24 horas",
                "clases": "Mago",
                "informacion": "Creas un área mágicamente segura dentro del alcance..."
            },
            {
                "texto": "Tentáculos negros de Evard",
                "componentes": "V,S,M (un tentáculo de un pulpo o calamar gigante)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "90 pies",
                "duracion": "Concentración 1 minuto",
                "ataque": "Contra salvación de Destreza 3d6 contundente",
                "clases": "Mago",
                "informacion": "Unos tentáculos como el ébano se retuercen llenando un cuadrado del suelo de 20 pies que puedas ver dentro del alcance..."
            },
            {
                "texto": "Terreno alucinatorio",
                "componentes": "V,S,M (una piedra, una ramita y un fragmento de una planta de color verde)",
                "tiempoDeLanzamiento": "10 minutos",
                "alcance": "300 pies",
                "duracion": "24 horas",
                "clases": "Bardo, Brujo, Druida y Mago",
                "informacion": "Creas un terreno natural en un cubo de 150 pies dentro del alcance que parece, suena y huele como otro tipo de terreno natural..."
            },
            {
                "texto": "Tormenta de hielo",
                "componentes": "V,S,M (una pizca de polvo y unas gotas de agua)",
                "tiempoDeLanzamiento": "1 acción",
                "alcance": "300 pies",
                "duracion": "Instantáneo",
                "ataque": "Contra salvación de Destreza 2d8+4d6",
                "clases": "Druida, Hechicero y Mago",
                "informacion": "Cae granizo en un cilindro de 20 pies de radio y 40 de altura cuyo centro se encuentra en un punto dentro del alcance..."
            }
        ]
    },
    {
        id: 6,
        nivel: "Nivel 5",
        backgroundColor: '#74B995',
        conjuros: [
            {   icono: "src/assets/nivel3/acelerar.svg",
                texto: "Acelerar",
                componentes: "V, S, M (Viruta de regaliz)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                ataque: "--",
                clases: "Hechicero y Mago",
                informacion: "Elige una criatura voluntaria que puedas ver dentro del alcance. Hasta que el conjuro termine, la velocidad del objetivo se duplica, consigue un bonificador de +2 a la CA, tiene ventaja en las tiradas de salvación de Destreza y consigue una acción adicional en cada uno de sus turnos. Esta acción solo se puede usar para realizar una acción de ataque (solo un ataque de arma), esprintar, retirarse, esconderse o usar un objeto.*Cuando el conjuro termina, el objetivo no puede moverse ni realizar acciones hasta después de su siguiente turno, ya que le invade una ola de letargo.",
            },

            {   icono: "src/assets/nivel3/animarMuertos.svg",
                texto: "Animar muertos",
                componentes: "V, S, M (Gota sangre, carne, polvo de huesos)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Clérigo y Mago",
                informacion: "Este conjuro crea sirvientes no muertos. Elige una pila de huesos o un cadáver humanoide de tamaño Mediano o Pequeño dentro del alcance. El conjuro imbuye al objetivo con una repugnante imitación de vida y lo reanima como una criatura no muerta. El objetivo se convierte en un esqueleto si eliges huesos o en un zombi si eliges un cadáver (el director de juego determina las estadísticas de la criatura).*Una vez por turno, puedes usar una acción adicional para dar órdenes mentales a cualquier criatura que hayas creado con este conjuro si esta se encuentra a 60 pies o menos de ti (si controlas a varias criaturas, puedes dar órdenes a alguna o a todas ellas al mismo tiempo usando la misma orden para todas). Tú decides qué acción hará la criatura y adónde se moverá durante su siguiente turno, o puedes emitir una orden general, como proteger una habitación o un pasillo en particular. Si no emites ninguna orden, la criatura solo se defiende a sí misma contra las criaturas hostiles. Una vez se le ha dado una orden, la criatura la sigue hasta completar su tarea.*La criatura está bajo tu control durante 24 horas. Pasado este tiempo, deja de obedecer cualquier orden que le hayas dado. Para mantener el control de la criatura durante otras 24 horas, debes lanzarle el conjuro otra vez antes de que acaben las 24 horas actuales. Usar el conjuro de este modo reafirma el control sobre hasta cuatro criaturas que hayas animado de este modo, en lugar de animar a una nueva.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, animas o reafirmas el control sobre dos no muertos adicionales por cada nivel por encima de 3. Cada una de las criaturas debe venir de un cadáver o de una pila de huesos diferente.",
            },

            {   icono: "src/assets/nivel3/bolaFuego.svg",
                texto: "Bola de fuego",
                componentes: "V, S, M (Guano de murciélago y azufre)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (Área 20 pies)",
                duracion: "Instantáneo",
                ataque: "Contra salvación 8d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Un rayo brillante surge de tu dedo índice hasta un punto que elijas dentro del alcance y explota con un leve estruendo en un estallido de llamas. Todas las criaturas que se encuentren en una esfera de 20 pies de radio cuyo centro sea ese punto deben hacer una tirada de salvación de Destreza: si fallan, reciben 8d6 puntos de daño por fuego y, si tienen éxito, la mitad.*El fuego se propaga en las esquinas e incinera los objetos inflamables que se encuentren en el área y que nadie lleve puestos ni transporte.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el daño aumenta en 1d6 por cada nivel por encima de 3.",
            },

            {   icono: "src/assets/nivel3/caminarSobreAgua.svg",
                texto: "Caminar sobre el agua",
                componentes: "V, S, M (Trozo de corcho)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Clérigo, Druida, Explorador y Hechicero",
                informacion: "Este conjuro concede la capacidad de moverse por cualquier superficie líquida (como agua, ácido, lodo, nieve, arenas movedizas o lava) como si fuera un terreno sólido inofensivo (caminar sobre lava fundida aún puede provocar daño debido al calor). Hasta tres criaturas voluntarias que puedas ver dentro del alcance consiguen esta capacidad mientras dure el conjuro.*Si tu objetivo es una criatura sumergida en un líquido, el conjuro saca al objetivo a la superficie del líquido a una velocidad de 60 pies por asalto.",
            },

            {   icono: "src/assets/nivel3/circuloMagico.svg",
                texto: "Círculo mágico",
                componentes: "V, S, M (Agua bendita o plata y hierro de 100po)",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies (Área 10 pies)",
                duracion: "1 hora",
                ataque: "--",
                clases: "Brujo, Clérigo, Mago y Paladín",
                informacion: "Creas un cilindro de energía mágica de 10 pies de radio y 20 pies de altura cuyo centro se encuentra en un punto del suelo que puedas ver dentro del alcance. En la intersección del cilindro con el suelo u otra superficie aparecen unas runas brillantes.*Elige uno o más de los siguientes tipos de criaturas: celestiales, elementales, fatas, infernales y no muertos. El círculo afecta a una criatura del tipo elegido de los siguientes modos:*→ La criatura no puede entrar en el cilindro voluntariamente por medios no mágicos. Si la criatura intenta usar el teletransporte o el viaje intraplanar para hacerlo, primero debe superar una tirada de salvación de Carisma.*→ La criatura tiene desventaja en las tiradas de ataque contra objetivos que se encuentren dentro del cilindro.*→ Los objetivos que se encuentran dentro del cilindro no pueden quedar hechizados, asustados o poseídos por la criatura.*Cuando lanzas este conjuro, puedes decidir que su magia opere en el sentido inverso: evitando que una criatura de un tipo específico deje el cilindro y protegiendo a los objetivos que se encuentran fuera.*En niveles superiores. Cuando lances este conjuro usando un espacio de conjuro de nivel 4 o superior, la duración aumenta en 1 hora por cada nivel por encima de 3.",
            },

            {   icono: "src/assets/nivel3/clarividencia.svg",
                texto: "Clarividencia",
                componentes: "V, S, M (Foco 100po)",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "5.000 pies",
                duracion: "Concentración 10 minutos",
                ataque: "--",
                clases: "Bardo, Clérigo, Hechicero y Mago",
                informacion: "Creas un sensor invisible en una localización que te es familiar (un lugar que hayas visitado o visto) o en una localización obvia que no te es familiar (como detrás de una puerta, en una esquina o en un bosquecillo), siempre que esté dentro del alcance (1 milla). El sensor permanece en el lugar mientras dura el conjuro y no se le puede atacar ni interactuar con él.*Cuando lanzas el conjuro, eliges ver o escuchar. Puedes usar el sentido que elijas a través del sensor como si estuvieras en ese lugar. Como acción, puedes cambiar entre ver y escuchar.*Una criatura que pueda ver el sensor (porque se beneficie de un conjuro de ver invisibilidad o posea visión verdadera, por ejemplo) contempla un orbe luminoso e intangible del tamaño de tu puño.",
            },

            {   icono: "src/assets/nivel3/conjurarAnimales.svg",
                texto: "Conjurar animales",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                ataque: "--",
                clases: "Druida y Explorador",
                informacion: "Convocas espíritus feéricos en forma de bestia que aparecen en lugares libres que puedas ver dentro del alcance. Elige una de las siguientes opciones:*→ Una bestia con un valor de desafío igual a 2 o menos.*→ Dos bestias con un valor de desafío igual a 1 o menos.*→ Cuatro bestias con un valor de desafío igual a 1/2 o menos.*→ Ocho bestias con un valor de desafío igual a 1/4 o menos.*Cada bestia se considera, además, feérica y desaparece cuando sus puntos de golpe se reducen a 0 o cuando el conjuro termina.*Las criaturas convocadas son amistosas hacia ti y tus compañeros. Tira iniciativa por ellas como si fueran un grupo que tiene sus propios turnos. Obedecen cualquier orden verbal que les des (no requiere que realices ninguna acción). Si no les das ninguna orden, se defienden de criaturas hostiles, pero, si no las hay, no realizan ninguna acción.*El director de juego determina las estadísticas de las criaturas.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de un nivel superior determinado, aparecen más criaturas de las que elegiste: con un espacio de nivel 5 aparecen el doble, con nivel 7 el triple y con nivel 9 el cuádruple.",
            },

            {   icono: "src/assets/nivel3/contrahechizo.svg",
                texto: "Contrahechizo",
                componentes: "S",
                tiempoDeLanzamiento: "1 reacción cuando veas una criatura lanzar un conjuro",
                alcance: "60 pies",
                duracion: "Instantáneo",
                ataque: "--",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Intentas interrumpir el lanzamiento de conjuro de una criatura. Si el conjuro es de nivel 3 o inferior, el lanzamiento falla y no tiene efecto. Si es de nivel 4 o superior, haz una prueba de característica usando tu característica para lanzar conjuros; la CD es 10 + el nivel de conjuro. Si tienes éxito, el lanzamiento falla y su conjuro no tiene efecto.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 4 o superior, el conjuro interrumpido no tiene efecto si su nivel es igual o menor que el nivel del espacio de conjuro que uses.",
            },

            {   icono: "src/assets/nivel3/corcelFantasma.svg",
                texto: "Corcel fantasma",
                componentes: "V, S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "1 hora",
                ataque: "--",
                clases: "Mago",
                informacion: "Una criatura cuasirreal de tamaño Grande, similar a un caballo, aparece en el suelo de un lugar sin ocupar que elijas dentro del alcance. Tú decides el aspecto de la criatura, y está equipada con una silla de montar, bocado y brida. Cualquier parte del equipo creado por el conjuro se desvanece en una nube de humo si se aleja más de 10 pies de la montura.*Mientras dura el conjuro, tú o la criatura que elijas podéis montar en la montura. La criatura usa las estadísticas de un caballo de monta, excepto porque tiene una velocidad de 100 pies y puede viajar a 10 millas por hora, o 13 millas a un ritmo rápido. Cuando el conjuro termina, la montura se desvanece poco a poco y el jinete tiene 1 minuto para desmontar. El conjuro termina si usas una acción para disiparlo o si la montura recibe daño.",
            },








        ],
    
    },
    {
        id: 7,
        nivel: "Nivel 6",
        backgroundColor: '#74B995',
        conjuros: [
            {
                texto: "Aliado planar",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Suplicas ayuda a una entidad cósmica, que envía un *celestial, elemental o infernal* para asistirte. *Puedes pedir una criatura específica, pero la entidad decide qué enviar.* *Debes negociar un pago por sus servicios.* *El coste es de aproximadamente 100 po por minuto, 1000 po por hora o 10 000 po por día, aunque puede variar.* *Si la tarea es peligrosa o contraria a los intereses de la criatura, puede negarse.*"
            },
            {
                texto: "Baile irresistible de Otto",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 minuto",
                clases: "Bardo y Mago",
                informacion: "El objetivo *comienza a bailar sin control.* *Debe usar todo su movimiento para bailar sin moverse del sitio y tiene desventaja en salvaciones de Destreza y ataques.* *Las criaturas tienen ventaja en ataques contra él.* *Puede hacer una salvación de Sabiduría en su turno para acabar con el conjuro.*"
            },
            {
                texto: "Barrera de cuchillas",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "90 pies",
                duracion: "Concentración 10 minutos",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 6d10 cortante",
                clases: "Clérigo",
                informacion: "Creas una *pared de cuchillas giratorias* de hasta *100 pies de largo, 20 pies de alto y 5 pies de grosor.* *Causa 6d10 de daño cortante a quienes la crucen.* *Proporciona tres cuartos de cobertura y convierte el área en terreno difícil.*"
            },
            {
                texto: "Círculo de muerte",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 8d6 necrótico",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Lanzas una *esfera de energía negativa* de *60 pies de radio.* *Las criaturas dentro deben hacer una salvación de Constitución.* Si fallan, reciben *8d6 de daño necrótico,* la mitad si tienen éxito. *Si usas un espacio de nivel 7 o superior, el daño aumenta en 2d6 por nivel adicional.*"
            },
            {
                texto: "Conjurar feérico",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "90 pies",
                duracion: "Concentración 1 hora",
                clases: "Brujo y Druida",
                informacion: "Convocas *una criatura feérica de VD 5 o un espíritu feérico con forma de bestia de VD 6.* *Obedece tus órdenes y desaparece si pierde todos sus puntos de golpe.* *Si pierdes la concentración, se vuelve hostil.* *Cada nivel superior aumenta en 1 el VD máximo permitido.*"
            },
            {
                texto: "Contingencia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Personal",
                duracion: "10 días",
                clases: "Mago",
                informacion: "Preparas un *conjuro de nivel 5 o menor* que se activará bajo una condición establecida. *Debe tener un tiempo de lanzamiento de 1 acción y ser solo para ti.* *Cuando se cumpla la condición, el conjuro se activa automáticamente.* *Solo puedes tener una Contingencia activa a la vez.*"
            },
            {
                texto: "Crear muerto viviente",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "10 pies",
                duracion: "Instantáneo",
                clases: "Brujo, Clérigo y Mago",
                informacion: "*Solo puede lanzarse de noche.* *Reanima hasta tres cadáveres humanoides como necrófagos.* *Puedes darles órdenes mentales mientras estén a 120 pies de ti.* *Duran 24 horas, pero puedes reafirmar el control antes de que termine ese tiempo.* *Con niveles superiores, puedes crear más necrófagos o criaturas más poderosas.*"
            },
            {
                texto: "Curar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Elige a una criatura que puedas ver dentro del alcance. Recupera *70 puntos de golpe* y se cura de *ceguera, sordera y enfermedades.* No tiene efecto en *constructos ni no muertos.* *Con niveles superiores, recupera 10 puntos más por nivel adicional.*"
            },
            {
                texto: "Dañar",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 14d6 necrótico",
                clases: "Clérigo",
                informacion: "Infliges *una enfermedad virulenta.* *El objetivo debe hacer una salvación de Constitución.* *Si falla, recibe 14d6 de daño necrótico.* *Su máximo de puntos de golpe se reduce por 1 hora igual al daño recibido.* *Cualquier efecto que cure enfermedades puede restaurar los puntos de golpe máximos antes de que pase el tiempo.*"
            },
            {
                texto: "De la carne a la piedra",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución niega",
                clases: "Brujo y Mago",
                informacion: "Intentas convertir en piedra a una criatura de carne. *Debe hacer una salvación de Constitución.* *Si falla, queda apresada y repite la salvación al final de cada turno.* *Si falla 3 veces, queda petrificada.* *Si mantiene la petrificación hasta que termine la concentración, la transformación es permanente.*"
            },
            {
                texto: "Desintegrar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza niega",
                ataque: "Contra salvación 10d6+40 fuerza",
                clases: "Hechicero y Mago",
                informacion: "Lanzas un rayo verde que *desintegra criaturas u objetos.* *Si el objetivo falla su salvación de Destreza, recibe 10d6+40 de daño por fuerza.* *Si sus puntos de golpe llegan a 0, se convierte en polvo y solo puede revivir con Deseo o Resurrección verdadera.* *Objetos no mágicos también son destruidos.*"
            },
            {
                texto: "Encontrar el camino",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Concentración 1 día",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Este conjuro *te guía hasta un lugar específico en el mismo plano de existencia.* *No funciona para destinos móviles o imprecisos.* *Siempre sabes la distancia y dirección del destino y la ruta más corta para llegar.*"
            },
            {
                texto: "Esfera congelante de Otiluke",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "300 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 10d6 frío",
                clases: "Mago",
                informacion: "Lanzas una *explosión de frío* de 60 pies de radio. *Las criaturas dentro deben hacer una salvación de Constitución.* *Si fallan, reciben 10d6 de daño por frío.* *Si golpea agua, la congela y atrapa criaturas en su superficie.* *El globo puede guardarse y lanzarse manualmente.* *Cada nivel adicional aumenta el daño en 1d6.*"
            },
            {
                texto: "Festín de héroes",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "30 pies",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Creas un festín mágico para *hasta 12 criaturas.* *Se curan de venenos y enfermedades, ganan inmunidad al veneno y al miedo, ventaja en salvaciones de Sabiduría y 2d10 puntos de golpe adicionales.* *Dura 24 horas.*"
            },
            {
                texto: "Globo de invulnerabilidad",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 minuto",
                clases: "Hechicero y Mago",
                informacion: "Creas una *barrera mágica de 10 pies de radio* que bloquea todos los conjuros de nivel 5 o menor lanzados desde fuera. *Los conjuros más poderosos pueden atravesarla.* *Con niveles superiores, la barrera bloquea conjuros de nivel superior.*"
            },
            {
                nombre: "Guardas y guardias",
                nivel: 6,
                escuela: "Abjuración",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Toque",
                duracion: "24 horas",
                clases: "Bardo, Mago",
                descripcion: "Creas una custodia que protege hasta 2500 pies cuadrados de un área con diversos efectos mágicos. Puedes sellar puertas, llenar escaleras de telarañas, oscurecer pasillos y colocar efectos como Luces danzantes, Boca mágica, Nube apestosa, Ráfaga de viento o Sugestión. Puede volverse permanente lanzándolo todos los días durante un año."
            },
            {
                nombre: "Ilusión programada",
                nivel: 6,
                escuela: "Ilusión",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies (30 pies)",
                duracion: "Hasta disipado",
                clases: "Bardo, Mago",
                descripcion: "Creas una ilusión de hasta 30 pies cúbicos que se activa bajo condiciones específicas. Puede moverse y emitir sonidos por hasta 5 minutos. Se reactiva cada 10 minutos si las condiciones se cumplen nuevamente. Puede descubrirse con una prueba de Inteligencia (Investigación) enfrentada a la CD de tu conjuro."
            },
            {
                nombre: "Invocación instantánea de Drawmij",
                nivel: 6,
                escuela: "Conjuración (ritual)",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                descripcion: "Permite marcar un objeto de hasta 10 libras y 6 pies de tamaño. Rompiendo un zafiro vinculado al conjuro, el objeto aparecerá en tu mano sin importar la distancia. Si alguien lo sostiene, sabrás quién es y su ubicación aproximada."
            },
            {
                nombre: "Mal de ojo",
                nivel: 6,
                escuela: "Nigromancia",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero, Mago",
                descripcion: "Tus ojos se tornan negros y malditos. Cada turno puedes elegir una criatura que debe superar una tirada de salvación de Sabiduría o sufrir uno de los siguientes efectos: Asqueado (desventaja en ataques y pruebas), Aterrado (debe huir de ti), o Dormido (cae inconsciente hasta que reciba daño o sea despertado)."
            },
            {
                nombre: "Mover la tierra",
                nivel: 6,
                escuela: "Transmutación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 2 horas",
                clases: "Druida, Hechicero, Mago",
                descripcion: "Moldeas tierra, arcilla o arena en un área de hasta 40 pies de lado, elevándola, cavando zanjas o creando estructuras de hasta 20 pies de altura. No afecta piedra natural ni edificios."
            },
            {
                nombre: "Muro de espinas",
                nivel: 6,
                escuela: "Conjuración",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 7d8 perforante",
                clases: "Druida",
                descripcion: "Creas un muro de espinas de hasta 60 pies de largo, 10 de alto y 5 de ancho. Inflige daño perforante a las criaturas dentro y que intenten atravesarlo."
            },
            {
                nombre: "Muro de hielo",
                nivel: 6,
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 10 minutos",
                clases: "Mago",
                descripcion: "Creas un muro de hielo en forma de barrera o cúpula. Puede empujar criaturas y hacerles daño por frío. Es un objeto con CA 12 y 30 puntos de golpe por sección. Si se rompe, deja tras de sí un aire helado que causa daño adicional."
            },
            {
                nombre: "Palabra de regreso",
                nivel: 6,
                escuela: "Conjuración",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "5 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                descripcion: "Tú y hasta 5 criaturas voluntarias os teleportáis instantáneamente a un santuario previamente designado. Si el santuario no ha sido preparado, el conjuro no tiene efecto."
            },
            {
                nombre: "Prohibición",
                nivel: 6,
                escuela: "Abjuración (ritual)",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Toque",
                duracion: "1 día",
                clases: "Clérigo",
                descripcion: "Protege un área de hasta 40,000 pies cuadrados contra teleportación y viajes extraplanares. Puede infligir 5d10 de daño radiante o necrótico a criaturas de tipos específicos. Puede hacerse permanente con lanzamientos repetidos."
            },
            {
                nombre: "Rayo solar",
                nivel: 6,
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 6d8 radiante",
                clases: "Druida, Hechicero, Mago",
                descripcion: "Emites un rayo de luz en una línea de 60 pies de largo y 5 de ancho. Las criaturas impactadas hacen una salvación de Constitución; si fallan, reciben 6d8 de daño radiante y quedan cegadas. No muertos y limos tienen desventaja en la salvación. Puedes crear un nuevo rayo en cada turno."
            },
            {
                nombre: "Relámpago en cadena",
                nivel: 6,
                escuela: "Evocación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d8 relámpago",
                clases: "Hechicero, Mago",
                descripcion: "Un relámpago impacta a un objetivo dentro del alcance y luego se ramifica en tres rayos adicionales que alcanzan hasta tres objetivos más a 30 pies del primero. Cada objetivo debe hacer una tirada de salvación de Destreza, recibiendo 10d8 de daño por relámpago si falla, o la mitad si tiene éxito."
            },
            {
                nombre: "Sugestión en masa",
                nivel: 6,
                escuela: "Encantamiento",
                componentes: "V,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "24 horas",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero, Mago",
                descripcion: "Sugieres mágicamente una acción a hasta 12 criaturas dentro del alcance. Las criaturas deben realizar una tirada de salvación de Sabiduría para resistirse. La sugerencia debe sonar razonable y no puede ser obviamente dañina. Si se cumplen ciertas condiciones, la sugerencia puede durar toda la duración del conjuro."
            },
            {
                nombre: "Urna mágica",
                nivel: 6,
                escuela: "Nigromancia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Hasta disipado",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Mago",
                descripcion: "Tu alma abandona tu cuerpo y se traslada a un recipiente especial. Puedes intentar poseer cuerpos de humanoides dentro de 100 pies. Si el objetivo falla una tirada de salvación de Carisma, su alma queda atrapada en la urna y tú tomas el control de su cuerpo. Si la urna se destruye o el conjuro termina, tu alma regresa a tu cuerpo, si está disponible."
            },
            {
                nombre: "Viajar con el viento",
                nivel: 6,
                escuela: "Transmutación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "30 pies",
                duracion: "8 horas",
                clases: "Druida",
                descripcion: "Tú y hasta diez criaturas voluntarias os transformáis en una forma gaseosa con una velocidad voladora de 300 pies. En esta forma, solo pueden esprintar o volver a su forma original, lo que toma 1 minuto. Mientras están en forma gaseosa, tienen resistencia al daño de armas mágicas."
            },
            {
                nombre: "Viajar mediante plantas",
                nivel: 6,
                escuela: "Conjuración",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "1 asalto",
                clases: "Druida",
                descripcion: "Crea un vínculo mágico entre una planta Grande o mayor dentro del alcance y otra planta en el mismo plano de existencia que hayas visto antes. Mientras dura el conjuro, cualquier criatura puede caminar a través de la planta objetivo y aparecer en la planta de destino con solo 5 pies de movimiento."
            },
            {
                nombre: "Visión veraz",
                nivel: 6,
                escuela: "Adivinación",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Bardo, Brujo, Clérigo, Hechicero, Mago",
                descripcion: "Otorga a una criatura la capacidad de ver las cosas como realmente son. Mientras dura el conjuro, tiene vista verdadera hasta 120 pies, puede detectar puertas mágicas escondidas y ver en el Plano Etéreo."
            }

        ]
    },
    {
        id: 8,
        nivel: "Nivel 7",
        conjuros: [
            {
                texto: "Bola de fuego de explosión retardada",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (20 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 12d6 fuego",
                clases: "Hechicero y Mago",
                informacion: "Creas una burbuja de energía ardiente que explota al finalizar el conjuro. Cada turno que la burbuja no explota, su daño aumenta en 1d6. Si una criatura la toca, debe hacer una tirada de salvación de Destreza. Si falla, la burbuja explota; si tiene éxito, puede lanzarla hasta 40 pies. La explosión inflige 12d6 de daño por fuego y afecta a objetos inflamables."
            },
            {
                texto: "Conjurar celestial",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                clases: "Clérigo",
                informacion: "Invocas un celestial de VD 4 o menor en un espacio sin ocupar dentro del alcance. Obedece tus órdenes y desaparece si sus puntos de golpe llegan a 0 o si el conjuro termina. Si lanzas este conjuro con un espacio de nivel 9, puedes invocar un celestial de VD 5."
            },
            {
                texto: "Dedo de la muerte",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 7d8+30 necrótico",
                clases: "Brujo, Hechicero y Mago",
                informacion: "Lanzas energía negativa sobre una criatura dentro del alcance. Debe hacer una salvación de Constitución o recibir 7d8+30 de daño necrótico. Si un humanoide muere con este conjuro, se levanta como un zombi bajo tu control."
            },
            {
                texto: "Desplazamiento entre planos",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Brujo, Clérigo, Druida, Hechicero y Mago",
                informacion: "Transportas hasta ocho criaturas voluntarias a otro plano de existencia. Puedes especificar un destino o un círculo de teletransporte. También puedes usar este conjuro para desterrar a una criatura enemiga a otro plano si falla una salvación de Carisma."
            },
            {
                texto: "Espada de Mordenkainen",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo 3d10 fuerza",
                clases: "Bardo y Mago",
                informacion: "Creas una espada mágica flotante dentro del alcance. Cuando aparece, haces un ataque de conjuro cuerpo a cuerpo contra un objetivo a 5 pies. Inflige 3d10 de daño por fuerza. Cada turno, puedes usar tu acción adicional para mover la espada y atacar de nuevo."
            },
            {
                texto: "Espejismo arcano",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Visión",
                duracion: "10 días",
                clases: "Bardo, Druida y Mago",
                informacion: "Alteras la apariencia de un terreno de hasta 1 milla cuadrada, modificando su apariencia, sonido y textura. Puedes hacer que un camino parezca un pantano, ocultar precipicios o hacer que estructuras inexistentes parezcan reales. Las criaturas con vista verdadera pueden ver la forma real del terreno."
            },
            {
                texto: "Excursión etérea",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Te trasladas al Plano Etéreo mientras dure el conjuro. Puedes moverte libremente en cualquier dirección e ignorar obstáculos físicos. No puedes afectar ni ser afectado por criaturas que no estén en el Plano Etéreo. Si el conjuro termina mientras estás dentro de un objeto, recibes daño por fuerza y reapareces en el espacio sin ocupar más cercano."
            },
            {
                texto: "Invertir gravedad",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies (50 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Druida, Hechicero y Mago",
                informacion: "Creas un área de gravedad invertida en un radio de 50 pies y 100 pies de alto. Las criaturas y objetos en el área caen hacia arriba. Si golpean un objeto sólido, reciben daño por caída. Al finalizar el conjuro, todo lo que flota en la parte superior vuelve a caer."
            },
            {
                texto: "Jaula de fuerza",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies",
                duracion: "1 hora",
                clases: "Bardo, Brujo y Mago",
                informacion: "Creas una prisión de fuerza mágica que puede tener forma de jaula (20 pies de lado con barrotes) o caja sólida (10 pies de lado con barrera impenetrable). Las criaturas completamente dentro quedan atrapadas y no pueden salir por medios no mágicos. Si intentan teleportarse o viajar a otro plano, deben hacer una salvación de Carisma. La jaula afecta el Plano Etéreo y no puede ser disipada con Disipar magia."
            },
            {
                texto: "Magnífica mansión de Mordenkainen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "300 pies",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Creas una mansión extradimensional con hasta 50 habitaciones de 10 pies de lado. La mansión tiene comida para 100 personas y 100 sirvientes traslúcidos que pueden realizar tareas simples pero no atacar. Solo las criaturas que determines pueden entrar. Al finalizar el conjuro, las criaturas dentro son expulsadas al exterior."
            },
            {
                texto: "Palabra divina",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "30 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Clérigo",
                informacion: "Pronuncias una palabra de poder divino y afecta a las criaturas en función de sus puntos de golpe: 50 o menos: ensordecida (1 min), 40 o menos: ensordecida y cegada (10 min), 30 o menos: ensordecida, cegada y aturdida (1 h), 20 o menos: muere instantáneamente. Celestiales, elementales, fatas e infernales fallan automáticamente y son desterrados a su plano de origen."
            },
            {
                texto: "Proyectar imagen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "2650000 pies",
                duracion: "Concentración 1 día",
                clases: "Bardo y Mago",
                informacion: "Creas una copia ilusoria de ti mismo en un lugar que hayas visto. Puedes verla, oírla y controlarla como si estuvieras allí. Si la ilusión recibe daño, desaparece. Interactuar con ella revela que es una ilusión."
            },
            {
                texto: "Recluir",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Ocultas una criatura u objeto voluntario. El objetivo se vuelve invisible y no puede ser detectado por magia. Si es una criatura, entra en suspensión animada y no envejece. Puedes establecer una condición para que el conjuro termine (ejemplo: 'después de 1000 años')."
            },
            {
                texto: "Regenerar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Tocas a una criatura y recupera 4d8+15 puntos de golpe inmediatamente. Mientras dura el conjuro, recupera 1 punto de golpe por turno. Si ha perdido un miembro, se regenera en 2 minutos. Si sostienes el miembro amputado, se une inmediatamente."
            },
            {
                texto: "Resurrección",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Bardo y Clérigo",
                informacion: "Tocas a una criatura muerta hace menos de 100 años y que no haya muerto por edad. Si su alma es libre y voluntaria, regresa a la vida con todos sus puntos de golpe. Cura venenos y enfermedades normales, pero no elimina maldiciones mágicas. El objetivo sufre un penalizador de -4 en ataques y salvaciones, que se reduce con cada descanso prolongado."
            },
            {
                texto: "Rociada prismática",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d6",
                clases: "Hechicero y Mago",
                informacion: "Lanzas ocho rayos de luz multicolor en un cono de 60 pies. Cada objetivo debe hacer una salvación de Destreza y es afectado por un rayo al azar: Rojo: 10d6 de daño por fuego. Naranja: 10d6 de daño por ácido. Amarillo: 10d6 de daño por relámpago. Verde: 10d6 de daño por veneno. Azul: 10d6 de daño por frío. Añil: Puede quedar petrificado. Violeta: Puede ser transportado a otro plano. Si obtienes un 8 en la tirada, el objetivo es alcanzado por dos rayos."
            },
            {
                texto: "Símbolo",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Hasta disipado o disparado",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Inscribes un glifo mágico en una superficie u objeto. Cuando una criatura lo activa, libera un efecto mágico en un radio de 60 pies. Puedes elegir: Aturdimiento (1 minuto), Desacuerdo (desventaja en ataques y pruebas), Dolor (incapacitado 1 min), Dormir (inconsciente 10 min), Locura (no puede actuar), Miedo (asustada y huye), Muerte (10d10 de daño necrótico), Sin esperanza (no puede atacar ni usar efectos dañinos)."
            },
            {
                texto: "Simulacro",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "12 horas",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Creas un duplicado ilusorio de una bestia o humanoide. Tiene la mitad de los puntos de golpe del original y usa sus estadísticas. No puede subir de nivel ni recuperar espacios de conjuro. Puede ser reparado a razón de 100 po por punto de golpe. Solo puede haber un simulacro activo a la vez."
            },
            {
                texto: "Teletransporte",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Te transportas instantáneamente junto a hasta 8 criaturas voluntarias u un objeto de hasta 10 pies de lado. El éxito depende de tu familiaridad con el destino. Si fallas, puedes aparecer en un área similar, lejos del objetivo o sufrir un percance y recibir daño por fuerza."
            },
            {
                texto: "Tormenta de fuego",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 7d10 fuego",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Creas una tormenta de fuego en hasta diez cubos de 10 pies conectados. Las criaturas en el área hacen una tirada de salvación de Destreza. Si fallan, reciben 7d10 de daño por fuego, o la mitad si tienen éxito. Puedes elegir que las plantas en la zona no sean dañadas."
            }
        ]
    },
    {
        id: 9,
        nivel: "Nivel 8",
        conjuros: [
            {
                texto: "Antipatía/simpatía",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "60 pies (200 pies)",
                duracion: "10 días",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Druida y Mago",
                informacion: "Este conjuro atrae o repele a un tipo de criaturas especificado. Puedes aplicarlo a un objeto, una criatura Enorme o menor, o un área de hasta 200 pies cúbicos. Antipatía: Las criaturas designadas sienten una urgencia de huir, deben hacer una salvación de Sabiduría o quedar asustadas mientras puedan ver el objetivo o estén a 60 pies de él. Simpatía: Las criaturas designadas sienten una urgencia de acercarse y deben hacer una salvación de Sabiduría o moverse hasta el objetivo. Si el objetivo daña a la criatura, esta puede repetir la salvación."
            },
            {
                texto: "Aspectos animales",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 24 horas",
                clases: "Druida",
                informacion: "Transformas a cualquier número de criaturas voluntarias en bestias de tamaño Grande o menor con VD 4 o menos. Cada turno puedes usar tu acción para transformar nuevamente a las criaturas. Mantienen su alineamiento e Inteligencia, Sabiduría y Carisma. Si sus puntos de golpe llegan a 0, vuelven a su forma original y reciben el exceso de daño. No pueden hablar ni lanzar conjuros mientras estén transformadas."
            },
            {
                texto: "Aura sagrada",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (30 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución niega",
                clases: "Clérigo",
                informacion: "Una luz divina cubre a las criaturas que elijas en un radio de 30 pies. Las criaturas protegidas emiten luz tenue en 5 pies, tienen ventaja en salvaciones y los ataques contra ellas tienen desventaja. Si un no muerto o infernal impacta con un ataque cuerpo a cuerpo, debe hacer una salvación de Constitución o quedar cegado hasta que el conjuro termine."
            },
            {
                texto: "Campo antimagia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (10 pies)",
                duracion: "Concentración 1 hora",
                clases: "Clérigo y Mago",
                informacion: "Te rodea una esfera de antimagia de 10 pies de radio que anula la magia en su interior. Conjuros, objetos mágicos y efectos mágicos no funcionan dentro de la esfera. Los ataques mágicos fallan y los efectos en criaturas se suprimen. El teletransporte y viaje entre planos son imposibles, y cualquier criatura convocada desaparece hasta que abandone la esfera."
            },
            {
                texto: "Clon",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Mago",
                informacion: "Creas un duplicado inerte de una criatura como seguro contra la muerte. El clon madura en 120 días y puede ser una versión más joven del original. Si la criatura muere, su alma entra en el clon, siempre que sea libre y dispuesta. El clon tiene su personalidad, recuerdos y características, pero no su equipo. El cuerpo original se vuelve inerte."
            },
            {
                texto: "Controlar el clima",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 8 horas",
                clases: "Clérigo, Druida y Mago",
                informacion: "Alteras el clima en un radio de 5 millas mientras dure el conjuro. Puedes modificar la precipitación, la temperatura y el viento, con efectos que tardan 1d4×10 minutos en manifestarse. Cuando el conjuro termina, el clima vuelve gradualmente a la normalidad."
            },
            {
                texto: "Dominar monstruo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Embaucas a una criatura que puedas ver dentro del alcance. Debe hacer una tirada de salvación de Sabiduría o quedar hechizada. Tienes un vínculo telepático con ella y puedes ordenarle acciones. Puedes usar tu acción para controlarla completamente. Cada vez que recibe daño, puede repetir la salvación. Si lanzas el conjuro con un espacio de nivel 9, la duración es hasta 8 horas."
            },
            {
                texto: "Explosión solar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (60 pies)",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Constitución mitad",
                ataque: "Contra salvación 12d6 radiante",
                clases: "Druida, Hechicero y Mago",
                informacion: "Un rayo de sol brillante de 60 pies de radio surge en un punto dentro del alcance. Las criaturas deben hacer una salvación de Constitución o recibir 12d6 de daño radiante y quedar cegadas por 1 minuto. Los no muertos y limos tienen desventaja en la salvación. Una criatura cegada puede repetir la salvación al final de cada turno. El conjuro disipa la oscuridad creada mágicamente en la zona."
            },
            {
                texto: "Laberinto",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                clases: "Mago",
                informacion: "Destierras a una criatura a un semiplano laberíntico. El objetivo queda atrapado mientras dure el conjuro o hasta que escape. Cada turno, puede gastar su acción para hacer una prueba de Inteligencia CD 20 y escapar. Minotauros y demonios goristros escapan automáticamente. Cuando el conjuro termina, el objetivo reaparece donde estaba."
            },
            {
                texto: "Labia",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                clases: "Bardo y Brujo",
                informacion: "Hasta que el conjuro termine, cuando hagas una prueba de Carisma, puedes sustituir el resultado por 15. Además, los efectos mágicos que detectan mentiras te consideran siempre veraz, sin importar lo que digas."
            },
            {
                texto: "Mente en blanco",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Tocas a una criatura voluntaria, haciéndola inmune al daño psíquico, efectos que detecten sus emociones o pensamientos, conjuros de adivinación y el estado hechizado. Incluso los efectos del conjuro Deseo o de poder similar no pueden afectarla mentalmente ni revelar información sobre ella."
            },
            {
                texto: "Nube incendiaria",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies (20 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 10d8 fuego",
                clases: "Hechicero y Mago",
                informacion: "Creas una nube de humo y brasas ardientes en un radio de 20 pies. Las criaturas dentro deben hacer una tirada de salvación de Destreza o recibir 10d8 de daño por fuego. Cada turno, la nube se mueve 10 pies en una dirección que elijas. Se disipa con un viento de al menos 10 millas por hora."
            },
            {
                texto: "Palabra de poder: aturdir",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que deja aturdida a una criatura con 150 puntos de golpe o menos. Si tiene más de 150 puntos de golpe, el conjuro no tiene efecto. La criatura puede hacer una tirada de salvación de Constitución al final de cada turno para finalizar el efecto."
            },
            {
                texto: "Romper la mente",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Inteligencia niega",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Destrozas la mente de una criatura. Debe hacer una tirada de salvación de Inteligencia o recibir 4d6 de daño psíquico. Si falla, su Inteligencia y Carisma bajan a 0, y no puede lanzar conjuros, usar objetos mágicos, hablar o entender idiomas. Cada 30 días puede repetir la salvación. El efecto puede disiparse con Restablecimiento mayor, Sanar o Deseo."
            },
            {
                texto: "Semiplano",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 hora",
                clases: "Brujo y Mago",
                informacion: "Creas una puerta de sombras en una superficie sólida dentro del alcance. Conduce a un semiplano vacío de 30 pies en cada dimensión. Cuando el conjuro termina, la puerta desaparece y cualquier criatura dentro queda atrapada. Cada vez que lanzas el conjuro, puedes crear un nuevo semiplano o conectar con uno anterior."
            },
            {
                texto: "Terremoto",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "500 pies (100 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Provocas un terremoto en un radio de 100 pies dentro del alcance. El suelo se vuelve terreno difícil y las criaturas deben hacer una salvación de Constitución o perder la concentración. Cada turno, las criaturas en el área deben hacer una tirada de salvación de Destreza o quedar tumbadas. Pueden abrirse fisuras de 1d6×10 pies de profundidad. Las estructuras sufren 50 de daño por turno y pueden colapsar, dañando a las criaturas cercanas."
            }
        ]
    },
    {
        id: 10,
        nivel: "Nivel 9",
        conjuros: [
            {
                texto: "Cautiverio",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Personal",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Brujo y Mago",
                informacion: "Creas un límite mágico para retener a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar vinculado por el conjuro; si tiene éxito, se vuelve inmune a este conjuro si lo vuelves a lanzar. Mientras esté afectada por el conjuro, la criatura no necesita respirar, comer ni beber, y no envejece. Los conjuros de adivinación no pueden ni localizarla ni percibirla. Cuando lances el conjuro, elige una de las siguientes formas de cautiverio: Contención diminuta, Hibernación, Encadenado, Prisión encubierta o Tumba. Puedes establecer una condición para liberar al objetivo y solo Disipar magia lanzado como nivel 9 puede anular este conjuro."
            },
            {
                texto: "Cambiar de forma",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                clases: "Druida y Mago",
                informacion: "Asumes la forma de otra criatura mientras dura el conjuro. Puede ser cualquier criatura con un valor de desafío igual a tu nivel o inferior, que no sea un constructo ni un no muerto. Las estadísticas de la criatura elegida remplazan las tuyas, salvo tu alineamiento y tus puntuaciones de Inteligencia, Sabiduría y Carisma. Mantienes tus habilidades y competencias. Si la nueva forma tiene más puntos de golpe que la actual, mantienes los actuales. Mientras dura el conjuro, puedes usar tu acción para asumir una forma diferente con las mismas restricciones."
            },
            {
                texto: "Curar en masa",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Una corriente de energía curativa fluye desde ti hacia las criaturas heridas que te rodean. Puedes repartir hasta 700 puntos de golpe entre cualquier número de criaturas que puedas ver dentro del alcance. Las criaturas también se curan de todas las enfermedades y los efectos cegado y ensordecido. Este conjuro no tiene efecto sobre no muertos ni constructos."
            },
            {
                texto: "Deseo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "El conjuro más poderoso que puede lanzar una criatura mortal. Puedes duplicar cualquier conjuro de hasta nivel 8 sin necesidad de reunir sus requisitos. De manera alternativa, puedes: crear un objeto de hasta 25,000 po de valor, curar completamente hasta 20 criaturas, hacer que 10 criaturas sean resistentes a un tipo de daño, conceder inmunidad a un conjuro o efecto mágico, o deshacer un evento reciente. Si usas este conjuro para un efecto distinto a duplicar un conjuro, puedes sufrir estrés mágico que debilita tu Fuerza y te impide volver a lanzar Deseo con un 33% de probabilidad."
            },
            {
                texto: "Muro prismático",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "10 minutos",
                clases: "Mago",
                informacion: "Un plano de brillante luz multicolor se forma en una pared opaca y vertical (hasta 90 pies de largo, 30 de alto y 1 de ancho) o una esfera de hasta 30 pies de diámetro. El muro tiene 7 capas de diferentes colores, cada una con efectos únicos. Una criatura debe hacer una tirada de salvación de Destreza al intentar atravesarlo y se verá afectada por cada capa en orden: Rojo (fuego), Naranja (ácido), Amarillo (relámpago), Verde (veneno), Azul (frío), Añil (petrificación), Violeta (teletransporte a otro plano). Cada capa puede destruirse con un método específico."
            },
            {
                texto: "Palabra de poder: matar",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que puede obligar a una criatura a morir. Si la criatura tiene 100 puntos de golpe o menos, muere instantáneamente. Si tiene más de 100 puntos de golpe, el conjuro no tiene efecto."
            },
            {
                texto: "Parar el tiempo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "Detienes brevemente el flujo del tiempo para todo el mundo menos para ti. El tiempo no pasa para otras criaturas, mientras tú realizas 1d4+1 turnos seguidos, durante los cuales puedes usar acciones y moverte con normalidad. El conjuro termina si una de tus acciones afecta a otra criatura o un objeto que esta lleve o transporte. También termina si te mueves a más de 1000 pies del lugar donde lo lanzaste."
            },
            {
                texto: "Polimorfar verdadero",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo y Mago",
                informacion: "Transformas una criatura en otra criatura u objeto, o un objeto en criatura. Si te concentras durante toda la duración, la transformación es permanente. Criatura en criatura: La nueva forma puede ser cualquier criatura con un VD igual o menor al objetivo. Objeto en criatura: La criatura es amistosa y sigue tus órdenes hasta que el conjuro sea permanente. Criatura en objeto: Se convierte en un objeto inerte y no tiene memoria del tiempo transformado."
            },
            {
                texto: "Portal",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                clases: "Clérigo, Hechicero y Mago",
                informacion: "Creas un portal que conecta un espacio sin ocupar con otro plano de existencia. El portal mide entre 5 y 20 pies de diámetro y permite el tránsito instantáneo. Si nombras a una criatura específica en otro plano, el portal se abre cerca de ella y la transporta hasta tu ubicación. No tienes control sobre la criatura una vez llega."
            },
            {
                texto: "Presagio",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Tocas a una criatura voluntaria y le concedes la capacidad de ver el futuro inmediato. No puede ser sorprendida y tiene ventaja en tiradas de ataque, pruebas de característica y tiradas de salvación. Además, los ataques contra ella tienen desventaja. El conjuro termina si lo vuelves a lanzar antes de que acabe su duración."
            },
            {
                texto: "Proyección astral",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "10 pies",
                duracion: "Especial",
                clases: "Brujo, Clérigo y Mago",
                informacion: "Tú y hasta 8 criaturas voluntarias proyectáis vuestros cuerpos astrales en el Plano Astral. El cuerpo físico queda en animación suspendida y no necesita alimento ni aire. Tu forma astral es independiente, pero está unida a tu cuerpo por un cordón de plata. Si este es cortado, mueres instantáneamente. Puedes viajar entre planos libremente, pero si el conjuro termina, vuelves a tu cuerpo físico."
            },
            {
                texto: "Resurrección verdadera",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Tocas a una criatura que haya estado muerta por menos de 200 años y que no haya muerto por envejecimiento. Si su alma es libre y voluntaria, regresa a la vida con todos sus puntos de golpe. El conjuro cura heridas, venenos, enfermedades y maldiciones. También puede crear un nuevo cuerpo si el original no existe, haciendo aparecer al objetivo en un espacio sin ocupar a 10 pies o menos de ti."
            },
            {
                texto: "Terror abyecto",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "120 pies",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Sabiduría niega",
                ataque: "Contra salvación 4d10 psíquico",
                clases: "Mago",
                informacion: "Creas criaturas ilusorias en las mentes de tus enemigos, manifestando sus peores miedos. Las criaturas en una esfera de 30 pies de radio dentro del alcance deben hacer una tirada de salvación de Sabiduría. Si fallan, quedan asustadas y ven amenazas implacables. Al final de cada turno, deben repetir la salvación o recibir 4d10 de daño psíquico. Si tienen éxito, el conjuro termina para ellas."
            },
            {
                texto: "Tormenta de meteoritos",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "5000 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Destreza mitad",
                ataque: "Contra salvación 20d6 fuego + 20d6 contundente",
                clases: "Hechicero y Mago",
                informacion: "Invocas cuatro orbes de fuego abrasador que impactan en el suelo dentro del alcance. Todas las criaturas en un radio de 40 pies de cada impacto deben hacer una tirada de salvación de Destreza. Si fallan, reciben 20d6 de daño por fuego y 20d6 de daño contundente; si tienen éxito, la mitad. El conjuro destruye objetos inflamables y daña estructuras en el área."
            },
            {
                texto: "Tormenta de venganza",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Visión",
                duracion: "Concentración 1 minuto",
                clases: "Druida",
                informacion: "Creas una enorme tormenta mágica en un radio de 360 pies, con truenos, viento y relámpagos. Todas las criaturas debajo deben hacer una tirada de salvación de Constitución o recibir 2d6 de daño por trueno y quedar ensordecidas por 5 minutos. Cada ronda tiene efectos adicionales: Ronda 2: Lluvia ácida (1d6 de daño por ácido). Ronda 3: Seis rayos caen sobre seis objetivos (10d6 de daño por relámpago). Ronda 4: Granizo (2d6 de daño contundente). Rondas 5-10: Viento y lluvia helada (1d6 de daño por frío), el área se convierte en terreno difícil y ataques a distancia son imposibles."
            }
        ]
    }
];