import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/LoadCars/useCars';
import Cars from '../Cars/Cars';

const InventoryItems = () => {
    const navigate = useNavigate();
    const [cars] = useCars();
    const sixCars = cars.slice(0, 6);

    const navigateToInventories = () => {
        navigate('/manage-inventories');
    }

    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    sixCars.map(car => <Cars key={car._id} car={car}></Cars>)
                }
            </div >
            <button onClick={() => navigateToInventories()} className='btn checkout-btn'>Manage Inventories</button>
        </div>
    );
};

export default InventoryItems;