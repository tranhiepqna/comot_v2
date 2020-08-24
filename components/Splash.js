export default function Splash ({src, alt, mode="object-contain"}){
    return (
        <div className="relative">
            <img   
                src={src}
                className={"h-screen/2 w-screen " + mode}
                alt={alt} />
                <div className="absolute top-0 h-screen/2 bg-black bg-opacity-50 w-screen flex justify-center items-end p-6">
                </div>
        </div>
    )
}