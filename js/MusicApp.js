var currentImgIndex= 1;
var ImgArray1 = [
'svg/chat-left-heart-fill.svg',
'png/chat-left-heart-fill-red.png'
];

var ImgArray2 = [
    'svg/chat-left-heart-fill.svg',
    'png/chat-left-heart-fill-red.png'
];

var ImgArray3 = [
    'svg/chat-left-heart-fill.svg',
    'png/chat-left-heart-fill-red.png'
];

var ImgArray4 = [
    'svg/chat-left-heart-fill.svg',
    'png/chat-left-heart-fill-red.png'
];


function changeLike1(){
    if(currentImgIndex == ImgArray1.length){
        currentImgIndex = 0
    }
    document.getElementById("like1").src=ImgArray1[currentImgIndex];
        currentImgIndex++;
}   
function changeLike2(){
    if(currentImgIndex == ImgArray2.length){
        currentImgIndex = 0
    }
    document.getElementById("like2").src=ImgArray2[currentImgIndex];
        currentImgIndex++;
}   
function changeLike3(){
    if(currentImgIndex == ImgArray3.length){
        currentImgIndex = 0
    }
    document.getElementById("like3").src=ImgArray3[currentImgIndex];
        currentImgIndex++;
}  
function changeLike4(){
    if(currentImgIndex == ImgArray4.length){
        currentImgIndex = 0
    }
    document.getElementById("like4").src=ImgArray4[currentImgIndex];
        currentImgIndex++;
}  
