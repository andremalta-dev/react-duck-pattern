// @flow
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 25,
  },
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
})

type BookCardProps = {
  name: string,
  author: string,
  abstract?: string,
  onDelete: Function,
}

const BookCard = ({ name, author, abstract, onDelete }: BookCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Book Name
        </Typography>
        <Typography variant="h5" component="h2">
          {name.toUpperCase()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
        <Typography variant="body2" component="p">
          <b>Abstract</b> :{abstract}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

BookCard.defaultProps = {
  abstract: 'Abstract not informed.',
}

export default BookCard
