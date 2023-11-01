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

//呼びかけはボタンを押すようにUserに指示する。
// DOMが完全にロードされたらイベントリスナーを設定
document.addEventListener('DOMContentLoaded', () => {
  // 発話ボタンにイベントリスナーを設定
  document.getElementById("bms_send_btn_voice").addEventListener("click", speak);


});
// 発話機能
function speak() {
  // 発話する MP3ファイルを指定
  const mp3 = new Audio("src/sumimasen_ima_daizyobudesuka.mp3");
  // 発話する
  mp3.play();
}

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
  // テキストを読み上げる
  window.speechSynthesis.speak(utterance);
}
