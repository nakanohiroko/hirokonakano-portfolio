# デジナレ 人資本最適化システム



## 環境情報

- テスト環境
  - https://dev.domain.com
- 本番環境
  - https://domain.com



## 環境構築

### インストール

```bash
npm install
```

### 開発時

```bash
npm run dev
```

動作確認済：`v18.15.0`

### VSCode拡張機能

保存時の自動整形を有効化するために以下必須の拡張機能をインストールします。

任意の拡張機能も開発体験を向上させるので、可能な限りインストールしてください。

- 必須
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)（リンター）
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)（コード整形）
- 任意
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)（Reactスニペット）
  - [Nextjs snippets](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets)（Nextjsスニペット）
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)（Tailwindのクラス名オートコンプリート）

環境構築完了後は、自動整形されるか必ずテストしてください。

インデントが整形される、`import { ... }`が自動で並び替わる、Tailwindクラスが自動で並び替わる...などを確認します。



## コンポーネント設計

| 名称 | 解説 | 例 |
| ---- | ---- | ---- |
| components/elements | 最小単位のパーツ。 | ボタン、日付、チェックボックス、入力欄。 |
| components/templates | elementsを組み合わせたブロック。elementsより大きい。elementsが無くてもOK。 | ヘッダー、フォーム、1つのセクション。 |
| features/ | 特定の機能をまとめたディレクトリ。APIかカスタムフックを必ず持つ。 | アカウント、お知らせ。 |
| pages/ | ルーティング対象となるページ。 | トップページ、アカウント詳細ページ、お知らせ一覧ページ。 |

### 構造ルール

- elements の中に
  - elements ：×
  - templates ：×
  - features ：×
- templates の中に
  - elements ：◯
  - templates ：×
  - features ：×
- features の中に
  - elements ：◯
  - templates ：×
  - features ：×
- pages の中に
  - elements ：◯
  - templates ：◯
  - features ：◯



## 参考資料

全体構成の参考記事  
https://zenn.dev/rh820/articles/1e62510776221e

コンポーネント設計の参考記事  
https://zenn.dev/yodaka/articles/eca2d4bf552aeb
