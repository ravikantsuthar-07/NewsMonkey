import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, Newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl?imgUrl:"https://www.livemint.com/lm-img/img/2023/08/25/600x338/PTI08-24-2023-000015A-0_1692927337023_1692927409968.jpg"} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title?title:""}</h5>
                        <p className="card-text">{description?description:""}</p>
                        <a href={Newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
