# localStorage failure boundary

Creator Gear Routerは、用途・困りごと・予算感から先に比較する機材カテゴリをブラウザ内で整理します。

利用回数だけを`localStorage`へ保存しますが、この計測は診断本体より優先しません。

## 修正前

storageが禁止・破損している環境で`localStorage.getItem()`または`setItem()`が例外を出すと、結果カードを描画した後にclick handlerが例外終了していました。

## 現在

利用回数の読み書きを`recordUsage()`へ分離し、storageエラーはfail-openにします。診断結果はそのまま表示し、計測だけを諦めます。

```bash
node tests/test_storage.js
```

公開mainで6 assertions PASS。

- 通常storage: 1 click → count 1
- storage blocked: click handlerは例外を外へ出さない
- storage blockedでも結果表示は維持

計測不能を、診断不能として扱わないための境界です。
