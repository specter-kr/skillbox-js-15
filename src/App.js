import React, { Component } from 'react';
import MakeCommentsBlock from './commentsblock';
import AddSomePost from './addsomepost.js';

const checkLocStor = () => {
	if (localStorage.getItem('comments') == null){
		let defArr = [];
		let defArrJson = JSON.stringify(defArr);
		localStorage.setItem('comments', defArrJson);
	}
}

const App = () => {
		checkLocStor();
		return (
			<div className='comment'>
        <AddSomePost />
        <MakeCommentsBlock />
			</div>
		)
}

export default App;
