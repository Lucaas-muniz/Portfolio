(function () {

    var $menu = document.getElementById('menu');
    var $btn = document.getElementById('btnHamburguer');
    var $js = document.querySelector('body');

    $js.classList.remove('no-js');
    $js.classList.add('js');

    $btn.addEventListener('click', function () {
        if ($menu.style.display == 'block') {
            $menu.style.display = 'none';
            $js.style.overflowY = 'auto';
        } else {
            $menu.style.display = 'block';
            $js.style.overflow = 'hidden';

        }


    })

})()