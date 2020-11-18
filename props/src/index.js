import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail author='Shashank'/>
			<CommentDetail author='Ashish'/>
			<CommentDetail author='Mintu'/>
			<CommentDetail author='Anshul'/>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));