import { Link } from '@inertiajs/react';

export default function Navbar() {
    const links = [
        "HOME",
        "HARRY JEROME",
        "COACHES",
        "VENUES",
        "PRAISE",
        "PHOTOS",
        "REGISTRY",
        "DIRECTORS",
        "NEWS",
        "CONTACT"
    ];
    const isCurrentPage = (link: string) => {
        const curRoute = `website.${link.replace(" ", "-").toLocaleLowerCase()}`
        if (route().current() === curRoute) {
            return true;
        }
        return false;
    }
    return (
        <nav className="flex flex-wrap justify-center">
            {links.map((link, id) => (
                <Link
                    key={id}
                    href={'/' + link.replace(' ', "-").toLowerCase()}
                    className={`px-3 tracking-tight font-semibold ${isCurrentPage(link) ? 'text-gray-500' : 'text-red-800'}`}
                >
                    {link}
                </Link>
            ))}
        </nav>
    )
}