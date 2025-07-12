export default function Reader() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <div className="h-8 w-8 mr-4 bg-white rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 text-blue-800"
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
            <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-xl font-bold">Simulador de Seguros</h1>
      </div>
    </header>
  )
}