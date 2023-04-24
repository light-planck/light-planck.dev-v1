# light-planck.dev

## これは何？

学習したことをアウトプットするサイトです。
[light-planck.dev](https://www.light-planck.dev/)

## 成果物

[light-planck.dev](https://www.light-planck.dev/)
競技プログラミングで学んだことをアウトプットする jamstack ブログです。

## 利用した技術

|         技術          |              概要              |
| :-------------------: | :----------------------------: |
|      Git・GitHub      |        ソースコード管理        |
|      TypeScript       |          React で利用          |
|        Next.js        |      React フレームワーク      |
|         Volta         |    Node.js のバージョン管理    |
|       Prettier        |         フォーマッター         |
|        ESLint         |            リンター            |
|  husky・lint-staged   |           Git hooks            |
|        Vercel         |          デプロイ環境          |
|    Google Domains     |          ドメイン購入          |
|       microCMS        |         ヘッドレス CMS         |
| cheerio・highlight.js | 記事のソースコードのハイライト |

## 各技術について

- Git, Github  
  ブランチは主に main, develop の２つ。main は本番環境で、develop は開発用のブランチ。develop では feature/hoge, fix/hoge のように機能の追加やバグ修正用のブランチを切り、そこで開発を行った。

- Next.js with TypeScript  
  React フレームワークで SSG の機能があり、ルーティングが便利なので採用した。

- Volta  
  Node.js を管理した。

- Prettier  
  タブはスペース 2、セミコロンなしで設定した。

- ESLint  
  コミット時に構文をチェックした。

- husky, lint-staged  
  Git のコミット時にスクリプトを実行した。ESLint で構文チェックし、エラーが出なければ Prettier でフォーマットし、コミットした。

- Vercel  
  Next.js のプロジェクトをデプロイするために利用した。

- Google Domains  
  ここでドメインを購入した。

- microCMS  
  記事の投稿・管理を行った。

- cheerio, highlight.js  
  cheerio を用いて HTML をパースし、highlight.js でコードブロックのハイライトを行った。

