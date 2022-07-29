## [【初心者】#1 Reactの基礎とMaterial-UI使って綺麗に作ってみる](https://qiita.com/Bashi50/items/8964cc55c596e51fcbbe)

### 1 環境構築

#### 1.1 material-reactアプリ作成

- **1.1-1**`npx create-react-app material-react`

- **1.1-2**`cd material-react`

- **1.1-3**`npm start`

#### 1.2 Material-uiのインストール

- **1.2-1**`npm install @material-ui/core`

- **1.2-2**`npm install @material-ui/icons` 

### 2. 開発

#### 2.1 デフォルト・フォントの更新

#### 2.2 デフォルト・ページを一回削除

#### 2.3 Gridの追加

#### 2.4 ヘッダーを作る
- **2.4-1** `mkdir src/components`
- **2.4-2** `material-react/src/components/Header.js`を編集
- **2.4-3** ヘッダーコンポーネントを`App.js`に追加
- **2.4-4** ヘッダーにMaterial-uiを適用

#### 2.5 アイコンをつける
- **2.5-1** `material-react/src/components/Header.js`を編集

#### 2.6 Material-UIでCSSを追加
- **2.6-1** `makeStyle`を`import`
- **2.6-2** `useStyles`関数にTypographyのCSSを書く
- **2.6-3** `useStyles` `をclasses` 関数に代入
- **2.6-4** `Typography`に`classes`を適用

#### 2.7 コンテンツ部分 (Card) のコンポーネントを作る
- **2.7-1** `Content.js`作成
`cd material-react`<br>
`touch src/components/Content.js`
- **2.7-2** `App.js`に`Content`を`import`
- **2.7-3** コンポーネント`BodyCard.js`作成 <br>
`touch src/components/BodyCard.js`
- **2.7-4** `Content.js`を編集
- **2.7-5** スペースを入れて見た目調整 ([Grid](https://material-ui.com/components/grid/#grid)を参照) <br>
`Content.js`を編集

#### 2.8 カードの見た目改造 ( ヘッダー & アイコン)
- **2.8-1** `BodyCard.js`にカードの ヘッダー & アイコン を追加
- **2.8-2** アバターと画像はランダムで取得できるようにする。

### 3. Material-ui

#### [Grid](https://material-ui.com/components/grid/#grid)  

#### [App bar](https://mui.com/material-ui/react-app-bar/)

#### [AppBar API](https://mui.com/material-ui/api/app-bar/)

#### [Material Icons](https://mui.com/material-ui/material-icons/)

#### [Card](https://mui.com/material-ui/react-card/)

#### 画像をランダムで取得できるサービス
- Avatar [https://joeschmoe.io/](https://joeschmoe.io/)
- 画像 [https://picsum.photos](https://picsum.photos)