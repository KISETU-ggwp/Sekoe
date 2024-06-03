//チャットを保存する配列。触れることを禁ずる。
let chat_log = [];
let index;
//ユーザ設定定型文リスト
let user_list = [];

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


// 入力されたテキストを自動で削除する
document.addEventListener('DOMContentLoaded', () => {
  // テキストエリアにイベントリスナーを設定
  const textarea = document.getElementById("sample");
  var inrerjection = new Audio("kandoshiE.mp3");
  textarea.addEventListener("keyup", function(e) {
    // テキストエリアの値から最後の文字を取得
    let lastChar = textarea.value.slice(-1);
    let punctuationMarks = ['。', '、', '.', ',']; // 日本語の句点と読点、英語のピリオド
    let isPunctuation = punctuationMarks.includes(lastChar);
    let atMarks = ['@', '＠'];

    // Enterがクリックされるかまたは最後の文字が句読点のいずれかである場合に発話する
    if (e.key === 'Enter' || isPunctuation) {
      // テキストを読み上げる
      speak(textarea.value);
      //チャットを保存する
      saveChat(textarea.value);
      // 読み上げたテキストをクリア
      textarea.value = "";
      // デフォルトのイベントをキャンセル（改行の挿入を防ぐ）
      e.preventDefault();

    }
  });
});


//表示する文字列を残す
let current_text = ""; // 現在のテキストを蓄積する変数


function saveChat(text) {
  let period_marks = ['。', '.']; // 日本語の句点と英語のピリオド
  current_text += text; // 新しいテキストを蓄積
  document.getElementById("current_text").innerHTML = current_text;
  let lastChar = current_text.slice(-1);
  if (period_marks.includes(lastChar)) {
    chat_log.push(current_text); // 蓄積されたテキストを配列に保存
    current_text = ""; // 蓄積されたテキストをリセット
  }
  let lastThree = chat_log.slice(-(index));
  // chat_logを<br>タグで結合して表示
  document.getElementById("chat_log").innerHTML = lastThree.join("<br>");
}


// テキストを読み上げる関数
function speak(text) {
  // SpeechSynthesisUtterance オブジェクトを作成
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP"; // 言語設定を日本語に設定
  utterance.rate = 0.7; // 読み上げの速さを0.7倍に設定
  // テキストを読み上げる
  window.speechSynthesis.speak(utterance);
}


//文字入力を検出する関数
const textarea = document.getElementById("sample");
textarea.addEventListener("keydown", function(event) {
  console.log("関数に入りました"); //ここまではOK
  if (event.isComposing) { //isComposing: 入力未確定時に真となる論理値型の変数
    console.log("これからタイプ音を発出します");
    type_sound();
    console.log("タイプ音を発出しました");
  }
  console.log("ifブロックから出ました");
});


//タイプ音を発出する関数
async function type_sound(){
  console.log("タイプ音を発出する関数に入りました");
  const typeSound = new Audio("PC-Keyboard06-01(Mid).mp3");
  try {
    await typeSound.play();
    console.log("タイプ音を発出しました");
    setTimeout(() => {
      typeSound.pause();
      typeSound.currentTime = 0;
      console.log("タイプ音を停止しました");
    }, 5000);
  } catch (error) {
    console.error('音声再生に失敗しました', error);
  }
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


//ログに残す文章数を取得する
function clickBtn() {
  index = document.getElementById("index_select").value;
  index = Number(index);
  document.getElementById("select_index").textContent = index;
}


//テンプレの動きをしてする動きを決める
function openwin() {
  window.open("template.html", "", "width=400,height=200,top=600,left=600");
}


//定型文を読み上げる
function tmpbutton(event) {
  // SpeechSynthesisUtterance オブジェクトを作成
  const utterance = new SpeechSynthesisUtterance(event.target.value);
  utterance.lang = "ja-JP"; // 言語設定を日本語に設定
  utterance.rate = 0.7;
  // テキストを読み上げる
  window.speechSynthesis.speak(utterance);
}



