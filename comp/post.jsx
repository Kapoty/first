import React from 'react'
import Navbar from './navbar.jsx'
import $ from '../build/jquery.js'

var postsURL='http://jsonplaceholder.typicode.com';

class PostView extends React.Component {

	constructor(props) {
		super(props);
		this.data=[];
		this.loaded=false;
		this.getPost();
	}

	getPost() {
		$.ajax({
		  url: postsURL + '/posts/' + this.props.postID.toString(),
		  method: 'GET',
		  async: true,
		  obj: this
		}).then(function (data) {
			this.obj.getPostThen(data);
		});
	}

	getPostThen(data) {
		this.data=data;
		this.loaded=true;
		this.forceUpdate();
	}

	render() {
		if (!this.loaded) {
			return <div className="lpostview">~ Carregando informações ~</div>;
		} else {
			return <div className="postview"><span id="title">{this.data.title}</span><span id="body">{this.data.body}</span></div>;
		}
	}
}

export default class Post extends React.Component {
	render() {
		return <div><Navbar page="-1"></Navbar><PostView postID={this.props.params.postID}></PostView></div>;
	}
}