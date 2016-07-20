import React from 'react'
import Navbar from './navbar.jsx'
import $ from '../build/jquery.js'
import {Link} from 'react-router'

var postsURL='http://jsonplaceholder.typicode.com';

class PrePost extends React.Component {
	render() {
		return <Link to={'/posts/' + this.props.postID}><div className="prepost">{this.props.title}</div></Link>
	}
}

class Posts extends React.Component {
	constructor(props) {
    	super(props);
    	this.loadPosts=10;
    	this.loadedPosts=0;
    	this.getPost(1);
    	this.posts=[];
	}

	getPost(postID) {
		$.ajax({
		  url: postsURL + '/posts/' + postID.toString(),
		  method: 'GET',
		  async: true,
		  obj: this
		}).then(function (data) {
			this.obj.getPostThen(data);
		});
	}

	getPostThen(data) {
		this.posts[this.loadedPosts]=data;
		this.loadedPosts++;
		if (this.loadedPosts!=this.loadPosts) {
			this.getPost(this.loadedPosts+1);
		}
		this.forceUpdate();
	}

	render() {
		if (this.loadedPosts!=this.loadPosts) {
			return <div className="lposts">~ Carregando posts ~<br/><span>[{this.loadedPosts}/{this.loadPosts}]</span></div>;
		} else {
			return <div className="posts">{this.posts.map(function(post) {
				return <PrePost key={post.id} postID={post.id} title={post.title}></PrePost>;
			})}</div>;
		}
	}
}

export default class Index extends React.Component {
	render() {
		return <div><Navbar page='0'></Navbar><Posts></Posts></div>;
	}
}