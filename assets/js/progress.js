

var bar = new ProgressBar.Line(progress, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#F57777',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });

  if ($('#wiz_1_circle').hasClass('pack-pulse')) {
     bar.animate(0.241);
  }
  if ($('#wiz_2_circle').hasClass('pack-pulse')) {
    bar.animate(0.445);
 }
   if ($('#wiz_3_circle').hasClass('pack-pulse')) {
  bar.animate(0.545);
  }
  if ($('#wiz_4_circle').hasClass('pack-pulse')) {
    bar.animate(1);
    }
 

 