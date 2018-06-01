$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.title-animation').css('animation-play-state', 'running')

    /**este es mi controlador */
    let controller = new ScrollMagic.Controller()

    let perfilScene = new ScrollMagic.Scene({
            triggerElement: '#perfil'
        })
        .setClassToggle('#perfil', 'fade-in')
        .addTo(controller)

    let reactScene = new ScrollMagic.Scene({
            triggerElement: '#habilidades'
        })
        .setClassToggle('#react', 'translate3D')
        .addTo(controller)

    let javascriptsScene = new ScrollMagic.Scene({
            triggerElement: '#habilidades'
        })
        .setClassToggle('#javascript', 'translate3D')
        .addTo(controller)
    let nodesScene = new ScrollMagic.Scene({
            triggerElement: '#habilidades'
        })
        .setClassToggle('#nodejs', 'translate3D')
        .addTo(controller)

    let estudiosScene = new ScrollMagic.Scene({
            triggerElement: '#estudiostrigger'
        })
        .setClassToggle('#estudios', 'scale')
        .addTo(controller)


})