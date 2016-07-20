import React from 'react'
import Navbar from './navbar.jsx'

class Dev extends React.Component {
	render() {
		return <div className="dev">Desenvolvido por <a target="_blank" href="http://www.facebook.com/pedropabline">Pedro Henrique</a></div>;
	}
}

export default class About extends React.Component {
	render() {
		return <div><Navbar page="1"></Navbar><Dev></Dev></div>;
	}
}