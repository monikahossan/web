$('.homepage-slide').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    autoplay:true,

});

$('.team-list').owlCarousel({
    loop:true,
    items:3,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,

});
$('.testimonial-list').owlCarousel({
    loop:true,
    items:3,
    margin:30,
    nav:false,
    dots:false,
    autoplay:false,

});
$('.logo-carousel').owlCarousel({
    loop:true,
    items:5,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,

});


  $('#web-design-skillbar').circleProgress({
    value: 0.9,
    size: 270,
    thickness:3,
    fill: '#00cbff',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
   $('#graphic-design-skillbar').circleProgress({
    value: 0.9,
    size: 270,
    thickness:3,
    fill: '#00cbff',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
   $('#digital-marketing-skillbar').circleProgress({
    value: 0.9,
    size: 270,
    thickness:3,
    fill: '#00cbff',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });