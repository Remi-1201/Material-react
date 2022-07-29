// 2.4-4 ヘッダーにMaterial-uiを適用
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import React from 'react'

function Header() {
    return (
        // 2.4-4 ヘッダーなのでposition="static"に
        <AppBar position="static">
            <Toolbar>
                <Typography>ヘッダー</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header