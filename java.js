const homegood =document.getElementById("home-good")
const homesmall =document.getElementById("home-small")

const homebed =document.getElementById("home-bed") 
const bigdata =document.getElementById("big-data")


//YuvrK7L6dVFtkJWzzy2SwGU0FMp_3ljyHrwfuxCaje8
let find=""
 const key ="YuvrK7L6dVFtkJWzzy2SwGU0FMp_3ljyHrwfuxCaje8"
 let page =1;

 async function finder(){
    find = homesmall.value
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${find}&client_id=${key}&per_page=15`

    const response = await fetch(url);

    const data =await response.json()

    if(page === 1){
        homebed.innerHTML=""
    }

    const results=  data.results;

    results.map((result)=>{
        const photo =document.createElement("img");
        photo.src =result.urls.small;
        const side =document.createElement("a")
        side.href =result.links.html;
        side.target ="_blank";

        side.appendChild(photo)
        homebed.appendChild(side)
    })
     bigdata.style.display = "block";
 }

 homegood.addEventListener("submit",(a)=>{
    a.preventDefault();
    page =1;
    finder()
 })

 bigdata.addEventListener("click",()=>{
    page++;
    finder()
 })