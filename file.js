WebFontConfig = {
    google: { families: [ 'Syncopate:700,400', 'Roboto:400,400italic,300,100,700', 'Josefin Sans:400', 'Raleway:400,300,100,700'  ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 