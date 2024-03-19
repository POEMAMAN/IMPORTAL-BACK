const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoApesPlanet = require('../../api/models/models.ApesPlanet/videoGames.ApesPlanet.model.js');


const arrayVideoGamesApesPlanet = [
    {
        title: "Planet of the Apes",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710851874/ApesPlanet/videogame/plapes-1673296106370_a7ukif.jpg",
        platform: "PC, Playstation,Game Boy Advance Y Game Boy Color",
        year: "2001",
        studio: "Visiware",
        clasification: "PG12",
        resume: 'El Planeta de los Simios es un videojuego de acción y aventuras del año 2001 dentro de la franquicia del Planeta de los Simios. Siendo el primer videojuego de la franquicia, fue lanzado como complemento al filme de 2001 El Planeta de los Simios, aunque la trama está inspirada en la novela de 1963 de Pierre Boulle y su adaptación cinematográfica de 1968. Fox Interactive contrató a Visiware para desarrollar el juego para Windows y PlayStation, y se asoció con Ubi Soft como coeditor. Torus Games desarrolló versiones para Game Boy Advance y Game Boy Color, basadas en la película de 1968 y su secuela de 1970. En el juego de Visiware, el jugador controla a Ulises, un astronauta que se estrella en una Tierra futura dominada por simios inteligentes. Ulises explora diversos entornos, ayudando a un movimiento de resistencia humano que lo considera un salvador profetizado, y descubre los secretos que subyacen a la sociedad simia. Versiones de personajes de la serie, como Zira, Cornelius, Zaius, Ursus y Nova, aparecen junto con nuevos personajes y especies. El lanzamiento del juego se retrasó tres años debido a problemas con el remake cinematográfico pospuesto durante mucho tiempo y la decisión de Fox Interactive de coeditar con otra empresa. Los retrasos fueron tales que el juego no llegó a la fecha de estreno de la película. Cuando finalmente debutó el 20 de septiembre de 2001, recibió críticas en su mayoría negativas en PlayStation y PC, junto con críticas mixtas en las versiones de Game Boy, siendo la principal crítica sus controles y jugabilidad débiles. Después de vagar por el espacio durante siglos, el astronauta Ulises y su tripulación aterrizan en un planeta en el año 3889. Encuentran humanos primitivos, pero son atacados por cazadores a caballo que resultan ser simios inteligentes. Los simios matan a la tripulación y capturan a Ulises, llevándolo a un centro médico para su estudio. El esclavo humano Jonás le entrega a Ulises una llave que le permite escapar. Explorando el centro, Ulises escucha a los simios Zira y el Dr. Zaius discutir su destino; Zaius quiere que sea ejecutado. Eventualmente, Ulises finge su muerte y es llevado a una morgue. Allí, Jonás y sus amigos revelan que Ulises está en la Tierra, y que su llegada cumple una antigua profecía de que un salvador regresaría para restaurar a la humanidad. Los rebeldes humanos le entregan a Ulises una pieza de un antiguo relicario e instruyen a recuperar las otras dos ocultas por otras tribus humanas. Ulises se dirige a una ciudad en ruinas, donde libera a la humana Nova y encuentra la segunda pieza del relicario guardada por el gorila General Ursus. También encuentra un archivo secreto que revela que Ursus planea usar la investigación genética humana del chimpancé Dr. Cornelius, combinada con información obtenida del estudio de antiguos sitios humanos, para avanzar a los gorilas sobre los otros simios. Con ayuda de Nova y su hermano Mathias, Ulises se dirige a la Universidad de los Simios, donde Cornelius accede a destruir su investigación para que los gorilas no puedan hacer mal uso de ella. Ulises intenta rescatar a Jonás de una prisión simia; Jonás muere, pero le revela a Ulises que la pieza final del relicario está en los Archivos Estatales. Ulises recupera la última pieza y regresa con Nova y Mathias. Las tres piezas se combinan para formar un mapa del "Lugar Prohibido", ubicado en la Estatua de la Libertad, que conduce al Pentágono. Allí, aprende la historia de cómo los simios tomaron el control del planeta: después de una guerra devastadora, los humanos criaron simios genéticamente avanzados como esclavos. Los simios se rebelaron y mataron a la mayoría de los humanos; los supervivientes escaparon a un "Proyecto Arca" subterráneo. Ulises establece contacto con los Arkanitas, humanos avanzados que aún viven bajo tierra, y los alienta a reunirse con sus hermanos en la superficie para derrotar a los simios. Con su evidencia, Ulises viaja al Palacio de los Simios para exponer al General Ursus ante el consejo. Ursus es arrestado, y el Dr. Zaius libera a Ulises. La escena final muestra a Ulises partiendo con Nova, mientras las fuerzas humanas y los Arkanitas se preparan para atacar a los simios.',
    },
    {
        title: "Revenge of the Apes",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710851877/ApesPlanet/videogame/maxresdefault_ythfk2.jpg",
        platform: "Atari 2600",
        year: "1983",
        studio: "",
         clasification: "PG12",
        resume: 'El Planeta de los Simios, posteriormente lanzado como La Venganza de los Simios, es un videojuego desarrollado originalmente en 1983 por 20th Century Fox para el Atari 2600. Planeado como el primer videojuego de la franquicia del Planeta de los Simios, todavía estaba en fase de prototipo cuando Fox cerró su división de juegos durante el colapso de la industria de los videojuegos en 1983. Permaneció sin lanzarse y se creía perdido hasta 2002, cuando coleccionistas identificaron un cartucho mal etiquetado como el juego perdido del Planeta de los Simios. Fue completado y lanzado como La Venganza de los Simios por Retrodesign en 2003. El jugador controla a Taylor, el protagonista de la película de 1968 El Planeta de los Simios, a través de varios entornos inspirados en la película: un bosque, un río, la aldea de los simios, un desierto y cavernas. Los obstáculos incluyen tres tipos de simios: chimpancés inofensivos; orangutanes, que infligen daño y encarcelan a Taylor en la aldea de los simios si lo tocan; y gorilas, que infligen más daño, disparan proyectiles y también encarcelan a Taylor. El botón de acción dispara el arma de Taylor y le permite escapar de la jaula y fosas de la aldea de los simios. Contadores en la parte superior de la pantalla rastrean la vida de Taylor, que disminuye con el daño, y su número limitado de escapes. Los jugadores completan el juego navegando hasta el último tablero: una estatua de la libertad en ruinas, como se ve en la película. Al completarlo, el juego se reinicia con un nivel de dificultad más alto. 20th Century Fox comenzó a trabajar en lo que planeaba ser el primer videojuego del Planeta de los Simios en 1983. El juego fue desarrollado para el Atari 2600; John Marvin sirvió como programador. Marvin completó suficiente trabajo para llevar el juego prototipo a las pruebas iniciales, pero dejó Fox por un nuevo trabajo en Epyx antes de terminar el proyecto. El juego quedó sin terminar cuando Fox cerró su división de videojuegos tres meses después en medio del colapso de la industria de los videojuegos de 1983, y el Planeta de los Simios nunca vio la luz. Se pensaba que el juego se había perdido hasta la década de 1990 cuando los coleccionistas encontraron una copia del prototipo del Planeta de los Simios en un estuche etiquetado como Alligator People, otro juego abandonado de Fox. Inicialmente asumieron que el juego era de hecho Alligator People debido a la etiqueta y la falta de información sólida sobre ambos títulos. En 2002, se localizó una copia genuina de Alligator People, lo que llevó a especulaciones sobre lo que podría ser el juego encontrado anteriormente. La investigación del coleccionista Matt Reichert estableció que el juego era en realidad el perdido Planeta de los Simios de John Marvin, que aparentemente había sido almacenado en el estuche equivocado. En 2003, los diseñadores independientes Retrodesign completaron y publicaron el juego bajo el título La Venganza de los Simios. Las adiciones incluyeron una banda sonora y un final actualizado en la Estatua de la Libertad.',
    },
    {
        title: "Planet Of The Apes Last Frontier",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710852045/ApesPlanet/videogame/PSsvPW8JYnl68XkfEmegsJaQxMI697Nk_clxzen.webp",
        platform: "	PlayStation 4, Xbox One, Microsoft Windows",
        year: "2017",
        studio: "	The Imaginati Studios",
         clasification: "PG12",
        resume: 'El Planeta de los Simios: Última Frontera es un videojuego del año 2017 basado en la franquicia del Planeta de los Simios. Ubicado entre El Amanecer del Planeta de los Simios (2014) y La Guerra del Planeta de los Simios (2017), el juego fue anunciado por Andy Serkis durante una entrevista sobre La Guerra. Una versión para PlayStation 4 fue lanzada el 21 de noviembre de 2017, y versiones para Xbox One y Microsoft Windows también estaban planeadas en ese momento, pero no se lanzaron hasta casi un año después. El Planeta de los Simios: Última Frontera toma elementos de la trama de la película, buscando ser igualmente ambiguo moralmente, sin héroes ni villanos y sin decisiones en blanco y negro. Los jugadores controlan un elenco de 14 humanos y simios a lo largo del juego, quienes pueden vivir o morir según sus decisiones. Al igual que muchas narrativas de toma de decisiones, hay múltiples finales posibles dependiendo de las acciones que tomen los jugadores. Hay 3 finales generales en el juego; los simios ganan, los humanos ganan o hay paz entre ambos. Sin embargo, hay varios finales dentro de los 3 escenarios generales dependiendo de los personajes que vivan o mueran y las decisiones generales tomadas a lo largo del juego. Además, el juego busca ser una intersección aún más cercana entre juegos y películas que productos similares, como los títulos de Telltale. Tendrá una duración de entre 2 y 3 horas y la única entrada del jugador será completamente a través de decisiones basadas en elecciones. No hay acertijos, exploración ni control directo sobre los personajes. El Planeta de los Simios: Última Frontera está notablemente ambientado alrededor de un año después de El Amanecer del Planeta de los Simios, y se centra en una facción de simios que se separó del renegado simio Koba. La facción se refugia en las Montañas Rocosas debido a la guerra caótica y aún en curso entre simios y humanos. Sin embargo, los simios pronto se ven obligados a descender a un valle propiedad de los humanos cuando se acerca el invierno y escasea la comida. El juego sigue tanto a los simios como a los humanos, siendo la tribu de simios centrada en una familia de chimpancés que consiste en el líder de la tribu, Khan, y sus 3 hijos; Bryn, Tola y Juno, junto con el compañero gorila de Tola, Brutus, y el asesor orangután de Khan, Clarence. Los humanos son agricultores que viven de la tierra en un pequeño pueblo donde solía estar una ciudad. Siguen a Jess, la esposa del ex alcalde del pueblo, ahora fallecido. Muchos simios murieron en la guerra con Alpha-Omega liderada por el Coronel McCullough, mientras que otros, temiendo la extinción de su especie, huyeron para comenzar una nueva vida lejos de San Francisco, César y los soldados humanos. Una de estas nuevas tribus fue liderada por Khan, quien perdió a su esposa y lideró a sus simios hacia el norte. Después de muchos meses de búsqueda, Khan y sus hijos, Tola, Bryn y Juno, encontraron una montaña que la tribu podría llamar hogar. Sin embargo, ahora que el verano está terminando, la comida está escaseando y la tribu comienza a pasar hambre. A medida que pasan los días, la comida se vuelve más escasa y los cazadores de la tribu tienen que aventurarse más lejos de la seguridad de su montaña. Sin que Khan y su tropa de simios lo sepan, anidado en el valle de la montaña, un asentamiento humano ha sobrevivido al apocalipsis de la Gripe Símica. Un centenar de almas viven en un recinto fortificado, una vez el núcleo de una próspera ciudad conocida como Millerton. La comida escasea y la nueva alcaldesa Jess Ross debe movilizar a su gente mientras luchan día a día para hacer una vida para Millerton. Los tiempos son difíciles con poca comunicación desde el exterior, los habitantes del pueblo deben confiar en sus cultivos y ganado para sobrevivir al próximo invierno. Pronto los simios se enfrentarán cara a cara con los humanos por primera vez en su nuevo hogar. Las decisiones que tomes como líder afectarán a ambos grupos, así como cómo te perciben tus amigos y tus enemigos. Tus decisiones tienen consecuencias para la supervivencia de simios y humanos por igual.',
    },
    {
        title: "Crisis on the Planet of the Apes (Crisis on the Planet of the Apes VR)",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710852238/ApesPlanet/videogame/9lMa9aT6uyMQslXuHqGlKxnQqYuWIfun_nmllwf.avif",
        platform: "	PlayStation 4, Microsoft Windows",
        year: "2018",
        studio: "Imaginati",
         clasification: "PG12",
        resume: 'Crisis on the Planet of the Apes VR es un juego de acción y realidad virtual del año 2018. Fue desarrollado por Imaginati y publicado por FoxNext para PlayStation 4 y Microsoft Windows. Está basado en la serie de películas reiniciadas del Planeta de los Simios, teniendo lugar entre El Origen del Planeta de los Simios y El Amanecer del Planeta de los Simios. Crisis on the Planet of the Apes VR es un juego de acción de realidad virtual jugado desde una perspectiva en primera persona. El juego se desarrolla cinco años después de la película El Origen del Planeta de los Simios, y antes de los eventos de El Amanecer del Planeta de los Simios. La Gripe Símica ha eliminado la mitad de la población humana y ha resultado en un levantamiento de simios altamente inteligentes. El jugador asume el papel de un simio que ha sido encarcelado en una instalación de investigación por humanos en busca de una cura. El objetivo del jugador es escapar y reunirse con el grupo de simios de César. En el camino, el jugador se une a otros dos simios capturados, Bone y Spear. El juego se desarrolla en un camino lineal, con el jugador realizando movimientos similares a los de un simio para avanzar hacia puntos predeterminados en el entorno. Se encuentran guardias humanos a lo largo del juego y deben ser eliminados antes de avanzar. El jugador puede usar tres tipos de armas y puede cubrirse durante los tiroteos. También puede trepar tuberías y balancearse desde techos. Los planes para un juego de realidad virtual del Planeta de los Simios fueron anunciados en enero de 2017. El título y la trama del juego fueron revelados un año después. Fue desarrollado por Imaginati, que también creó el juego de 2017 Planet of the Apes: Last Frontier. El juego fue desarrollado utilizando Unreal Engine. Fue publicado por FoxNext y fue lanzado el 3 de abril de 2018, para los cascos de Oculus así como para los cascos HTC Vive y PlayStation VR.',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesApesPlanet = await VideoApesPlanet.find();
        if (allVideoGamesApesPlanet.length > 0) {
            await VideoApesPlanet.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesApesPlanetMap = arrayVideoGamesApesPlanet.map((VideoGame) => new VideoApesPlanet(VideoGame));
        await VideoApesPlanet.insertMany(VideoGamesApesPlanetMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());