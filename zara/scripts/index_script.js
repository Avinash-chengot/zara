
let categ = [
    {
        image:"https://static.zara.net/photos///mkt/2021/12/aw21-north-velvet-room-subhomes/subhome-xmedia-video/w/571//large-landscape/subhome-xmedia-video_0.jpg?ts=1638916347776",
        name:"Man",
        description:"Introducing the Fall/Winter 2021 Collection"
    },
    {
        image:"./images/index/woman.jpg",
        name:"Woman",
        description:"Introducing the Fall/Winter 2021 Collection"
    },
    {
        image:"./images/index/kids.jpg",
        name:"Kids",
        description:"Introducing the Fall/Winter 2021 Collection"
    }
]

let parent_div = document.getElementById("categories") ;

categ.forEach(el=>{

    let category_div = document.createElement("div") ;
    category_div.onclick = () =>{
        window.location = "./products.html" ;
    }

    let image = document.createElement("img") ;
    image.src = el.image

    let caption = document.createElement("p") ;
    caption.innerText = el.description


    category_div.append(image , caption) ;

    parent_div.append(category_div) ;
}) ;

