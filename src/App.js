

function App() {
  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md">
        <div className="flex flex-row items-center">
          <img className="w-24 rounded-full" alt="fotoPerfil" src="https://media.licdn.com/dms/image/D4D35AQHScxq8IzhqyQ/profile-framedphoto-shrink_200_200/0/1678706942890?e=1682823600&v=beta&t=ekd3kiCJLrTN42MLysIMcm1U6wRRCbKnOluOm4Sau0Q"/>
          <div className="ml-4">
            <h3 className="font-semibold text-xl">Leonardo Hideki Kawamoto</h3>
            <h4 className="text-indigo-300 pt-1">Desenvolvedor Front-End</h4>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Bio</h2>
          <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">Estou em busca de iniciar minha jornada profissional na área de TI, com foco em programação front-end, tendo como objetivo adquirir experiência e me desenvolver cada vez mais tanto profissionalmente quanto como pessoa.</p>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold  text-2xl mb-2">Carreira</h2>
          <div className="mt-4">
            <h3 className="text-yellow-500 font-medium text-xl mt-1">Centro Universitário Senac (Ciência da Computação)</h3>
            <ul className="list-disc list-inside pl-4">
              <li className="list-item">HTML</li>
              <li className="list-item">CSS</li>
              <li className="list-item">Javascript</li>
              <li className="list-item">React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
