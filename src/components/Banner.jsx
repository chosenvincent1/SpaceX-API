
const Banner = ()=> {
    return (
        <>
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../image/spaceX.jpg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="h-[400px] flex flex-col justify-center items-center text-[#fff] text-center px-[20px] w-full bg-[red] mb-[10px]">
                <h1 className="text-[2rem] font-[700] mb-[15px] ">Welcome to Space X Data</h1>

                <p className="text-[1.5rem] font-[400] mb-[40px]">Explore the latest rocket launches and capsules.</p>

                <button className="bg-[#007bff] py-[20px] px-[30px] text-[1.2rem] border-0 rounded-[4px] font-[500] text-[#fff] cursor-pointer ">Get Started</button>
            </div>
        </>
    )
}

export default Banner;