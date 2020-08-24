export default function Hero (){
    return (
        <div>
            <img   
                src="../../static/images/hero.webp"
                className="h-screen w-screen"
                alt="Hero website comot.vn" />
                <div className="absolute top-0 h-screen bg-black bg-opacity-75 flex justify-center w-screen">
                    <div className="text-center self-center font-serif divide-y divide-primary">
                        <h1 className="text-4xl sm:text-6xl text-primary">Bột Ngũ Cốc Cô Một</h1>
                        <h1 className="text-secondary text-2xl">Thơm Ngon & Bổ Dưỡng</h1>
                    </div>
                </div>
        </div>
    )
}