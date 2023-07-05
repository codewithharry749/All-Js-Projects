// let API_key = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
// let base_url = "https://api.themoviedb.org/3";
// let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Popular = document.getElementById("Popular");
const Theatre = document.getElementById("Theatre")
const Kids = document.getElementById("Kids")
const Drama = document.getElementById("Drama")
const Comedie = document.getElementById("Comedie");
const heading = document.querySelector(".heading")
const content = document.getElementById("Content-Box");

Popular.addEventListener("click",(e)=>{
    heading.innerHTML = '<h1>Popular Movies</h1>'
    const searchValue = "Popular"
    ShowPopular(searchValue);
})

Theatre.addEventListener("click",()=>{
    heading.innerHTML = '<h1>Theater Movies</h1>'
    const searchValue = "Theatre"
    ShowTheatre(searchValue);
   
})

Kids.addEventListener("click",()=>{
    heading.innerHTML = '<h1>Kids Movies</h1>'
    const searchValue = "Kids"
    ShowKids(searchValue);
})

Drama.addEventListener("click",()=>{
    heading.innerHTML = '<h1>Drama Movies</h1>'
    const searchValue = "Drama"
    ShowDrama(searchValue);
})

Comedie.addEventListener("click",()=>{
    heading.innerHTML = '<h1>Comedie Movies</h1>'
    const searchValue = "Comedie"
    ShowComedie(searchValue);
})

let arr=["Popular","Theatre","Kids","Drama","Comedie"];

const ShowPopular = async(searchValue) =>{
    
    const url = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
     arr = [];
    if(url.status>=200 && url.status<300){
        const res = await url.json()
        // console.log(url.status)
        arr = res.Search
        // console.log(arr)
    }
    else{
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayMovie();
}
ShowPopular()

const ShowTheatre = async(searchValue) =>{
    
    const url = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
     arr = [];
    if(url.status>=200 && url.status<300){
        const res = await url.json()
        // console.log(url.status)
        arr = res.Search
        // console.log(arr)
    }
    else{
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayMovie();
}

const ShowKids = async(searchValue) =>{
    
    const url = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
     arr = [];
    if(url.status>=200 && url.status<300){
        const res = await url.json()
        // console.log(url.status)
        arr = res.Search
        // console.log(arr)
    }
    else{
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayMovie();
}

const ShowDrama = async(searchValue) =>{
    
    const url = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
     arr = [];
    if(url.status>=200 && url.status<300){
        const res = await url.json()
        // console.log(url.status)
        arr = res.Search
        // console.log(arr)
    }
    else{
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayMovie();
}

const ShowComedie = async(searchValue) =>{
    
    const url = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
     arr = [];
    if(url.status>=200 && url.status<300){
        const res = await url.json()
        // console.log(url.status)
        arr = res.Search
        console.log(arr)
    }
    else{
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayMovie();
}

const displayMovie = () =>{
    content.innerHTML = '';
    arr.forEach((ele)=>{
        // console.log(ele)
        content.innerHTML += `
        <div class="col-2">
        <img src=${ele.Poster} alt="not found" class="img-fluid">
        <p class="releaseDate">${ele.Year}</p>
        <p class="title">${ele.Title}</p>
    </div>
        `;
    })
}