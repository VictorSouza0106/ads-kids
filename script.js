
function onPageInit(){
    // This function is call every page reload

    resizeCarousselPanel();
    startCarouselListener();
}

function resizeCarousselPanel(){

    const {CARD_WIDTH} = CValues;
    let carouselPanel = document.getElementById('carouselPanel');    
    
    carouselPanel.style.width = (carouselCardsQty() * CARD_WIDTH) + 'px';
}

function carouselCardsQty(){

    const {CARD_WIDTH, SKULL_IMG_WIDTH} = CValues;

    let availableWidth = (window.innerWidth - SKULL_IMG_WIDTH) / CARD_WIDTH;

    return Math.floor(availableWidth);
}

function startCarouselListener(){

    const {CARD_WIDTH} = CValues;

    const navigators = document.querySelectorAll('input[name="nav"]');
    const carouselItem = document.getElementsByClassName('carousel-item');

    for(const nav of navigators){
        nav.addEventListener('change', (event) => {

            for(const item of carouselItem){
                item.style.transform = "translateX(-" + CARD_WIDTH * (event.target.value - 1) + "px)"
            }
        })
    }
}

const CValues = {
    // Const values 

    CARD_WIDTH: 316, //316px
    SKULL_IMG_WIDTH: 550, // 500px + 50px margin

    
}