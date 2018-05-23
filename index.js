let i = 0;
let prevBtn =  document.getElementById('previous');
let nextBtn =  document.getElementById('next');
let imgName = "";
const onLoad = (i) => {
    let frame = document.getElementById('frame');
    let image = document.createElement('img');
    // console.log('images/'+(data[i].src));
    imgName ='images/'+(data[i].src);
    image.id = "images";
    image.src = imgName;
    frame.appendChild(image)
    document.body.appendChild(frame);
    if(i <= 0){
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }else if(i >= data.length-1){
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }else if(i > 0 && i < data.length-1){
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }

}
onLoad(0);

const getPrevious = () => {
    console.log(imgName);
    removePrevious(i);
    i = i - 1;
    onLoad(i);

}
const getNext = () => {
    console.log(imgName);
    removePrevious(i);
    i= i + 1;
    onLoad(i);
}
const removePrevious = (i) => {
    let images = document.getElementById('images'); 
    frame.removeChild(images);
}