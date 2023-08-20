const swiper = new Swiper(".swiper", {
    loop: true, // ループを有効にする
    
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // クリックを有効化
    },
    autoplay: { // 自動再生
        delay: 3000, // 3秒後(実測3.5秒後)に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      },
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  });