import { Router, Route, Link, hashHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './build/jquery.js'

/* Import components*/
import Index from './comp/index.jsx'
import Post from './comp/post.jsx'
import About from './comp/about.jsx'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Index}/>
		<Route path="/about" component={About}/>
		<Route path="/posts/:postID" component={Post}/>
	</Router>),
	document.getElementById("app")
); 