# Creator Gear Router

配信・会議・商品撮影・モバイル制作などの用途と困りごと、予算感から、**先に比較すべき機材カテゴリ**を整理する静的Webツールです。製品ランキングではなく、買う順番を考えるためのルーターです。

## What it does

用途ごとに、マイク / 照明 / スタンド / ストレージ / モニター用イヤホン・ヘッドホン / 電源 / 背景などのカテゴリを優先順で提示します。

低予算を選んだ場合は候補を絞り、困りごとのカテゴリを先頭へ寄せます。特定製品を使った体験談や性能保証は生成しません。

## Quick start

`index.html` をブラウザで開けば動きます。ビルドや外部ライブラリは不要です。

```bash
python3 -m http.server 8000
```

## Privacy / state boundary

入力した用途・困りごと・予算は外部送信しません。利用回数だけをブラウザの `localStorage` に保存し、保存できない環境でも診断本体は継続できるようにしています。

- [localStorageが使えない時の診断境界](docs/local-storage-boundary.md)

## Verification

```bash
node --check app.js
node tests/test_storage.js
node tests/test_routing.js
```

GitHub Actionsでもstorage failure boundaryとrouting priority / low-budget capを継続確認します。

## Monetization boundary

診断機能は広告なしで成立します。アフィリエイトを使う場合は、承認済み・作成済みリンクだけを `affiliate-config.js` から明示付きで有効化し、カテゴリ選択ロジックとは分離します。

## Non-goals

- 特定製品の購入保証や価格比較
- 実機レビューを装うこと
- 撮影品質や収益の保証
- 入力データの外部収集

MIT License.
