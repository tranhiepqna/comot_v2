
import Link from 'next/link'

export default function Card({name, src, description, alt, index}){
    return(
       
            <Link href={"/san_pham/chi_tiet_san_pham?sanpham="+index}>
               <a>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={src} alt={alt} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <p className="text-gray-700 text-base text-justify">
                                {description}
                            </p>
                        </div>
                    </div> 
                </a>
            </Link> 
    )
}