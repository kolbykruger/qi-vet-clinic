document.addEventListener('DOMContentLoaded', () => {
    const carouselAction = document.getElementById('carouselAction')
    if (carouselAction) {
        carouselAction.addEventListener('click', () => {
            const parent = carouselAction.closest('section')
            const nextSection = parent ? parent.nextElementSibling : null

            nextSection.scrollIntoView({
                behavior: 'smooth',
            })
        })
    }
})

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function () {
        if (this.elem) {
            this.elem.addEventListener('change', function (e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            })
        }
    },
}.init()

//Populate Blog Category select
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
        }
    }
    return false
}
var blogCat = getUrlParameter('category')
if (blogCat) {
    $('#blog_categories').val(blogCat)
} else {
    $('#blog_categories').val($('#blog_categories option:first').val())
}

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>')

//Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordion = document.querySelectorAll('.accordion-title')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            let panel = this.nextElementSibling

            if (panel.style.maxHeight) {
                this.classList.remove('open')
                panel.style.maxHeight = null
                panel.setAttribute('aria-hidden', true)
                panel.setAttribute('aria-expanded', false)
            } else {
                this.classList.add('open')
                panel.style.maxHeight = panel.scrollHeight + 'px'
                panel.setAttribute('aria-hidden', false)
                panel.setAttribute('aria-expanded', true)
            }
        })
    }
})

//Hook
document.addEventListener('DOMContentLoaded', () => {
    var controller = new ScrollMagic.Controller()

    const hook = document.querySelector('.hook')
    if (hook) {
        const images = hook.querySelectorAll('.hook-image')

        gsap.set(images[0], {
            rotate: 0,
            xPercent: -50,
            yPercent: -48,
        })
        gsap.set(images[2], {
            rotate: 0,
            xPercent: -50,
            yPercent: -48,
        })

        const tween1 = gsap.to(images[0], {
            rotate: -11,
            xPercent: -140,
            yPercent: -46,
        })

        const tween2 = gsap.to(images[2], {
            rotate: 11,
            xPercent: 40,
            yPercent: -46,
        })

        const scene1 = new ScrollMagic.Scene({
            triggerElement: hook,
            duration: '100%',
            triggerHook: 1,
        })
            .setTween(tween1)
            .addTo(controller)

        const scene2 = new ScrollMagic.Scene({
            triggerElement: hook,
            duration: '100%',
            triggerHook: 1,
        })
            .setTween(tween2)
            .addTo(controller)

        for (let i = 0; i < images.length; i++) {
            const tween = gsap.to(images[i].querySelector('img'), {
                scale: 1.12,
            })
            new ScrollMagic.Scene({
                triggerElement: hook,
                duration: '120%',
                triggerHook: 1,
            })
                .setTween(tween)
                .addTo(controller)
        }
    }
})

//Flickity Carousel
$('.carousel .slides').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
})

$('.slideshow .container').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
})

$('.testimonials .slides').flickity({
    cellSelector: '.testimonials-item',
    wrapAround: false,
    adaptiveHeight: true,
    cellAlign: 'left',
    prevNextButtons: true,
    pageDots: true,
    imagesLoaded: true,
})

$('.blog-widget .group').flickity({
    cellSelector: '.post',
    wrapAround: false,
    adaptiveHeight: false,
    cellAlign: 'left',
    prevNextButtons: true,
    pageDots: true,
    imagesLoaded: true,
})

//Universal Tables
$('table').wrap("<div class='universal-table'></div>")

//PDO Page loader
document.addEventListener('DOMContentLoaded', function () {
    let pdoElement = document.getElementById('pdopage')
    if (pdoElement) {
        let loadState = document.createElement('div')
        loadState.classList.add('pdo-loader')
        loadState.setAttribute('aria-hidden', true)
        //loadState.textContent = 'Loading';

        pdoElement.appendChild(loadState)

        if (pdoPage) {
            pdoPage.callbacks['before'] = function (config) {
                document.querySelector('.pdo-loader').classList.add('pdo-loading')
            }
            pdoPage.callbacks['after'] = function (config) {
                document.querySelector('.pdo-loader').classList.remove('pdo-loading')
            }
        }
    }
})
