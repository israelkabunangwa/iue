let bars=document.querySelector('.bars i')
function openModal(){
    
    bars.addEventListener('click',()=>{
        let modal=document.querySelector('.modal')
        modal.style.display='block'
        bars.style.display='none'
    })
    
}
openModal()
function closeModal(){
    let closeM=document.querySelector('.closeM')
    let modal=document.querySelector('.modal')
    closeM.addEventListener('click',()=>{
        modal.style.display='none'
        bars.style.display='block'
    })

    let listes=document.querySelectorAll('.modal ul li')
    listes.forEach(list=>{
        list.addEventListener('click',()=>{
            modal.style.display='none'
            bars.style.display='block'
        })
    })
}
closeModal();

(function(){
    var scrollY = function(){
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var element=document.querySelector('.navBar')
    var top=element.getBoundingClientRect().top + scrollY()
    var onscrolling=function(){
      if(scrollY()>top){
          element.classList.add('fixed')
      }else{
        element.classList.remove('fixed') 
      }
    }
   window.addEventListener('scroll',onscrolling)
})();



function textesObserver(){
    const textes=document.querySelectorAll('.textAnim')
    let textOptions={
        rootMargin:"-20% 0px",
        threshold:0
    }
    const observertext=new IntersectionObserver(manageTextesIntersection,textOptions)
    function manageTextesIntersection(alltextes){
        alltextes.forEach(oneText=>{
            if(oneText.isIntersecting){
                oneText.target.style.opacity=1;
                oneText.target.classList.add("textAnimation")
            }
        })
    }
    textes.forEach(text=>{
        observertext.observe(text)
    })
} textesObserver()