import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const PostDetail = () => {
	const [post, setPost] = useState({});

	const { postId } = useParams();

	useEffect(() => {
		(async function getPosts() {
			const docRef = doc(firestore, 'posts', postId);
			const docSnap = await getDoc(docRef);

			console.log('SnapShot', docSnap);
			console.log(docSnap.data());
			setPost(docSnap.data());
		})();
	}, [postId]);

	return (
		<div className="post-detail">
			<h1 className="post-title">{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default PostDetail;
