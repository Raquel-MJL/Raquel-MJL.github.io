
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
    {id: 2,
        nivel: "Nivel 2",
        backgroundColor: '#B0D7C3',
        conjuros: [

            {   icono: "src/assets/nivel1/zancadaProdigiosa.svg",
                texto: "Zancada prodigiosa",
                componentes: "V,S,M (Tierra)",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "10 hora",
                ataque: "--",
                clases: "Bardo, Druida, Explorador y Mago",
                informacion: "Tocas a una criatura, cuya velocidad aumenta en 10 pies hasta que el conjuro termina.*En niveles superiores. Cuando lanzas este conjuro usando un espacio de conjuro de nivel 2 o superior, puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 1."
            }

        ],
    },

   







];