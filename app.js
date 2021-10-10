let videobtn = document.querySelectorAll('.vid-btn');



videobtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src =src;
    })
});
