import './App.css'
import {posts, skills} from './data.js';
import Skills from './Skills.jsx';
import Posts from './Posts.jsx';

function App() {
  return (
    <>
    <h1>Joan Doe </h1>
    <section>
      <Skills data={skills} />
    </section>
    <section>
      <Posts data={posts} />
    </section>
    </>
  )
}

export default App