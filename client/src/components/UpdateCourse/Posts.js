import React from 'react';
import { Grid} from '@mui/material';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post/Post';
import useStyles from './PostsStyles';

import Skeleton from '@mui/material/Skeleton';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  if(!posts.length && !isLoading)
    return 'No posts';
  const user = JSON.parse(localStorage.getItem('profile'));
   

  return (
    isLoading ?  (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      { [1,2,3,4].map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Skeleton variant="rectangular" width={210} height={180} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={100} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} height={30} className={classes.skeleton}/>
          <br/>
          <br/>
          <br/>
          </Grid>
    ))}</Grid>) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={6}>
        {posts?.map((post) => ((user?.result?.googleId === post?.creator || user?.result?._id === post?.creator))?
          (<Grid key={post._id} item xs={12} sm={12} md={6} lg={6} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>):null
        )}
      </Grid>
    )
  );
};

export default Posts;
