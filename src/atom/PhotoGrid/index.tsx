import * as React from 'react'
import {lightbeige} from '../../utils/theme'
import Panel from '../../atom/Panel'
import {Theme, makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: lightbeige,

  },
  gridList: {
    width: theme.spacing(500),
    height: theme.spacing(100),
  },
  image: {
    filter: 'grayscale(0.25)',
  },
}));

interface Props {

}

const tileData = [
  {
      img: process.env.PUBLIC_URL + '/PhotoGrid1.jpeg',
  },
  {
    img: process.env.PUBLIC_URL + '/PhotoGrid5.jpeg',
  },
  {
    img: process.env.PUBLIC_URL + '/PhotoGrid2.jpeg',
  },
  {
    img: process.env.PUBLIC_URL + '/PhotoGrid3.jpeg',
  },
  {
    img: process.env.PUBLIC_URL + '/PhotoGrid6.jpeg',
  },
  {
    img: process.env.PUBLIC_URL + '/PhotoGrid4.jpeg',
  },

];


const PhotoGrid = () => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={lightbeige}>
      <div className={classes.root}>
        <GridList cellHeight={400} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols = {1}>
              <img className={classes.image} src={tile.img}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Panel>
  )
}

export default PhotoGrid
