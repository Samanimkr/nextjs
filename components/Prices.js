class Prices extends React.Component {
    state = {
        currency: 'GBP'
    }

    render() {
        const { description, code, rate } = this.props.bpi[this.state.currency];
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {description}:&nbsp;
                        <span className="badge badge-primary">{code}</span>&nbsp;
                        <strong>{rate}</strong>
                    </li>
                </ul>

                <br/>
                <select className="form-control" onChange={a => this.setState({ currency: a.target.value })}>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        )
    }
}

export default Prices;