

// solarSystem

fetch('./js/news/json/solar-system.json')
    .then(respond => respond.json())
  
    .then(data =>{
        // console.log(data)
        for (var i=0;i<data.length;i++){
          Object.assign(data[i],{id: i})
        }
        const news = data
        .map(article =>{
          for (var i =0;i<5;i++){
            if(article.id == i){
              return `
              <a href="newsContent.html?id=${article.title}">
              <div class="thumb-nail">
                  <img src="${article.img}" alt="">
              </div>
              <div class="body">
                  <h2 class="title">${article.title}</h2>
                  <small class="text-muted">${article.time}</small>

                  <p>${article.summary}</p>
              </div>
              </a>
              `
            }
          }
        }).join("")
        document.querySelector('#solar').innerHTML = news
    })

// spaceFlight
    fetch('./js/news/json/space-flight.json')
    .then(response => response.json())
    .then(data => {
      
      for (var i=0;i<data.length;i++){
        Object.assign(data[i],{id: i})
      }
      const news = data
      .map(article =>{
        for (var i =0;i<5;i++){
          if(article.id == i){
            return `
            <a href="newsContent.html?id=${article.title}">
            <div class="thumb-nail">
                <img src="${article.img}" alt="">
            </div>
            <div class="body">
                <h2 class="title">${article.title}</h2>
                <small class="text-muted">${article.time}</small>

                <p>${article.summary}</p>
            </div>
            </a>
            `
          }
        }
      }).join("")
      // console.log(news)
      document.querySelector('#space').innerHTML = news
  
    })
// galaxy
fetch('./js/news/json/galaxies.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#gala").innerHTML = news;

})
// bigBang
fetch('./js/news/json/bigbang.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#bigbang").innerHTML = news;
  
})
// loadMore bigbang
function bigbang1(){
  window.scroll({top: 890, behavior: "smooth"})

  fetch('./js/news/json/bigbang.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =0;i<5;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#bigbang").innerHTML = news
  })
}

function bigbang2(){
  window.scroll({top: 890, behavior: "smooth"})

  fetch('./js/news/json/bigbang.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =5;i<10;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#bigbang").innerHTML = news
  })
}
function bigbang3(){
  window.scroll({top: 890, behavior: "smooth"})
  fetch('./js/news/json/bigbang.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =10;i<15;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#bigbang").innerHTML = news
  })
}
// blackHole
fetch('./js/news/json/black-hole.json')
.then(response => response.json())
.then(data => {
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#black").innerHTML = news;

})
// BlackHole Page
function black1(){
  window.scroll({top: 890, behavior: "smooth"})

  fetch('./js/news/json/black-hole.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =0;i<5;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#black").innerHTML = news
  })
}

function black2(){
  window.scroll({top: 890, behavior: "smooth"})

  fetch('./js/news/json/black-hole.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =5;i<10;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#black").innerHTML = news
  })
}
function black3(){
  window.scroll({top: 890, behavior: "smooth"})
  fetch('./js/news/json/black-hole.json')
  .then(respond => respond.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
    .map(article =>{
      for (var i =10;i<15;i++){
        if(article.id == i){
          return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>
  
              <p>${article.summary}</p>
          </div>
          </a>
          `
        }
      }
    }).join("")
    document.querySelector("#black").innerHTML = news
  })
}
// exoplanet
fetch('./js/news/json/exoplanet.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#exo").innerHTML = news;

})


// Loadmore Solar
document.querySelector("#solar-system .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/solar-system.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#solar-system .more").innerHTML = news;
  document.querySelector('#solar-system .loadMoreBtn').style.display= "none"
  })
})

// loadmore spaceflight
document.querySelector("#space-flight .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/space-flight.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#space-flight .more").innerHTML = news;
  document.querySelector('#space-flight .loadMoreBtn').style.display= "none"
  })
})
// loadMore exo
document.querySelector("#exoplanets .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/exoplanet.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#exoplanets .more").innerHTML = news;
  document.querySelector('#exoplanets .loadMoreBtn').style.display= "none"
  })
})
// loadMore galaxy
document.querySelector("#galaxies .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/galaxies.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
            <img src="${article.img}" alt="">
        </div>
        <div class="body">
            <h2 class="title">${article.title}</h2>
            <small class="text-muted">${article.time}</small>

            <p>${article.summary}</p>
        </div>
        </a>
        `
      }
    }
  }).join("")
  document.querySelector("#galaxies .more").innerHTML = news;
  document.querySelector('#galaxies .loadMoreBtn').style.display= "none"
  })
})