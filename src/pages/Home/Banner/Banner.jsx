

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen h-[72vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(https://i.ibb.co/nbWm8w9/banner3.jpg)] bg-center bg-cover" /* style={{ backgroundImage: 'url(https://i.ibb.co/nbWm8w9/banner3.jpg)' }} */>
            <div className="hero-overlay "></div>
            <div className="hero-content text-start text-neutral-content">
                <div className="max-w-full text-base-300">


                    <h1 className="lg:mb-5 mb-3 lg:text-6xl md:text-4xl text-2xl font-bold">First Choice for Last Mile</h1>
                    <p className="text-2xl font-semibold">From Pickup To Destination</p>
                    <p className="mb-5 text-xl lg:mt-3">Make deliveries more cost-effective while guaranteeing customer loyalty.</p>
                    <div  className="lg:mt-6">
                        <label className="input input-bordered flex items-center gap-2 max-w-md">
                            <input type="text" className="grow text-black " placeholder="search here..." />
                            <span className="badge badge-info"><button >search</button></span>
                        </label>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Banner;