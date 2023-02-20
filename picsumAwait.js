const app = {
    baseUrl : 'https://picsum.photos/v2',
    getPictures : async function(){
        const page = document.getElementById("page").value; //select
        const cantidad = 'https://picsum.photos/v2/list'; //text
        }
        renderPictures: function(data){
            let contenidoDiv = document.getElementById("contenido");
            contenidoDiv.innerHTML = "";
            const escalaGrises = document.getElementById("myCheck").checked; //checkbox
            const blur = document.getElementById("blur").value; //select
            let urlFoto = "";
            if(escalaGrises){
                urlFoto += `grayscale`
            }
            if(blur){
                urlFoto += `&blur=${blur}`
            }
            for(let item of data){ // ciclo para recorrer los datos;
                document.getElementById("contenido").innerHTML += 
            `<div class="card" style="width: 18rem;">
            <div class="card-body" text-align="center">
            <img src="${item.download_url}" width="250px"><br><br>
            <h5 class="card-subtitle mb-2 text-muted">ID: ${item.id}</h5>
            <h6>Autor: ${item.author}</h6>
            <a href="${item.url}" class="card-link" target="_blank">URL:<br>${item.url}</a>
            </div>
            </div>`
        }
    }
};
document.getElementById('btn_aceptar').addEventListener('click', app.getPictures);