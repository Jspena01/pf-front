import { useSelector, useDispatch } from 'react-redux'

import {
  setPaginaActual,
  setPaginaSiguiente,
  setPaginaAnterior,
} from 'features/reducers/librosSlice'

export default function Paginacion2() {
  const {
    paginado: { paginaActual, total },
  } = useSelector(({ librosStore }) => librosStore)

  const dispatch = useDispatch()

  const handleAnterior = () => {
    dispatch(setPaginaAnterior())
  }

  const handleSiguiente = () => {
    dispatch(setPaginaSiguiente())
  }

  const handleActual = (index) => {
    dispatch(setPaginaActual(index))
  }

  return (
    <ol className="flex justify-center space-x-1 text-xs font-medium py-5">
      <li>
        <a
          onClick={handleAnterior}
          href={'#'}
          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      {Array.from({ length: total }, (x, i) => i + 1).map((pagina) =>
        pagina === paginaActual ? (
          <li className="block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded-full">
            {pagina}
          </li>
        ) : (
          <li>
            <a
              href={'#'}
              onClick={() => handleActual(pagina)}
              className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded-full"
            >
              {' '}
              {pagina}{' '}
            </a>
          </li>
        )
      )}
      <li>
        <a
          onClick={handleSiguiente}
          href={'#'}
          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  )
}
