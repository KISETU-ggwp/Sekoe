//設定した定型文を保存する
function savetmp() {
  //テキストエリアから値を取得
  var templateText = document.getElementById("addTemplate").value;
  console.log(templateText);

  //ラジオボタンを生成して追加
  var radioButtonsContainer = document.getElementById("radioButtonsContainer");
  var radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "template";

  var formattedTemplate = templateText.replace(/<br>/g, "\n");

  //ラジオボタンに対応するラベルを生成して追加
  var lebelElement = document.createElement("label");
  lebelElement.innerHTML = formattedTemplate;

  var containterElement = document.createElement("div");
  containterElement.appendChild(radioButton);
  containterElement.appendChild(lebelElement);

  radioButtonsContainer.appendChild(containterElement);

  //radioButtonsContainer.appendChild(label);

  //textareaとの重複を防ぐ改行
  var newline = document.createElement('br');
  radioButtonsContainer.appendChild(newline);

  //textarea内容を自動的に消す
  const textarea = document.getElementById("addTemplate");

  textarea.value = "";

  //動的に音声発出ボタンを作成
  var speechReady = function(event) {
    var utterance = new SpeechSynthesisUtterance(event.target.nextSibiling.formattedTemplate);
    utterance.lang = "ja-JP";
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  }
  console.log(formattedTemplate);
  //ラジオボタンにクリックイベントリスナーを追加
  radioButton.addEventListener('click', speechReady);
}

// 既に登録している定型文を読み上げる
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

document.getElementById('speakerButton5').addEventListener('click', function(t) {
  readTmp(t);
});

document.getElementById('speakerButton6').addEventListener('click', function(t) {
  readTmp(t);
});

document.getElementById('speakerButton7').addEventListener('click', function(t) {
  readTmp(t);
});

document.getElementById('speakerButton8').addEventListener('click', function(t) {
  readTmp(t);
});

document.getElementById('speakerButton9').addEventListener('click', function(t) {
  readTmp(t);
});

//テキストエリア内に打ち込まれた定型文を読み上げる関数
function readTmp(t) {
  // クリックされたspeakerButtonのidを取得
  var speakerButtonId = t.target.id;

  // 対応するテキストエリアのidを構築
  var textareaId = 'tempText' + speakerButtonId.charAt(speakerButtonId.length - 1);

  // 対応するテキストエリアの内容を取得
  var tempText = document.getElementById(textareaId).value;
  // SpeechSynthesisUtterance オブジェクトを作成
  const utterance = new SpeechSynthesisUtterance(tempText);
  utterance.lang = "ja-JP"; // 言語設定を日本語に設定
  utterance.rate = 0.7;
  // テキストを読み上げる
  window.speechSynthesis.speak(utterance);
}



