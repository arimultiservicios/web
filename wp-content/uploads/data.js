var botName = "Admin",
botAvatar = "https://arimultiservicios.github.io/web/wp-content/uploads/2020/04/ESLOGAN-icono-1.png",
conversationData = {"homepage": {1: { "statement": [ 
"¡Hola! Mi nombre es Admin, soy el dueño de este sitio y me gustaría ser tu asistente aquí.", 
"Tengo solo un par de preguntas.", 
"¿Cómo te llamas?", 
], "input": {"name": "name", "consequence": 1.2}},1.2:{"statement": function(context) {return [ 
"Encantado de conocerte aquí, " + context.name  + "!", 
"Como puedes ver, nuestra web esta en mantenimiento programado.", 
"Lo sé, esto es muy incomodo tanto para usted como para nosotros, pero necesitamos un poco terminar.", 
"¿Te gustaría ser notificado cuando terminemos con la actualización?", 
];},"options": [{ "choice": "Si","consequence": 1.4},{ 
"choice": "No","consequence": 1.5}]},1.4: { "statement": [ 
"¡Genial! Por favor, deja tu correo electrónico aquí y te enviaré un mensaje cuando esté listo.", 
], "email": {"email": "email", "consequence": 1.6}},1.5: {"statement": function(context) {return [ 
"Lamento escuchar eso, " + context.name  + " :( Nos vemos la próxima vez...", 
];}},1.6: { "statement": [ 
"¡Recibido! ¡Gracias y te vemos pronto aquí!", 
"¡Que tengas un buen día!", 
]}}};