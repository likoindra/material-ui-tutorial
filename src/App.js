import SwipeableTemporaryDrawer from './demo-drawer'
import { makeStyles } from '@mui/styles'
import Navbar from './component/Navbar'
import Feed from './component/Feed'
import { Grid } from '@mui/material'
import Leftbar from './component/Leftbar'
import Rightbar from './component/Rightbar'
import Add from './component/Add'
import AddTest from './component/AddTest'
import TestFile from './component/TestFile'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <TestFile/>
      {/* <SwipeableTemporaryDrawer /> */}
      {/* <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add /> */}
      {/* <AddTest /> */}
    </div>
  )
}

export default App
