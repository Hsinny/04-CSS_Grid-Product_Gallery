/*===================================================================*/
/* jQuery
/*===================================================================*/

$(document).ready(function () {

  /*========================================================*/
  /* GA Event Tracking
  /*========================================================*/

  $('.item-img a').click(function () {
    gtag('event', 'view-more', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(0).click(function () {
    gtag('event', 'view-more-1', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(1).click(function () {
    gtag('event', 'view-more-2', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(2).click(function () {
    gtag('event', 'view-more-3', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(3).click(function () {
    gtag('event', 'view-more-4', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(4).click(function () {
    gtag('event', 'view-more-5', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(5).click(function () {
    gtag('event', 'view-more-6', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').eq(6).click(function () {
    console.log('7');
    gtag('event', 'view-more-7', {
      'event_category': 'click',
      'event_label': 'img'
    });
  });

  $('.item-img a').hover(function () {
    gtag('event', 'view-more', {
      'event_category': 'hover',
      'event_label': 'img'
    });
  });

  $('.item-title').click(function () {
    gtag('event', 'view-more', {
      'event_category': 'click',
      'event_label': 'product-title'
    });
  });

  $('.item-title').hover(function () {
    gtag('event', 'view-more', {
      'event_category': 'hover',
      'event_label': 'product-title'
    });
  });

  $('.icon-goBack').click(function () {
    gtag('event', 'go-back', {
      'event_category': 'click',
      'event_label': 'go-back'
    });
  });

  $('.goBack').click(function () {
    gtag('event', 'go-back', {
      'event_category': 'click',
      'event_label': 'go-back'
    });
  });

});