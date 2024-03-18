const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieDune = require('../../api/models/models.dune/movies.dune.model');

const arrayMoviesDune = [
  {
    title: "Dune",
    picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710360199/Dune/Movies/dune_1984_2_owyuer.jpg",
    director: "Davd Lynch",
    year: 1984,
    duration: "137 min",
    country: "EEUU",
    genre: "Accion",
    clasification: "PG13",
    resume: "Por orden imperial, la familia Atreides deberá hacerse cargo de la explotación del desértico planeta Arrakis, conocido también como «Dune», es el único planeta donde se encuentra la especia, una potente droga que además, es necesaria como combustible para los vuelos espaciales.Anteriormente, el planeta había sido gobernado por la familia de los Harkonen, miembros de la élite gobernante que mantienen la paz en el universo, ellos habían ejercido su mandato con puño de hierro, dejando una huella indeleble en la población indígena del planeta, oprimidos, convertidos en esclavos y llevados al exterminio. Cuando los Harkonen regresan y atacan el planeta Dune en forma sorpresiva, con el beneplácito del Emperador para retomar su posición dominante sobre el planeta, los sistemas de defensa son saboteados y la ciudad cae bajo el dominio de los Harkonen, que buscan destruir a la familia Atreides.Paul, el hijo del duque Leto Atreides, deberá huir al desierto, donde le esperan múltiples peligros y una última oportunidad de vengarse y volver a su legítimo lugar como gobernante de Arrakis.                                                                                                                                                                                                                                            El universo conocido está gobernado por una élite política, basada en castas de familias con mucha influencia política, riqueza y tecnología, el emperador Padishah Shaddam IV gobierna a las familias. La sustancia más valiosa del imperio es la especia, una droga que prolonga la vida y expande la conciencia de la gente. La especia también permite producir un combustible para viajar por el espacio, en unas naves espaciales gigantes en forma de cilindro, doblando el espacio para lograr un viaje interestelar instantáneo y seguro.El Gremio de navegantes por el espacio, miembros de la élite política gobernante, teme una conspiración que podría poner en peligro la producción de especias y envía un emisario para hablar en secreto y exigir una explicación del Emperador, quien revela su plan secreto para destruir la Casa Atreides. El emperador teme por la creciente popularidad del duque Leto Atreides y la existencia de un ejército secreto por los informes de inteligencia, está acumulando poder y con la aparición de un nuevo concepto de armas sónicas de muy avanzada tecnología, amenace su gobierno imperial en el futuro. Planea ceder el control del planeta Arrakis, la única fuente de especias del universo, a la Casa Atreides como una estrategia y trampa, una vez instalados allí, los Atreides serán emboscados por sus archienemigos, la familia de los Harkonnen, con la ayuda de las tropas de élite Sardaukar enviadas por el Emperador.                                                                                                                                                                                                                                           El navegante, aprueba el plan y ordena al Emperador matar al hijo de Leto, Paul Atreides, porque el navegante teme pueda amenazar la producción de especias en el futuro y sospecha él es una persona especial. La orden de ejecución llama la atención de la hermandad Bene Gesserit, una raza de personas que tienen poderes mentales y puede escuchar con sus poderes mentales, la conversación secreta entre el navegante y el Emperador, porque Paul está vinculado a su programa de reproducción de siglos, para producir en secreto al líder Kwisatz Haderach, un súper humano del universo con poderes mentales y podría formar un nuevo gobierno imperial en el futuro. Antes del viaje de Paul al planeta Dune en la nave de los navegantes, recibe la visita privada de la Reverenda Madre Mohiam Bene Gesserit, lo prueba al verse obligado a soportar un dolor extremo, insoportable con su poder mental, para sorpresa y eventual satisfacción de Mohiam, Paul pasa la prueba mental y ella considera está listo para convertirse en el líder Kwisatz Haderach, y guarda esto en secreto para evitar el Emperador tome la iniciativa de matarlo.En el mundo industrial de Giedi Prime, el sádico y depravado barón Vladimir Harkonnen, en una reunión les cuenta a sus sobrinos, Glossu 'La Bestia' Rabban y Feyd-Rautha, su plan secreto para eliminar la Casa Atreides, manipulando a alguien en la órbita del gobierno del Duque Leto para traicionarlo, al sabotear los sistemas de defensa de la ciudad, todo esto con el respaldo del Emperador y los Navegantes, muy desconfiados de la familia Atreides y ahora buscan destruir.Los Atreides abandonan su planeta natal, Caladan, para ir a Arrakis, según la orden del Emperador, montados en platillos voladores para viajar entre planetas de un mismo sistema solar, ingresan a la nave más grande en forma de cilindro de los Navegantes, que doblan el espacio con una tecnología secreta para llegar a lugares lejanos del universo y juntos llegan a un planeta desértico, aislado y estéril poblado por gigantescos gusanos de arena. Los nativos de Arrakis, los Fremen, profetizan entre su pueblo, la llegada de un mesías en el futuro, él los conducirá a la libertad y les dará el control de su planeta. Duncan Idaho, uno de los comandantes leales a Leto, le dice sospechar en el planeta Dune existe un gran número de Fremen ocultos en lugares remotos, inexplorados y en las montalas, y podrían resultar ser poderosos aliados en el futuro, ante la enemistad existente con la familia Harkonen.                                                                                                                                                                                                                                         Antes de que el gobernante Duque Leto pueda formar una alianza con los Fremen, los Harkonnen lanzan su ataque en forma sorpresiva al planeta. El traidor de los Harkonnen dentro de la Casa Atreides, el médico personal del Duque Leto, el Dr. Wellington Yueh, desactiva los escudos de energía de la ciudad, dejando a los Atreides casi indefensos para enfrentar la batalla. Su asistente Idaho muere, Leto es capturado y casi toda la Casa Atreides es asesinada sin piedad por los soldados al servicio de los Harkonnen. El barón Harkonnen obliga a su sirviente Mentat Piter De Vries, mate al Dr. Yueh con una espada envenenada para evitar conocer la verdad sobre este ataque y no molestar a la casta de la élite dominante, los líderes de otros planetas y los Navegantes. Leto muere en un intento fallido de asesinar al barón Harkonnen usando un diente de gas venenoso implantado por el Dr. Yueh a cambio de salvar las vidas de Lady Jessica, la concubina de Leto y madre de Paul, ellos desaparecen en la batalla por capturar la ciudad y logra escapar al desierto.Paul y Jessica, sobreviven al ataque y escapan al profundo desierto del planeta, donde un jefe sietch de Fremen les da refugio. Paul asume el nombre Fremen Muad'Dib y emerge como el líder de los Fremen han estado esperando, por el desarrollo de sus poderes mentales con el paso del tiempo. Les enseña a construir y usar módulos extraños, armas sónicas desarrolladas en secreto por la casa de Atreides, y apunta sus ataques a la minería de especias. Durante los próximos dos años, la producción de especias casi se detiene por las guerras de guerrillas en el planeta entre los Fremen y las máquinas mineras de los Harkonnen, para obligarlos a negociar un acuerdo de paz y permita volver a tomar el poder. El Gremio Espacial de los Navegantes informa al Emperador del deterioro de la situación en Arrakis, la falta de la especia para suministrar a su población y extender su vida, la falta de combustible para las naves espaciales y le exige actuar en forma inmediata para solucionar este problema.",
    trailer: "",
  },
  {
    title: "Dune",
    picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710359979/Dune/Movies/dune_2021_2_zsw5tq.jpg",
    director: "Viles Villenueve",
    year: 2021,
    duration: "156 min",
    country: "EEUU, Hungria, Inglaterra, Canada",
    genre: "Ciencia Ficcion, Epica",
    clasification: "PG13",
    resume: "En el año 10191, el duque Leto de la Casa Atreides, gobernante del planeta oceánico Caladan, es asignado por el emperador Padishah Shaddam Corrino IV para reemplazar a la Casa Harkonnen como gobernante del feudo de Arrakis. Arrakis es un inhóspito planeta desértico y la única fuente de 'especia', una valiosa sustancia que extiende la vitalidad humana y es fundamental para los viajes interestelares. En realidad, Shaddam tiene la intención de que la Casa Harkonnen organice un golpe para recuperar el planeta con la ayuda de las tropas Sardaukar del Emperador, erradicando la Casa Atreides, cuya influencia amenaza el control de Shaddam. Leto está preocupado, pero ve la posibilidad de aliarse con la población nativa de Arrakis, los fremen, como el primer paso para aumentar la posición de los Atreides en el Landsraad, el cuerpo político que representa a todas las casas nobles.La concubina de Leto, Lady Jessica, es una acólita de las Bene Gesserit, una hermandad exclusiva que ejerce habilidades físicas y mentales avanzadas. Aunque Jessica recibió instrucciones de la Bene Gesserit de tener una hija cuyo hijo se convertiría en el mesiánico Kwisatz Haderach, por amor a Leto tuvo en cambio un hijo, Paul. A lo largo de su vida, Paul es entrenado por los ayudantes de Leto, Duncan Idaho, Gurney Halleck y el Mentat Thufir Hawat, mientras que Jessica entrena a Paul en las disciplinas Bene Gesserit. Paul les confía a Jessica y Duncan que está preocupado por visiones del futuro. Debido a su presciencia en desarrollo, la Reverenda Madre Gaius Helen Mohiam llega a Caladan y somete a Paul a una prueba mortal para evaluar su control de impulsos, que supera. Más tarde, Mohiam transmite al patriarca de la Casa, el barón Vladimir Harkonnen, la necesidad de que perdone a Paul y Jessica durante su golpe, accediendo este de forma engañosa.                                                                                                                                                                                                                                           La Casa Atreides llega a Arrakeen, el bastión de Arrakis que antes estaba en manos de la Casa Harkonnen, donde Idaho y un grupo de avanzada han estado aprendiendo sobre su mundo y los Fremen. Leto negocia con Stilgar, el cacique de los Fremen, y se encuentra con la doctora Liet-Kynes, planetóloga y jueza imperial. Kynes informa a Leto, Paul y Halleck sobre los peligros de la recolección de especia, incluidos los gusanos de arena gigantes que viajan bajo el desierto. Durante un vuelo, ven un gusano de arena que se acerca a un recolector de especia activo con la tripulación varada. Esta es rescatada antes de que el gusano de arena se la trague. La exposición de Paul al aire cargado de especia le provoca intensas premoniciones.Después de un atentado contra la vida de Paul por parte de un agente Harkonnen, Leto pone a sus soldados en alerta máxima. El Doctor Suk Wellington Yueh desactiva los escudos protectores de Arrakeen y permite que las tropas Harkonnen y Sardaukar abrumen a las fuerzas Atreides. Yueh incapacita a Leto y le dice que hizo un trato para entregarlo al barón a cambio de su esposa capturada. Yueh reemplaza uno de los dientes de Leto con una cápsula de gas venenoso y muere después de entregar al Duque en manos del barón. Leto libera el gas venenoso, matando a los miembros de la corte del barón y a sí mismo, pero el barón sobrevive. Idaho escapa y roba un ornitóptero, pero Paul y Jessica son capturados. Los Harkonnen los llevan al desierto para morir, pero los dominan usando la 'Voz'. Al encontrar un equipo de supervivencia que Yueh les dejó, Paul y Jessica pasan la noche en una tienda de campaña. Paul experimenta visiones de una próxima 'guerra santa' que se extiende por todo el universo bajo su nombre.                                                                                                                                                                                                                                             El barón entrega el mando de Arrakis a su brutal sobrino Rabban y le ordena vender reservas de especia y reiniciar la producción para remunerar el costo del golpe. Paul y Jessica son encontrados por Idaho y Kynes y se dirigen a una antigua estación de investigación, pero los Sardaukar los localizan rápidamente. Duncan y varios fremen se sacrifican para permitir que Jessica, Paul y Kynes escapen de las instalaciones. Kynes, emboscada por las tropas Sardaukar, atrae a un gusano de arena que los devora junto con ella. Paul y Jessica llegan al desierto profundo y se encuentran con los fremen, entre ellos Stilgar y Chani, la chica de las visiones de Paul. El guerrero fremen Jamis protesta por su admisión y muere a manos de Paul en un duelo ritual a muerte. Contra los deseos de Jessica, Paul se une a los fremen con la intención de traer la paz a Arrakis.​",
    trailer: "",
  },
  {
    title: "Dune: Parte 2",
    picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710359879/Dune/Movies/dune_2024_dhysfn.jpg",
    director: "Viles Villenueve",
    year: 2024,
    duration: "156 min",
    country: "EEUU, Hungria, Inglaterra, Canada, Emiratos Arabes Unidos, Italia, Jordania",
    genre: "Ciencia Ficcion, Epica",
    clasification: "PG13",
    resume: "La princesa Irulan Corrino escribe en secreto que Paul Atreides aún puede estar vivo, mientras que su padre, el emperador Shaddam IV, está desanimado después de promover la caída de la Casa Atreides. De camino a Sietch Tabr en Arrakis, las tropas Fremen de Stilgar, incluidos Paul y Lady Jessica, superan una emboscada Harkonnen. En el Sietch surgen sospechas de que Jessica y Paul son espías, mientras que algunos Fremen tienen fe en ellos y creen en la profecía de una madre y un hijo que traerán prosperidad a Arrakis. Stilgar le informa a Jessica que su Reverenda Madre está muriendo, convenciendo a Jessica de que la reemplace bebiendo 'Agua de vida', un veneno fatal para los hombres y los no entrenados. Ella transmuta el veneno y, al hacerlo, sobrevive y hereda los recuerdos de cada antepasada femenina de su linaje genético. Sin que nadie más que ella y Paul lo sepan, Jessica está embarazada; el Agua de vida despierta prematuramente la mente de su hija antes de nacer. Después de esto, Jessica tiene conversaciones espirituales con su hija, Alia, en su útero y cree que aquellos en el norte de Arrakis deben ser convencidos primero de la profecía, comenzando con los débiles mentales. Chani y su amiga Shishakli piensan que la profecía es falsa, pero cuando Paul pronuncia un discurso sobre no buscar poder y querer solo luchar junto a ellos, Chani desarrolla respeto por él.                                                                                                                                                                                                                                                Paul adopta las costumbres Fremen y aprende su idioma, pasando pruebas como montar en un gusano de arena. Forma una relación romántica con Chani, se convierte en un luchador Fedaykin y ayuda en las incursiones contra los recolectores de especias Harkonnen, lo que le vale los apodos de 'Muad'Dib' y 'Usul'.​ Jessica guía espiritualmente su ascenso y, por lo tanto, alimenta la religión en la que se ha vuelto prominente. Rabban, cuyo control sobre la producción de especias se ha ido aflojando, intensifica las incursiones contra los Fremen para complacer a su tío, el barón Vladimir Harkonnen, quien degrada a Rabban por no detener las revueltas Fremen y convierte a su sobrino menor, psicótico y asesino, Feyd-Rautha, en el nuevo gobernante de Arrakis. Margot Fenring, una acólita de la Bene Gesserit enviada por la Reverenda Madre Gaius Mohiam, seduce a Feyd y queda embarazada de el, para proteger sus genes en caso de que el linaje de Paul sea insalvable.Jessica completa su búsqueda religiosa en el Norte y viaja al Sur para unirse con los fundamentalistas allí. Sin embargo, Paul teme que una sangrienta guerra santa se encienda si avanza hacia el Sur como un mesías, y permanece en el Norte, donde se reúne con Gurney Halleck, quien se unió a los contrabandistas de especias después de la caída de los Atreides y lleva a Paul a las ojivas atómicas ocultas de la Casa Atreides. Las tropas de Feyd atacan Sietch Tabr, matan a Shishakli y obligan a los supervivientes, incluido Paul, a viajar hacia el sur, donde Jessica descubre que el Agua de vida es un líquido excretado por un gusano de arena adolescente una vez que se lo ahoga. En contra de los deseos de Chani, Paul consume el Agua de vida; cae en coma, pero Chani logra despertarlo, tras lo cual Paul consigue un sentido más claro del pasado y el futuro, tiene una visión de Alia y se da cuenta de que el barón es su abuelo materno.                                                                                                                                                                                                                                           Los líderes Fremen del Sur esperan que Paul desafíe a Stilgar por el liderazgo, pero Paul se niega. Finalmente, aceptando su destino mesiánico, Paul se declara Lisan al Gaib, asumiendo pleno poder sobre los Fremen y desafiando al Emperador, quien llega a Arrakis con Irulan, Mohiam y sus tropas Sardaukar. Paul interrumpe la confrontación del Emperador con el Barón lanzando ojivas atómicas a la fortaleza de Arrakeen. Montados en gusanos de arena, los Fremen dominan a las fuerzas Sardaukar y rompen las defensas de Arrakeen, durante lo cual Gurney mata a Rabban, vengando finalmente a Leto y a sus camaradas.Dentro de Arrakeen, Paul entra a la sala del trono, mata al barón y ordena que el Emperador y otros sean transportados a la Residencia, donde amenaza con destruir la especia planetaria para siempre con las reservas atómicas restantes a menos que el Emperador le entregue el trono imperial y le ceda la mano de su hija en matrimonio. Feyd-Rautha desafía a Paul a un duelo como campeón del Emperador, pero Paul lo mata. Irulan consiente en casarse con Paul, mientras que el Emperador cede al ultimátum de Paul arrodillándose ante su anillo de sello. Chani, enojada por la decisión de Paul de casarse con Irulan, abandona la residencia y se prepara para montar un gusano de arena en otro lugar. Por encima de Arrakeen, las naves espaciales que representan a muchas Grandes Casas se niegan a aceptar el ascenso de Paul. Mientras Paul ordena a su ejército Fremen 'llevarlos al paraíso', Jessica y Alia reflexionan que este es el comienzo de la guerra santa de Muad'Dib.",
    trailer: "",
  },
  {
    title: "Dune: la Leyenda",
    picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710680719/Dune/Movies/dune_la_leyenda_ef1jyj.jpg",
    director: "Graeme Revell",
    year: 2000,
    duration: "272 min",
    country: "EEUU",
    genre: "Ciencia Ficcion, Epica, Miniserie TV",
    clasification: "PG13",
    resume: "Dentro de muchos miles de años en el futuro (con relación a nuestra época actual) la Humanidad se ha extendido y habita en miles de planetas por todo el Universo. Sin embargo, toda la Humanidad permanece unida políticamente en un Imperio, que en la práctica es como un solo país; y que recibe la denominación oficial del Universo Conocido.Este Imperio tiene un sistema de gobierno peculiar, algo parecido al de los países de Europa en la Edad Media; es una mezcla de Autocracia y Monarquía feudal, pero también con elementos de un Estado corporativo.El poder está repartido entre el Emperador, las Grandes Casas, la CHOAM, la Cofradía Espacial y la Bene Gesserit.El Emperador del Universo Conocido es un gobernante autoritario con grandes poderes; sin embargo, su poder está limitado porque tiene que compartirlo con los otros factores institucionales del Universo (las Grandes Casas, la Cofradía Espacial, etc.)Las Grandes Casas son una gran cantidad de poderosas familias que forman la Nobleza del Imperio. Cada una de éstas familias es dueña de uno o varios planetas, en calidad de Feudo; y los habitantes de ese planeta o planetas son siervos de la familia propietaria. El Jefe de cada una de las Grandes Casas tiene un título nobiliario (Duque, Marqués, Conde, Barón, etc.); y ejerce de gobernante planetario en su feudo, con una autonomía más o menos amplia, aunque al final está sometido a la autoridad del Emperador en los asuntos que son comunes a todo el Universo Conocido y que por tanto son de competencia imperial.Las Grandes Casas están representadas en una especie de asamblea parlamentaria aristocrática que se llama el Landsraad.                                                                                                                                                                                                                                           La Cofradía Espacial es una organización mercantil, una corporación que ejerce el monopolio de los viajes espaciales y que por eso tiene una decisiva influencia política; todo el comercio interplanetario está en sus manos y el transporte de fuerzas militares también depende de su capricho. La CHOAM es una gigantesca macro-corporación que domina toda la economía del Universo Conocido; controla los monopolios de infinidad de industrias y los distribuye a su antojo entre sus miembros. Su accionista mayoritario es el Emperador, pero las Grandes Casas y otros poderes tienen una importante participación en el capital, y sus votos cuentan mucho en la directiva. La Bene Gesserit es una hermandad femenina cuyas miembros tienen increíbles poderes mentales que las hacen parecer 'brujas'; desempeñan muchos servicios para las Grandes Casas, tienen mucho poder político sutilmente encubierto y tienen un programa genético para mejorar la especie humana.Las Grandes Casas tienen Ejércitos propios y armas nucleares; pero un tratado les impide usar las bombas nucleares en las frecuentes guerras entre dichas casas. Sí alguien viola el tratado, el castigo es que los demás firmantes del acuerdo deben unirse para lanzar un ataque nuclear conjunto contra el que lo haya violado y destruirlo por completo (aunque el violador del tratado sea el propio Emperador). Como además es común el uso de unos escudos de energía que impiden el paso de todo tipo de balas, proyectiles y misiles; y esos mismos escudos detonan explosiones atómicas sí son alcanzados por disparos de rayos láser, no se pueden usar armas modernas, ni siquiera pistolas. Por eso las guerras han vuelto a pelearse con cuchillos y dagas en combates cuerpo a cuerpo.Como resultado de una guerra sucedida hace miles de años en la que los humanos lucharon para liberarse de los robots y las computadoras que los habían esclavizado (la Jihad Butleriana); las computadoras y cualquier forma de inteligencia artificial ('máquinas del pensamiento' según la jerga del Imperio) están terminantemente prohibidas. Para reemplazarlas existen unos seres humanos dotados de unas increíbles capacidades mentales iguales o superiores a las de las mejores computadoras de antaño; unas verdaderas 'computadoras humanas' llamados Mentats.                                                                                                                                                                                                                                              En el contexto de éste Universo, la historia de la serie gira en torno a Paul Atreides, el protagonista; Paul es el único hijo y heredero del Duque Leto Atreides y de la concubina oficial de éste, Jessica Atreides (una Reverenda Madre de la Bene Gesserit).El padre de Paul, el duque Leto, es el gobernante del planeta Caladan, el feudo de la familia; y es el jefe de la Casa Atreides, una de las más famosas e influyentes de las Grandes Casas.La historia comienza cuando el duque Leto es nombrado Gobernador Planetario de Arrakis por el Emperador Shaddam IV; Arrakis, también conocido como Dune, es un planeta desértico y es el único lugar donde se encuentra la Melange. La Melange es una sustancia que es tomada en grandes cantidades por los Navegantes de la Cofradía Espacial, unos seres mutantes que han dejado de ser humanos y tienen un aspecto monstruoso; gracias a que ingieren Melange éstos Navegantes son capaces de 'doblar el espacio' y trasladar las gigantescas naves espaciales de la Cofradía a miles de años luz. Sin la Melange los Navegantes morirían y las naves no podrían viajar, deteniéndose todos los viajes espaciales interplanetarios. Además la Melange también permite a las Bene Gesserit desarrollar sus extraordinarios poderes de 'brujas'; y es tomada en pequeñas cantidades por la mayoría de la población del Imperio, alargando la vida de los seres humanos mucho más de cien años. Por todo esto la Melange es la sustancia más valiosa del Universo Conocido y es más importante para su civilización que el petróleo para la nuestra.",
    trailer: "",
  },
  {
    title: "Dune: Hijos de Dune",
    picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710680570/Dune/Movies/children_of_dune-966889471-large_tvhxmg.jpg",
    director: "Greg Gaitnes",
    year: 2003,
    duration: "266 min",
    country: "EEUU",
    genre: "Ciencia Ficcion, Epica, Miniserie TV",
    clasification: "PG13",
    resume: "Al principio de la miniserie la narración nos dice que han pasado 12 años desde que Paul Atreides derrocó a Shaddam IV y se convirtió en Emperador del Universo Conocido (acontecimientos que ocurrieron al final de Dune, la miniserie anterior); en esos doce años las legiones del Ejército de Paul (formado por los Fremen) han invadido y conquistado todos los planetas del Imperio donde se ha presentado resistencia al nuevo régimen, destruyendo a los restos del antiguo Ejército Imperial de Shaddam y sembrando muerte y destrucción a su paso. Las víctimas incontables de ésta sangrienta guerra religiosa y política, de ésta 'jihad' emprendida por Paul y sus fanáticos guerreros fremen; han hecho que el nombre de Muad'Dib (nombre fremen de Paul) haya dejado de ser una bendición para los habitantes del Imperio y se haya convertido en una maldición. Mientras tanto, en Arrakis (convertida en capital del Imperio por orden de Paul) está avanzando el programa científico ecológico para convertir los desiertos del planeta en bosques y selvas; aunque la mayor parte del planeta aún es desértico, el agua antes escasa es ahora tan abundante que hasta se ven charcos de la misma en las calles de Arrakeen. Pero este hecho, así como los cambios profundos que se están produciendo en la forma de vida de los fremen que están abandonando rápidamente sus antiguas costumbres; despiertan la oposición de los sectores más tradicionalistas de los fremen, que se muestran cada vez más descontentos con el régimen de Paul y con su propia jihad por el Universo.                                                                                                                                                                                                                                           Por otro lado, la religión oficial del régimen de Paul sigue manipulando la mente de las masas por todo el Universo; ésta religión, dirigida por Alia Atreides (la hermana menor de Paul), predica que Paul es un Dios viviente y que por eso sus decisiones son sagradas y oponerse a él es un pecado. La gente del Imperio es obligada a convertirse a la religión Atreides por las buenas o por las malas. Y una corrupta burocracia sacerdotal ha comenzado a crecer amparada en ésta religión, disfrutando de los privilegios de su poder absoluto y del terror inquisitorial.El propio Paul está descontento con su obra; odia la dictadura en que se ha convertido su gobierno, desprecia la falsa religión que se ha creado en su nombre y le horroriza el monstruoso derramamiento de sangre que produce la interminable guerra. La culpa le atormenta, pero no puede renunciar y dar marcha atrás; porque por una parte, sabe que la Revolución que lidera continuará con él o sin él. Por otra parte, por sus poderes de Kwisatz Haderach (que permiten 'ver' el futuro), Paul sabe también que la única forma de salvar a la Humanidad de su total destrucción es mediante el camino que ha tomado; aunque sea un camino doloroso. Sin embargo, Paul no se atreve a dar el paso definitivo para emprender la ruta que salve a la especie humana, por el sacrificio que ello significaría para él y los seres que ama.Mientras Paul sigue atormentado por sus dudas y sus visiones proféticas del futuro, sus peores enemigos conspiran contra él. Los grupos y personalidades que perdieron el poder por culpa de la Revolución de Paul, y que ahora viven oprimidos y humillados bajo su dictadura; planean la forma de matarlo o inutilizarlo y derrocar su régimen. Así las cosas, la hermandad Bene Gesserit, la Cofradía Espacial, los Bene Tleilax y la Princesa Wensicia Corrino han unido sus fuerzas para llevar a cabo un siniestro plan para destruir a Paul.                                                                                                                                                                                                                                                La líder de la conspiración es la Princesa Wensicia, una de las cinco hijas del derrocado Emperador anterior (Shaddam); ella es la que logra convencer a la Bene Gesserit y a la Cofradía para que se unan a la conspiración. Pero son los Bene Tleilax los que han puesto el arma decisiva para acabar con Paul: un ghola de Duncan Idaho, el amigo de Paul que murió luchando contra los soldados de Shaddam. Precisamente fueron los hombres de Shaddam los que recuperaron el cadáver de Duncan y lo entregaron a los tleilaxus para que lo 'revivieran' como ghola; y ahora, programando su mente para obedecerlos, esperan usarlo para aniquilar a Paul.Los conspiradores han logrado reclutar a algunos fremen rebeldes, que están dispuestos a traicionar a Paul; unos por ambición y otros porque pertenecen a los sectores tradicionalistas que odian los resultados del gobierno de Paul y quieren detener la guerra.Mientras tanto, en la Corte de Paul se suceden otras intrigas y enfrentamientos; la Princesa Consorte Irulan Corrino (la esposa legal de Paul e hija del anterior Emperador Shaddam, con la que tuvo que casarse para legitimar su ascenso al trono) ha estado 'envenenando' en secreto la comida de Chani (la concubina oficial y verdadera mujer de Paul) con poderosos anticonceptivos para evitar que tenga hijos con Paul. Chani lo descubre y amenaza de muerte a Irulan, al mismo tiempo que comienza una dieta fremen especial y peligrosa a base de grandes cantidades de Melange para contrarrestar los efectos del envenenamiento y así poder quedar embarazada. Al mismo tiempo existe una fuerte tensión entre Irulan y Alia Atreides, la hermana menor de Paul, que muestra su desprecio por su cuñada legal.",
    trailer: "",
  }
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesDune = await MovieDune.find();
    if (allMoviesDune.length > 0) {
      await MovieDune.collection.drop();
      console.log('Movieas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando las peliculas', err);
  })
  .then(async () => {
    const moviesDuneMap = arrayMoviesDune.map((movie) => new MovieDune(movie));
    await MovieDune.insertMany(moviesDuneMap);
    console.log('peliculas insertados');
  })
  .catch((err) => {
    console.log('error insertando las peliculas', err);
  })
  .finally(() => mongoose.disconnect());
