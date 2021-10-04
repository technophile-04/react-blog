import { Switch, Route } from 'react-router-dom';
import { Home, PostDetail, CreatePost, Navbar } from './index';

function App() {
	return (
		<div className="container">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/post/:postId">
					<PostDetail />
				</Route>
				<Route exact path="/create-post">
					<CreatePost />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
