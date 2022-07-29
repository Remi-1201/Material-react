import { Grid } from '@material-ui/core'
import React from 'react'
import BodyCard from './BodyCard'

// 2.8-2 BodyCard.jsに渡すpropsの詳細情報をcardContents関数に格納
const cardContents = [
  {
      title: "タイトル1",
      subheader: "サブヘッダー1",
      avatarUrl: "https://joeschmoe.io/api/v1/random",
      imageUrl: "https://picsum.photos/150"
  },
  {
      title: "タイトル2",
      subheader: "サブヘッダー2",
      avatarUrl: "https://joeschmoe.io/api/v1/random",
      imageUrl: "https://picsum.photos/150"
  },
  {
      title: "タイトル3",
      subheader: "サブヘッダー3",
      avatarUrl: "https://joeschmoe.io/api/v1/random",
      imageUrl: "https://picsum.photos/150"
  },
  {
      title: "タイトル4",
      subheader: "サブヘッダー4",
      avatarUrl: "https://joeschmoe.io/api/v1/random",
      imageUrl: "https://picsum.photos/150"
  },
]

// 2.7-4 GridにBodyCardを入れ子にする
// 横幅 = xs, sm md, lg, xlで決められます
function Content() {
  // 2.8-2 getCardContent関数を定義 = BodyCardの全てのオブジェクトをGridにネストして返却する
  const getCardContent = getObj => {
    return (
        <Grid item xs={12} sm={4}>
            <BodyCard {...getObj} />
        </Grid>
    );
};
    return (
    // 2.7-5 spacing={2} = スペースを入れて見た目調整
    <Grid container spacing={2}>
      {/* 2.8-2 cardContentsの各オブジェクト(contentObj)にgetCardContent関数を適用 */}
      {cardContents.map(contentObj => getCardContent(contentObj))}
    </Grid>
  )
}

export default Content