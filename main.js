Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach ('#camera');
function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagen_capturada" src="'+data_uri+'">';
    });
}
console.log('ml5 version :', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mLb9V18BD/model.json', modelLoaded);
function modelLoaded(){
    console.log('el modelo ha sido cargado')
}
function check(){
    img=document.getElementById('imagen_capturada');
    classifier.classify(img, comparar_resultado);
}
function comparar_resultado(error, resultados){
    if (error){
        console.log(error);
    } else{
    console.log(resultados);
    document.getElementById("nombre_obj_iden").innerHTML=resultados[0].label;
    document.getElementById("presicion_obj_iden").innerHTML=resultados[0].confidence.toFixed(3);
    }
}