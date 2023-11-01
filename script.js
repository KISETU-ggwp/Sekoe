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



