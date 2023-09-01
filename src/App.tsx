import { TodoHandler } from './assets/components/TodoHandler';
import { useCurrentTime } from './hooks/useCurrentTime';

function App() {
    return (
        <div
            style={{
                border: '1px solid red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: '20px',
                height: '70vh',
                width: '350px',
                padding: '15px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Alarm App</h2>
                <h2>10:40</h2>
            </div>

            <TodoHandler />
        </div>
    );
}

export default App;
