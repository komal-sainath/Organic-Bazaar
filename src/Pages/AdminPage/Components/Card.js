import React from 'react';
import { Card, CardContent, makeStyles, Typography, CardActions, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { blueGrey } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    minWidth: 270,
    width: 'fit-content',
    display: 'inline-block',
    margin: "1rem",
    backgroundColor: blueGrey[50]

  },
  title: {
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});



export const UserCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="textSecondary" gutterBottom>
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.address.zipcode}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="Edit User">
          <Edit fontSize="small" />
      </IconButton>
        <IconButton aria-label="Delete User">
            <Delete />
        </IconButton>
      </CardActions>
  </Card>
  );
};
    
