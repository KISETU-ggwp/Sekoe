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

  textarea.addEventListener("keyup", function(e) {
    // テキストエリアの値から最後の文字を取得
    let lastChar = textarea.value.slice(-1);
    let punctuationMarks = ['。', '、', '.', ',']; // 日本語の句点と読点、英語のピリオド
    let isPunctuation = punctuationMarks.includes(lastChar);

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

//設定した定型文を保存する
function savetmp() {
  //テキストエリアから値を取得
  var templateText = document.getElementById("addTemplate").value;

  //ラジオボタンを生成して追加
  var radioButtonsContainer = document.getElementById("radioButtonsContainer");
  var radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "template";
  radioButton.value = templateText;
  radioButtonsContainer.appendChild(radioButton);

  //onchangeイベントハンドラを関数に直接割り当てる
  radioButton.onchange = tmpbutton;
  radioButtonsContainer.appendChild(radioButton);

  //ラジオボタンに対応するラベルを生成して追加
  var label = document.createElement("label");
  label.innerText = templateText;
  radioButtonsContainer.appendChild(label);

  //削除ボタンを生成
  var delButtonsContainer = document.getElementById("delButtonsContainer");
  var delButton = document.createElement("input");
  delButton.type = "button";
  delButton.name = "delButton";
  delButton.value = "X";
  delButtonsContainer.appendChild(delButton);

  //改行
  var newline = document.createElement('br');
  radioButtonsContainer.appendChild(newline);

  //textarea内容を自動的に消す
  const textarea = document.getElementById("addTemplate");

  textarea.value = "";
}

// 各ボタンに対してイベントリスナーを追加
document.getElementById('speakerButton1').addEventListener('click', function(e) {
    readText(e);
});

document.getElementById('speakerButton2').addEventListener('click', function(e) {
    readText(e);
});

document.getElementById('speakerButton3').addEventListener('click', function(e) {
    readText(e);
});

document.getElementById('speakerButton4').addEventListener('click', function(e) {
    readText(e);
});

// テキストを読み上げる関数
function readText(e) {
    // クリックされたボタンのidを取得
    var buttonId = e.target.id;

    // 対応するテキスト要素のidを構築
    var textId = 'tempText' + buttonId.charAt(buttonId.length - 1);

    // 対応するテキスト要素の内容を取得
    var tempText = document.getElementById(textId).textContent;

    // SpeechSynthesisUtterance オブジェクトを作成
    const utterance = new SpeechSynthesisUtterance(tempText);
    utterance.lang = "ja-JP"; // 言語設定を日本語に設定
    utterance.rate = 0.7;
    // テキストを読み上げる
    window.speechSynthesis.speak(utterance);
}