import React, { Component } from 'react';
import './index.css'

class BlogItem extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const { blogItem } = this.props;
        const { author, avatarUrl, imageUrl, id, title, topic } = blogItem;
        console.log(blogItem)
        return (
            <>
                {/* <h1>this is BlogItem Component</h1> */}
                <div className="item-container">
                    <img className="item-image" src={imageUrl} alt={`item${id}`} />
                    <div className="item-info">
                        <p className="item-topic">{topic}</p>
                        <p className="item-title">{title}</p>
                        <div className="author-info">
                            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
                            <p className="author-name">{author}</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default BlogItem; 