const Post = (props) => {
    return (
        <>
        <article>
        <img src={props.post.image} alt={props.post.alt} />
        <h3>
        {props.post.title}
        </h3>
        <p>
        {props.post.excerpt}
        </p>
        </article>
        </>
  )
}

export default Post;