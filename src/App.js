import PostList from "./features/posts/postList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
       <AddPostForm />
       <PostList />
    </main>
  );
}

export default App;
