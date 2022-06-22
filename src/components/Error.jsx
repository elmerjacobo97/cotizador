import useCotizador from '../hooks/useCotizador';

const Error = () => {
    const { error } = useCotizador();

    return (
        <div className='border text-center border-red-400 bg-red-100 text-red-600 px-3 py-2 mb-1.5 animate__animated animate__headShake'>
            <p>{error}</p>
        </div>
    );
};

export default Error;
