import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

const CreatePost = () => {
	const title = useFormInput('');
	const content = useFormInput('');
	const subTitle = useFormInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Title', title.value);
		console.log('subTitle', subTitle.value);
		console.log('content', content.value);

		(async function createPost() {
			const docRef = await addDoc(collection(firestore, 'posts'), {
				title: title.value,
				subTitle: subTitle.value,
				content: content.value,
				createdAt: new Date(),
			});
			console.log('Document written with ID: ', docRef.id);
		})();
	};

	return (
		<div className="create-post">
			<h1>Create Post</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="">Title</label>
					<input {...title} />
				</div>

				<div className="form-field">
					<label htmlFor="">Sub-Title</label>
					<input {...subTitle} />
				</div>

				<div className="form-field">
					<label htmlFor="">Content</label>
					<textarea {...content}></textarea>
				</div>

				<button className="create-post-btn">Create Post</button>
			</form>
		</div>
	);
};

export default CreatePost;
