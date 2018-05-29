let i = 0;
let prevBtn =  document.getElementById('previous');
let nextBtn =  document.getElementById('next');
let imgName = "", quotetemp= "";
const onLoad = (i) => {
    settingBtn();
    addData();
}
onLoad(0);

function addData () {
    let frame = document.getElementById('frame');
    let image = document.createElement('img');
    
    imgName ='images/'+(data[i].src);
    image.id = "images";
    image.src = imgName;
    
    const table = document.createElement('table');
    table.id = "table";
    help("Name", table, "firstName");
    help("Last Name",table,"lastName");
    help("Title",table, "title");
    help("Originality",table,"nationality");
    help("Skills",table,"skills");
    help("Why Software Developer",table,"whySofterDeveloper");
    help("Long term vision",table,"longTermVision");
    help("Motivated by",table,"motivatesMe");
    help("Favourite Quote",table,"favoriteQuote");
    help("Joined Integrify on",table,"joinedOn");

    frame.appendChild(image);
    frame.appendChild(table);
    
}
function help(label,table,property){
    
    if(data[i][property] == "" ){
        return;
    }
    let tr = document.createElement('tr');
    let tdLabel = document.createElement('td');
    tdLabel.className = "td-label"
    let td = document.createElement('td');
    
    tdLabel.textContent = label;
    td.textContent = data[i][property];
    tr.appendChild(tdLabel);
    tr.appendChild(td);
    table.appendChild(tr);
}


function settingBtn () {
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

const getPrevious = () => {
    console.log(imgName);
    refresh();
    i = i - 1;
    onLoad(i);
    
}
const getNext = () => {
    console.log(imgName);
    refresh();
    i= i + 1;
    onLoad(i);
}
const addQuote = () => {
    let quote = document.createElement('div');
    quotetemp = '#'+(data[i].favoriteQuote);
    let sum = document.createTextNode(quotetemp);
    quote.appendChild(sum);
    quote.className = "quote";
    document.body.appendChild(quote);
}


const refresh = () =>{
    let frame = document.getElementById('frame');
    const images = document.getElementById('images');
    const table = document.getElementById('table');
    
    frame.removeChild(images);
    frame.removeChild(table);
}