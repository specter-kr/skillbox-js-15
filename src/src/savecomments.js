import {actualDate} from './actualdate.js';

export function saveComment(allComments){
	const author = document.querySelector('.author-field');
	const text = document.querySelector('.text-field');
	const date = actualDate();
	allComments.push({
		author: author.value,
		text: text.value,
		date: date
	});
	author.value = "";
	text.value = "";
}
