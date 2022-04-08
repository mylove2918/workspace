const key = {
    keyDown : {},
    keyValue : {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        88: 'attack'
    }
}

// 수리검 배열
const bulletComProp = {
    launch: false,
    arr: []
}

const gameProp = {
    screenWidth : window.innerWidth,
    screenHeight : window.innerHeight

}

const renderGame = () => {
    hero.keyMotion();
    
    bulletComProp.arr.forEach((arr, i) => {
        arr.moveBullet();
    })
    window.requestAnimationFrame(renderGame);        
}

const windowEvent = () => {
    // 키를 누를때
    window.addEventListener('keydown', e => {        
        key.keyDown[key.keyValue[e.which]] = true;
        // console.log(key.keyDown)
        // console.log(e.which)        
    })
    // 키를 뗄때
    window.addEventListener('keyup', e => {
        key.keyDown[key.keyValue[e.which]] = false;        
    })
}

const loadImg = () => {
    const preLoadImgSrc = ['../../lib/images/ninja_attack.png','../../lib/images/ninja_run.png','../../lib/images/ninja_idle.png']
    preLoadImgSrc.forEach(arr => {
        const img = new Image();
        img.src = arr;
    })
}

let hero;

const init = () => {
    hero = new Hero('.hero');
    loadImg();
    windowEvent();
    renderGame();
    console.log(hero.position());
}

window.onload = () => {
    init();
}