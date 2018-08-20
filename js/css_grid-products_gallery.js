var itemArray = [];                                      // 儲存互動元件
var imgRect   = [];                                      // 圖片容器元件中心點


/*===================================================================*/
/* Hover 監聽觸發
/*===================================================================*/
var itemImgEl = document.querySelectorAll('.item-img');  // 圖片父層容器為觸發對象

for (let i = 0; i < itemImgEl.length; i++) {

  // 滑鼠移入
  itemImgEl[i].addEventListener('mousemove', function (e) {
    targetCenter(e);               // 算出觸發元件(圖片容器)中心點
    motion(e, imgRect);            // 擷取滑鼠座標
  }, false);

  // 滑鼠移出，移至原位
  itemImgEl[i].addEventListener('mouseout', function() {
    for (let i = 0; i < itemArray.length; i++) {
      console.log('init');
      itemArray[i].setAttribute('style', 'translate(0,0);');
    }
  }, false);
}


/*===================================================================*/
/* 1. 算出觸發元件(圖片容器)中心點
/* 2. 儲存觸發元件的同層兄弟元件
/*===================================================================*/
function targetCenter(el){
  var elPathItem = el.path;                             // .path 此元件的樹狀路徑，為一陣列
  for (let i = 0; i < elPathItem.length; i++) {
    
    // 找出觸發元件
    if (elPathItem[i].className === 'item-img') {       // 找出圖片容器層元件 => 觸發元件  
      // 算出圖片元件中心點
      var rectClient = elPathItem[i].getClientRects();  //.getClientRects() 元件佔取頁面矩形區域資訊
      imgRect = {
        centerX: rectClient[0].left + (rectClient[0].width / 2),
        centerY: rectClient[0].top + (rectClient[0].height / 2)
      }

      itemArray = [];                                   // 清空之前的互動元件
      // 觸發元件的同層兄弟元件
      var parentEl = elPathItem[i + 1];                 // i+1 => 樹狀路徑上層 => 元件父層
      var childEl = parentEl.childNodes;                // 找出父層下的所有子層元件 .childNodes 為陣列
      for (let j = 0; j < childEl.length; j++) {
        if (childEl[j].nodeName !== '#text') {          // 子層元件若為文字節點不儲存
          itemArray.push(childEl[j]);                   // 存入互動元件陣列
        }
      }
    }
  }
}


/*===================================================================*/
/* 1. 算出鼠標與中心點距離 (x1-x0, y1-y0)
/* 2. "距離差"轉換成互動元件"位移量"
/*===================================================================*/
function motion(e, imgRect) {

  // 擷取滑鼠座標
  var mouseX = e.clientX,
      mouseY = e.clientY;
  
  // 距離差
  var offsetX = mouseX - imgRect.centerX,   // 例：鼠標1200 - 1080 = +120 在右側
      offsetY = mouseY - imgRect.centerY;   // 例：鼠標530  - 600  = -70  在上測

  // 互動元件位移量
  var translateXY         = `transform: translate(${offsetX / 3}px, ${offsetY / 3}px);`,
      translateXY_Sibling = `transform: translate(${offsetX / 6}px, ${offsetY / 6}px);`;

  for (let i = 0; i < itemArray.length; i++) {          // 互動元件陣列
    if (itemArray[i].className === 'item-img') {
      itemArray[i].setAttribute('style', translateXY);
    } else {
      itemArray[i].setAttribute('style', translateXY_Sibling);
    }
  }
}


/*===================================================================*/
/* a link
/*===================================================================*/
var detailLink = document.querySelectorAll('.detailLink');

function loading() {
  var bodyEl = document.querySelector('body');
  bodyEl.classList.add('loading');
}

for (let i = 0; i < detailLink.length; i++) {
  detailLink[i].addEventListener('click', function (e) {
    e.preventDefault();

    // 取得 href
    var elPath = e.path;
    for (let i = 0; i < elPath.length; i++) {
      if (elPath[i].className === 'detailLink') {
        var link = elPath[i].getAttribute('href');
        break;
      }
    }

    loading();

    // 延遲執行 // 跳轉至指定的 url 頁面
    setTimeout(function () {
      location.href = link;
    }, 1000);
  }, true);
}


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