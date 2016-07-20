import React from 'react'
import {Link} from 'react-router'

var navData = [
			{'caption': 'Início', 'href': '/'},
			{'caption': 'Sobre', 'href': '/about'} 
			];

export default class Navbar extends React.Component {
	render() {
		var page=this.props.page;
		return <div className="navbar">{navData.map(function(data,i) {
			return <Link to={data.href} key={i}><div className={(i==page) ? 'navact' : ''} key={i}>{data.caption}</div></Link>;
		})}</div>;
	}
}