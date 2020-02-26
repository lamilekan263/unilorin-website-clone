
// the first news content
let newsHeadOne = document.getElementById('news-head-one');

let newsContentOne = document.getElementById('news-content-one');


newsHeadOne.addEventListener('click',() =>{
    if(newsContentOne.className == 'news-content'){
        newsContentOne.className = 'news-content-open'
    }else{
        newsContentOne.className ='news-content';
    }
})
// the second news content
let newsHeadTwo = document.getElementById('news-head-two');

let newsContentTwo = document.getElementById('news-content-two');


newsHeadTwo.addEventListener('click',() =>{
    if(newsContentTwo.className == 'news-content'){
        newsContentTwo.className = 'news-content-open'
    }else{
        newsContentTwo.className ='news-content';
    }
})


// the third news content
let newsHeadThree = document.getElementById('news-head-three');

let newsContentThird = document.getElementById('news-content-three');


newsHeadThree.addEventListener('onClick',() =>{
    if(newsContentThird.className == 'news-content'){
        newsContentThird.className = 'news-content-open'
    }else{
        newsContentThird.className ='news-content';
    }
})

// the fourth new content
let newsHeadFourth = document.getElementById('news-head-four');

let newsContentFour = document.getElementById('news-content-four');


newsHeadFourth.addEventListener('click',() =>{
    if(newsContentFour.className == 'news-content'){
        newsContentFour.className = 'news-content-open'
    }else{
        newsContentFour.className ='news-content';
    }
})


