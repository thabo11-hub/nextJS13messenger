import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <header className='sticky top-0 z-50 bg-sky-100 flex justify-center items-center p-10 shadow-sm'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex space-x-2 text-center'>
                    <Image src="https://links.papareact.com/jne" height={10} width={50} alt='Logo' />
                    <p className='text-blue-400 '>Welcome to Messenger</p>
                </div>
                <Link href="/auth/signin" 
                className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Sign in</Link>
            </div>
        </header>
    );
}

export default Header;