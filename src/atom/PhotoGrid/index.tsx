import * as React from 'react'

import {makeStyles, useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import {lightbeige} from '../../utils/theme'
import Panel from '../../atom/Panel'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: lightbeige,

  },
  gridList: {
    overflowY: 'unset',
    width: '100%',
    height: 'auto',
  },
  image: {
    filter: 'grayscale(0.25)',
  },
}));

interface Props {

}

const tileData = [
  {
    img: 'PhotoGrid7.jpeg',
  },
  {
    img: 'PhotoGrid5.jpeg',
  },
  {
    img: 'PhotoGrid2.jpeg',
  },
  {
    img: 'PhotoGrid3.jpeg',
  },
  {
    img: 'PhotoGrid6.jpeg',
  },
  {
    img: 'PhotoGrid4.jpeg',
  },

];


const PhotoGrid = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Panel backgroundColor={lightbeige}>
      <Box className={classes.root}>
        <GridList
          cellHeight={400}
          className={classes.gridList}
          cols={isMobile ? 1 : 3}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols = {1}>
              <img className={classes.image} src={`${process.env.PUBLIC_URL}/${tile.img}`}/>
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Panel>
  )
}

export default PhotoGrid
