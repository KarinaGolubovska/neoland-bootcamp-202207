class App extends React.Component {
    constructor() {
        super()
        this.state = { result: null }
    }
    handleSubmit = event => {
        event.preventDefault()
        const form = event.target.operations.textarea.value
        const result = eval(operations)
    }
    render() {
        return <main>
            <form onSubmit={this.handleSubmit}>
                <textarea name="operations">
                    <button>=</button>
                </textarea>
            </form>
            <p>{this.state.result}</p>
        </main>

    }
}
