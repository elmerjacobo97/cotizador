import { MARCAS, PLANES, YEARS } from '../constants';
import { Fragment } from 'react';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
    const { datos, handleChangeDatos, error, setError, cotizarSeguro } =
        useCotizador();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');
        cotizarSeguro();
    };

    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label
                        htmlFor='marca'
                        className='block font-bold text-gray-400'
                    >
                        Marca
                    </label>
                    <select
                        name='marca'
                        id='marca'
                        className='w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:border-indigo-500
                        focus:ring-1 focus:ring-indigo-500 transition'
                        onChange={(e) => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value=''>-- Selecciona Marca --</option>
                        {MARCAS.map((marca) => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mb-2'>
                    <label
                        htmlFor='year'
                        className='block font-bold text-gray-400'
                    >
                        Año
                    </label>
                    <select
                        name='year'
                        id='year'
                        className='w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:border-indigo-500
                        focus:ring-1 focus:ring-indigo-500 transition'
                        onChange={(e) => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value=''>-- Selecciona Año --</option>
                        {YEARS.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mb-4'>
                    <label className='block font-bold text-gray-400'>
                        Elige un Plan
                    </label>
                    <div className='flex gap-3 items-center'>
                        {PLANES.map((plan) => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input
                                    type='radio'
                                    name='plan'
                                    value={plan.id}
                                    onChange={(e) => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white px-3 py-2
                    font-bold rounded-lg'
                >
                    Cotizar
                </button>
            </form>
        </>
    );
};

export default Formulario;
