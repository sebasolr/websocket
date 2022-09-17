Iniciamos node con:{
    npm init -y
}
Instalamos sus dependencias {
    npm install --save express socket.io 
}
Instalamos la DevDependencias {
    npm i nodemon --save -D
}
Definimos atajos de programacion{
   en la seccion Scripts de el package.json
     "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"}

    Para llamarlos usamos los siguientes comandos:
    npm start // activa node index.js
    run npn dev // activa nodemon index.js
}