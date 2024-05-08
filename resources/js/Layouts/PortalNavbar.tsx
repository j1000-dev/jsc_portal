import { ReactNode } from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Layout } from 'antd';
import { SettingFilled } from '@ant-design/icons';
const { Header } = Layout;


export default function PortalNavbar({ children, type }: { children: ReactNode; type: string }) {
    const { auth } = usePage<any>().props
    const isAdmin = (): boolean => {
        return auth.user.roles.some((r: { name: string }) => r.name === 'Admin');
    };

    return (
        <Layout>
            <Header className='flex items-center justify-between bg-red-900'>
                <h1 className="tracking-wide text-white text-lg">Welcome {auth?.user?.name || 'Guest'}!</h1>
                <div className="flex items-center justify-center w-48">
                    {isAdmin() && (
                        <a href="/nova">
                            <SettingFilled className="text-white px-4 hover:text-gray-400" style={{ fontSize: '20px' }} />
                        </a>
                    )}
                    <Link
                        href="/logout"
                        method="post"
                        className="
                            px-4 py-2 bg-gray-400 border border-transparent 
                            rounded-md font-semibold text-xs text-white 
                            uppercase tracking-widest hover:bg-gray-700 
                            focus:bg-gray-700 active:bg-gray-900 
                            -gfocus:outline-none focus:ring-2 focus:ring-indigo-500 
                            focus:ring-offset-2 transition ease-in-out duration-150"
                        as="button"
                        type="button"
                    >
                        Log Out
                    </Link>
                </div>
            </Header>
        </Layout>
    );
}