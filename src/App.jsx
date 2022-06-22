import AppSeguro from './components/AppSeguro';
import { CotizadorProvider } from './CotizadorProvider';

function App() {
    return (
        <CotizadorProvider>
            <AppSeguro />
        </CotizadorProvider>
    );
}

export default App;
