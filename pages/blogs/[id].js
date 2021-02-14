import styles from '../../styles/BlogPost.module.css'

export const getStaticPaths = async () => {
    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataPosts = await resPosts.json()

    const paths = dataPosts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const post = await res.json();

    //fetching user name
    res = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
    const user = await res.json()

    return {
        props: {
            post: post,
            user: user
        }
    }
}


const Blogs = ({ post, user }) => {

    return (
        <div>
            <h3> {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
            <p> {post.body}</p>
            <span className={styles.userName}> Written by: {user.username}</span>
        </div>
    );
}

export default Blogs;