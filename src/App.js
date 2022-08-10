import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.scss'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts1, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts1, newPost])
    }

    const removePost = (post) => {
        setPosts(posts1.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr/>
        <div>
            <MySelect
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
        {posts1.length
            ? <PostList remove={removePost} posts={posts1} title={'JS'}/>
            : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
        }
    </div>
  );
}

export default App;
