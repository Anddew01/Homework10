const root = ReactDOM.createRoot(document.querySelector('#root'))

let sum = 0;
function Counter() {
    return (
        <div className="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>0</button>
            <button>X</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

root.render(<App />);