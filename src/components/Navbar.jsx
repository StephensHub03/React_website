import {
    FaHome,
    FaInfoCircle,
    FaEnvelope,
    FaServicestack
} from "react-icons/fa";

const navLink =[
    {
        name: "Home",
        icon: <FaHome />,
        href: "#"
    },
    {
        name: "About",
        icon: <FaInfoCircle />,
        href: "#"
    },
    {
        name: "Contact",
        icon: <FaEnvelope />,
        href: "#"
    },
    {
        name: "Services",
        icon: <FaServicestack />,
        href: "#"
    },
];
function Navbar(){
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">🚀MyWebsite</h1>
                <ul className="flex space-x-6">
                    {/*<li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400">
                            <FaHome/>
                            Home
                            </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400">
                            <FaInfoCircle/>
                            About
                            </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400">
                            <FaEnvelope/>
                            Contact
                            </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400">
                            <FaServicestack/>
                            Services
                            </a>
                    </li>*/}
                    {navLink.map((link, index) => (
                        <li key={index}> 
                            <a 
                            href=""
                            className="flex items-center gap-1 hover:text-blue-400">
                                {link.icon}
                                {link.name}
                            </a>
                        </li>
                    ))} 
                </ul>

            </div>
        </nav>
    )
}
export default Navbar;