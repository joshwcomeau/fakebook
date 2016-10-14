// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import Card from '../Card';
import PostHeader from '../PostHeader';
import styles from './styles';


const Post = ({ post, author }) => {
  return (
    <Card className={css(styles.post)}>
      <PostHeader
        author={author}
        timestamp={post.timestamp}
        isShared={!!post.originalPostId}
      />
      <p className={css(styles.postText)}>{post.text}</p>
      { post.src && <img src={post.src} className={css(styles.img)} />}
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['link', 'status', 'image']).isRequired,
    timestamp: PropTypes.number.isRequired,
    authorId: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    src: PropTypes.string,
    originalPostId: PropTypes.string,
  }).isRequired,
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string,
  }).isRequired,
  comments: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  author: state.profiles.byId[ownProps.post.authorId],
});

export default connect(mapStateToProps)(Post);
