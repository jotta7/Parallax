window.sr = ScrollReveal({ reset: true})


//cabecalho

ScrollReveal().reveal('#logotop', {
    delay: 500,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
//empresa
ScrollReveal( {distance:'60px'}).reveal('#center1', {
    delay: 500,
    origin: 'right '
})
ScrollReveal( {distance:'60px'}).reveal('#center2', {
    delay: 500,
    origin: 'left '
})
ScrollReveal( {distance:'60px'}).reveal('#center3', {
    delay: 500,
    origin: 'right '
})


//estrutura
ScrollReveal( {distance:'60px'}).reveal('.struct1', {
    delay: 700,
    origin: 'left'
})

ScrollReveal( {distance:'60px'}).reveal('.struct2', {
    desktop: false,
    delay: 700,
    origin: 'right'
})

//vantagens

ScrollReveal().reveal('.', {
    mobile: true,
    delay: 500,
    interval: 300
})

