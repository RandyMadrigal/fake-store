const Home = () =>{
    return <div className="h-screen flex items-center justify-center font-bold">
        <div className="relative bg-white w-full h-4/6  border-1 border-black text-white ">
            <img src="https://t3.ftcdn.net/jpg/01/07/00/50/360_F_107005010_vHGDB9kSbCKY0bYpYkGd9oAhgmSY9f8v.jpg" className="w-full h-full object-cover brightness-75" alt="homeImg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-justify">
                <h1 className="text-9xl">Loren Epsum</h1>
                <br />
                <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in placerat sem.</p>
            </div>
        </div>
    </div>
}

export default Home;