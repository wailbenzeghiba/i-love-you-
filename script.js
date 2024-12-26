const wrapper = document.querySelector('.wrapper'); 
const question = document.querySelector('.question'); 
const yesbtn = document.querySelector('.yes-btn'); 
const nobtn = document.querySelector('.no-btn'); 


const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = nobtn.getBoundingClientRect();
 
function changeimage()
{
    var img= document.getElementById('img');
    img.src = 'images/yayy.gif'
}
function changeimagetwo()
{
    var img= document.getElementById('img');
    img.src = 'images/angry.gif'

}


yesbtn.addEventListener('click' , () => {
    question.innerHTML = 'Yayyy I Love You';
    Image.innerHTML = 'images/yayy.gif';
    yesbtn.style.display = 'none';
    nobtn.style.display = 'none';
})



nobtn.addEventListener('click' , () => {
    question.innerHTML = 'Fuck you!';
    Image.innerHTML = 'images/angry.gif';
    yesbtn.style.display = 'none';
    nobtn.style.display = 'none';
})


nobtn.addEventListener('mouseover' , () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - nobtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - nobtnRect.height)) + 1;

    nobtn.style.left = i + 'px';
    nobtn.style.top = j + 'px';

})
