import styles from '../../styles/Blog.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { posts: data }
    }
}


const Blogs = ({ posts }) => {
    return (
        <div>
            <h1>All blogs</h1>
            {posts.map(post => (
                <Link href={'/blogs/' + post.id} key={post.id}>
                    <a className={styles.single}>
                        { post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Blogs;