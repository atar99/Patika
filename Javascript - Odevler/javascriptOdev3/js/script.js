console.log("js Etkin");

var menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      text: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      text: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      text: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
      text: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      text: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      text: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      text: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      text: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      text: `Red bean paste dessert, serving with honey.`,
    },
  ];
    console.log("menu: ", menu);

  let body=document.body;
  let section=document.section;
  let panelDiv=document.querySelector("#panelDiv");
  let menuDiv=document.querySelector("#menuDiv");
  let panelAllButton=document.querySelector("#all-button");
  let panelKoreaButton=document.querySelector("#korea-button");
  let panelJapanButton=document.querySelector("#japan-button");
  let panelChinaButton=document.querySelector("#china-button");

  function showcards(secili) {
    menuDiv.innerHTML="";
    filtreleme(secili).map((item) => {

      return (menuDiv.innerHTML += `

      <div id=${item.id} class="menu-card">
                
                <span class="menu-cardImageSpan">
                    <img class="menu-cardImageImg" src=${item.img} alt="">
                </span>
                
                <span class="menu-cardContent">
                    <span class="menu-cardContent-header">
                        <h1 class="menu-cardContent-title">${item.title}</h1>
                        <h1 class="menu-cardContent-price">${item.price} ₺</h1>
                    </span>

                    <p class="menu-cardContent-text">${item.text}</p>
                </span>

            </div>

      `);
    });
  }


  panelAllButton.addEventListener("click",()=>{
    showcards("All");;
  });
  panelKoreaButton.addEventListener("click",()=>{
    showcards("Korea");;
  });
  panelJapanButton.addEventListener("click",()=>{
    showcards("Japan");
  });
  panelChinaButton.addEventListener("click",()=>{
    showcards("China");
  });
  




  function filtreleme(category) {
    let yenidizi = [];
    menu.filter((item) => {
      if (item.category == category) {
        yenidizi.push(item);
      } else if (category == "All") {
        yenidizi = menu;
      }
    });
    console.log(yenidizi)
    
    return yenidizi;
  }

      

showcards("All");




/*
function showmenu(){

        for(i=0;i<=menu.length;i++){
                
                let menuCardDiv=document.createElement("div");
                let menuCardImageSpan=document.createElement("span");
                let menuCardImageImg=document.createElement("img");
                let menuCardContentSpan=document.createElement("span");
                let menuCardContentHeaderSpan=document.createElement("span");
                let menuCardContentTitleLabel=document.createElement("h1");
                let menuCardContentPriceLabel=document.createElement("h1");
                let menuCardContentTextLabel=document.createElement("p");

                var menuCardId=menu[i].id;
                var menuCardImg=menu[i].img;
                var menuCardTitle=menu[i].title;
                var menuCardPrice=`${menu[i].price} ₺`;
                var menuCardText=menu[i].text;

                menuCardDiv.setAttribute("id",menuCardId);
                menuCardDiv.setAttribute("class","menu-card");

                menuCardImageSpan.setAttribute("class","menu-cardImageSpan");
                menuCardContentSpan.setAttribute("class","menu-cardContent");

                menuCardImageImg.setAttribute("id",menuCardImg);
                menuCardImageImg.setAttribute("class","menu-cardImageImg");


                menuCardContentHeaderSpan.setAttribute("class","menu-cardContent-header");

                menuCardContentTitleLabel.setAttribute("id",menuCardTitle);
                menuCardContentTitleLabel.setAttribute("class","menu-cardContent-title");
                menuCardContentPriceLabel.setAttribute("id",menuCardPrice);
                menuCardContentPriceLabel.setAttribute("class","menu-cardContent-price");

                menuCardContentTextLabel.setAttribute("id",menuCardText);
                menuCardContentTextLabel.setAttribute("class","menu-cardContent-text");

                menuCardImageImg.setAttribute("src",menuCardImg);
                menuCardContentTitleLabel.innerHTML=menuCardTitle;
                menuCardContentPriceLabel.innerHTML=menuCardPrice;
                menuCardContentTextLabel.innerHTML=menuCardText;


                menuDiv.appendChild(menuCardDiv);
                menuCardDiv.appendChild(menuCardImageSpan);
                menuCardDiv.appendChild(menuCardContentSpan);

                menuCardImageSpan.appendChild(menuCardImageImg);

                menuCardContentSpan.appendChild(menuCardContentHeaderSpan);
                menuCardContentHeaderSpan.appendChild(menuCardContentTitleLabel);
                menuCardContentHeaderSpan.appendChild(menuCardContentPriceLabel);

                menuCardContentSpan.appendChild(menuCardContentTextLabel);
        }
}
*/