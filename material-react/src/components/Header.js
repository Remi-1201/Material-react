// 2.4-4 ヘッダーにMaterial-uiを適用
// 2.6-1 `makeStyle`を`import`
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
// 2.5 アイコンをつける
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import React from 'react'

// 2.6-2 useStyles 関数に Typography のCSSを書く
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
    // 2.6-3 useStyles をclasses 関数に代入
    const classes = useStyles();
    return (
        // 2.4-4 ヘッダーなのでposition="static"に
        <AppBar position="static">
            <Toolbar>
                {/* 2.6-4 Typography に classes を適用 
                - className = HTMLのclassのこと */}
                <Typography className={classes.typographyStyles}>
              Anthony sistilli
                </Typography>                
                <AccountCircleOutlinedIcon /> {/* 2.5 アイコンをつける */}
            </Toolbar>
        </AppBar>
    )
}

export default Header