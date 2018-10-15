
let movieInfo =  "http://www.omdbapi.com/?i=tt0372784&apikey=ab567937"
let movies_URL = "http://www.omdbapi.com/?s=batman&apikey=ab567937"
let moviesList = document.getElementById("moviesList")

function showMovies(movies){

    let movieItems = movies.Search.map(function(movie){
        return `<li id= ${movie.imdbID} class="movieItems">
        <label>${movie.Title}</label>  <button imdb="${movie.imdbID}" class="seeMore">see more</button>
        <p>${movie.Year}</p>
        
       
        </li>`
    })
   
    moviesList.innerHTML = movieItems.join("")

    $('.seeMore').click(function(e){

          let imdbId = $(this).attr("imdb")
          let movieDetailsURL = `http://www.omdbapi.com/?i=${imdbId}&apikey=ab567937`

        $.get(movieDetailsURL,function(data, status){
                console.log(data)
                let otherInfo =  `  <div class = "otherInfo"> 
                    <p>${data.Rated}</p>
                    <p>${data.Released}</p>
                    <p>${data.Director}</p>
                    <img src="${data.Poster}"></img>
                    </div>`
               console.log(otherInfo)
               let listElement = document.getElementById(imdbId)
                listElement.insertAdjacentHTML("beforeend", otherInfo)
            })
        
        
        })

       
  
        
}
    

      

       




function performRequest (){

    $.get(movies_URL,function(data){
        showMovies(data)
    })
}



performRequest()

