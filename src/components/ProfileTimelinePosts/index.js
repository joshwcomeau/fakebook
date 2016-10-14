// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import {
  currentProfilePostsListSelector,
} from '../../reducers/posts.reducer';

import Post from '../Post';
import styles from './styles';


const ProfileTimelinePosts = ({ posts, mergeStyles }) => {
  console.log("Got posts", posts);

  return (
    <div className={css(styles.mainColumn, mergeStyles)}>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};

ProfileTimelinePosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['link', 'status', 'image']).isRequired,
    timestamp: PropTypes.number.isRequired,
    authorId: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    src: PropTypes.string,
  })),
  mergeStyles: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: currentProfilePostsListSelector(state),
});

export default connect(mapStateToProps)(ProfileTimelinePosts);
