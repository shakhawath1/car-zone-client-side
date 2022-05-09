import useCars from '../../../hooks/LoadCars/useCars';
import Cars from '../Cars/Cars';

const InventoryItems = () => {
    const [cars] = useCars();
    console.log(cars)

    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    cars.map(car => <Cars key={car._id} car={car}></Cars>)
                }
            </div >

        </div>
    );
};

export default InventoryItems;