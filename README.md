# light-planck.dev

## これは何？
学習したことをアウトプットするサイトです。
[light-planck.dev](https://www.light-planck.dev/)

## 利用した技術
|  技術  |  概要  |
| :---: | :---: |
| Git・GitHub | ソースコード管理 |
| TypeScript | Reactで利用 |
|Next.js|Reactフレームワーク|
|Volta|Node.jsのバージョン管理|
|Prettier|フォーマッター|
|ESLint|リンター|
|husky|Git hooks|
|Vercel|デプロイ環境|
|Google Domains|ドメイン購入|

## 各技術について
- Git, Github  
ブランチは主にmain, developの２つ。mainは本番環境で、developは開発用のブランチ。developではfeature/hoge, fix/hogeのように機能の追加やバグ修正用のブランチを切り、そこで開発を行った。

- Next.js with TypeScript  
安全に開発でき、ルーティングが便利なので採用。

- Volta  
Dockerコンテナ上で開発しようとしたが、私のPCだと重かったので、Voltaを用いてNode.jsを管理した。

- Prettier  
タブはスペース2、セミコロンなしで設定した。

- ESLint  
コミット時に構文をチェックした。

- husky  
gitのコミット時にスクリプトを実行した。ESLintで構文チェックして問題なしならPrettierでフォーマットしてコミットした。

- Vercel  
Next.jsのプロジェクトを簡単にデプロイすることができた。ドメインの設定も簡単だった。

- Google Domains  
ここでドメインを購入した。
