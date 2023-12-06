const box= document.querySelector('box')
document.addEventListener('click',function(e){
    if(e.target.id==='img1'){
        this.body.style.backgroundImage="url(img1.png)"
    }
    else if(e.target.id==='img2'){
        this.body.style.backgroundImage="url(img2.png)"
    }
    else if(e.target.id==='img3'){
        this.body.style.backgroundImage="url(img3.png)"
    }
    else if(e.target.id==='img4'){
        this.body.style.backgroundImage="url(img4.png)"
    }
    else if(e.target.id==='img5'){
        this.body.style.backgroundImage="url(img5.png)"
    }
    else if(e.target.id==='img6'){
        this.body.style.backgroundImage="url(img6.png)"
    }
})