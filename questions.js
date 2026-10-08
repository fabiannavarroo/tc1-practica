const QUESTIONS = [
  {
    "id": 1,
    "text": "Un proceso envía/recibe mensajes a/desde su:",
    "options": [
      {
        "id": "a",
        "text": "Interfaz"
      },
      {
        "id": "b",
        "text": "Enlace"
      },
      {
        "id": "c",
        "text": "Un proceso no puede recibir mensajes"
      },
      {
        "id": "d",
        "text": "Socket"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 2,
    "text": "Cuando los datos son transmitidos de A a B, el encabezado de la capa 4 de A es leído por la capa ___ de B:",
    "options": [
      {
        "id": "a",
        "text": "Física"
      },
      {
        "id": "b",
        "text": "Transporte"
      },
      {
        "id": "c",
        "text": "Las otras respuestas son incorrectas"
      },
      {
        "id": "d",
        "text": "Aplicación"
      }
    ],
    "answer": "c",
    "note": "El PDF resalta la opción b, pero su línea «Respuesta» indica c. Se usa la línea «Respuesta» para puntuar."
  },
  {
    "id": 3,
    "text": "¿Cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "a",
        "text": "Un proceso servidor es un proceso que inicia la comunicación"
      },
      {
        "id": "b",
        "text": "Un proceso es un programa que se ejecuta dentro de un host"
      },
      {
        "id": "c",
        "text": "Dentro del mismo host, dos procesos se comunican usando comunicación entre procesos (definida por el sistema operativo)"
      },
      {
        "id": "d",
        "text": "Los procesos en diferentes hosts se comunican intercambiando mensajes"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 4,
    "text": "Indique la afirmación FALSA:",
    "options": [
      {
        "id": "a",
        "text": "TCP no proporciona garantías de mantener un cierto rendimiento y tampoco UDP"
      },
      {
        "id": "b",
        "text": "TCP proporciona un flujo de bytes confiable entre cliente y servidor, pero UDP no"
      },
      {
        "id": "c",
        "text": "Ni TCP ni UDP garantizan que los datos serán entregados en un cierto tiempo"
      },
      {
        "id": "d",
        "text": "TCP asegura que los datos serán entregados en un cierto tiempo, pero UDP no"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 5,
    "text": "Indique cuál es la afirmación verdadera:",
    "options": [
      {
        "id": "a",
        "text": "Las demoras de propagación y de encolamiento son variables; la transmisión y el procesamiento son fijos"
      },
      {
        "id": "b",
        "text": "La demora de encolamiento es variable; la transmisión, propagación y procesamiento son fijos"
      },
      {
        "id": "c",
        "text": "La demora de procesamiento es variable; las de transmisión, propagación y encolamiento son fijas"
      },
      {
        "id": "d",
        "text": "Las demoras de propagación y de procesamiento son variables; la transmisión y el encolamiento son fijos"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 6,
    "text": "La capa ___ es la capa más cercana al medio de transmisión:",
    "options": [
      {
        "id": "a",
        "text": "Aplicación"
      },
      {
        "id": "b",
        "text": "Física"
      },
      {
        "id": "c",
        "text": "Datos"
      },
      {
        "id": "d",
        "text": "Transporte"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 7,
    "text": "DNS significa:",
    "options": [
      {
        "id": "a",
        "text": "Servicio de Nombre de Dominio"
      },
      {
        "id": "b",
        "text": "Sistema de Nombre de Dominio"
      },
      {
        "id": "c",
        "text": "Sistema de Red Dinámica"
      },
      {
        "id": "d",
        "text": "Sistema de Nombre Dinámico"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 8,
    "text": "En DNS, un ___ es un servidor cuya zona incluye todo el árbol:",
    "options": [
      {
        "id": "a",
        "text": "Servidor raíz"
      },
      {
        "id": "b",
        "text": "Servidor de dominio"
      },
      {
        "id": "c",
        "text": "Servidor de zona"
      },
      {
        "id": "d",
        "text": "Las otras respuestas son incorrectas"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 9,
    "text": "Considere un enlace compartido de 2Mbps usando conmutación de paquetes. Cada usuario envía datos el 20% del tiempo, y durante ese período envía continuamente a 1Mbps. Si hay cinco usuarios usando el enlace, ¿cuánta ancho de banda usan? ¿Hay alguna demora encolando?",
    "options": [
      {
        "id": "a",
        "text": "Usan un máximo de 2Mbps. No hay demora encolando."
      },
      {
        "id": "b",
        "text": "Usan un máximo de 5Mbps. Hay demora encolando."
      },
      {
        "id": "c",
        "text": "Usan un máximo de 2Mbps. Hay demora encolando."
      },
      {
        "id": "d",
        "text": "Usan un máximo de 5Mbps. Hay demora encolando."
      }
    ],
    "answer": "c",
    "note": "El PDF contiene dos opciones iguales (b y d). Se conservan las cuatro opciones y se usa la solución c indicada al final."
  },
  {
    "id": 10,
    "text": "Indique la afirmación VERDADERA:",
    "options": [
      {
        "id": "a",
        "text": "En una aplicación cliente-servidor, el servidor no necesita estar siempre activo"
      },
      {
        "id": "b",
        "text": "En una aplicación cliente-servidor, los clientes no pueden comunicarse entre sí"
      },
      {
        "id": "c",
        "text": "En una aplicación P2P la dirección IP de un par que se conecta se envía a todos los pares ya conectados"
      },
      {
        "id": "d",
        "text": "Una aplicación P2P puede tener un servidor centralizado"
      }
    ],
    "answer": "b",
    "note": "El PDF resalta la opción d, pero su línea «Respuesta» indica b. Se usa la línea «Respuesta» para puntuar."
  },
  {
    "id": 11,
    "text": "En una red conmutada por paquetes, la multiplexación estadística:",
    "options": [
      {
        "id": "a",
        "text": "Asegura que no ocurran demoras encolando al virtualizar el ancho de banda"
      },
      {
        "id": "b",
        "text": "Se utiliza para simular un circuito virtual con ancho de banda garantizado"
      },
      {
        "id": "c",
        "text": "Garantiza la ocupación total del ancho de banda para ser la primera de los transmisores que comparten el canal, en i de los demás"
      },
      {
        "id": "d",
        "text": "No ofrece un patrón fijo de transmisión de datos y el ancho de banda total se comparte a demanda"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 12,
    "text": "En una red donde todos los enlaces tienen una capacidad de 10Mb/s y donde 10 conexiones comparten de manera justa el único enlace de cuello de botella de la columna vertebral (este enlace de cuello de botella es el único enlace con más de 1 conexión), ¿cuál es el rendimiento de extremo a extremo por conexión?",
    "options": [
      {
        "id": "a",
        "text": "0.5 Mb/s"
      },
      {
        "id": "b",
        "text": "1 Mb/s"
      },
      {
        "id": "c",
        "text": "10 Mb/s"
      },
      {
        "id": "d",
        "text": "5 Mb/s"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 13,
    "text": "A medida que el paquete de datos se mueve de las capas superiores a las inferiores, los encabezados son ___:",
    "options": [
      {
        "id": "a",
        "text": "Modificados"
      },
      {
        "id": "b",
        "text": "Añadidos"
      },
      {
        "id": "c",
        "text": "Eliminados"
      },
      {
        "id": "d",
        "text": "Reorganizados"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 14,
    "text": "Si una red de comunicación de datos ofrece un servicio no orientado a conexiones:",
    "options": [
      {
        "id": "a",
        "text": "La tasa de fallos de la red siempre será mayor que la de una red con servicio orientado a conexiones"
      },
      {
        "id": "b",
        "text": "La red puede enrutar dos paquetes consecutivos por rutas diferentes (y por lo tanto volverse desorganizada)"
      },
      {
        "id": "c",
        "text": "La transferencia de datos será un servicio confirmado"
      },
      {
        "id": "d",
        "text": "Los recursos de la red pueden ser asignados al establecer conexiones a nivel de transporte"
      }
    ],
    "answer": "b",
    "note": ""
  },
  {
    "id": 15,
    "text": "Los protocolos definen:",
    "options": [
      {
        "id": "a",
        "text": "Una serie de recomendaciones que se le anima a seguir, que no son obligatorias"
      },
      {
        "id": "b",
        "text": "Sólo el formato y orden de los mensajes enviados y recibidos entre entidades de la red"
      },
      {
        "id": "c",
        "text": "Formato y orden de los mensajes enviados y recibidos entre entidades de la red y acciones tomadas en la transmisión y recepción de mensajes"
      },
      {
        "id": "d",
        "text": "Ninguna de las afirmaciones anteriores es correcta"
      }
    ],
    "answer": "c",
    "note": ""
  },
  {
    "id": 16,
    "text": "Suponga que el host A quiere enviar un archivo grande al host B. El camino desde el host A al host B consta de tres enlaces, cuyas velocidades son R1 = 1600 kbps, R2 = 1.5 Mbps, y R3 = 1 MBps. Suponiendo que no hay tráfico en la red, ¿cuál es la tasa de transferencia para el archivo?",
    "options": [
      {
        "id": "a",
        "text": "1.5 Mbps"
      },
      {
        "id": "b",
        "text": "Dependerá del tamaño del archivo, cuanto más pequeño el archivo, mayor será la tasa de transferencia"
      },
      {
        "id": "c",
        "text": "1600 kbps"
      },
      {
        "id": "d",
        "text": "1 MBps"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 17,
    "text": "La entrega de extremo a extremo del mensaje completo es responsabilidad de la capa ___:",
    "options": [
      {
        "id": "a",
        "text": "Aplicación"
      },
      {
        "id": "b",
        "text": "Física"
      },
      {
        "id": "c",
        "text": "Transporte"
      },
      {
        "id": "d",
        "text": "Datos"
      }
    ],
    "answer": "c",
    "note": ""
  },
  {
    "id": 18,
    "text": "Por defecto, HTTP utiliza el número de puerto:",
    "options": [
      {
        "id": "a",
        "text": "80"
      },
      {
        "id": "b",
        "text": "1000"
      },
      {
        "id": "c",
        "text": "21"
      },
      {
        "id": "d",
        "text": "100"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 19,
    "text": "Dos hosts se comunican a través de un switch. La tasa de transmisión entre el host emisor y el switch es R1 y entre el switch y el host receptor es R2. Suponiendo que el switch utiliza almacenamiento y retransmisión, ¿cuál es la demora total de transmisión que sufre un paquete?",
    "options": [
      {
        "id": "a",
        "text": "L/R1 + L/R2"
      },
      {
        "id": "b",
        "text": "L/(R1 + R2)"
      },
      {
        "id": "c",
        "text": "L/R1"
      },
      {
        "id": "d",
        "text": "L/R2"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 20,
    "text": "¿Qué protocolo de transporte garantiza un rendimiento mínimo en la transmisión de paquetes?",
    "options": [
      {
        "id": "a",
        "text": "TCP"
      },
      {
        "id": "b",
        "text": "UDP"
      },
      {
        "id": "c",
        "text": "Ninguno, ni TCP ni UDP"
      },
      {
        "id": "d",
        "text": "Ambos TCP y UDP"
      }
    ],
    "answer": "c",
    "note": ""
  },
  {
    "id": 21,
    "text": "Un switch procesa las siguientes capas de la pila de protocolos de Internet:",
    "options": [
      {
        "id": "a",
        "text": "Física y Enlace"
      },
      {
        "id": "b",
        "text": "Aplicación, Red y Enlace"
      },
      {
        "id": "c",
        "text": "Enlace y Sesión"
      },
      {
        "id": "d",
        "text": "Transporte, Red y Enlace"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 22,
    "text": "¿Cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "a",
        "text": "El encolamiento de paquetes se produce cuando la tasa de llegada de paquetes al enlace es igual a la capacidad del enlace de salida"
      },
      {
        "id": "b",
        "text": "La demora de procesamiento nodal, la demora de encolamiento, la demora de transmisión y la demora de propagación son cuatro fuentes de demora de paquetes"
      },
      {
        "id": "c",
        "text": "La demora de transmisión depende del ancho de banda del enlace y de la longitud del paquete"
      },
      {
        "id": "d",
        "text": "La demora de propagación depende de la longitud del enlace físico y de la velocidad de propagación en el medio"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 23,
    "text": "Dos hosts están enlazados a través de 3 enlaces, uno tras otro, con tasas R1 = 6Mbps, R2 = 1Mbps y R3 = 2Mbps. Uno envía al otro un archivo de tamaño 4·10^6 bytes. Indique cuál es el rendimiento y cuánto tiempo tomará para que el archivo llegue completamente a su destino:",
    "options": [
      {
        "id": "a",
        "text": "El rendimiento de transmisión es 6Mbps y el archivo llega en 5.33s"
      },
      {
        "id": "b",
        "text": "El rendimiento de transmisión es 8Mbps y el archivo llega en 0.5s"
      },
      {
        "id": "c",
        "text": "Transmission performance is 1Mbps and files takes 4s to arrive"
      },
      {
        "id": "d",
        "text": "El rendimiento de transmisión es 1Mbps y el archivo llega en 32s"
      }
    ],
    "answer": "c",
    "note": "El PDF resalta la opción d (32 s), pero su línea «Respuesta» indica c (4 s). Se usa la línea «Respuesta» para puntuar; conviene revisar esta pregunta con los apuntes."
  },
  {
    "id": 24,
    "text": "Para entregar un mensaje al programa de aplicación correcto que se ejecuta en un host, se debe consultar el ___:",
    "options": [
      {
        "id": "a",
        "text": "Las otras respuestas son incorrectas"
      },
      {
        "id": "b",
        "text": "Dirección física"
      },
      {
        "id": "c",
        "text": "Puerto"
      },
      {
        "id": "d",
        "text": "Dirección IP"
      }
    ],
    "answer": "c",
    "note": ""
  },
  {
    "id": 25,
    "text": "Acerca de las demoras:",
    "options": [
      {
        "id": "a",
        "text": "La demora de transmisión es variable"
      },
      {
        "id": "b",
        "text": "La demora de propagación es variable"
      },
      {
        "id": "c",
        "text": "La demora de procesamiento es variable"
      },
      {
        "id": "d",
        "text": "La demora de encolamiento es variable"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 26,
    "text": "Se diseña una aplicación de videoconferencia. ¿Qué protocolo de transporte elegiría para enviar el audio y el video?",
    "options": [
      {
        "id": "a",
        "text": "UDP, porque si se pierde algún paquete de audio o video, apenas será perceptible, siempre que no haya muchas pérdidas"
      },
      {
        "id": "b",
        "text": "UDP, porque necesito evitar la reducción de velocidad cuando la red se congestiona"
      },
      {
        "id": "c",
        "text": "TCP, porque necesito una garantía de que los paquetes enviados no se perderán y llegarán al destino ordenados"
      },
      {
        "id": "d",
        "text": "TCP, porque la videoconferencia es una aplicación orientada a conexiones entre dos conferenciantes"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 27,
    "text": "Un router procesa las siguientes capas de la pila de protocolos de Internet:",
    "options": [
      {
        "id": "a",
        "text": "Transporte, Red y Enlace"
      },
      {
        "id": "b",
        "text": "Aplicación, Red y Enlace"
      },
      {
        "id": "c",
        "text": "Física, Aplicación y Red"
      },
      {
        "id": "d",
        "text": "Física, Red y Enlace"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 28,
    "text": "La pila de protocolos de Internet está constituida por las siguientes capas:",
    "options": [
      {
        "id": "a",
        "text": "Física, enlace, red, transporte y aplicación"
      },
      {
        "id": "b",
        "text": "Física, acceso, enlace, red, transporte y aplicación"
      },
      {
        "id": "c",
        "text": "Física, acceso, enlace, red, transporte, presentación y aplicación"
      },
      {
        "id": "d",
        "text": "Física, enlace, red, transporte, sesión, presentación y aplicación"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 29,
    "text": "¿Por qué algunas aplicaciones como HTTP o SMTP utilizan TCP?",
    "options": [
      {
        "id": "a",
        "text": "Porque TCP permite usar sockets para conectarse al servidor"
      },
      {
        "id": "b",
        "text": "Porque necesitan asegurarse de que los datos llegan en un cierto tiempo"
      },
      {
        "id": "c",
        "text": "Porque necesitan realizar un intercambio de paquetes de control llamado apretón de manos de tres vías"
      },
      {
        "id": "d",
        "text": "Porque necesitan que los datos lleguen en orden sin perder nada"
      }
    ],
    "answer": "d",
    "note": ""
  },
  {
    "id": 30,
    "text": "Si los routers en una red descartan paquetes congestionados:",
    "options": [
      {
        "id": "a",
        "text": "Si el servicio se ofrece sobre una red conmutada por paquetes, los nodos de la red están obligados a recuperar los paquetes descartados"
      },
      {
        "id": "b",
        "text": "Los nodos deben prever posibles retransmisiones, incluso si el servicio no es orientado a conexiones"
      },
      {
        "id": "c",
        "text": "Sólo se puede usar si el servicio proporcionado no es orientado a conexiones"
      },
      {
        "id": "d",
        "text": "Es preferible que los paquetes sean descartados cerca del origen"
      }
    ],
    "answer": "c",
    "note": "El PDF resalta la opción d, pero su línea «Respuesta» indica c. Se usa la línea «Respuesta» para puntuar."
  },
  {
    "id": 31,
    "text": "En una red donde todos los enlaces tienen una capacidad de 10 Mb/s y donde 10 conexiones comparten de manera justa el único enlace de cuello de botella de la columna vertebral (este enlace de cuello de botella es el único enlace con más de 1 conexión), ¿cuál es el rendimiento de extremo a extremo por conexión?",
    "options": [
      {
        "id": "a",
        "text": "1 Mb/s"
      },
      {
        "id": "b",
        "text": "5 Mb/s"
      },
      {
        "id": "c",
        "text": "0.5 Mb/s"
      },
      {
        "id": "d",
        "text": "10 Mb/s"
      }
    ],
    "answer": "a",
    "note": ""
  },
  {
    "id": 32,
    "text": "Considere un enlace de 2,500 km, velocidad de propagación 2,500·10^5 m/s, y tasa de transmisión de 2Mbps. Si no hay demora de procesamiento ni de encolamiento, ¿cuánto tiempo tarda un paquete de 1,000 bits en propagarse sobre el enlace?",
    "options": [
      {
        "id": "a",
        "text": "10^-2ms"
      },
      {
        "id": "b",
        "text": "0,5ms"
      },
      {
        "id": "c",
        "text": "10,5ms"
      },
      {
        "id": "d",
        "text": "10ms"
      }
    ],
    "answer": "c",
    "note": "El PDF resalta la opción d (10 ms), pero su línea «Respuesta» indica c (10,5 ms). Se usa la línea «Respuesta» para puntuar; conviene revisar esta pregunta con los apuntes."
  },
  {
    "id": 33,
    "text": "Indique la afirmación FALSA:",
    "options": [
      {
        "id": "a",
        "text": "Las asignaciones nombre-dirección IP almacenadas por un servidor de nombres de dominio se eliminan después de un tiempo indicado por el parámetro TTL"
      },
      {
        "id": "b",
        "text": "Los servidores de nombres de dominio sólo almacenan asignaciones entre nombres y direcciones IP"
      },
      {
        "id": "c",
        "text": "Un servidor de nombres de dominio puede enviar todos los registros (RR) pertenecientes al nombre que se le solicitó en una sola respuesta"
      },
      {
        "id": "d",
        "text": "Hay cuatro tipos de servidores de nombres de dominio: servidores raíz, servidores TLD, servidores autoritativos y servidores locales"
      }
    ],
    "answer": "b",
    "note": ""
  }
];
