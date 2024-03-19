const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieCrespusculo = require('../../api/models/models.Crepusculo/movies.Crepusculo.model');

const arrayMoviesCrespusculo = [
  {
    title: 'Crepúsculo',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446495/Crepusculo/Movies/1_movie_Crepusculo_qbedgg.jpg',
    director: 'Catherine Hardwicke',
    year: 2008,
    duration: "121 MIN",
    country: "EEUU",
    genre: 'Romance/Fantasia',
    clasification: "PG13",
    resume: 'Bella Swan, una chica de diecisiete años deja Phoenix y se muda a Forks, un pequeño pueblo ubicado en la península Olímpica del estado de Washington, para vivir con su padre, Charlie, el jefe de policía de la ciudad. Su madre, Renée, se volvió a casar con Phil, un jugador de béisbol de ligas menores cuya carrera a menudo mantiene a la pareja viajando. En Forks, Bella se reencuentra con Jacob Black, un adolescente nativo americano de 15 años, que vive con su padre, Billy, en la Reserva India Quileute cerca de Forks. Hace amigos en su nueva escuela secundaria, pero encuentra particularmente intrigantes a los hermanos Cullen, misteriosos y reservados. Sentada junto a Edward Cullen en la clase de biología el primer día de clases, Bella nota que él parece repugnado por ella. Después de una semana de ausencia en la escuela, Edward regresa y socializa normalmente con Bella. Unos días más tarde, ella casi es atropellada por una camioneta que derrapa en el estacionamiento de la escuela. Edward instantáneamente se pone entre Bella y la camioneta, deteniéndola con una mano después de cubrir una distancia de más de nueve metros. Ella queda sorprendida e intrigada ante tal acción imposible de realizar de forma humana. Él se niega a explicar sus acciones a ella y la advierte que no se acerque a él. Jacob le cuenta a Bella sobre la animosidad de larga data entre los Cullen y los Quileutes y le dice que los Cullen no tienen permitido entrar en la reserva. Después de salvar a Bella por segunda vez de manera inesperada, Edward confirma que tiene habilidades misteriosas que recuerdan a las de un vampiro. Sin embargo, asegura que él y los demás Cullen solo consumen sangre de animales. A pesar de las advertencias de Edward, Bella se enamora de él y él la presenta a su familia vampírica. El patriarca de la familia, Carlisle Cullen, es un médico en el hospital de Forks, donde trabaja. Su esposa y matriarca de la familia, Esme, junto con Alice, Jasper, Emmett y Rosalie, son sus hijos adoptivos informales. La reacción de la familia a la presencia de Bella es mixta, preocupados de que el secreto de la familia pueda ser expuesto. La relación entre Edward y Bella corre peligro cuando tres vampiros nómadas, James, Victoria y Laurent, llegan a la zona de Forks y son responsables de una serie de muertes que se investigan como ataques de animales. James, un vampiro rastreador con instintos de caza increíbles, se emociona por el aroma de Bella y se obsesiona con cazarla como deporte. Edward y los demás Cullen protegen a Bella, pero James la rastrea hasta Phoenix, donde se esconde con Jasper y Alice. James atrae a Bella a una trampa en un viejo estudio de ballet. La ataca e infecta con el veneno de vampiro. Edward llega y, después de una feroz batalla, somete a James justo cuando llegan otros miembros de los Cullen. Alice, Emmett y Jasper matan a James, decapitándolo y quemándolo, mientras Edward elimina el veneno del brazo de Bella, evitando que se convierta en vampiro. En el caos que sigue, Bella sufre una pierna rota y es hospitalizada. Al volver a Forks, Edward acompaña a Bella al baile de promoción de la escuela secundaria, donde él rechaza su petición de convertirla en vampiro. Ignoran que la compañera de James, Victoria, los está vigilando en secreto, planeando vengarse por la muerte de su amado.',
  },
  {
    title: 'Luna Nueva',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446513/Crepusculo/Movies/2_movie_LunaNueva_gc9ujb.jpg',
    director: 'Chris Weitz',
    year: 2009,
    duration: "138 min",
    country: "EEUU",
    genre: 'Romance/Fantasia',
    clasification: "PG13",
    resume: 'En su decimoctavo cumpleaños, Bella Swan despierta de un sueño en el que es una anciana y Edward Cullen, su novio vampiro inmortal, es siempre joven. A pesar de la falta de entusiasmo de Bella, la familia de Edward organiza una recepción de cumpleaños para ella en su residencia. Mientras desenvuelve un regalo, se corta con el papel. El hermano adoptivo de Edward, Jasper, se siente abrumado por el olor de la sangre e intenta atacarla, pero se contiene. Creyendo que él y su familia están poniendo la vida de Bella en peligro, Edward termina su relación y los Cullen abandonan Forks. Bella se queda muy deprimida y aislada durante meses. Charlie, su padre, preocupado, decide enviarla a vivir con su madre en Jacksonville, Florida. Bella se niega y promete pasar más tiempo con sus otros amigos de la escuela. Ella y Jessica ven una película. Bella se acerca a unos ciclistas de aspecto rudo fuera del teatro, para consternación de su amiga. El peligroso encuentro le recuerda un casi asalto anterior en el que su exnovio la rescató. Se imagina que lo ve y lo oye y se da cuenta de que las actividades que buscan emociones fuertes pueden evocar su imagen. Su amigo Quileute, Jacob Black, ayuda a aliviar su dolor involucrándola en varias actividades. Este menciona cuántos de sus amigos tribales siguen y obedecen a Sam, otro Quileute. Mientras va a ver una película con Bella y Mike, Jacob se va abruptamente después de sentirse inexplicablemente molesto y sufrir una fiebre ardiente. Bella conduce a la casa de este último después de que él evitara verla. Jacob se había cortado el pelo largo y ahora tiene el mismo tatuaje de Quileute en la parte superior del brazo derecho que Sam y otros miembros de la tribu, por lo que le dice que se mantenga alejada de él. Cuando Bella camina hacia el prado que ella y Edward visitaban a menudo, se enfrenta al compañero vampiro de Victoria, Laurent. Cuando está a punto de matarla, aparece una manada de lobos y lo ataca. Bella finalmente descubre que Jacob y los otros miembros de la tribu son cambiaformas que pueden convertirse en lobos gigantes. Sus enemigos ancestrales son los vampiros, aunque existe un tratado entre los Cullen y la tribu. Los miembros de la manada están actualmente en alerta por Victoria, el vampiro que busca vengar a su compañero, James, a quien Edward mató para proteger a Bella. Con Jacob concentrado en adaptarse a sus nuevos poderes de cambio de forma, Bella nuevamente se encuentra sola y regresa a buscar actividades que induzcan a la emoción, deliberadamente ajena a la presencia de Victoria, saltar de un acantilado, hasta que Jacob la rescata de ser ahogada. A través de una serie de malas comunicaciones, Edward cree que Bella se suicidó después de que su hermana, Alice, tuviera una visión de Bella saltando de un acantilado junto al mar. Angustiado, viaja a Italia para pedirles a los Volturi (un poderoso aquelarre que actúa como señores vampíricos) que acaben con su vida, ya que él es incapaz de hacerlo él mismo. Cuando rechazan su pedido, planea forzarlo exponiéndose como vampiro ante los humanos durante un gran festival. Alice regresa a Forks y se sorprende al descubrir que Bella todavía está viva. Ambas viajan a Italia para salvar a Edward, llegando a tiempo para evitar que se revele a sí mismo como un vampiro. Aliviado de que Bella esté viva, explica que solo dejó Forks para protegerla y promete que nunca más se irá. Este la defiende de Felix, uno de los Volturi, ya que estos no permiten que los humanos entren en la sociedad de vampiros, pero Edward es fácilmente derrotado. Cuando los Volturi están a punto de matar a Edward, Bella les pide que la maten a ella. Impresionados por la voluntad de un humano de sacrificar su vida por un vampiro, los Volturi determinan que Bella, que sabe que los vampiros existen, debe ser asesinada o transformada en vampiro. Alice comparte su visión de Bella como vampiro con Aro, un anciano Volturi capaz de leer pensamientos a través del tacto. Aro decide dejarlos ir después de obtener la promesa de que Bella se convertiría eventualmente. Después de regresar a Forks, les pide a los Cullen que voten para poder convertirla en vampira. Solo Edward y Rosalie votan no. Jacob le recuerda a Edward que el tratado de años con los Quileute se romperá si algún Cullen muerde a un humano. Bella le dice a Jacob que es su elección. Edward le dice a Bella que la convertirá en vampiro si Bella se casa con él.',
  },
  {
    title: 'Eclipse',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446504/Crepusculo/Movies/3_movie_Eclipse_r2xtxb.jpg',
    director: 'David Slade',
    year: 2011,
    country: "EEUU",
    genre: 'Romance/Fantasia',
    clasification: "PG13",
    resume: 'Riley Biers es atacado por Victoria, mientras ella está fuera creando un ejército conjunto de vampiros neófitos para destruir a Bella Swan. En Forks, Edward Cullen y Bella deben discutir acerca de las complicaciones de convertirse en un vampiro inmortal aunque Edward se niega a darle la inmortalidad hasta que estén casados y hasta que haya tenido diversas experiencias humanas. Mientras que Charlie Swan está investigando la desaparición de Riley Biers, Edward sospecha que su desaparición fue causada por los vampiros neófitos. A pesar de los temores de Edward por la seguridad de Bella, ella insiste en que Jacob y el resto de la manada hombre lobo no le haría daño, pero Edward sigue sin estar convencido. Bella va a La Push a ver a Jacob, y regresa a su casa a salvo. Durante una de sus visitas, Jacob confiesa que está enamorado de Bella, y la besa sin su consentimiento. Furiosa, lo golpea y se esguinza la mano, y luego Edward amenaza a Jacob con “romperle la mandíbula”. Bella incluso revoca las invitaciones de Jacob y sus miembros de la manada a su fiesta de graduación, pero cuando Jacob se disculpa por su comportamiento, ella finalmente lo perdona. Mientras tanto, Alice tiene una visión del ejército de los neófitos, atacando a Forks y siendo dirigido por Riley Biers. Jacob, acompañado por Quil y Embry escuchan esto, lo que conduce a una alianza entre los Cullen y los hombres lobo. Más tarde, los Cullen y los lobos acuerdan un lugar de encuentro y el tiempo para entrenar y discutir la estrategia. Durante el entrenamiento Jasper le explica a Bella que fue creado por un vampiro llamado María que controlaba un ejército de neófitos. También le confiesa que odiaba a su existencia original y al encontrarse con Alice, se unió a los Cullen. Bella se da cuenta de que pasar la eternidad con Edward es más importante para ella que cualquier otra cosa y acepta su propuesta. Edward y Bella hacen un campamento en las montañas para esconderse de los neófitos sedientos de sangre. Durante la noche, Bella escucha una conversación entre Edward y Jacob, en el que temporalmente dejan a un lado su odio. Por la mañana, Jacob escucha Edward y Bella discutir sobre su compromiso de boda y él se molesta mucho. Antes de que pueda salir a hacerse matar en la lucha con los neófitos, Bella le pide desesperadamente a Jacob que la bese, y ella se da cuenta de que se ha enamorado de él. Edward se entera del beso entre Jacob y Bella, pero ella le dice que lo ama más a él que a Jacob, algo que Edward sabe y que hace que no se moleste. Victoria encuentra el escondite de Bella, y Edward la mata a ella mientras Seth mata a su pareja Riley. Los Cullen y los lobos Quileute, mientras tanto, destruyen a su "ejército", aunque Jacob sale herido. Varios miembros de los Volturi llegan para hacer frente al ejército de neófitos. También ven que los Cullen están dando asilo a la neófita, Bree Tanner, que se negó a luchar y se entregó a Carlisle. Jane tortura a Bree para obtener información, a continuación, Félix se encarga de Bree y la mata, a pesar de los esfuerzos de los Cullen. Bella visita a Jacob en su casa para decirle que aunque ella lo ama, ha elegido estar con Edward. Decepcionado por su elección, Jacob acepta a regañadientes dejar de interponerse entre ella y Edward. Bella y Edward van a su prado, donde ella le dice que ha decidido hacer las cosas a su manera: casarse, formar una familia, y entonces así transformarse en un vampiro, y deciden que necesitan contarle su compromiso a Charlie. La película termina con Bella pidiendo su anillo de compromiso, Edward se lo pone y se abrazan.',
  },
  {
    title: 'Amanecer: Parte 1',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446521/Crepusculo/Movies/4_movie_Amanecer1_m61vdu.jpg',
    director: 'Bill Condon',
    year: 2011,
    duration: "117 min",
    country: "EEUU",
    genre: 'Romance/Fantasia',
    clasification: "PG13",
    resume: 'Jacob Black se encuentra desaparecido por no querer enfrentar el hecho de que su mejor amiga se va a casar. Bella y Edward Cullen celebran su boda organizada por Alice, sin embargo Jacob regresa en último momento para la boda, para despedirse de ella preguntándole si esa misma noche será su cambio pero Bella le dice que será después de tener intimidad con Edward, a lo cual Jacob se enfada porque podría ser peligroso para ella. Edward llega al escuchar la pelea entonces Jacob le reclama su falta de amor y seguridad hacia ella dejándoles nuevamente. Ahora los recién casados pasan su luna de miel en isla Esme (una isla a unos kilómetros de Río de Janeiro), que Carlisle regaló a Esme y que cede para pasar su luna de miel a Edward y Bella. Durante la luna de miel, Edward cumple su promesa de intentar hacer el amor con Bella. La primera vez Bella sale herida, con contusiones y moretones, además de dejar desteozada la cama; las siguientes, Edward puede canalizar sus emociones y no daña más a Bella, aunque rompe alguna parte del mobiliario o la fina y sexy lencería que Alice eligió para Bella. Tiempo después, Bella queda embarazada y el híbrido de vampiro y humano crece muy rápido. Edward al darse cuenta del estado de Bella vuelven rápidamente a Forks para que Carlisle extirpe el feto, pero Bella queda indignada al escuchar la discusión de los Cullen y con la ayuda de Rosalie se oponen. Tras el regreso de Bella y Edward a Forks, ella empieza a deprimirse más, por lo tanto, anteponiendo su amor por encima de sus celos. Luego Edward busca a Jacob con el fin de que le haga compañía y a su vez de que pueda convencerla de abortar la criatura, ya que poco a poco esta consumiendo la vitalidad y la fuerza de Bella casi hasta dejarla en la anorexia debido a que no consume ningún alimento. A su vez, Jacob se opone y se enfrenta a Sam, sacando el Alfa legítimo que es, y se separa de la manada, lo que le lleva a dejar de compartir sus pensamientos. Al rato, Seth sigue a Jacob y su hermana Leah se les une más tarde, de esta forma se unen a los Cullen para defender a Bella. Durande el embarazo de Bella, Jacob al ver que Bella no esta comiendo en forma jocosa señala que Tal vez sólo quiere a alguien a quién mostrarle el diente; si es hijo de un vampiro tal vez su alimento sea la sangre a lo cual suministran un vaso lleno de sangre a Bella, donde se empieza a sentir mejor y satisfecha con el nuevo alimento una vez que la consume con regularidad. Edward pasa por un estado de depresión porque Bella está arriesgando su vida por su embarazo; entonces ambos comienzan a tener una muy tensa conversación entre ellos. Luego, en un intento de solucionar la situación, Edward toca la barriga de Bella, donde lee los sentimientos y se comunica con la bebé, entendiendo que la misma tiene conciencia desde antes de nacer, que no es su intención de hacerle daño a su madre y que también sufre con el dolor que le causa a ella. Edward y Bella se alivian y se alegran mucho al saber que pueden comunicarse con la bebé, y ambos le dicen que la quieren. El día del nacimiento del bebé, Carlisle no estaba presente ya que estaba fuera del pueblo para estar fuerte durante la cesárea. Luego de haber elegido el nombre del bebé (si es varón, Edward Jacob, y si es niña, Renesmee), Bella entra en estado de parto y las contracciones y posterior caída al suelo le causan graves fracturas en sus rodillas y columna, por lo que entre Jacob y Edward realizan la cesárea de Bella. La bebé nace sana y Rosalie la toma mientras que Edward sutura a Bella, sin embargo, Bella no resiste la cesárea y se desangra. Jacob asume que ella murió durante el parto, por lo que se retira de la habitación, dejando a Edward desesperado, aún tratando de transformarla para salvarle la vida mordiéndola e inyectándole el veneno de vampiro directo en el corazón. A pesar de los esfuerzos de Edward, Bella muere. Jacob, terriblemente deprimido, tenía pensando eliminar a la bebé, a la que odia fervorosamente ya que le parecía injusto que ésta viviera y Bella hubiese muerto, pero la bebé lo mira fijamente a los ojos, donde ocurre la imprimación. Más tarde, Sam alerta a la manada de que la criatura ha nacido y están dispuestos a eliminarla, rodeando la casa de los Cullen. Pero Jacob se enfrenta a Sam mostrándole sus ojos donde no le puede hacer daño a la bebé porque ya esta imprimada en él. Ésta es la ley más poderosa del clan de los lobos. Al día siguiente, Los Cullen, entristecidos por lo ocurrido, limpian el cadáver de Bella. Entonces el cuerpo de ella lentamente rejuvenece y se fortalece, todas sus heridas sanan y su piel vuelve a la normalidad. Mientras todos esperan el cuerpo, Bella despierta como una vampiro, mostrando sus ojos de un color rojizo.En una escena post-créditos, una humana viene con un telegrama a entregárselo a los Volturi, quienes anuncian un nuevo integrante de los Cullen (la bebé de Bella y Edward, llamada Renesmee) y quien luego se llevan a asesinarla, respectivamente, debido a su falta de ortografía y quien Aro no tendrá otra opción más que enfrentarse a los Cullen.',
  },
  {
    title: 'Amanecer: Parte 2',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446530/Crepusculo/Movies/4_movie_Amanecer2_kxje5a.jpg',
    director: 'Bill Condon',
    year: 2012,
    duration: "116 min",
    country: "EEUU",
    genre: 'Romance/Fantasia',
    clasification: "PG13",
    resume: 'Tras el nacimiento de Renesmee (Mackenzie Foy) y la transformación de Bella (Kristen Stewart) en vampiresa, ésta trata de acoplarse poco a poco a su nueva vida inmortal y aceptar el hecho de que Jacob (Taylor Lautner) se imprimase de Renesmee y que le es imposible separarse de ella. Conforme pasan los días, la familia Cullen se preocupa por el rápido crecimiento de la pequeña, temiendo que sus días lleguen a su fin de manera precipitada. Un día mientras Bella, Renesmee y Jacob (convertido en lobo) juegan en la nieve, Irina (del clan Denali) (Maggie Grace), descubre a la niña y la confunde con una "Niña Inmortal" -una especie prohibida por las leyes vigentes en el mundo de los vampiros- y denuncia a los Cullen ante los Volturi. Alice experimenta una visión de lo que se avecina y ante esto, Jasper (Jackson Rathbone) y Alice (Ashley Greene) desaparecen y no dejan más que una nota explicando que los Volturi llegarán cuando la nieve se endurezca. Ante esta amenaza y junto con los Quileutes, los Cullen reúnen a todos los vampiros posibles para que sirvan de testigos de su inocencia. Al mismo tiempo, Bella descubre que su don es un escudo mental, lo que la hace inmune a los dones mentales de otros vampiros. Sabiendo que esto puede ayudarlos en el campo de batalla, Bella practica arduamente y logra finalmente proyectar su escudo a aquellos que quiere proteger. Ante la inminente llegada de los Volturi, Bella ha logrado descifrar una pista que le dejó Alice antes de irse, y arregla todo para poner a salvo a su hija y a Jacob en caso de que ocurra una batalla. Finalmente, la nieve se endurece y ambos bandos se reúnen en una enorme explanada en el bosque. Carlisle le manifiesta a Aro que Renesmee no es una Niña Inmortal, pero el líder de los Volturi no queda convencido y solicita a Edward se acerque para conocer los hechos (ya que observa que Renesmee se encuentra tomada de la mano de Bella). Una vez que Aro vio en la mente de Edward, le dice que le encantaría conocer a su hija. Bella, Edward, Jacob y Emmett acompañan a la niña a ver a Aro, quien extiende su mano hacia ella para leer su mente, pero la niña ignora su mano y le toca la mejilla para mostrarle, por medio de su telepatía, que ella no es inmortal. Aro hace saber al resto que la pequeña es mitad humana, mitad vampiro. Luego, Caius manda llamar a Irina y le pregunta si esa era la niña que había visto, ella contesta con inseguridad a Caius y acepta que se equivocó. Ante esa declaración, Caius ordena la muerte de Irina debido a su error. En ese momento sus hermanas Kate (Casey Labow) y Tanya (Myanna Buring) intentan atacarlos por asesinarla, pero Zafrina (Judi Shekoni), por petición de Edward, las deja ciegas para que no cometan un error que inicie una batalla entre ambos clanes. Jasper y Alice llegan al claro donde ella le muestra a Aro su visión acerca de lo que pasaría si entrasen en batalla (Carlisle, Jasper, Seth, Leah, morirían así como Alec, Demetri, Jane, Caius, Marco y Aro). Aro, preocupado por la inminente muerte de todo su clan, desiste del juicio, no sin antes escuchar la versión de Nahuel (JD Pardo), un híbrido (mitad humano y mitad vampiro al igual que Renesmee) de 150 años de edad proveniente del Amazonas. El relata que la niña no será un problema para la comunidad de los vampiros en el futuro, revelando también que, a los 7 años de su nacimiento se congelo su crecimiento, dando una esperanza de vida longeva a Renesmee. Concluida la reunión y con la retirada de los Volturi, se muestra a todos felices. Los Cullen despiden a todos sus amigos y Alice tiene una visión de Renesmee y Jacob juntos en el futuro. En el epílogo, Edward y Bella se encuentran en el prado, escenario de tantos momentos juntos. Bella logra proyectarle a Edward, mediante su escudo, todos los momentos felices que han vivido desde que se conocieron, sabiendo que están a salvo y teniendo el resto de su vida para vivir felices para siempre.',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesCrespusculo = await MovieCrespusculo.find();
    if (allMoviesCrespusculo.length > 0) {
      await MovieCrespusculo.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesCrespusculoMap = arrayMoviesCrespusculo.map((movie) => new MovieCrespusculo(movie));
    await MovieCrespusculo.insertMany(moviesCrespusculoMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando las películas', err);
  })
  .finally(() => mongoose.disconnect());
