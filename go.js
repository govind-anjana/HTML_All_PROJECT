function demo(x){
        topw=[{
            productName:"Woman Cotton Topwear",
            product:"Topwear",
            price:"30",
            image:"https://www.sinina.com/images/detailed/21/4217621102.webp"
        },
        {
            productName:"Woman colorback Topwear",
            product:"Topwear",
            price:"40",
            image:"https://m.media-amazon.com/images/I/611hStnpziL._SY741_.jpg"
        },
        {
            productName:"Woman Red T-Shirt",
            product:"Topwear",
            price:"50",
            image:"https://m.media-amazon.com/images/I/71ylyX0N3aL._AC_UY1100_.jpg"
        }];
       bott=[ {
            productName:"Faction Indian Bottomwear",
            product:"Bottomwear",
            price:"49",
            image:"https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw816b647e/large/clxiwfz183hiw3j4xeoat_8909006008831_1.jpg"
        },
        {
            productName:"Faction Indian Bottomwear",
            product:"Bottomwear",
            price:"49",
            image:"https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw816b647e/large/clxiwfz183hiw3j4xeoat_8909006008831_1.jpg"
        }
        
    ];
       jack=[ {
            productName:"Boy Brown Jacket",
            product:"Jacket",
            price:"150",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NgQ9Q9FCj2daOUdxliGVPiKJQDpwwo_frQ&usqp=CAU"
        },
        {
            productName:" Men's Black Jacket",
            product:"Jacket",
            price:"250",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdWQLziSZYe6Io1ohYI-dAzsvvaMpc_vCRw&usqp=CAU"
        },
        {
            productName:"Red Men's Jacket",
            product:"Jacket",
            price:"450",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhcahOzTczWhasUavkh1pXfydnN7_wFtL3g&usqp=CAU"
        },
        {
            productName:"Gray BLack Jacket",
            product:"Jacket",
            price:"450",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGSv31XyRGso1S-0aGYZ2j6znK0l0zjBBZA&usqp=CAU"
        }] ;
        watchs=[
            {
                productName:"Smart Watch",
                product:"Watch",
                price:"1450",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKjBLpNlrbmF2gAsqWwPOFJggyM50RAF5Rg&usqp=CAU"
            },
            {
                productName:"Watch",
                product:"Watch",
                price:"650",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStm71BD6_aNSvdXV8vPsNU9BHyXf5KdcOlNQ&usqp=CAU"
            }
        ]
        
         
  main=document.getElementById("main");
switch(x){
    case "a1":
          
    case "a2":
       for(i=0;i<topw.length;i++){
        a=document.createElement("div");
        a.className="product";
        a.innerHTML=`
        <img src=${topw[i].image}>
        <h6>${topw[i].productName}<br>&#36 ${topw[i].price}</h6>`;
        main.appendChild(a);
       };
       break;
       case "a3":
        for(i=0;i<bott.length;i++){
            a=document.createElement("div");
            a.className="product";
            a.innerHTML=`<img src=${bott[i].image}>
            <h6>${bott[i].productName}<br>&#36 ${bott[i].price}</h6>`
            main.appendChild(a);
        }
        break;
       case "a4":
        for(i=0;i<jack.length;i++){
            a=document.createElement("div");
            a.className="product";
            a.innerHTML=`<img src=${jack[i].image}>
            <h6>${jack[i].productName}<br>&#36 ${jack[i].price}</h6>`
            main.appendChild(a);
        }
        break;
       case "a5":
        for(i=0;i<watchs.length;i++){
            a=document.createElement("div");
            a.className="product";
            a.innerHTML=`<img src=${watchs[i].image}>
            <h6>${watchs[i].productName}<br>&#36 ${watchs[i].price}</h6>`
            main.appendChild(a);
        }
        break;
}
}
function back(){
const laa= document.getElementById('la').value;
document.body.style.backgroundColor=laa;
}
go=(x)=>{
     document.getElementById("so").style.color=x;
}
     