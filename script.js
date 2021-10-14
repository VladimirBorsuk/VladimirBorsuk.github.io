window.onscroll = function(){
    var some_block = document.getElementById('some-block');
    var nav = document.querySelector('#some-block + .navbar');
    if(window.pageYOffset > some_block.clientHeight)
        nav.style.position = 'fixed';
    else
        nav.style.position = '';
}

