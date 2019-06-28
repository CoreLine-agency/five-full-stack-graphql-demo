import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { graphqlStore } from './graphql/graphql-store';

const App = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const { data } = graphqlStore.posts({});

  if (!data) {
    return null;
  }

  const handleLogin = async () => {
    await graphqlStore.login({ email, password });
    console.log('login OK');
  }

  const createPost = async () => {
    await graphqlStore.createPost({ input: { text } }, { refetchQueries: ['Posts'] });
    setText('');
    console.log('post creation OK');
  }

  return (
    <div className="App">
      <form>
        email: <input name="email" value={email} onChange={e => setEmail(e.target.value)}/><br />
        password: <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/><br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      {data.posts.map(post => (
        <p key={post.id}>
          {post.author.fullName} says {post.text}
        </p>
      ))}

      <form>
        text: <input name="text" value={text} onChange={e => setText(e.target.value)}/><br />
        <button type="button" onClick={createPost}>NIJE LOGIN</button>
      </form>
    </div>
  );
});

export default App;
