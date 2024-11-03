import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

function App() {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // useEffect(() => {
  //   // Adiciona um listener para desativar o botão direito em todo o documento
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);

  //   // Remove o listener quando o componente é desmontado
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  return (
    <>
      <Header
        isSidebarClosed={isSidebarClosed}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Info isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
      
    </>
  );
}

export default App;