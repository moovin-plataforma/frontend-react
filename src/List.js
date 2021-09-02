import React from "react";


const [listagem, setListagem] = React.useState([])

React.useEffect(() => {
 
  fetch('https://api.github.com/users/MarjadeSordi/followers') 
    .then((respostadoServidor ) => respostadoServidor.json())
    .then((respostaCompleta) => setListagem(respostaCompleta)
    )   


}, []);  

console.log('opa', listagem)
 