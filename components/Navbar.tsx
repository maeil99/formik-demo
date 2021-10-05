import Link from 'next/link'

const Navbar = () =>  {
    return (
        <nav className='flex justify-end space-x-7 max-w-full bg-gray-300 h-12 py-1'>
        <Link href='/'>
        <a className='button bg-white h-10 hover:text-primary'>Home</a>
        </Link>
        <Link href='/register'>
        <a className='button bg-white h-10 hover:text-primary'>Register Now</a>
        </Link>
        </nav>
    )
}

export default Navbar
