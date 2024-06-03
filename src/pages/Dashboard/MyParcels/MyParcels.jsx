

const MyParcels = () => {
    return (
        <section>
            <h1>From My parcel</h1>



            {/* <div>
                <div className="overflow-x-auto">
                    <table className="table">
                       
                        <thead className="bg-gray-300">
                            <tr>
                                <th>
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <p>{index + 1}</p>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="img" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        {
                                            item.name
                                        }
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateMenu/${item._id}`}>
                                            <button
                                                className="bg-amber-400 p-2 rounded-md">
                                                <span className="text-lg text-white "><FaEdit></FaEdit></span>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)}
                                            className="bg-red-800 p-2 rounded-md">
                                            <span className="text-lg text-base-200"><FaRegTrashAlt></FaRegTrashAlt></span>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>


                </div>

            </div> */}




        </section>
    );
};

export default MyParcels;