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
        document.querySelector(".single-trending-item1").innerHTML = carouselData

    })
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
        document.querySelector(".single-trending-item2").innerHTML = carouselData

    })
