(function () {

    var $botoes = document.querySelectorAll('.link');
    var $menu = document.getElementById('menu');
    var $btn = document.getElementById('btnHamburguer');
    var $js = document.querySelector('body');
    var $input = document.getElementById('checkbox-menu');


    $js.classList.remove('no-js');
    $js.classList.add('js');

    $btn.addEventListener('click', function () {
        if ($menu.style.display == 'block') {
            $menu.style.display = 'none';
            $js.style.overflowY = 'scroll';

        } else {
            $menu.style.display = 'block';
            $js.style.overflow = 'hidden';
        }
    });

    $botoes.forEach(function (link) {
        link.addEventListener('click', function () {
            $js.style.overflowY = 'scroll';
            $menu.style.display = 'none';
            $input.checked = false;
        });
    });




    var $btnTopo = document.getElementById('voltarTopo');

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 600) {
            $btnTopo.style.display = 'block';
        } else {
            $btnTopo.style.display = 'none';
        }
    });

    $btnTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });




    var $paragrafo = document.querySelector('.BoasVindasTexto');
    var $texto = $paragrafo.innerHTML;
    var index = 0;

    const escrever = () => {
        $paragrafo.innerHTML = $paragrafo.innerHTML.replace('|', '');

        if ($texto.length > index) {
            if (index == 0) {
                $paragrafo.innerHTML = $texto.charAt(index);
            } else {
                $paragrafo.innerHTML += $texto.charAt(index);
            }

            $paragrafo.innerHTML += '|';

            index++;
            setTimeout(escrever, 80);
        }
    }

    escrever();
    
})()