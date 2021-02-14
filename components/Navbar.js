import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/blog-logo.jpg" width={77} height={77} alt="ourlogo"/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/blogs/"><a>Blogs</a></Link>
        </nav>

    );
}

export default Navbar;