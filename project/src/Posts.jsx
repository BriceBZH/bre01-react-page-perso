import Post from './Post.jsx';

const Posts = (props) => {
    const posts = props.data;
    return (
        <>
        <h2>Publications</h2>
        <ul>
          {posts.map((post, i) => 
          <li key={i}>
            <Post key={i} post={post} />
          </li>
          )}
        </ul>
        </>
  )
}

export default Posts;