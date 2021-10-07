import Router from './components/Router';
import { AuthContextProvider } from './components/AppContext/Auth.context';

function App() {
    return (
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    );
}

export default App;
