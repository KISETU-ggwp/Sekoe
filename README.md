# システム概要

## 1. システムの目的と背景
このシステムは，聴者中心で，DHH1人だけのリモート会議で，気軽に双方向性コミュニケーションをしたいろう・難聴者向けのコミュニケーションサポートツールを目的として開発した．

背景として，既存の音声認識ツールではチャットを送ることはできても,聴者がそれに気づきにくいという課題があり，本Webアプリを構築した．

## 2. 開発に至った経緯
[開発を開始した理由やきっかけ]  
[開発に至るまでの経緯や問題意識]  

## 3. 解決する課題
本システムは以下の課題を解決することを目的とする。  

- 課題1: 聴者がチャットに気づけない
- 課題2: チャット入力を相手に待たせてしまうという心理負担

## 4. 対象ユーザー
本システムの想定ユーザーは以下のとおり．

- ろう・難聴の人
- カフェや家など都合により発話が難しい人
- 風邪や喉の炎症で発話が難しい人

## 5. 開発期間と開発体制
- **開発期間**: 2023年10月 〜 2024年02月  
- **開発体制**:  
  - プロダクトオーナー: Ninjinkun35
  - スクラムマスター: kotan
  - デベロッパー: KISETU-ggwp (me)
  - デベロッパー: Hide

## 6. 主要機能
本システムの主要な機能は以下のとおり．

- **音声合成機能**: 呼びかけ声やチャット内容を音声で発することでチャットに気づかせる．
- **句読点で音声合成を発出**: 入力欄に句読点を入れることで，これまで入力された文を自動的に音声で送信され，タイピング時間を稼ぎ，聞き手は連続して話を聞くことができる．
- **定型文作成機能**: 挨拶など，決まった文章になっているものや繰り返し使うものをあらかじめ用意し，ワンクリックで発出ができる．

## 7. 実装済みの機能一覧
現在実装されている機能は以下の通り。

- ✅ 音声合成(API)
- ✅ 句読点で音声発出するための形態素解析組み込み
- ✅ 定型文の新規作成・発出
- ⏳ どこまで発出しているかが分かる．
- ⏳ 個人個人が用意した定型文の保存

(現在は，メンバー不足により活動停止中)

## 8. 予備実験
 Webアプリが実際にどの程度役立っているのかを調べた．

![yobi-zikken01](/image/yobi-zikken-01.png)

![yobi-zikken01](/image/yobi-zikken-02.png)
 
![yobi-zikken01](/image/yobi-zikken-03.png)


## 9. スクリーンショットや動作例
以下にシステムの動作例を示す．

### 🎥 動作例

https://github.com/user-attachments/assets/a13f0fd8-6ec5-4afc-9efd-b3de69528967

---
ここまでお読みいただきありがとうございます．

予備実験をより細かくみたものが論文として発表されますのでその際にまた更新します．

