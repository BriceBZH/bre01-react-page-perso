import './App.css'
import {posts, skills} from './data.js';

function App() {
  return (
    <>
    <h1>Joan Doe</h1>
    <section>
      <h2>Compétences</h2>
      <ul>
      {skills.map((skill, i) => <li key={i}>{skill.name} : {skill.grade} / 5</li>)}
      </ul>
    </section>
    <section>
    <h2>Publications</h2>
    <ul>
      {posts.map((post, i) => 
      <li key={i}>
        <article>
          <img src={post.image} />
          <h3>
					  {post.title}
					</h3>
          <p>
            {post.excerpt}
          </p>
        </article>
      </li>
      )}
    </ul>
    </section>
    </>
  )
}

export default App