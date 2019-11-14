import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading'
import Error from './Error'


class App extends React.Component{

    state = {lat:null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({ lat: position.coords.latitude}),
            err=>this.setState({errorMessage:err.message})
        )
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <Error message= {this.state.errorMessage} />
        }
        else if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        else {
            return <Loading  message = "Please accept location request"/>
        }
    }

    render(){
        return(
        <div>
            {this.renderContent()}
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))