// FONDAMENTI DI INFORMATICA - QUIZ JAVASCRIPT
// Docente: Tradigo Giuseppe - eCampus
// Lezioni 085-095: Diagrammi UML avanzati, IDE UML, Swing e Graphics

QUESTIONS.push(
  // ========== LEZIONE 085 ==========
  {
    id: "L85Q1",
    lesson: "085",
    type: "chiusa",
    question: "Se un attributo di una classe raffigurata in un Class Diagram UML è rappresentato sottolineato, cosa significa?",
    options: [
      "Che non è ancora stato istanziato",
      "Che la sua visibilità è protected",
      "Che è un attributo a livello di classe, quindi static",
      "Che è una costante"
    ],
    correct: 2
  },
  {
    id: "L85Q2",
    lesson: "085",
    type: "chiusa",
    question: "Quale fra le seguenti è una rappresentazione errata per un attributo di classe in un Class Diagram UML?",
    options: [
      "-stipendio:double",
      "String matricola;",
      "+nome:String",
      "#cognome:String"
    ],
    correct: 1
  },
  {
    id: "L85Q3",
    lesson: "085",
    type: "chiusa",
    question: "Quale fra le seguenti è una rappresentazione errata per una classe in un Class Diagram UML?",
    options: [
      "Nome + attributi + metodi",
      "Nome + attributi + metodi + stati",
      "Nome + attributi",
      "Nome"
    ],
    correct: 1
  },
  {
    id: "L85Q4",
    lesson: "085",
    type: "chiusa",
    question: "A differenza di UML, nel linguaggio Java:",
    options: [
      "L'ereditarietà multipla è tollerata solo in alcuni casi",
      "E' sempre possibile utilizzare l'ereditarietà multipla",
      "E' possibile per una classe estendere due o più classi",
      "Non è possibile usare l'ereditarietà multipla, se non usando le interfacce"
    ],
    correct: 3
  },
  {
    id: "L85Q5",
    lesson: "085",
    type: "chiusa",
    question: "Qual è la rappresentazione corretta della classe java.lang.System in un Diagramma delle Classi UML?",
    options: [
      "Si usa solo \"System\"",
      "java:lang:System",
      "java.lang::System",
      "System:java.lang"
    ],
    correct: 2
  },
  {
    id: "L85Q6",
    lesson: "085",
    type: "chiusa",
    question: "Quali fra le seguenti frasi è falsa se riferita al linguaggio UML?",
    options: [
      "E' sempre possibile estendere più di una classe alla volta",
      "E' alcune volte possibile estendere più di una classe alla volta",
      "E' possibile estendere una classe alla volta, ovvero possiamo avere più di una superclasse",
      "Non è possibile estendere più di una classe alla volta, ovvero non possiamo avere più di una superclasse"
    ],
    correct: 0
  },
  {
    id: "L85Q7",
    lesson: "085",
    type: "chiusa",
    question: "Da un Diagramma delle Classi di UML:",
    options: [
      "E' possibile generare solo un elenco di metodi e attributi delle classi",
      "E' possibile generare programmi nativi eseguibili",
      "E' possibile generare il codice Java delle classi",
      "E' impossibile generare il codice Java delle classi"
    ],
    correct: 2
  },
  {
    id: "L85Q8",
    lesson: "085",
    type: "chiusa",
    question: "In un Diagramma delle Classi UML è possibile:",
    options: [
      "Rappresentare che una istanza Direttore sovrascrive il metodo dati() (polimorfismo)",
      "Rappresentare che una istanza classe Direttore sovrascrive il metodo dati() (polimorfismo)",
      "Rappresentare che un Direttore è un Impiegato (generalizzazione) e ne sovrascrive il metodo dati() (polimorfismo)",
      "Rappresentare che una istanza di Impiegato sovrascrive il metodo dati() (polimorfismo)"
    ],
    correct: 2
  },
  {
    id: "L85Q9",
    lesson: "085",
    type: "aperta",
    question: "Illustrare in che forma può essere descritta una classe in un Diagramma delle Classi UML. In particolare descrivere dove vengono rappresentati il nome della classe, i suoi attributi e i suoi metodi.",
    options: [""],
    correct: 0
  },
  {
    id: "L85Q10",
    lesson: "085",
    type: "aperta",
    question: "Illustrare come possono essere descritti i livelli di visibilità degli attributi di una classe in un Diagramma delle Classi UML.",
    options: [""],
    correct: 0
  },

  // ========== LEZIONE 086 ==========
  {
    id: "L86Q1",
    lesson: "086",
    type: "chiusa",
    question: "In un Diagramma delle Classi UML come si indica l'Aggregazione?",
    options: [
      "Con una freccia doppia",
      "Con un rombo pieno",
      "Con una freccia",
      "Con un rombo vuoto"
    ],
    correct: 3
  },
  {
    id: "L86Q2",
    lesson: "086",
    type: "chiusa",
    question: "Quali caratteristiche specificano una associazione di un Diagramma delle Classi UML?",
    options: [
      "Un nome ed una coppia di molteplicità",
      "Nome, molteplicità e navigabilità",
      "Un nome e un verso",
      "Solo un nome"
    ],
    correct: 1
  },
  {
    id: "L86Q3",
    lesson: "086",
    type: "chiusa",
    question: "Cosa significa per due classi essere in relazione tramite una associazione in un Diagramma delle Classi UML?",
    options: [
      "Che ciascuna avrà un attributo del tipo dell'altra classe",
      "Che una è sottoclasse dell'altra",
      "Che usa l'altra come parametro o come tipo di ritorno di un metodo",
      "Che sono classi simili"
    ],
    correct: 0
  },
  {
    id: "L86Q4",
    lesson: "086",
    type: "chiusa",
    question: "Cosa cambia aggiungere un verso ad una associazione fra classi in un Diagramma delle Classi UML?",
    options: [
      "Serve a specificare in quale classe si troverà il riferimento all'altra classe",
      "Il verso serve a specificare la molteplicità dell'associazione",
      "Serve ad indicare la superclasse",
      "Niente, l'associazione avrà lo stesso significato di quella senza verso"
    ],
    correct: 0
  },
  {
    id: "L86Q5",
    lesson: "086",
    type: "chiusa",
    question: "A che serve una Classe di Associazione (o associativa) in un Diagramma delle Classi UML?",
    options: [
      "A creare una associazione fra due classi",
      "A caratterizzare una associazione fra due classi",
      "A definire la navigabilità di una associazione fra classi",
      "A specificare la cardinalità di una associazione fra classi"
    ],
    correct: 1
  },
  {
    id: "L86Q6",
    lesson: "086",
    type: "chiusa",
    question: "In un Class Diagram UML, le cardinalità di un'Associazione:",
    options: [
      "Dicono quante volte può essere chiamato un metodo",
      "Specificano quante sottoclassi partecipano all'associazione",
      "Specificano quante istanze delle classi partecipano all'associazione",
      "Servono a specificare quanti elementi ha un array"
    ],
    correct: 2
  },
  {
    id: "L86Q7",
    lesson: "086",
    type: "chiusa",
    question: "Cosa è falso dire relativamente alle differenze fra Aggregazione e Composizione di un Diagramma delle Classi UML?",
    options: [
      "Le classi che partecipano alla prima hanno significato solo in relazione con il tutto, mentre quelle che partecipano alla seconda hanno significato anche da sole",
      "La prima è una relazione debole, la seconda una relazione forte",
      "Le classi che partecipano alla prima sono indipendenti, mentre quelle che partecipano alla seconda non lo sono",
      "La prima è caratterizzata da un rombo vuoto, la seconda da un rombo pieno"
    ],
    correct: 0
  },
  {
    id: "L86Q8",
    lesson: "086",
    type: "chiusa",
    question: "In un Diagramma delle Classi UML come si indica la Composizione?",
    options: [
      "Con un rombo vuoto",
      "Con una freccia doppia",
      "Con una freccia",
      "Con un rombo pieno"
    ],
    correct: 3
  },
  {
    id: "L86Q9",
    lesson: "086",
    type: "aperta",
    question: "Descrivere quali tipi di associazioni possiamo definire fra classi in un Diagramma delle Classi UML e che forma hanno.",
    options: [""],
    correct: 0
  },
  {
    id: "L86Q10",
    lesson: "086",
    type: "aperta",
    question: "In un Diagramma delle Classi UML siano date due classi, Persona ed Automobile, fra cui sia indicata una normale associazione (senza nessuna freccia, cardinalità, ecc). Mostrare una possibile implementazione in codice Java delle due classi.",
    options: [""],
    correct: 0
  },

  // ========== LEZIONE 088 ==========
  {
    id: "L88Q1",
    lesson: "088",
    type: "chiusa",
    question: "Il tool ArgoUML:",
    options: [
      "E' un insieme di metodi di Argomenti",
      "E' un insieme di argomenti per UML",
      "E' un IDE open source per compilare",
      "E' un IDE open source orientato a UML"
    ],
    correct: 3
  },
  {
    id: "L88Q2",
    lesson: "088",
    type: "chiusa",
    question: "Il sistema Rational Rose:",
    options: [
      "E' un insieme di metodi",
      "E' un IDE per UML",
      "E' una rosa razionale di metodi",
      "E' un insieme di classi"
    ],
    correct: 1
  },
  {
    id: "L88Q3",
    lesson: "088",
    type: "chiusa",
    question: "A che serve ArgoUML?",
    options: [
      "Supporta la progettazione, lo sviluppo e la documentazione di applicazioni",
      "Compila il codice e trova errori",
      "Supporta solo la documentazione di applicazioni",
      "Supporta la compilazione, lo sviluppo e l'esecuzione di applicazioni"
    ],
    correct: 0
  },
  {
    id: "L88Q4",
    lesson: "088",
    type: "chiusa",
    question: "Il software ArgoUML è:",
    options: [
      "Un software scritto in UML che supporta la progettazione UML",
      "Un software scritto in Java che supporta la progettazione UML",
      "Un software scritto in pseudocodice che supporta la progettazione UML",
      "Un software scritto in HTML che supporta la progettazione UML"
    ],
    correct: 1
  },
  {
    id: "L88Q5",
    lesson: "088",
    type: "chiusa",
    question: "Poseidon UML Community edition:",
    options: [
      "E' un IDE che consente di progettare in UML in modo grafico",
      "E' un IDE che consente di progettare in UML in modo automatico",
      "E' un IDE che consente di progettare in UML in modo testuale",
      "E' un IDE che consente di scrivere in UML in modo vocale"
    ],
    correct: 0
  },
  {
    id: "L88Q6",
    lesson: "088",
    type: "chiusa",
    question: "Gli IDE dedicati alla progettazione nel linguaggio UML:",
    options: [
      "Scrivono codice in modo semiautomatico",
      "Generano codice in modo automatico",
      "Hanno un repository di codice generico riutilizzabile",
      "Scrivono codice in modo automatico"
    ],
    correct: 1
  },
  {
    id: "L88Q7",
    lesson: "088",
    type: "chiusa",
    question: "Che differenza c'è tra un IDE dedicato a Java e uno dedicato a UML?",
    options: [
      "Un IDE Java genera codice in Java, un IDE UML permette di sviluppare in UML",
      "Un IDE Java genera codice in Java, un IDE UML lo genera in UML",
      "Un IDE Java serve a scrivere codice in Java, un IDE UML genera codice anche in Java",
      "Un IDE Java serve a scrivere codice in Java, un IDE UML genera codice UML"
    ],
    correct: 2
  },
  {
    id: "L88Q8",
    lesson: "088",
    type: "chiusa",
    question: "Che cos'è un IDE per UML?",
    options: [
      "Un sistema grafico per supportare la definizione di metodi",
      "Un sistema grafico per supportare la costruzione solo di attributi",
      "Un sistema grafico per supportare l'istanza di metodi UML",
      "Un sistema grafico per supportare la costruzione di diagrammi"
    ],
    correct: 3
  },

  // ========== LEZIONE 089 ==========
  {
    id: "L89Q1",
    lesson: "089",
    type: "chiusa",
    question: "Il metodo setDefaultCloseOperation() di JFrame della libreria Swing:",
    options: [
      "Definisce l'operazione di default per impostare il colore di sfondo",
      "Definisce l'operazione di default per ridimensionare la finestra",
      "Definisce l'operazione di default per la chiusura della finestra quando il programma termina",
      "Definisce l'operazione di default per visualizzare la finestra"
    ],
    correct: 2
  },
  {
    id: "L89Q2",
    lesson: "089",
    type: "chiusa",
    question: "Le API grafiche Java servono a:",
    options: [
      "Compilare codice scritto in Java",
      "Eseguire programmi Java in modo sequenziale",
      "Creare interfacce grafiche per le applicazioni",
      "Definire interfacce grafiche"
    ],
    correct: 3
  },
  {
    id: "L89Q3",
    lesson: "089",
    type: "chiusa",
    question: "Il metodo setVisible(true) di JFrame della libreria Swing:",
    options: [
      "Rende visibile la finestra",
      "Imposta le dimensioni della finestra",
      "Imposta il titolo della finestra",
      "Chiude la finestra"
    ],
    correct: 0
  },
  {
    id: "L89Q4",
    lesson: "089",
    type: "chiusa",
    question: "Il metodo setSize(300,100) di JFrame della libreria Swing:",
    options: [
      "Imposta il titolo della finestra a '300,100'",
      "Imposta le dimensioni della finestra a 300 pixel di larghezza e 100 di altezza",
      "Ridimensiona il contenuto della finestra",
      "Imposta la posizione della finestra sullo schermo"
    ],
    correct: 1
  },
  {
    id: "L89Q5",
    lesson: "089",
    type: "chiusa",
    question: "Le classi JFrame e JDialog di Swing:",
    options: [
      "Sono la stessa cosa",
      "JFrame serve a creare finestre di dialogo, JDialog serve a creare finestre principali",
      "Sono entrambe finestre, JFrame è principalmente per applicazioni, JDialog per dialoghi",
      "JDialog non fa parte di Swing"
    ],
    correct: 2
  },
  {
    id: "L89Q6",
    lesson: "089",
    type: "chiusa",
    question: "Le API grafiche Java disponibili sono:",
    options: [
      "Solo AWT",
      "Solo Swing",
      "AWT e Swing",
      "AWT, Swing e Graphics3D"
    ],
    correct: 2
  },
  {
    id: "L89Q7",
    lesson: "089",
    type: "chiusa",
    question: "Cosa significa l'acronimo GUI?",
    options: [
      "Graphical Unit Interface",
      "General User Interface",
      "Graphical User Interface",
      "Graphical Unique Interface"
    ],
    correct: 2
  },
  {
    id: "L89Q8",
    lesson: "089",
    type: "chiusa",
    question: "Cosa significa l'acronimo API?",
    options: [
      "Application Programming Interchange",
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Protocol Interface"
    ],
    correct: 1
  },

  // ========== LEZIONE 090 ==========
  {
    id: "L90Q1",
    lesson: "090",
    type: "chiusa",
    question: "Quale fra i seguenti NON è un componente Swing?",
    options: [
      "JButton",
      "JLabel",
      "JArrow",
      "JPanel"
    ],
    correct: 2
  },
  {
    id: "L90Q2",
    lesson: "090",
    type: "chiusa",
    question: "La classe JComponent di Swing:",
    options: [
      "Permette layout automatico dei componenti",
      "E' la superclasse di molti componenti Swing",
      "Non permette di inserire altri componenti",
      "Serve solo per il disegno di linee"
    ],
    correct: 1
  },
  {
    id: "L90Q3",
    lesson: "090",
    type: "chiusa",
    question: "Il Tooltip in Swing:",
    options: [
      "È un pulsante speciale",
      "È un metodo per trasportare dati",
      "È un suggerimento visivo che appare quando il mouse passa su un componente",
      "È un componente per inserire testo"
    ],
    correct: 2
  },
  {
    id: "L90Q4",
    lesson: "090",
    type: "chiusa",
    question: "A che serve la classe JPanel di Swing?",
    options: [
      "A creare etichette di testo",
      "A creare pulsanti interattivi",
      "A contenere altri componenti",
      "A leggere input da tastiera"
    ],
    correct: 2
  },
  {
    id: "L90Q5",
    lesson: "090",
    type: "chiusa",
    question: "La classe JButton di Swing:",
    options: [
      "Permette di creare pulsanti cliccabili",
      "La reazione al click del pulsante è codificata interamente dalla libreria",
      "Non permette di associare azioni al click",
      "Serve solo per visualizzare immagini"
    ],
    correct: 0
  },
  {
    id: "L90Q6",
    lesson: "090",
    type: "chiusa",
    question: "La classe JLabel di Swing:",
    options: [
      "Serve a creare etichette di testo",
      "Serve a interagire con l'utente attraverso input di testo",
      "Serve a creare pulsanti",
      "Serve a contenere altri componenti"
    ],
    correct: 0
  },
  {
    id: "L90Q7",
    lesson: "090",
    type: "chiusa",
    question: "La classe JTextField di Swing:",
    options: [
      "Serve a visualizzare testo lungo",
      "Serve a leggere stringhe inserite dall'utente",
      "Serve a creare pulsanti",
      "Serve a visualizzare immagini"
    ],
    correct: 1
  },
  {
    id: "L90Q8",
    lesson: "090",
    type: "chiusa",
    question: "La classe JTextArea di Swing:",
    options: [
      "Serve a visualizzare e modificare testo lungo su più righe",
      "Serve a leggere numeri",
      "Serve a creare pulsanti",
      "Serve a disegnare forme geometriche"
    ],
    correct: 0
  },

  // ========== LEZIONE 091 ==========
  {
    id: "L91Q1",
    lesson: "091",
    type: "chiusa",
    question: "Il metodo add() di JPanel in Swing:",
    options: [
      "Aggiunge componenti a un pannello",
      "Aggiunge numeri",
      "Aggiunge righe a un database",
      "Aggiunge colori a un componente"
    ],
    correct: 0
  },
  {
    id: "L91Q2",
    lesson: "091",
    type: "chiusa",
    question: "La classe GridLayout di Swing:",
    options: [
      "Dispone i componenti in una griglia rettangolare",
      "Dispone i componenti secondo i punti cardinali (Nord, Sud, Est, Ovest)",
      "Dispone i componenti uno dopo l'altro in fila",
      "Dispone i componenti in modo casuale"
    ],
    correct: 0
  },
  {
    id: "L91Q3",
    lesson: "091",
    type: "chiusa",
    question: "Chi decide la posizione dei componenti in una finestra Swing?",
    options: [
      "Il programmatore manualmente con coordinate x,y",
      "L'utente trascinandoli",
      "Il gestore di layout (Layout Manager)",
      "Il sistema operativo"
    ],
    correct: 2
  },
  {
    id: "L91Q4",
    lesson: "091",
    type: "chiusa",
    question: "Le classi dei layout manager di Swing si trovano in quale package?",
    options: [
      "java.swing",
      "java.lang",
      "java.awt",
      "java.io"
    ],
    correct: 2
  },
  {
    id: "L91Q5",
    lesson: "091",
    type: "chiusa",
    question: "A che serve un gestore di layout (Layout Manager) in Swing?",
    options: [
      "A disegnare i componenti come immagini",
      "A posizionare automaticamente i componenti nella finestra",
      "A gestire i colori dei componenti",
      "A gestire gli eventi del mouse"
    ],
    correct: 1
  },
  {
    id: "L91Q6",
    lesson: "091",
    type: "chiusa",
    question: "Qual è il gestore di layout di default di un JFrame in Swing?",
    options: [
      "FlowLayout",
      "BorderLayout",
      "GridLayout",
      "NullLayout"
    ],
    correct: 1
  },
  {
    id: "L91Q7",
    lesson: "091",
    type: "chiusa",
    question: "Come funziona FlowLayout in Swing?",
    options: [
      "Dispone i componenti in una griglia",
      "Dispone i componenti secondo i punti cardinali",
      "Dispone i componenti uno dopo l'altro in fila, andando a capo quando serve",
      "Dispone i componenti in modo casuale"
    ],
    correct: 2
  },
  {
    id: "L91Q8",
    lesson: "091",
    type: "chiusa",
    question: "Il BorderLayout di Swing:",
    options: [
      "Dispone i componenti in una griglia a due dimensioni",
      "Dispone i componenti uno dopo l'altro in fila",
      "Dispone i componenti secondo i punti cardinali: Nord, Sud, Est, Ovest, Centro",
      "Dispone i componenti in modo casuale"
    ],
    correct: 2
  },

  // ========== LEZIONE 092 ==========
  {
    id: "L92Q1",
    lesson: "092",
    type: "aperta",
    question: "Descrivere il codice che viene eseguito quando si preme un JButton.",
    options: [""],
    correct: 0
  },

  // ========== LEZIONE 093 ==========
  {
    id: "L93Q1",
    lesson: "093",
    type: "chiusa",
    question: "Il metodo showConfirmDialog() di JOptionPane della libreria Swing:",
    options: [
      "Crea una finestra di dialogo con i pulsanti 'si' e 'no'",
      "Permette di visualizzare messaggi di errore",
      "Chiede all'utente se vuole chiudere l'applicazione e tornare al Sistema Operativo",
      "Chiede all'utente di confermare a voce la sua scelta"
    ],
    correct: 0
  },
  {
    id: "L93Q2",
    lesson: "093",
    type: "chiusa",
    question: "Cosa è falso se riferito ad una finestra di dialogo di Swing?",
    options: [
      "Una finestra di dialogo visualizza un messaggio per l'utente",
      "Una finestra di dialogo blocca l'interazione dell'utente col JFrame sottostante",
      "Una finestra di dialogo è un componente audio",
      "Una finestra di dialogo è modale"
    ],
    correct: 2
  },
  {
    id: "L93Q3",
    lesson: "093",
    type: "chiusa",
    question: "A che serve una finestra di dialogo di Swing?",
    options: [
      "A nascondere un errore dell'applicazione",
      "A leggere comandi vocali dall'utente",
      "A definire le dimensioni di una finestra",
      "A visualizzare un messaggio o a formulare una domanda"
    ],
    correct: 3
  },
  {
    id: "L93Q4",
    lesson: "093",
    type: "chiusa",
    question: "Che significa che una finestra di dialogo di Swing è modale?",
    options: [
      "Che blocca le interazioni dell'utente con la finestra principale",
      "Che permette di interagire con la finestra principale solo nella modalità dialogo",
      "Che definisce il modo in cui una finestra viene chiusa",
      "Che definisce il modo in cui l'applicazione dialoga con l'utente"
    ],
    correct: 0
  },
  {
    id: "L93Q5",
    lesson: "093",
    type: "chiusa",
    question: "La classe JOptionPane di Swing:",
    options: [
      "Permette di definire finestre di tipo JFrame",
      "Serve a creare pannelli opzionali",
      "Serve a definire le opzioni principali di una applicazione a finestre",
      "Permette di definire semplici finestre di dialogo"
    ],
    correct: 3
  },
  {
    id: "L93Q6",
    lesson: "093",
    type: "chiusa",
    question: "Il metodo showMessageDialog() di JOptionPane della libreria Swing:",
    options: [
      "Mostra la finestra JFrame corrente quando essa è nascosta",
      "Permette di creare finestre di dialogo",
      "Permette di dialogare con l'utente tramite messaggi vocali",
      "Permette di visualizzare messaggi sulla console di testo"
    ],
    correct: 1
  },
  {
    id: "L93Q7",
    lesson: "093",
    type: "chiusa",
    question: "Quali tipi di JDialog permette di creare il metodo JOptionPane.showMessageDialog() di Swing?",
    options: [
      "solo di tipo messaggio",
      "domanda, risposta, si, no",
      "domanda, informazione, avvertimento, errore, messaggio",
      "solo di tipo errore"
    ],
    correct: 2
  },
  {
    id: "L93Q8",
    lesson: "093",
    type: "chiusa",
    question: "L'opzione JOptionPane.YES_NO_OPTION del metodo JOptionPane.showConfirmDialog() di Swing:",
    options: [
      "Permette all'utente di scegliere 'si', 'no' oppure di chiudere il JDialog",
      "Permette all'utente di rispondere solo 'si' o 'no'",
      "Permette all'utente di scegliere se chiudere oppure no l'applicazione",
      "Permette all'utente di tornare oppure no al Sistema Operativo"
    ],
    correct: 1
  },
  {
    id: "L93Q9",
    lesson: "093",
    type: "aperta",
    question: "Descrivere cosa sono, come funzionano e a cosa servono le finestre di dialogo di Swing.",
    options: [""],
    correct: 0
  },

  // ========== LEZIONE 094 ==========
  {
    id: "L94Q1",
    lesson: "094",
    type: "chiusa",
    question: "L'interfaccia MouseListener di Java:",
    options: [
      "Permette di rilevare se il mouse è collegato alla porta USB del PC",
      "Permette di estendere le funzionalità del mouse di sistema",
      "Permette di rilevare i movimenti del mouse",
      "Permette di rilevare gli eventi del mouse"
    ],
    correct: 3
  },
  {
    id: "L94Q2",
    lesson: "094",
    type: "chiusa",
    question: "Qual è la differenza tra il metodo mousePressed() e mouseClicked() dell'interfaccia MouseListener?",
    options: [
      "il primo rileva la pressione di un tasto della tastiera, il secondo un click del mouse",
      "rilevano entrambi un click del tasto sinistro del mouse",
      "il primo rileva la pressione del tasto sinistro del mouse, il secondo la pressione del tasto destro",
      "il primo rileva la pressione di un tasto del mouse, il secondo se il tasto è stato premuto e rilasciato"
    ],
    correct: 3
  },
  {
    id: "L94Q3",
    lesson: "094",
    type: "chiusa",
    question: "Per rilevare quale tasto del mouse è stato premuto bisogna utilizzare:",
    options: [
      "Mouse.getButton()",
      "this.getButton()",
      "MouseEvent.getButton()",
      "System.mouse.getButton()"
    ],
    correct: 2
  },
  {
    id: "L94Q4",
    lesson: "094",
    type: "chiusa",
    question: "Quali valori sono associati ai pulsanti sinistro e destro del mouse da MouseEvent?",
    options: [
      "MouseEvent.BUTTON0 al tasto sinistro, MouseEvent.BUTTON1 al tasto destro",
      "MouseEvent.BUTTON0 al tasto sinistro, MouseEvent.BUTTON2 al tasto destro",
      "MouseEvent.BUTTON1 al tasto sinistro, MouseEvent.BUTTON2 al tasto destro",
      "MouseEvent.BUTTON1 al tasto sinistro, MouseEvent.BUTTON3 al tasto destro"
    ],
    correct: 3
  },
  {
    id: "L94Q5",
    lesson: "094",
    type: "chiusa",
    question: "Per rilevare che il puntatore del mouse è uscito dall'area di un componente Swing:",
    options: [
      "possiamo usare il metodo mouseOut(MouseEvent e)",
      "possiamo usare il metodo mouseExited(MouseEvent e)",
      "possiamo usare il metodo mouseOutOfArea(MouseEvent e)",
      "possiamo usare il metodo mousePressed(MouseEvent e)"
    ],
    correct: 1
  },
  {
    id: "L94Q6",
    lesson: "094",
    type: "chiusa",
    question: "Quali eventi del mouse è possibile rilevare con l'interfaccia MouseListener?",
    options: [
      "Il click dei pulsanti, l'entrata e l'uscita dal componente",
      "Solo i movimenti all'interno di un componente",
      "Tutti i movimenti del mouse",
      "Solo il click dei pulsanti sul componente"
    ],
    correct: 0
  },
  {
    id: "L94Q7",
    lesson: "094",
    type: "chiusa",
    question: "Al fine di rilevare gli eventi generati dal mouse in un JFrame di Swing:",
    options: [
      "Dobbiamo implementare l'interfaccia MouseListener",
      "Dobbiamo estendere l'interfaccia Mouse",
      "Dobbiamo estendere l'interfaccia MouseUsb",
      "Dobbiamo estendere l'interfaccia MouseMotion"
    ],
    correct: 0
  },
  {
    id: "L94Q8",
    lesson: "094",
    type: "chiusa",
    question: "Quale fra i seguenti eventi non è fra quelli rilevati dall'interfaccia MouseListener?",
    options: [
      "mouseReleased()",
      "mouseMoved()",
      "mousePressed()",
      "mouseClicked()"
    ],
    correct: 1
  },
  {
    id: "L94Q9",
    lesson: "094",
    type: "aperta",
    question: "Descrivere il funzionamento dell'interfaccia MouseListener per la cattura degli eventi del mouse.",
    options: [""],
    correct: 0
  },
  {
    id: "L94Q10",
    lesson: "094",
    type: "aperta",
    question: "Descrivere quali sono gli eventi del mouse che è possibile catturare tramite l'interfaccia MouseListener.",
    options: [""],
    correct: 0
  },

  // ========== LEZIONE 095 ==========
  {
    id: "L95Q1",
    lesson: "095",
    type: "chiusa",
    question: "Come otteniamo l'altezza della barra del titolo di un JFrame di Swing?",
    options: [
      "con JFrame.bar.getHeight()",
      "con JFrame.getBar().getHeight()",
      "con getInsets().top",
      "con il metodo getBarHeight()"
    ],
    correct: 2
  },
  {
    id: "L95Q2",
    lesson: "095",
    type: "chiusa",
    question: "Per disegnare delle linee su un componente Swing:",
    options: [
      "Possiamo usare il metodo drawLine() della classe Graphics2D",
      "Possiamo usare il metodo addLine() della classe Graphics2D",
      "Possiamo usare il metodo paint() della classe JComponent",
      "Possiamo usare il metodo showLine() della classe Graphics"
    ],
    correct: 0
  },
  {
    id: "L95Q3",
    lesson: "095",
    type: "chiusa",
    question: "Per disegnare linee utilizzando il colore rosso in Swing possiamo usare:",
    options: [
      "Colore.ROSSO",
      "Color.RED",
      "Color(\"red\")",
      "Color.red()"
    ],
    correct: 1
  },
  {
    id: "L95Q4",
    lesson: "095",
    type: "chiusa",
    question: "La classe da utilizzare per selezionare un colore di disegno in Swing è:",
    options: [
      "java.lang.Color",
      "java.io.Color",
      "java.Color",
      "java.awt.Color"
    ],
    correct: 3
  },
  {
    id: "L95Q5",
    lesson: "095",
    type: "chiusa",
    question: "Per cancellare il contenuto di un componente Swing possiamo utilizzare:",
    options: [
      "super.paintComponent()",
      "clearBackround()",
      "clear()",
      "clean()"
    ],
    correct: 0
  },
  {
    id: "L95Q6",
    lesson: "095",
    type: "chiusa",
    question: "Cosa si utilizza per forzare il ridisegno di un componente Swing?",
    options: [
      "il metodo reset()",
      "il metodo paint()",
      "il metodo paintAll()",
      "il metodo repaint()"
    ],
    correct: 3
  },
  {
    id: "L95Q7",
    lesson: "095",
    type: "chiusa",
    question: "Per modificare il colore di disegno delle linee di un componente Swing:",
    options: [
      "Possiamo utilizzare il metodo Graphics2D.setColor()",
      "Possiamo utilizzare il metodo Graphics2D.color()",
      "Possiamo utilizzare il metodo JComponent.color()",
      "Possiamo utilizzare il metodo JComponent.setColor()"
    ],
    correct: 0
  },
  {
    id: "L95Q8",
    lesson: "095",
    type: "chiusa",
    question: "Il metodo \"Graphics2D.drawLine(A, B, C, D)\":",
    options: [
      "disegna un rettangolo",
      "disegna una linea dal punto A al punto B e una dal punto C al punto D",
      "disegna 3 linee: una da A a B, un'altra da B a C e la terza da C a D",
      "disegna una linea dal punto di coordinate (A,B) a quello di coordinate (C,D)"
    ],
    correct: 3
  }
);
