import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// 2.8-1a カードの ヘッダー を追加
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
// 2.8-1b カードの アイコン を追加
import IconButton from '@material-ui/core/IconButton';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
// 2.8-2 アバターと画像はランダムで取得できるようにする。
import { CardMedia } from '@material-ui/core';


const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

// 2.8-2 propsを引数に受け取る
function BodyCard(props) {
    // 2.8-2 Content.jsの<BodyCard />で設定したオブジェクトをpropsに定義、returnの中の各コンポネントに渡す
    const { avatarUrl, title, subheader, text, imageUrl } = props;

    const classes = useStyles();
    // 2.8-2 bullを追加
    const bull = <span className={classes.bullet}>•</span>; 
    return (
        <Card variant="outlined">
          {/* 2.8-1a カードの ヘッダー を追加 */}
          <CardHeader
            avatar={<Avatar src={avatarUrl}/>}            
            action={
            // 2.8-1b カードの アイコン を追加
            <IconButton aria-label="settings">
                <StarBorderOutlinedIcon />
            </IconButton>
            }
            title={title}
            subheader={subheader}
        />
          {/* 2.8-2 CardMedia を追加 */}
          <CardMedia style={{ height: "150px" }} image={imageUrl} />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {text}
            </Typography>
          </CardContent>
          <CardActions>
            {/* 2.8-2 ボタン表示の更新 */}
            <Button size="small">詳細をみる</Button>
          </CardActions>
        </Card>
    );
}

export default BodyCard
