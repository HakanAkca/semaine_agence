document.addEventListener('scroll', function () {

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    slide1 = $('#clickslide1');
    slide2 = $('#clickslide2');
    slide3 = $('#clickslide3');
    slide4 = $('#clickslide4');

    if (percent >= 20 && percent <= 45) {
        slide1.addClass('active');
    } else {
        slide1.removeClass('active');
    }

    if (percent >= 45.94972067039106 && percent <= 68) {
        slide2.addClass('active');
    } else {
        slide2.removeClass('active');
    }

    if (percent >= 69.22718808193669 && percent <= 91) {
        slide3.addClass('active');
    } else {
        slide3.removeClass('active');
    }

    if (percent >= 92.50465549348232) {
        slide4.addClass('active');
    } else {
        slide4.removeClass('active');
    }

    console.log(percent);

});