import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async function getPosts() {
			const querySnapshot = await getDocs(collection(firestore, 'posts'));

			console.log(querySnapshot);

			const allPosts = querySnapshot.docs.map((doc) => {
				// console.log(`${doc.id} => ${doc.data()}`);
				return {
					id: doc.id,
					...doc.data(),
				};
			});

			console.log(allPosts);
			setPosts(allPosts);
		})();
	}, []);

	return (
		<div className="home">
			<h1>Tech Blogs</h1>
			<div id="blog-by">Shiv</div>
			{posts.map((post, index) => (
				<div className="post" key={`post-${index}`}>
					<Link to={`/post/${post.id}`}>
						<h3>{post.title}</h3>
					</Link>
					<p>{post.subTitle}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
