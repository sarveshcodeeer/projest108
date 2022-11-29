function bts(){

navigator.mediaDevices.getUserMedia({audio : true}) ; 

}
classifier = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/kTTYfdgkf/model.json" , modelReady )

function modelReady() {

console.log("model has loadeed commander")
classifier.classify(gotResults)


}

function gotResults(error , results) {
    console.log(results)
if(error){

console.log(error)

}
else{
    console.log(results)
    document.getElementById("name").innerHTML = results[0].label ; 

    if(results[0].label=="barking"){
        document.getElementById("img").src = "dog.png" ; 
    }
    if(results[0].label=="meowing"){
        document.getElementById("img").src = "cat.png" ; 
    }
    if(results[0].label=="roar"){
        document.getElementById("img").src = "lion.png" ; 
    }
    if(results[0].label=="mooing"){
        document.getElementById("img").src = "cow.png" ; 
    }
}
}