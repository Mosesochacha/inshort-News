document.addEventListener('DOMContentLoaded',()=>{
    const navbar =document.getElementById('navbar')
    const signup =document.getElementById('signup')
    const  search =document.getElementById('search')
    const btn_r =document.getElementById('btn-r')
    const btn_l =document.getElementById('btn-l')
    const signin=document.getElementById('signin')
    const loghere=document.getElementById('loghere')
    const forget=document.getElementById('forget')


     // CLICK EVENTS FOR LINKS
     search.addEventListener('click', (e) => {
          e.preventDefault()
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
            //  e.preventDefaul()
            signin.style.display ="none"
            search.style.display = "none"
            signup.style.display = "none"
            navbar.style.display = "flex"
            navbar.removeAttribute('hidden')
            search.removeAttribute('hidden')
            search.style.display = "flex"
    
    
             })

           forget.addEventListener('click',()=>{
            signin.style.display = "none"
            navbar.style.display = "none"
            signup.style.display = "flex"
            signup.removeAttribute('hidden')
            alert("Reset password by entering details again")
    

           })
         

  
})