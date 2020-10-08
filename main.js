  // Studio Ghbli API
  const api_studio_ghbli = "https://ghibliapi.herokuapp.com/films/"

  const getMovies = () => {
      fetch(api_studio_ghbli)
      .then(res=>res.json())
      .then(data=>{
          let filmContainer = ' <h1>Movies</h1> '
          data.forEach(function(movie){
              filmContainer += ` <div class="row" id=${movie.id} >
                              <div class="col s12 m12" >
                              <div class="card">
                                  <h3>${movie.title}</h3>
                                  <div class="card-image">
                                      <img src=>
                                  </div>
                                  <div class="card-content">
                                      <p>${movie.description}</p>
                                  </div>
                                  <div class="card-action">
                                      <span>Director: ${movie.director} </span>
                                      <span>Producer: ${movie.producer} </span>
                                  </div>
                              </div>
                              </div>
                          </div> `
                      })
          document.getElementById('movies_content-container').innerHTML = filmContainer
          console.log(data)
      })
  }
  const complementary_db = "./complementary-db.json"
  const getComplementaryInformation = () => {
      fetch(complementary_db)
      .then(res=>res.json())
      .then(data=>{
          let CarouselContainer = ''
          data.forEach(function(movie){
              CarouselContainer += ` 
                <h3>${movie.title}</h3>
                <div class="title-film">
                    <a href=#${movie.id}><img src=${movie.image}></a>
                    <div class="movies_carousel-button">
                        <a  href=${movie.my_anime_list_link} target="_blank"><img class="my_anime_list-button" src="img/mal-logo.png" ></img></a>
                    </div>  
                </div>    
              `
              })
          document.getElementById('movies_carousel-container').innerHTML = CarouselContainer
   
         console.log(data)
      })
  }

  document.getElementById('movies_carousel-container').innerHTML = getComplementaryInformation()
  document.getElementById('movies_content-container').innerHTML =  getMovies()
