import React from 'react';
import ReactDOM from 'react-dom';


const element = <h1>Hello World!</h1>

function Componente(props) {
    return
    <div>
        <h1>Hello World!!!</h1>
        <h3>OUTRA LINHA</h3>
    </div>
}  

class ComponenteDois extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			comSono: true
		}
	}
	render(){
		return this.state.comSono ? <h1>com sono de verdade {this.props.Componente}!</h1>:<h1>não tem Sono!</h1>
	}
}

ReactDOM.render(<ComponenteDois componente={'IIH Olha lá o props!'}/>, document.getElementById('root'));

