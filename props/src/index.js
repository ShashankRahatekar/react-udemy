import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail author='Shashank' timeAgo='Today at 3:00PM' commentMsg='Hi There!' avatar={faker.image.avatar()}/>
			<CommentDetail author='Ashish' timeAgo='Today at 8:00AM' commentMsg='Hi Shashank!' avatar={faker.image.avatar()}/>
			<CommentDetail author='Mintu' timeAgo='Today at 2:30PM' commentMsg='Hi Ashish!' avatar={faker.image.avatar()}/>
			<CommentDetail author='Anshul' timeAgo='Yesterday at 12:00PM' commentMsg='Hi Everyone!' avatar={faker.image.avatar()}/>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));