console.log("Js Etkin");
var body=document.body;
var list=document.querySelector(`#list`);
var panelText=document.querySelector(`#panelText`);
var panelButton=document.querySelector(`#panelButton`);

var dizi=[
    {
        id:0,
        todo:"3 Litre Su iç",
        selected:false
    },
    {
        id:1,
        todo:"Ödevleri Yap",
        selected:false
    },
    {
        id:2,
        todo:"En Az 3 Saat Kodlama Yap",
        selected:false
    },
    {
        id:3,
        todo:"Yemek Yap",
        selected:false
    },
    {
        id:4,
        todo:"50 Sayfa kitap Oku",
        selected:false
    }
]


ekranayazdir();
console.log("dizi: ",dizi);
panelButton.addEventListener("click",veriekle);

function veriekle(){
    console.log("VeriEkleFonkBasla");
    
if(panelText.value!==""){
    let sonDiziId=dizi[dizi.length-1].id;

     dizi.push( 
        {
            id:sonDiziId+1,
            todo:panelText.value,
            selected:false
        }
    )
console.log("yeni dizi: ",dizi);
ekranayazdir();
}

else{
  uyariGoster();
}

panelText.value="";
console.log("veriEkleFonkBitir");
}

function ekranayazdir(){
    list.innerHTML="";
    for(let i=0;i<=dizi.length-1;i++){
        let ListeElemanAlani=document.createElement("span");
        ListeElemanAlani.setAttribute("class","listeElemanAlani");
        list.appendChild(ListeElemanAlani);
        
        let listeEleman=document.createElement("li");
        listeEleman.innerHTML=dizi[i].todo;
        ListeElemanAlani.appendChild(listeEleman);
        if(dizi[i].selected===true){
            listeEleman.setAttribute("class","seciliEleman");
        }
        
        listeEleman.addEventListener("click", ()=>{
            console.log("tiklandi")
            secici(dizi[i])
        });        
    }
}

function secici(i){
    if(i.selected===true){
        i.selected=false;
        ekranayazdir();
    }
    else if(i.selected===false){
        i.selected=true;  
        ekranayazdir();

    }
    console.log(i)
}

function uyariGoster(){
    document.getElementById("uyariDiv").style.visibility="visible";
    setTimeout(uyariKapat,2000);
}
function uyariKapat(){
    document.getElementById("uyariDiv").style.visibility="hidden";
}

function silici(){
    console.log("silici")
   

    for(let i=0;i<=dizi.length-1;i+1){
        console.log("fordonus",i);
        if(dizi[i].selected===true){
            
            console.log("silinecek: " , dizi[i])
            dizi.splice(i,1);
        }
        

        ekranayazdir();
    }


}


let siliciButton=document.createElement("button");
siliciButton.setAttribute("class","siliciButton");
body.appendChild(siliciButton);
siliciButton.addEventListener("click",silici);