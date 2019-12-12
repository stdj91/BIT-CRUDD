import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import { POSTS_URL } from "../../../shared/constants";
import { postService } from "../../../service/postService";
import Title from "../../components/Title/Title";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    postService.getPosts().then(posts => {
      this.setState({ posts });
    });
  }
  render() {
    return (
      <>
        <Title posts={"All posts"} />
        <div className="row">
          {this.state.posts.map(post => {
            return <PostCard src={post.title} src={post.img} key={post.id} />;
          })}
        </div>
      </>
    );
  }
}
export default PostPage;
