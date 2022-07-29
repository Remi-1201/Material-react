// 2.4-4 ヘッダーにMaterial-uiを適用
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// 2.5 アイコンをつける
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import React from 'react'

function Header() {
    return (
        // 2.4-4 ヘッダーなのでposition="static"に
        <AppBar position="static">
            <Toolbar>
                <Typography>ヘッダー</Typography>                
                <AccountCircleOutlinedIcon /> {/* 2.5 アイコンをつける */}
            </Toolbar>
        </AppBar>
    )
}

export default Header