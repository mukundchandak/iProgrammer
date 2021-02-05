import React from 'react';

class showImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
            <div className="card">
                <img src={this.props .imgData.url} alt= {this.props.imgData.id} width="100"/>
                <div>ID: {this.props.imgData.id}</div>
                <div>Title: {this.props.imgData.title}</div>
                <div>URL: {this.props.imgData.url}</div>
                <button onClick={() => this.props.handleClick(this.props.imgData.id, this.props.imgData.toCompare)}>{this.props.imgData.toCompare?"Remove":"Compare"}</button>
            </div>
            <style jsx>
                {
                    `.card{
                        border:1px solid black;
                        width:300px;
                        margin:10px
                    }`
                }
            </style>
            </>
        )
    }
    
}
export default showImage