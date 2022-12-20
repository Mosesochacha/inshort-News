 let likes = 0

document.addEventListener('DOMContentLoaded',(event)=>{
    event.preventDefault()
    const navbar =document.getElementById('navbar')
    const signup =document.getElementById('signup')
    const  search =document.getElementById('search')
    const btn_r =document.getElementById('btn-r')
    const signin=document.getElementById('signin')
    const loghere=document.getElementById('loghere')
    const forget=document.getElementById('forget')
    const bodys = document.getElementById('body') 
    const image = document.getElementById('poster')
    const times = document.getElementById('time')
    const loginbtn = document.getElementById('loginbtn')
    const landingpage = document.getElementById('landingpage')
    const getstarted= document.getElementById('getstarted')
    const startbtn = document.getElementById('startbtn')
     const page1 =document.getElementById('page1')
    const Bottom = document.getElementById('Bottom')
    const contactUs = document.getElementById('contactUs')
    const contact = document.getElementById('contact')
    const feutures = document.getElementById('feutures')
     const featureInfo = document.getElementById('featureInfo')
     const landImg = document.getElementById('landImg')


     landImg.addEventListener('click',()=>{
      contactUs.style.display ="none"
      featureInfo.style.display ='none'
      getstarted.style.display = "none"
     })


    feutures.addEventListener('click',()=>{
      featureInfo.removeAttribute('hidden')
      featureInfo.style.display ='flex'
      contactUs.style.display = "none"
     
      getstarted.style.display = "none"
    })

    contact.addEventListener('click' ,()=>{
      contactUs.removeAttribute('hidden')
      contactUs.style.display ="flex"
      featureInfo.style.display ='none'
      getstarted.style.display = "none"
    })
         startbtn.addEventListener('click',()=>{

       getstarted.removeAttribute('hidden')
       getstarted.style.display = "flex"
          contactUs.style.display ="none"
       featureInfo.style.display ='none'
      
    })

    loginbtn.addEventListener('click',(e)=>{
      e.preventDefault()
       landingpage.style.display="none"
       signup.removeAttribute('hidden')
       signup.style.display = 'flex'
    })




     // CLICK EVENTS FOR LINKS
     search.addEventListener('click', (e) => {
          e.preventDefault()
          signin.style.display = "none"
          signin.style.display = "none"
          search.removeAttribute('hidden')
          search.style.display = "flex"
       })


    btn_r.addEventListener('click', (event) => {
         event.preventDefault()
        navbar.style.display = "none"
        signup.style.display = "none"
        signin.style.display = "flex"
        signin.removeAttribute('hidden')
        bodys.style.display = "none"


         })

         loghere.addEventListener('click', (e) => {
              e.preventDefault()
            navbar.style.display = "none"
            signup.style.display = "none"
            signin.style.display = "flex"
            signin.removeAttribute('hidden')
    
    
             })


         login.addEventListener('click', (e) => {
             e.preventDefault()
            signin.style.display ="none"
            search.style.display = "none"
            signup.style.display = "none"
            navbar.style.display = "flex"
            navbar.removeAttribute('hidden')
            search.removeAttribute('hidden')
            search.style.display = "flex"
            bodys.removeAttribute('hidden')
            bodys.style.display = "flex"
          
    
    
             })
             

           forget.addEventListener('click',()=>{
            signin.style.display = "none"
            navbar.style.display = "none"
            signup.style.display = "flex"
            signup.removeAttribute('hidden')
            alert("Reset password by entering details again")
    

           })
  function showtime(){
            let dateTime = new Date ()
            let time =dateTime.toLocaleString()
            const times = document.getElementById('times')
            times.innerHTML=`
             ${time}
            `
          }
          let display = setInterval(showtime,1)
           

 const updateAllCatergory = ()=>{
    fetch("https://inshorts.deta.dev/news?category=all")
    .then((response)=>response.json())
    .then((News)=>{
        News.data.map(data=>{
            const title = data.title
            const Top_News = document.getElementById('Top_News')
            const News_list = document.createElement('p')
            News_list.innerHTML=`${title}`
            Top_News.appendChild(News_list)
            
        })
        
    })
 }



 const TopUpdate = () =>{
  fetch("https://inshorts.deta.dev/news?category=all")
  .then((response)=>response.json())
  .then((item)=>{
    const TopUpdateNews = item.data[0] 
    const Content = document.getElementById("Content")
      
    Content.innerHTML = `<ul>
    <h3 class="bg-info text-md-center " id="movie">INFORMATION</h3>
    <li>AUTHOR:  ${TopUpdateNews.author}</li>
    <li>TITLE:  ${TopUpdateNews.title}</li>
    <li>CONTENT:  ${TopUpdateNews.content}</li>
    <li>DATE:  ${TopUpdateNews.date}</li>
    <li>TIME:  ${TopUpdateNews.time}</li>
    <h6 id="liking">like <span id ="span">0</span> </h6>
    <p class="text-muted mt-auto mb-0">get more stories here! <a id="read" href= ""><u>Readmore</u></a></p>
    <ul>
    <i id="liking" class="material-icons" >favorite</i>
    div class="form-control">
        <input id= "inputv" type="text" placeholder="Type your coment">
         <button id = "btbtn" type="submit">comment</button>
        <div>
        <img src="" alt="">
        <img src="" alt="">
        <div id="comments" hidden> 
           <ul id= "commend">
           </ul>
        </div>
        </div>
        <a id = "show" href="">show Coments</a> <br>
       <a href="hide">hide comments</a>  
    
    
 
    `

    const image= document.getElementById("poster")
    image.innerHTML = `
    <h3 class="bg-info text-md-center " id="movie">Image</h3>
    <img id = "img" src=${TopUpdateNews.imageUrl} alt=""class="card-img rounded mx-auto d-block" >
    `

    
    const btbtn = document.getElementById('btbtn')
    btbtn.addEventListener('click',()=>{
      const commend = document.getElementById('commend')
      const inputv =document.getElementById('inputv')
      const value = inputv.value
      const comment = document.createElement('li' )
      comment.innerHTML = value
      commend.appendChild(comment)
      
    })
    const read = document.getElementById('read')
    read.addEventListener('click',()=>{
       window.open(TopUpdateNews.readMoreUrl)
    })
    const liking = document.getElementById('liking')
    liking.addEventListener('click',(e)=>{
      e.preventDefault()
     likes+= 1;
    document.getElementById('span').innerText = likes
    })
  })
 }
  
   

async function UpdateAllNews (){
  const  News_list = document.getElementById('Top_News')
  News_list.addEventListener('click',(e)=>{
    console.log("clicked");
    const Content = document.getElementById("Content")
    const  searchInput = document.getElementById ('searchInput')
    const value = searchInput.value
    fetch(`https://inshorts.deta.dev/news?category=${value}`)
  .then((response)=>  response.json())
  .then((items)=>{

    items.data.forEach(newsElems =>{
        if(e.target.innerHTML === newsElems.title){
          
            Content.innerHTML = `<ul>
          <h3 class="bg-info text-md-center " id="movie">INFORMATION</h3>
          <li>AUTHOR:  ${ newsElems.author} </li>
           <li>TITLE:  ${ newsElems.title}</li>
           <li>CONTENT:  ${ newsElems.content}</li>
          <li>DATE:  ${ newsElems.date}</li>
           <li>TIME:  ${ newsElems.time}</li>
           <p class="text-muted mt-auto mb-0">get more stories here! <a id="read" href= ""><u>Readmore</u></a></p>
        <ul>
        <div id="like" >
        <h6 id="liking">like <span id ="span"></span> </h6>
     </div>
     div class="form-control">
        <input id= "inputv" type="text" placeholder="Type your coment">
         <button id = "btbtn" type="submit">comment</button>
        <div>
        <img src="" alt="">
        <img src="" alt="">
        <div id="comments" hidden > 
           <ul id= "commend">
           </ul>
        </div>
        </div>
        <a id = "show" href="">show Coments</a> <br>
        <a href="hide">hide comments</a>
       `
       const btbtn = document.getElementById('btbtn')
    btbtn.addEventListener('click',()=>{
      const commend = document.getElementById('commend')
      const inputv =document.getElementById('inputv')
      const value = inputv.value
      const comment = document.createElement('li' )
      comment.innerHTML = value
      commend.appendChild(comment)
      
    })
       const liking = document.getElementById('liking')
    liking.addEventListener('click',(e)=>{
      e.preventDefault()
     likes+= 1;
    document.getElementById('span').innerText = likes
    })
          const image= document.getElementById("poster")
          image.innerHTML = `
          <img id = "img" src=${newsElems.imageUrl} alt=""class="card-img rounded mx-auto d-block" >
          `
          const read = document.getElementById('read')
          
    read.addEventListener('click',function(news){
      window.open(newsElems.readMoreUrl)
      
    })
        }
       })
  })
  })
  
 }




//  adding searching function

 const  search_btn =document.getElementById('search')
 const  searchInput = document.getElementById ('searchInput')
 search_btn.addEventListener('click',()=>{
  const Top_News = document.getElementById('Top_News')
  Top_News.innerHTML=""
  const value = searchInput.value

   fetch(`https://inshorts.deta.dev/news?category=${value}`)
   .then((response)=>response.json())
   .then((news)=>{
      news.data.forEach(newsElems =>{
        const Content = document.getElementById("Content")
      
    Content.innerHTML = `<ul>
    <h3 class="bg-info text-md-center " id="movie">INFORMATION</h3>
    <li>AUTHOR:  ${newsElems.author}</li>
    <li>TITLE:  ${newsElems.title}</li>
    <li>CONTENT:  ${newsElems.content}</li>
    <li>DATE:  ${newsElems.date}</li>
    <li>TIME:  ${newsElems.time}</li>
    <p class="text-muted mt-auto mb-0">get more stories here! <a id="read" href= ""><u>Readmore</u></a></p>
    <ul>
    div class="form-control">
    <input id= "inputv" type="text" placeholder="Type your coment">
     <button id = "btbtn" type="submit">comment</button>
    <div>
    <img src="" alt="">
    <img src="" alt="">
    <div id="comments" hidden> 
       <ul id= "commend">
       </ul>
    </div>
    </div>
    <div id="like" >
    <h6 id="liking">like <span id ="span">0</span> </h6>
 </div>
 <a id = "show" href="">show Coments</a> <br>
 <a href="hide">hide comments</a>
    `
    const btbtn = document.getElementById('btbtn')
    btbtn.addEventListener('click',()=>{
      const commend = document.getElementById('commend')
      const inputv =document.getElementById('inputv')
      const value = inputv.value
      const comment = document.createElement('li' )
      comment.innerHTML = value
      commend.appendChild(comment)
      
    })

    const liking = document.getElementById('liking')
    liking.addEventListener('click',(e)=>{
      e.preventDefault()
     likes+= 1;
    document.getElementById('span').innerText = likes
    })
    const Top_News = document.getElementById('Top_News')
    const News_list = document.createElement('p')
    
    News_list.textContent=`${newsElems.title}`
    Top_News.appendChild(News_list)
  
    
    const image= document.getElementById("poster")
    image.innerHTML = `
    <h3 class="bg-info text-md-center " id="movie">Image</h3>
    <img id = "img" src=${newsElems.imageUrl} alt=""class="card-img rounded mx-auto d-block" >
  
    `
    const read = document.getElementById('read')
    read.addEventListener('click',()=>{
       window.open(newsElems.readMoreUrl)
    })
      })
   })
 })


//  calling functions
 TopUpdate();
 updateAllCatergory();
  showtime();
  UpdateAllNews()
 
})