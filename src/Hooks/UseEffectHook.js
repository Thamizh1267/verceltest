import React, { useState, useEffect } from 'react';
import './style.css'

const UseEffectHook = () => {
    const [Posts, setPosts] = useState('');
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response.ok) {
                    throw new Error('Response Not Found');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts()
    }, []);

    if (Loading) {
        return <div>Loading......</div>
    }
    if (Error) {
        return <div>Error: {Error.message}</div>
    }
    return (
        <div>
            <h1>DATA FROM JSON PLACEHOLDER API</h1>
            <table>
                <th>S.NO</th>
                <th>Heading</th>
                <th>Paragraph</th>

                {Posts.map(Post => (

                    <tr key={Post.id}>

                        <td>{Post.id}</td>
                        <td>{Post.title}</td>
                        <td>{Post.body}</td>
                    </tr>
                )
                )
                }

            </table>

        </div>
    )
}

export default UseEffectHook;
