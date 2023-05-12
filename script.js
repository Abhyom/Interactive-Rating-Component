tailwind.config={
    theme: {
      extend: {
         fontFamily: {
            'sans-serif': ['Overpass', 'sans-serif'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
     },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
    
  }
}
}
const rating= document.querySelector('#rating')
const submit=document.querySelector('#submitBtn');
const score=document.querySelectorAll('.score');
score.forEach(eachBtn=>{
  eachBtn.addEventListener('focus', (e)=>{
    rating.innerText=e.target.innerText;
    submit.addEventListener('click', ()=>{
        document.querySelector('.thankYouCont').classList.remove('hidden');
        document.querySelector('.mainCont').classList.add('hidden');
      })
  })
 })












  