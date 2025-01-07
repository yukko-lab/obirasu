const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');
const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');

// 確認
//console.log(main);
//console.log(thumbs);
//↑constを使って、HTMLの要素を定数（箱）に格納しています。
//以前の作例で使った、getElementById や getElementsByClassName などは、idか、classか…など種類によって使い分ける必要がありますが、querySelector では、idもclassも一緒に扱うことができます。
//CSSでの書き方と同じように「#（idの場合）」「.（classの場合）」で区別できるので、視覚的にもidとclassが区別しやすいです。
//1つのみ取得するときは、querySelector、全て取得するときはquerySelectorAllを使います。「.thumb」クラスは、複数ありますので、querySelectorAllを使っています。


//thumbs.forEach(function(item, index) {
  //item.onmouseover = function() {
   // console.log(this.dataset.image);
  //  main.src = this.dataset.image;
 // }
//});
//クリックすると、コンソール上に、dataset-imageの内容が出力されます。

// マウスオーバー
thumbs.forEach(function(item, index) {
  item. onclick= function() {
    main.src = this.dataset.image;
    text.textContent = this.title;
  }
});


//動作確認ができたらアニメーション効果をつけます。
const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden','visible'],
    opacity: [0,1]
  }
  const options = {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);

  // 項目を表示するアニメーション
  items.forEach((item,index) => {
    item.animate({opacity:[0,1]},{
      duration: 300,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });
}
open.addEventListener('click',menuOpen);



const menuClose = () => {
  const keyframes = {
    visibility: ['visible','hidden'],
    opacity: [1,0]
  }
  const options = {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);

  items.forEach((item) => {
    item.animate({opacity:[1,0]},{
      duration: 00,
      easing: 'ease',
      fill: 'forwards',
    });
  });
}
close.addEventListener('click',menuClose);

