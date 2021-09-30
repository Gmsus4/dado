const button = document.getElementById("lanzar");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let random = Math.floor(Math.random() * (7 - 1)) + 1;

    if(random == 1){
        document.getElementById("imagenDado").src="d1.png";
    } else if (random == 2){
        document.getElementById("imagenDado").src="d2.png";
    } else if (random == 3){
        document.getElementById("imagenDado").src="d3.png";
    } else if (random == 4){
        document.getElementById("imagenDado").src="d4.png";
    } else if (random == 5){
        document.getElementById("imagenDado").src="d5.png";
    } else if (random == 6){
        document.getElementById("imagenDado").src="d6.png";
    } else{
        document.write("Error");
    }
});