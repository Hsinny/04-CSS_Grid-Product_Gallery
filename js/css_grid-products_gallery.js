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