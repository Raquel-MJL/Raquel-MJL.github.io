
export const Hechizos = [

    {
        id: 1,
        nivel: "Cantrip",
        conjuros: [
            {
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
                texto: "mimimimimimi",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                ataque: "Cuerpo a cuerpo 1d8 relámpago",
                clases: "Hechicero y Mago",
                informacion: "Un rayo surge de tu mano para golpear a una criatura que estás intentando tocar. Haz un ataque de conjuro cuerpo a cuerpo contra el objetivo. Tienes ventaja en la tirada de ataque si el objetivo lleva una armadura de metal. Si impactas, el objetivo recibe 1d8 puntos de daño por relámpago y no puede realizar reacciones hasta el inicio de su siguiente turno.El daño del conjuro aumenta en 1d8 cuando llegas al nivel 5 (2d8), al nivel 11 (3d8) y al nivel 17 (4d8)."
            },
        ],
        backgroundColor: '#D7EBE1'
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
    {
        id: 7,
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
                informacion: "Creas una *burbuja de energía ardiente* que explota al finalizar el conjuro. *Cada turno que la burbuja no explota, su daño aumenta en 1d6.* *Si una criatura la toca, debe hacer una tirada de salvación de Destreza.* Si falla, la burbuja explota; si tiene éxito, puede lanzarla hasta 40 pies. *La explosión inflige 12d6 de daño por fuego y afecta a objetos inflamables.*"
            },
            {
                texto: "Conjurar celestial",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                clases: "Clérigo",
                informacion: "Invocas un *celestial de VD 4 o menor* en un espacio sin ocupar dentro del alcance. *Obedece tus órdenes y desaparece si sus puntos de golpe llegan a 0 o si el conjuro termina.* *Si lanzas este conjuro con un espacio de nivel 9, puedes invocar un celestial de VD 5.*"
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
                informacion: "Lanzas *energía negativa* sobre una criatura dentro del alcance. Debe hacer una salvación de Constitución o recibir *7d8+30 de daño necrótico.* *Si un humanoide muere con este conjuro, se levanta como un zombi bajo tu control.*"
            },
            {
                texto: "Desplazamiento entre planos",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Brujo, Clérigo, Druida, Hechicero y Mago",
                informacion: "Transportas hasta *ocho criaturas voluntarias* a otro plano de existencia. *Puedes especificar un destino o un círculo de teletransporte.* También puedes *usar este conjuro para desterrar a una criatura enemiga a otro plano* si falla una salvación de Carisma."
            },
            {
                texto: "Espada de Mordenkainen",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                ataque: "Cuerpo a cuerpo 3d10 fuerza",
                clases: "Bardo y Mago",
                informacion: "Creas una *espada mágica flotante* dentro del alcance. Cuando aparece, haces un *ataque de conjuro cuerpo a cuerpo* contra un objetivo a 5 pies. *Inflige 3d10 de daño por fuerza.* *Cada turno, puedes usar tu acción adicional para mover la espada y atacar de nuevo.*"
            },
            {
                texto: "Espejismo arcano",
                componentes: "V,S",
                tiempoDeLanzamiento: "10 minutos",
                alcance: "Visión",
                duracion: "10 días",
                clases: "Bardo, Druida y Mago",
                informacion: "Alteras la apariencia de un *terreno de hasta 1 milla cuadrada,* modificando su apariencia, sonido y textura. *Puedes hacer que un camino parezca un pantano, ocultar precipicios o hacer que estructuras inexistentes parezcan reales.* *Las criaturas con vista verdadera pueden ver la forma real del terreno.*"
            },
            {
                texto: "Excursión etérea",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Clérigo, Hechicero y Mago",
                informacion: "Te *trasladas al Plano Etéreo* mientras dure el conjuro. *Puedes moverte libremente en cualquier dirección e ignorar obstáculos físicos.* No puedes afectar ni ser afectado por criaturas que no estén en el Plano Etéreo. *Si el conjuro termina mientras estás dentro de un objeto, recibes daño por fuerza y reapareces en el espacio sin ocupar más cercano.*"
            },
            {
                texto: "Invertir gravedad",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies (50 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Druida, Hechicero y Mago",
                informacion: "Creas un *área de gravedad invertida* en un radio de *50 pies y 100 pies de alto.* *Las criaturas y objetos en el área caen hacia arriba.* Si golpean un objeto sólido, *reciben daño por caída.* Al finalizar el conjuro, *todo lo que flota en la parte superior vuelve a caer.*"
            },
            {
                texto: "Jaula de fuerza",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "100 pies",
                duracion: "1 hora",
                clases: "Bardo, Brujo y Mago",
                informacion: "Creas una *prisión de fuerza mágica* que puede tener forma de *jaula* (20 pies de lado con barrotes) o *caja sólida* (10 pies de lado con barrera impenetrable). *Las criaturas completamente dentro quedan atrapadas y no pueden salir por medios no mágicos.* Si intentan *teleportarse o viajar a otro plano, deben hacer una salvación de Carisma.* La jaula *afecta el Plano Etéreo y no puede ser disipada con Disipar magia.*"
            },
            {
                texto: "Magnífica mansión de Mordenkainen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "300 pies",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Creas una *mansión extradimensional* con hasta *50 habitaciones de 10 pies de lado.* *La mansión tiene comida para 100 personas y 100 sirvientes traslúcidos* que pueden realizar tareas simples pero no atacar. *Solo las criaturas que determines pueden entrar.* Al finalizar el conjuro, *las criaturas dentro son expulsadas al exterior.*"
            },
            {
                texto: "Palabra divina",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción adicional",
                alcance: "30 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Carisma niega",
                clases: "Clérigo",
                informacion: "Pronuncias una *palabra de poder divino* y afecta a las criaturas en función de sus puntos de golpe: *50 o menos: ensordecida (1 min), 40 o menos: ensordecida y cegada (10 min), 30 o menos: ensordecida, cegada y aturdida (1 h), 20 o menos: muere instantáneamente.* *Celestiales, elementales, fatas e infernales fallan automáticamente y son desterrados a su plano de origen.*"
            },
            {
                texto: "Proyectar imagen",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "2650000 pies",
                duracion: "Concentración 1 día",
                clases: "Bardo y Mago",
                informacion: "Creas una *copia ilusoria* de ti mismo en un lugar que hayas visto. *Puedes verla, oírla y controlarla como si estuvieras allí.* *Si la ilusión recibe daño, desaparece.* Interactuar con ella *revela que es una ilusión.*"
            },
            {
                texto: "Recluir",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Ocultas una *criatura u objeto voluntario.* *El objetivo se vuelve invisible y no puede ser detectado por magia.* *Si es una criatura, entra en suspensión animada y no envejece.* *Puedes establecer una condición para que el conjuro termine (ejemplo: 'después de 1000 años').*"
            },
            {
                texto: "Regenerar",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "1 hora",
                clases: "Bardo, Clérigo y Druida",
                informacion: "Tocas a una criatura y *recupera 4d8+15 puntos de golpe inmediatamente.* Mientras dura el conjuro, *recupera 1 punto de golpe por turno.* *Si ha perdido un miembro, se regenera en 2 minutos.* Si sostienes el miembro amputado, *se une inmediatamente.*"
            },
            {
                texto: "Resurrección",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Bardo y Clérigo",
                informacion: "Tocas a una criatura muerta hace menos de *100 años* y que *no haya muerto por edad.* *Si su alma es libre y voluntaria, regresa a la vida con todos sus puntos de golpe.* *Cura venenos y enfermedades normales,* pero *no elimina maldiciones mágicas.* *El objetivo sufre un penalizador de -4 en ataques y salvaciones, que se reduce con cada descanso prolongado.*"
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
                informacion: "Lanzas *ocho rayos de luz multicolor* en un cono de *60 pies.* Cada objetivo debe hacer una salvación de Destreza y es afectado por un rayo al azar: *Rojo: 10d6 de daño por fuego.* *Naranja: 10d6 de daño por ácido.* *Amarillo: 10d6 de daño por relámpago.* *Verde: 10d6 de daño por veneno.* *Azul: 10d6 de daño por frío.* *Añil: Puede quedar petrificado.* *Violeta: Puede ser transportado a otro plano.* *Si obtienes un 8 en la tirada, el objetivo es alcanzado por dos rayos.*"
            },
            {
                texto: "Símbolo",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "Hasta disipado o disparado",
                clases: "Bardo, Clérigo y Mago",
                informacion: "Inscribes un *glifo mágico* en una superficie u objeto. *Cuando una criatura lo activa, libera un efecto mágico en un radio de 60 pies.* Puedes elegir: *Aturdimiento (1 minuto), Desacuerdo (desventaja en ataques y pruebas), Dolor (incapacitado 1 min), Dormir (inconsciente 10 min), Locura (no puede actuar), Miedo (asustada y huye), Muerte (10d10 de daño necrótico), Sin esperanza (no puede atacar ni usar efectos dañinos).*"
            },
            {
                texto: "Simulacro",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "12 horas",
                alcance: "Toque",
                duracion: "Hasta disipado",
                clases: "Mago",
                informacion: "Creas un *duplicado ilusorio* de una *bestia o humanoide.* *Tiene la mitad de los puntos de golpe del original* y usa sus estadísticas. *No puede subir de nivel ni recuperar espacios de conjuro.* *Puede ser reparado a razón de 100 po por punto de golpe.* *Solo puede haber un simulacro activo a la vez.*"
            },
            {
                texto: "Teletransporte",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "10 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Hechicero y Mago",
                informacion: "Te *transportas instantáneamente* junto a *hasta 8 criaturas voluntarias* u *un objeto de hasta 10 pies de lado.* *El éxito depende de tu familiaridad con el destino.* *Si fallas, puedes aparecer en un área similar, lejos del objetivo o sufrir un percance y recibir daño por fuerza.*"
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
                informacion: "Creas una *tormenta de fuego* en hasta *diez cubos de 10 pies* conectados. *Las criaturas en el área hacen una tirada de salvación de Destreza.* Si fallan, reciben *7d10 de daño por fuego,* o la mitad si tienen éxito. *Puedes elegir que las plantas en la zona no sean dañadas.*"
            }
        ]
    },
    {
        id: 8,
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
                informacion: "Este conjuro *atrae o repele* a un tipo de criaturas especificado. Puedes aplicarlo a *un objeto, una criatura Enorme o menor, o un área de hasta 200 pies cúbicos.* *Antipatía:* Las criaturas designadas sienten una *urgencia de huir*, deben hacer una salvación de Sabiduría o quedar *asustadas* mientras puedan ver el objetivo o estén a 60 pies de él. *Simpatía:* Las criaturas designadas sienten una *urgencia de acercarse* y deben hacer una salvación de Sabiduría o moverse hasta el objetivo. *Si el objetivo daña a la criatura, esta puede repetir la salvación.*"
            },
            {
                texto: "Aspectos animales",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 24 horas",
                clases: "Druida",
                informacion: "Transformas a *cualquier número de criaturas voluntarias* en bestias de tamaño *Grande o menor* con *VD 4 o menos.* *Cada turno puedes usar tu acción para transformar nuevamente a las criaturas.* Mantienen *su alineamiento e Inteligencia, Sabiduría y Carisma.* *Si sus puntos de golpe llegan a 0, vuelven a su forma original y reciben el exceso de daño.* No pueden hablar ni lanzar conjuros mientras estén transformadas."
            },
            {
                texto: "Aura sagrada",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (30 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Constitución niega",
                clases: "Clérigo",
                informacion: "Una *luz divina* cubre a las criaturas que elijas en un *radio de 30 pies.* *Las criaturas protegidas emiten luz tenue en 5 pies, tienen ventaja en salvaciones y los ataques contra ellas tienen desventaja.* Si un *no muerto o infernal* impacta con un ataque cuerpo a cuerpo, debe hacer una salvación de Constitución o quedar *cegado* hasta que el conjuro termine."
            },
            {
                texto: "Campo antimagia",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal (10 pies)",
                duracion: "Concentración 1 hora",
                clases: "Clérigo y Mago",
                informacion: "Te rodea una *esfera de antimagia* de *10 pies de radio* que anula la magia en su interior. *Conjuros, objetos mágicos y efectos mágicos no funcionan dentro de la esfera.* *Los ataques mágicos fallan y los efectos en criaturas se suprimen.* El *teletransporte y viaje entre planos son imposibles,* y cualquier criatura convocada desaparece hasta que abandone la esfera."
            },
            {
                texto: "Clon",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Mago",
                informacion: "Creas un *duplicado inerte* de una criatura como seguro contra la muerte. *El clon madura en 120 días* y puede ser una versión más joven del original. *Si la criatura muere, su alma entra en el clon,* siempre que sea libre y dispuesta. *El clon tiene su personalidad, recuerdos y características, pero no su equipo.* *El cuerpo original se vuelve inerte.*"
            },
            {
                texto: "Controlar el clima",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 8 horas",
                clases: "Clérigo, Druida y Mago",
                informacion: "Alteras el clima en un *radio de 5 millas* mientras dure el conjuro. Puedes *modificar la precipitación, la temperatura y el viento,* con efectos que tardan *1d4×10 minutos en manifestarse.* *Cuando el conjuro termina, el clima vuelve gradualmente a la normalidad.*"
            },
            {
                texto: "Dominar monstruo",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Embaucas a una criatura que puedas ver dentro del alcance. *Debe hacer una tirada de salvación de Sabiduría o quedar hechizada.* *Tienes un vínculo telepático con ella y puedes ordenarle acciones.* Puedes usar tu acción para *controlarla completamente.* *Cada vez que recibe daño, puede repetir la salvación.* *Si lanzas el conjuro con un espacio de nivel 9, la duración es hasta 8 horas.*"
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
                informacion: "Un *rayo de sol brillante* de *60 pies de radio* surge en un punto dentro del alcance. *Las criaturas deben hacer una salvación de Constitución o recibir 12d6 de daño radiante y quedar cegadas por 1 minuto.* *Los no muertos y limos tienen desventaja en la salvación.* *Una criatura cegada puede repetir la salvación al final de cada turno.* El conjuro *disipa la oscuridad creada mágicamente en la zona.*"
            },
            {
                texto: "Laberinto",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 10 minutos",
                clases: "Mago",
                informacion: "Destierras a una criatura a un *semiplano laberíntico.* El objetivo queda atrapado mientras dure el conjuro o hasta que escape. *Cada turno, puede gastar su acción para hacer una prueba de Inteligencia CD 20 y escapar.* *Minotauros y demonios goristros escapan automáticamente.* *Cuando el conjuro termina, el objetivo reaparece donde estaba.*"
            },
            {
                texto: "Labia",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "1 hora",
                clases: "Bardo y Brujo",
                informacion: "Hasta que el conjuro termine, *cuando hagas una prueba de Carisma, puedes sustituir el resultado por 15.* Además, *los efectos mágicos que detectan mentiras te consideran siempre veraz,* sin importar lo que digas."
            },
            {
                texto: "Mente en blanco",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Toque",
                duracion: "24 horas",
                clases: "Bardo y Mago",
                informacion: "Tocas a una criatura voluntaria, *haciéndola inmune al daño psíquico, efectos que detecten sus emociones o pensamientos, conjuros de adivinación y el estado hechizado.* Incluso los efectos del conjuro *Deseo* o de poder similar no pueden afectarla mentalmente ni revelar información sobre ella."
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
                informacion: "Creas una *nube de humo y brasas ardientes* en un radio de *20 pies.* *Las criaturas dentro deben hacer una tirada de salvación de Destreza o recibir 10d8 de daño por fuego.* *Cada turno, la nube se mueve 10 pies en una dirección que elijas.* Se disipa con un viento de *al menos 10 millas por hora.*"
            },
            {
                texto: "Palabra de poder: aturdir",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que *deja aturdida a una criatura con 150 puntos de golpe o menos.* Si tiene más de 150 puntos de golpe, el conjuro no tiene efecto. *La criatura puede hacer una tirada de salvación de Constitución al final de cada turno para finalizar el efecto.*"
            },
            {
                texto: "Romper la mente",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "150 pies",
                duracion: "Instantáneo",
                tiradaDeSalvacion: "Inteligencia niega",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Destrozas la mente de una criatura. *Debe hacer una tirada de salvación de Inteligencia o recibir 4d6 de daño psíquico.* Si falla, *su Inteligencia y Carisma bajan a 0,* y *no puede lanzar conjuros, usar objetos mágicos, hablar o entender idiomas.* *Cada 30 días puede repetir la salvación.* *El efecto puede disiparse con Restablecimiento mayor, Sanar o Deseo.*"
            },
            {
                texto: "Semiplano",
                componentes: "S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "1 hora",
                clases: "Brujo y Mago",
                informacion: "Creas una *puerta de sombras* en una superficie sólida dentro del alcance. *Conduce a un semiplano vacío de 30 pies en cada dimensión.* Cuando el conjuro termina, *la puerta desaparece y cualquier criatura dentro queda atrapada.* *Cada vez que lanzas el conjuro, puedes crear un nuevo semiplano o conectar con uno anterior.*"
            },
            {
                texto: "Terremoto",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "500 pies (100 pies)",
                duracion: "Concentración 1 minuto",
                tiradaDeSalvacion: "Destreza niega",
                clases: "Clérigo, Druida y Hechicero",
                informacion: "Provocas un *terremoto en un radio de 100 pies* dentro del alcance. *El suelo se vuelve terreno difícil y las criaturas deben hacer una salvación de Constitución o perder la concentración.* Cada turno, *las criaturas en el área deben hacer una tirada de salvación de Destreza o quedar tumbadas.* *Pueden abrirse fisuras de 1d6×10 pies de profundidad.* *Las estructuras sufren 50 de daño por turno y pueden colapsar, dañando a las criaturas cercanas.*"
            }
        ]
    },
    {
        id: 9,
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
                informacion: "Creas un límite mágico para retener a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría para no quedar vinculado por el conjuro; si tiene éxito, se vuelve inmune a este conjuro si lo vuelves a lanzar. Mientras esté afectada por el conjuro, la criatura no necesita respirar, comer ni beber, y no envejece. Los conjuros de adivinación no pueden ni localizarla ni percibirla. *Cuando lances el conjuro, elige una de las siguientes formas de cautiverio:* Contención diminuta, Hibernación, Encadenado, Prisión encubierta o Tumba. Puedes establecer una condición para liberar al objetivo y solo Disipar magia lanzado como nivel 9 puede anular este conjuro."
            },
            {
                texto: "Cambiar de forma",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Concentración 1 hora",
                clases: "Druida y Mago",
                informacion: "Asumes la forma de otra criatura mientras dura el conjuro. Puede ser cualquier criatura con un valor de desafío igual a tu nivel o inferior, que no sea un constructo ni un no muerto. *Las estadísticas de la criatura elegida remplazan las tuyas*, salvo tu alineamiento y tus puntuaciones de Inteligencia, Sabiduría y Carisma. Mantienes tus habilidades y competencias. *Si la nueva forma tiene más puntos de golpe que la actual, mantienes los actuales.* Mientras dura el conjuro, puedes usar tu acción para asumir una forma diferente con las mismas restricciones."
            },
            {
                texto: "Curar en masa",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Clérigo",
                informacion: "Una corriente de energía curativa fluye desde ti hacia las criaturas heridas que te rodean. Puedes repartir hasta *700 puntos de golpe* entre cualquier número de criaturas que puedas ver dentro del alcance. *Las criaturas también se curan de todas las enfermedades y los efectos cegado y ensordecido.* Este conjuro no tiene efecto sobre no muertos ni constructos."
            },
            {
                texto: "Deseo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "El conjuro más poderoso que puede lanzar una criatura mortal. *Puedes duplicar cualquier conjuro de hasta nivel 8 sin necesidad de reunir sus requisitos.* De manera alternativa, puedes: *crear un objeto de hasta 25,000 po de valor, curar completamente hasta 20 criaturas, hacer que 10 criaturas sean resistentes a un tipo de daño, conceder inmunidad a un conjuro o efecto mágico, o deshacer un evento reciente.* Si usas este conjuro para un efecto distinto a duplicar un conjuro, puedes sufrir *estrés mágico* que debilita tu Fuerza y te impide volver a lanzar Deseo con un 33% de probabilidad."
            },
            {
                texto: "Muro prismático",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "10 minutos",
                clases: "Mago",
                informacion: "Un plano de brillante luz multicolor se forma en una *pared opaca y vertical* (hasta 90 pies de largo, 30 de alto y 1 de ancho) o una esfera de hasta 30 pies de diámetro. *El muro tiene 7 capas de diferentes colores, cada una con efectos únicos.* Una criatura debe hacer una tirada de salvación de Destreza al intentar atravesarlo y se verá afectada por cada capa en orden: *Rojo (fuego), Naranja (ácido), Amarillo (relámpago), Verde (veneno), Azul (frío), Añil (petrificación), Violeta (teletransporte a otro plano).* Cada capa puede destruirse con un método específico."
            },
            {
                texto: "Palabra de poder: matar",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Instantáneo",
                clases: "Bardo, Brujo, Hechicero y Mago",
                informacion: "Pronuncias una palabra de poder que puede *obligar a una criatura a morir*. Si la criatura tiene *100 puntos de golpe o menos, muere instantáneamente.* Si tiene más de 100 puntos de golpe, el conjuro no tiene efecto."
            },
            {
                texto: "Parar el tiempo",
                componentes: "V",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Personal",
                duracion: "Instantáneo",
                clases: "Hechicero y Mago",
                informacion: "Detienes brevemente el flujo del tiempo para todo el mundo menos para ti. *El tiempo no pasa para otras criaturas, mientras tú realizas 1d4+1 turnos seguidos*, durante los cuales puedes usar acciones y moverte con normalidad. *El conjuro termina si una de tus acciones afecta a otra criatura o un objeto que esta lleve o transporte.* También termina si te mueves a más de 1000 pies del lugar donde lo lanzaste."
            },
            {
                texto: "Polimorfar verdadero",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "30 pies",
                duracion: "Concentración 1 hora",
                tiradaDeSalvacion: "Sabiduría niega",
                clases: "Bardo, Brujo y Mago",
                informacion: "Transformas una criatura en otra criatura u objeto, o un objeto en criatura. *Si te concentras durante toda la duración, la transformación es permanente.* *Criatura en criatura:* La nueva forma puede ser cualquier criatura con un VD igual o menor al objetivo. *Objeto en criatura:* La criatura es amistosa y sigue tus órdenes hasta que el conjuro sea permanente. *Criatura en objeto:* Se convierte en un objeto inerte y no tiene memoria del tiempo transformado."
            },
            {
                texto: "Portal",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 acción",
                alcance: "60 pies",
                duracion: "Concentración 1 minuto",
                clases: "Clérigo, Hechicero y Mago",
                informacion: "Creas un portal que conecta un espacio sin ocupar con otro plano de existencia. *El portal mide entre 5 y 20 pies de diámetro y permite el tránsito instantáneo.* *Si nombras a una criatura específica en otro plano, el portal se abre cerca de ella y la transporta hasta tu ubicación.* No tienes control sobre la criatura una vez llega."
            },
            {
                texto: "Presagio",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 minuto",
                alcance: "Toque",
                duracion: "8 horas",
                clases: "Bardo, Brujo, Druida y Mago",
                informacion: "Tocas a una criatura voluntaria y le *concedes la capacidad de ver el futuro inmediato.* *No puede ser sorprendida y tiene ventaja en tiradas de ataque, pruebas de característica y tiradas de salvación.* Además, *los ataques contra ella tienen desventaja.* El conjuro termina si lo vuelves a lanzar antes de que acabe su duración."
            },
            {
                texto: "Proyección astral",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "10 pies",
                duracion: "Especial",
                clases: "Brujo, Clérigo y Mago",
                informacion: "Tú y hasta *8 criaturas voluntarias proyectáis vuestros cuerpos astrales en el Plano Astral.* *El cuerpo físico queda en animación suspendida y no necesita alimento ni aire.* *Tu forma astral es independiente, pero está unida a tu cuerpo por un cordón de plata.* Si este es cortado, mueres instantáneamente. Puedes viajar entre planos libremente, pero si el conjuro termina, vuelves a tu cuerpo físico."
            },
            {
                texto: "Resurrección verdadera",
                componentes: "V,S,M",
                tiempoDeLanzamiento: "1 hora",
                alcance: "Toque",
                duracion: "Instantáneo",
                clases: "Clérigo y Druida",
                informacion: "Tocas a una criatura que haya estado muerta por *menos de 200 años* y que no haya muerto por envejecimiento. *Si su alma es libre y voluntaria, regresa a la vida con todos sus puntos de golpe.* *El conjuro cura heridas, venenos, enfermedades y maldiciones.* También puede *crear un nuevo cuerpo si el original no existe,* haciendo aparecer al objetivo en un espacio sin ocupar a 10 pies o menos de ti."
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
                informacion: "Creas criaturas ilusorias en las mentes de tus enemigos, manifestando sus *peores miedos.* Las criaturas en una esfera de 30 pies de radio dentro del alcance deben hacer una tirada de salvación de Sabiduría. *Si fallan, quedan asustadas y ven amenazas implacables.* Al final de cada turno, deben repetir la salvación o recibir *4d10 de daño psíquico.* Si tienen éxito, el conjuro termina para ellas."
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
                informacion: "Invocas *cuatro orbes de fuego abrasador* que impactan en el suelo dentro del alcance. Todas las criaturas en un radio de *40 pies de cada impacto* deben hacer una tirada de salvación de Destreza. *Si fallan, reciben 20d6 de daño por fuego y 20d6 de daño contundente; si tienen éxito, la mitad.* *El conjuro destruye objetos inflamables y daña estructuras en el área.*"
            },
            {
                texto: "Tormenta de venganza",
                componentes: "V,S",
                tiempoDeLanzamiento: "1 acción",
                alcance: "Visión",
                duracion: "Concentración 1 minuto",
                clases: "Druida",
                informacion: "Creas *una enorme tormenta mágica* en un radio de *360 pies*, con truenos, viento y relámpagos. *Todas las criaturas debajo deben hacer una tirada de salvación de Constitución o recibir 2d6 de daño por trueno y quedar ensordecidas por 5 minutos.* *Cada ronda tiene efectos adicionales:* Ronda 2: Lluvia ácida (1d6 de daño por ácido). Ronda 3: Seis rayos caen sobre seis objetivos (10d6 de daño por relámpago). Ronda 4: Granizo (2d6 de daño contundente). Rondas 5-10: Viento y lluvia helada (1d6 de daño por frío), el área se convierte en *terreno difícil* y *ataques a distancia son imposibles.*"
            }
        ]
    }

];