import HtmlSaver from './HtmlSaver';
// import './App.css';

import  CustomStyleProvider from "./shared/CustomStyle"
import  MainLayoutProvider from "./shared/MainLayout"

function App() {
  return (
    <div className="App">
      <MainLayoutProvider>
        <CustomStyleProvider>
          <HtmlSaver/>
        </CustomStyleProvider>
      </MainLayoutProvider>
    </div>
  );
}

export default App;
