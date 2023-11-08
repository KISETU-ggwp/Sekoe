// 自動で入力欄サイズを変更する
window.addEventListener("DOMContentLoaded", () => {
  // textareaタグを全て取得
  const textareaEls = document.querySelectorAll("textarea");

  textareaEls.forEach((textareaEl) => {
    // デフォルト値としてスタイル属性を付与
    textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
    // inputイベントが発生するたびに関数呼び出し
    textareaEl.addEventListener("input", setTextareaHeight);
  });

  // textareaの高さを計算して指定する関数
  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
  }
});


//Funayama開発
document.addEventListener('DOMContentLoaded', () => {
  // テキストエリアにイベントリスナーを設定
  const textarea = document.getElementById("sample");
  textarea.addEventListener("keyup", function(e) {
    // Enterキーが押されたら
    if (e.shiftKey && e.key === 'Enter') {
      // テキストを読み上げる
      speak(textarea.value);
    }
  });
});

// テキストを読み上げる関数
function speak(text) {
  // SpeechSynthesisUtterance オブジェクトを作成

  const utterance = new SpeechSynthesisUtterance(text);

  //utterance.lang = "ja-JP";
  // テキストを読み上げる
  window.speechSynthesis.speak(utterance);
}




// DOMが完全にロードされたらイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
  // 発話ボタンにクリックイベントリスナーを設定
  var playButton = document.getElementById("bms_send_btn_voice"); // playButtonに変数名を更新
  if (playButton) { // ボタンの存在をチェック
    playButton.addEventListener("click", function() {
      // Audioインスタンスを作成し、ファイルを指定
      var audio = new Audio('sumimasen_ima_daizyobudesuka.mp3');

      // 音声を再生
      audio.play().catch(function(e) {
        console.error('音声再生に失敗しました。', e);
      });
    });
  } else {
    console.error("ボタンがDOMに存在しません。"); // ボタンが見つからない場合のエラーメッセージ
  }
});
//マジで俺髪の分け目がやばくて草(船山)





