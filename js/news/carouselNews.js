setTimeout(function (){
    fetch('./js/news/json/carousel1.json')
    .then(respond => respond.json())
    .then(data =>  {
        const carouselData = data
        .map(article=>{
            return `
            <div class="trending-item">
            <div class="ti-pic">
                <img src="${article.img}" alt="">
            </div>
            <div class="ti-text">
                <h6><a href="newsContent.html?id=${article.title}">${article.title}</a></h6>
                <i class="far fa-clock"></i><span>${article.time}</span>
            </div>
        </div>
            `
        }).join("")
        // console.log(carouselData)
        document.querySelector(".item-1").innerHTML = carouselData
        // document.querySelector(".item-3").innerHTML = carouselData
        // document.querySelector(".item-5").innerHTML = carouselData
        // document.querySelector(".item-6").innerHTML = carouselData



    })
},100)
setTimeout(function(){
    fetch('./js/news/json/carousel2.json')   
    .then(respond => respond.json())
    .then(data =>  {
        const carouselData = data
        .map(article=>{
            return `
            <div class="trending-item">
            <div class="ti-pic">
                <img src="${article.img}" alt="">
            </div>
            <div class="ti-text">
                <h6><a href="newsContent.html?id=${article.title}">${article.title}</a></h6>
                <i class="far fa-clock"></i><span>${article.time}</span>
            </div>
        </div>
            `
        }).join("")
        // console.log(carouselData)
        document.querySelector(".item-2").innerHTML = carouselData
        // document.querySelector(".item-4").innerHTML = carouselData
        // document.querySelector(".item-6").innerHTML = carouselData
        // document.querySelector(".item-8").innerHTML = carouselData



    })
},100)
    
