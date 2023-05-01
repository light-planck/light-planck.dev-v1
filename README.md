# light-planck.dev

## これは何？

学習したことをアウトプットするサイトです。
[light-planck.dev](https://www.light-planck.dev/)

## 技術スタック

|         技術          |              概要              |       Version       |
| :-------------------: | :----------------------------: | :-----------------: |
|      Git・GitHub      |        ソースコード管理        |       2.34.1        |
|      TypeScript       |          React で利用          |        4.9.5        |
|         React         |         JS ライブラリ          |       18.2.0        |
|        Next.js        |      React フレームワーク      |       13.3.1        |
|         Volta         |    Node.js のバージョン管理    |        1.1.1        |
|       Prettier        |         フォーマッター         |        2.8.4        |
|        ESLint         |            リンター            |       8.35.0        |
|  husky・lint-staged   |           Git hooks            |    8.0.3, 13.2.1    |
|        Vercel         |          デプロイ環境          |          -          |
|    Google Domains     |          ドメイン購入          |          -          |
|       microCMS        |         ヘッドレス CMS         |     2.3.3 (sdk)     |
| cheerio・highlight.js | 記事のソースコードのハイライト | 1.0.0-rc.12, 9.12.2 |
|   modern-css-reset    |          リセット CSS          |        1.4.0        |
|        Emotion        |           CSS in JS            |       11.10.8       |
|     Google Fonts      |            フォント            |          -          |

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

- modern-css-reset
  リセットCSSとして利用した。

- Emotion
  当初は CSS-modules でスタイルをあてていたが、管理が大変だったので、css in JS でスタイルをあてた。

- Google Fonts
  Noto Sans JP', sans-serif, Noto Serif JP', serif, Robotoを利用した。
