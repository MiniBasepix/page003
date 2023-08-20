// 文字サイズ変更ボタン
$(function () {
    // クッキー（fontSize）があれば読み込む
    let fz = $.cookie('jiyuken2023_fontsize');
    
    if (fz) {
      // サイズ変更ボタンから背景色と文字色のCSSを外す
      $('.jiyuken03_fs').removeClass('is_active');
      
      // クッキーに保存されたidと一致したら適用
      if (fz == 'fs_small') {
        $('html').css('font-size', '75%');
        $('#fs_small').addClass('is_active');
      } 
      else if (fz == 'fs_medium') {// デフォルトサイズ
        $('html').css('font-size', '100%');
        $('#fs_medium').addClass('is_active');
      } 
      else if (fz == 'fs_large') {
        $('html').css('font-size', '130%');
        $('#fs_large').addClass('is_active');
      }
      else if (fz == 'fs_overlarge') {
        $('html').css('font-size', '150%');
        $('#fs_large').addClass('is_active');
      }
    }
    
    //サイズ変更時にクッキーへ保存
    $('.jiyuken03_fs').click(function () {
      // クリックされたbuttonのidをクッキー（jiyuken2023_fontsize）に保存（有効期限は365日）
      $.cookie('jiyuken2023_fontsize', this.id, { expires: 365});
      
      // サイズ変更ボタンから背景色と文字色のCSSを外す
      $('.jiyuken03_fs').removeClass('is_active');
      
      // クリックされたbuttonのidと一致したら適用
      if (this.id == 'fs_small') {
        $('html').css('font-size', '75%');
        $(this).addClass('is_active');
      } 
      else if (this.id == 'fs_medium') {// デフォルトサイズ
        $('html').css('font-size', '100%');
        $(this).addClass('is_active');
      } 
      else if (this.id == 'fs_large') {
        $('html').css('font-size', '130%');
        $(this).addClass('is_active');
      }
        else if (this.id == 'fs_overlarge') {
          $('html').css('font-size', '150%');
          $(this).addClass('is_active');
        }
    });
  });