import { Route, Routes } from 'react-router-dom';
import AddCar from './Pages/AddCar/AddCar';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyCar from './Pages/MyCar/MyCar';
import Footer from './Pages/Shared/Footer/Footer';
// import './App.css';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:carId' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/manageItems' element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>
        <Route path='/addCar' element={<RequireAuth>
          <AddCar></AddCar>
        </RequireAuth>
        }></Route>
        <Route path='/myCar' element={<RequireAuth>
          <MyCar></MyCar>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
