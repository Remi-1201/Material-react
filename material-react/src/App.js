import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core'; // 2.3-1 Gridの追加

function App() {
  return (
    // 2.3-2 Gridの追加
    <Grid container direction="column">      
      <Grid item>
        item1item1item1item1item1item1item1item1item1item1item1item1
      </Grid>
      <Grid item container>        
        <Grid sm={2} /> {/* 2.3-3 左右の余白 */}
          <Grid xs={12} sm={8}>
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
          </Grid>        
        <Grid sm={2} /> {/* 2.3-3 左右の余白 */}
      </Grid>
    </Grid>
  );
}

export default App;
