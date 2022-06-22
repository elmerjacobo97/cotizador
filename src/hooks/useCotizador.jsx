import { useContext } from 'react';
import CotizadorContext from '../CotizadorProvider';

const useCotizador = () => {
    return useContext(CotizadorContext);
};

export default useCotizador;
