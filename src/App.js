// import logo from './logo.svg';
import './App.css';
// import LoginForm from './Components/LoginForm';
// import LoginFetch from './Components/LoginFetch';
// import LoginMern from './Components/LoginMern';
// import Registration from './Components/Registration';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LabServiceTable from './Components/LabServiceTable';
import LabServiceForm from './Components/LabServiceForm';
// import FormDataMern from './Components/FormDataMern';
// import Fetchdatabyid from './Components/Fetchdatabyid';
// import FileUpload from './Components/FileUpload';
// import FileUploadmultiple from './Components/FileUploadmultiple';  
// import ProductList from './Components/ProductList';
// import Multipleimages from './Components/MultipleImages';
// import CrudOperations from './Components/CrudOperations';

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <LoginFetch/> */}
      {/* <FileUploadmultiple/> */}
    {/* <Router>
      <Routes>
        {/* <Route path='/' element={<Registration/>}/>
        <Route path='/LoginMern' element={<LoginMern/>}/>
        <Route path='/FormDataMern' element={<FormDataMern/>}/> */}
        {/* <Route path='/' element={<Fetchdatabyid/>}/> */}
  
    {/* <FileUpload/> */}
    {/* <Router>
      <Routes>
        <Route path='/' element={<FileUpload/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
      </Routes>
    </Router> */}

    {/* <Router>
      <Routes>
        <Route path='/' element={<FileUploadmultiple/>}/>
        <Route path='/Multipleimages' element={<Multipleimages/>}/>
      </Routes>
    </Router> */}
    {/* <CrudOperations/> */}
    <Router>
      <Routes>
        <Route path='/' element={<LabServiceTable/>}/>
        <Route path='/LabServiceForm' element={<LabServiceForm/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
