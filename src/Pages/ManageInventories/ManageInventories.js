import { useNavigate } from 'react-router-dom';
import useCars from '../../hooks/LoadCars/useCars';
import AllCars from '../Home/InventoryItems/AllCars';


const ManageInventories = () => {

    const [cars] = useCars();
    const navigate = useNavigate();

    const navigateToAddNewCar = id => {
        navigate('/addCar');
    }


    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    cars.map(car => <AllCars key={car._id} car={car}></AllCars>)
                }
            </div >
            <div className='mx-auto'>
                <button onClick={() => navigateToAddNewCar()} className='btn checkout-btn mx-5 px-5'>Add New Car</button></div>
        </div>
    );
};

export default ManageInventories;