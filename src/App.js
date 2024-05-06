import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/JobList';

function App() {
    return (
        <Provider store={store}>
            <div className="App" style={{
                flex:'column'
            }}>
                
                <JobList />
            </div>
        </Provider>
    );
}

export default App;
