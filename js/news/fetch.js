function timeOut(){
  setTimeout(function(){
    window.scroll({top: 1000, behavior: "smooth"})
  },200)
}

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
// Loadmore solar
function solar1(){
  timeOut()

  fetch('./js/news/json/solar-system.json')
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
    document.querySelector("#solar").innerHTML = news
  })
}

function solar2(){
  timeOut()

  fetch('./js/news/json/solar-system.json')
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
    document.querySelector("#solar").innerHTML = news
  })
}
function solar3(){
  timeOut()
  fetch('./js/news/json/solar-system.json')
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
    document.querySelector("#solar").innerHTML = news
  })
}
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
// Loadmore Space
function space1(){
  timeOut()

  fetch('./js/news/json/space-flight.json')
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
    document.querySelector("#space").innerHTML = news
  })
}

function space2(){
  timeOut()

  fetch('./js/news/json/space-flight.json')
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
    document.querySelector("#space").innerHTML = news
  })
}
function space3(){
  timeOut()
  fetch('./js/news/json/space-flight.json')
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
    document.querySelector("#space").innerHTML = news
  })
}
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
// loadmore Galaxy
function gala1(){
  timeOut()

  fetch('./js/news/json/galaxies.json')
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
    document.querySelector("#gala").innerHTML = news
  })
}

function gala2(){
  timeOut()


  fetch('./js/news/json/galaxies.json')
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
    document.querySelector("#gala").innerHTML = news
  })
}
function gala3(){
  timeOut()

  fetch('./js/news/json/galaxies.json')
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
    document.querySelector("#gala").innerHTML = news
  })
}
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
  timeOut()

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
  timeOut()

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
  timeOut()
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
  timeOut()

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
  timeOut()


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
  timeOut()

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


// loadmore exo
function exo1(){
  timeOut()

  fetch('./js/news/json/exoplanet.json')
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
    document.querySelector("#exo").innerHTML = news
  })
}

function exo2(){
  timeOut()


  fetch('./js/news/json/exoplanet.json')
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
    document.querySelector("#exo").innerHTML = news
  })
}
function exo3(){
  timeOut()

  fetch('./js/news/json/exoplanet.json')
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
    document.querySelector("#exo").innerHTML = news
  })
}