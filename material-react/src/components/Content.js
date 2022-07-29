import { Grid } from '@material-ui/core'
import React from 'react'
import BodyCard from './BodyCard'

// 2.7-4 GridにBodyCardを３つ入れ子にする
// 横幅 = xs, sm md, lg, xlで決められます
function Content() {
    return (
      // 2.7-5 spacing={2} = スペースを入れて見た目調整
      <Grid container spacing={2}>
        <Grid item xs={4}> 
            <BodyCard />
        </Grid>
        <Grid item xs={4}> 
            <BodyCard />
        </Grid>
        <Grid item xs={4}> 
            <BodyCard />
        </Grid>
    </Grid>
  )
}

export default Content