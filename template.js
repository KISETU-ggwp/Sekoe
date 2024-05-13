// // テンプレの動きをしてする動きを決める
// function openwin() {
//   window.open("template.html", "", "width=400,height=200,top=600,left=600");
// }

//設定した定型文を保存する
function savetmp() {
  //テキストエリアから値を取得
  var templateText = document.getElementById("addTemplate").value;

  //ラジオボタンを生成して追加
  var radioButtonsContainer = document.getElementById("radioButtonsContainer");
  var radioButton = document.createElement("input");
  radioButton.type = "radio";//変更Point
  radioButton.name = "template";

  var formattedTemplate = templateText.replace(/<br>/g, "\n");

  var lebelElement = document.createElement("label");
  HTMLLabelElement.innerHTML = formattedTemplate;

  var containterElement = document.createElement("div");
  containterElement.appendChild(radioButton);//変更するPoint
  containterElement.appendChild(lebelElement);

  radioButtonsContainer.appendChild(containterElement);

  //onchangeイベントハンドラを関数に直接割り当てる
  radioButton.onchange = tmpbutton;
  radioButtonsContainer.appendChild(radioButton);

  //ラジオボタンに対応するラベルを生成して追加
  var label = document.createElement("label");
  label.innerText = templateText;
  radioButtonsContainer.appendChild(label);

  //textareaとの重複を防ぐ改行
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