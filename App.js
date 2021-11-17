class Randomizer extends React.Component {
    state = {
        number: undefined,
        inputValue: ""
    }

    static defaultProps = {
        omens: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"]
    }

    handleRandomOmen = () => {
        const number = Math.floor(Math.random() * this.props.omens.length);
        this.setState({
            number: number,
        })
    }

    handleChangeInput = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleAddNewOmen = () => {
        if(this.state.inputValue === "") return alert("Nie mozesz dodać pustej wrozby!!!");
                
        this.props.omens.push(this.state.inputValue);

        alert(`Dodano wrózbę ${this.state.inputValue}! Twoje dostępne do wykorzystania wrózby to: ${this.props.omens} w sumie jest ich ${this.props.omens.length}`);
        this.setState({
            inputValue: "",
        })   
    }

    render() {
        return (
            <>
                <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
                <br/>
                <input type="text" onChange={this.handleChangeInput} value={this.state.inputValue}/>
                <button onClick={this.handleAddNewOmen}>Dodaj wróżbę</button>
                {this.state.number === undefined ? null : <h1>{this.props.omens[this.state.number]}</h1>}
            </>
        )
    }
}

ReactDOM.render(<Randomizer/>, document.getElementById('root'))