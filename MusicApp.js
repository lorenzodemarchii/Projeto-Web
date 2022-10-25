var currentImgIndex= 1;
var ImgArray = [
'chat-left-heart-fill.svg',
'chat-left-heart-fill-red.png'
];

function changeLike(){
    console.log("gfonikjflsdf");
    if(currentImgIndex == ImgArray.length){
        currentImgIndex = 0
    }
    document.getElementById("like").src=ImgArray[currentImgIndex];
        currentImgIndex++;
}   
