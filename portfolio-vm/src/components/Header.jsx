import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <div>
                <nav className="flex bg-transparent text-white justify-around items-center h-14">
                    <ul className="flex gap-4">
                        <li className="text-emerald-500 "><NavLink to="/">VM</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projetos">Projetos</NavLink></li>
                        <li><NavLink to="/sobre">Sobre</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}