const News_API ="https://inshorts.deta.dev/news?category=all"
document.addEventListener('DOMContentLoaded',(e)=>{
    e.stopPropagation()
    const navbar =document.getElementById('navbar')
    const signup =document.getElementById('signup')
    const  search =document.getElementById('search')
    const btn_r =document.getElementById('btn-r')
    const btn_l =document.getElementById('btn-l')
    const signin=document.getElementById('signin')
    const loghere=document.getElementById('loghere')
    const forget=document.getElementById('forget')
    const bodys = document.getElementById('body') 
    const times = document.getElementById('time')
    const Top_News = document.getElementById('Top_News')


     // CLICK EVENTS FOR LINKS
     search.addEventListener('click', (e) => {
        //   e.preventDefault()
          signin.style.display = "none"
          signin.style.display = "none"
          search.removeAttribute('hidden')
          search.style.display = "flex"
       })


    btn_r.addEventListener('click', (e) => {
        //  e.preventDefaul()
        navbar.style.display = "none"
        signup.style.display = "none"
        signin.style.display = "flex"
        signin.removeAttribute('hidden')


         })

         loghere.addEventListener('click', (e) => {
            //  e.preventDefaul()
            navbar.style.display = "none"
            signup.style.display = "none"
            signin.style.display = "flex"
            signin.removeAttribute('hidden')
    
    
             })


         login.addEventListener('click', (e) => {
             //e.preventDefaul()
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
    fetch(News_API)
    .then((response)=>response.json())
    .then((News)=>{
        News.data.map(data=>{
            const title = data.title
            const Top_News = document.getElementById('Top_News')
            const News_list = document.createElement('li')
            News_list.innerHTML=`${title}`
            Top_News.appendChild(News_list)
            
        })
    })
 }
 const TopUpdate = () =>{
  fetch(News_API)
  .then((response)=>response.json())
  .then((item)=>{
    const TopUpdateNews = item.data[0]
      const title = TopUpdateNews.title
     const author = TopUpdateNews.author
      const content = TopUpdateNews.content
      const date= TopUpdateNews.date
      const time = TopUpdateNews.time
      console.log(time);
      const ReadMoreurl = TopUpdateNews.readMoreUrl
      console.log(ReadMoreurl);
      const Image = TopUpdateNews.imageUrl
      console.log(Image);



  })
 }
 TopUpdate();
 updateAllCatergory();
  showtime();
})