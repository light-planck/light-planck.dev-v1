# light-planck.dev

## これは何？

学習したことをアウトプットするサイトです。
[light-planck.dev](https://www.light-planck.dev/)

## 利用した技術

|      技術      |           概要           |
| :------------: | :----------------------: |
|  Git・GitHub   |     ソースコード管理     |
|   TypeScript   |       React で利用       |
|    Next.js     |   React フレームワーク   |
|     Volta      | Node.js のバージョン管理 |
|    Prettier    |      フォーマッター      |
|     ESLint     |         リンター         |
|     husky      |        Git hooks         |
|     Vercel     |       デプロイ環境       |
| Google Domains |       ドメイン購入       |
|    microCMS    |      ヘッドレスCMS       |

## 各技術について

- Git, Github  
  ブランチは主に main, develop の２つ。main は本番環境で、develop は開発用のブランチ。develop では feature/hoge, fix/hoge のように機能の追加やバグ修正用のブランチを切り、そこで開発を行った。

- Next.js with TypeScript  
  安全に開発でき、ルーティングが便利なので採用。

- Volta  
  Docker コンテナ上で開発しようとしたが、私の PC だと重かったので、Volta を用いて Node.js を管理した。

- Prettier  
  タブはスペース 2、セミコロンなしで設定した。

- ESLint  
  コミット時に構文をチェックした。

- husky  
  Git でのコミット時にスクリプトを実行した。ESLint で構文チェックし、エラーが出なければ Prettier でフォーマットし、コミットした。

- Vercel  
  Next.js のプロジェクトをデプロイするために利用した。

- Google Domains  
  ここでドメインを購入した。
