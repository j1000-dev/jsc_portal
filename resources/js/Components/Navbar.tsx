import { Link } from '@inertiajs/react';

export default function Navbar() {
    const links = [
        "HOME",
        "HARRY JEROME",
        "COACHES",
        "VENUES",
        "PRAISE",
        "PHOTOS",
        "REGISTER",
        "DIRECTORS",
        "NEWS",
        "CONTACT"
    ];
    return (
        <nav className="flex flex-wrap justify-center">
            {links.map((link, id) => (
                <Link key={id} href={'/' + link.replace(' ', "-").toLowerCase()} className="px-3 hover:text-red-500">{link}</Link>
            ))}
        </nav>
    )
}