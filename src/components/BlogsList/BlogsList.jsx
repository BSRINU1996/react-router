import React, { Component } from 'react';
import BlogItem from '../BlogItem/BlogItem.jsx';


class BlogsList extends Component {
    state = { blogsData: [] };

    componentDidMount() {
        // const promise = fetch("https://apis.ccbp.in/blogs");
        // promise
        // .then((res) => { return res.json() })
        // .then(jsonData => console.log(jsonData))
        this.getBlogsdata()
    }
    getBlogsdata = async () => {
        const response = await fetch("https://apis.ccbp.in/blogs");
        console.log(response)
        const statusCode = await response.status
        console.log(statusCode)
        const data = await response.json()
        console.log(data);

        const formatedData = data.map(item => ({
            author: item.author,
            avatarUrl: item.avatar_url,
            id: item.id,
            imageUrl: item.image_url,
            title: item.title,
            topic: item.topic
        }))
        console.log(formatedData);

        this.setState({ blogsData: formatedData });
    }


    render() {
        console.log(this.state);
        const { blogsData } = this.state;
        console.log(blogsData);
        return (
            <>
                <h1>this is Blogs List Component</h1>
                {blogsData.map(item => <BlogItem blogItem={item} key={item.id} />)}

            </>
        )
    }
}
export default BlogsList;
