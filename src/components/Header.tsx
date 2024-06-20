import logo from "../assets/logo.png"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"

export function Header() {
    return(
        <header className="w-full h-[6.5rem] flex justify-between items-center">
           <img src={logo} className="h-[2.5rem]" />
           <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-purple-light p-2 text-sm rounded-md">
                    <MapPin size={22} weight="fill" className="text-purple"/>
                    <span className="text-purple-dark">Porto Alegre, RS</span>
                </div>
                <div className="bg-yellow-light p-2 rounded-md relative">
                    <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
                    <div className="size-5 rounded-full bg-yellow-dark text-white flex items-center justify-center text-sm font-bold absolute top-[-10px] right-[-10px]">3</div>
                </div>
           </div>
        </header>
    )
}