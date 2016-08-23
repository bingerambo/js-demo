/**
 *  control heka animate css
 */


function $e(id){
    return document.getElementById(id);
}

window.onload = function(){
    var page1 = $e('page1');
    var page2 = $e('page2');
    var page3 = $e('page3');

    var music = $e('music');
    var audio = document.getElementsByTagName('audio')[0];


    // 触发碟片播放
    music.addEventListener('touchstart', function(){
        if(audio.paused){
            audio.play();
            music.setAttribute('class', 'music_play');
        }else{
            audio.pause();
            music.setAttribute('class', '');
        }
        // 暂停显示效果最好，但有兼容性问题
        /*if (audio.paused) {
            audio.play();
            this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();
            this.style.animationPlayState = "paused";
            this.style.webkitAnimationPlayState = "paused";
        };*/
    }, false);

    // 音乐停止时，碟片样式
    audio.addEventListener('ended', function(){
        music.setAttribute('class', '');
    }, false);

    page1.addEventListener('touchstart', function(){
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';

        setTimeout(function(){
            page2.setAttribute('class', 'page fadeout');
            page3.setAttribute('class', 'page fadein');
        },6000);

    }, false);


}