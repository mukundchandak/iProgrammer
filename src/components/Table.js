import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <td>Photo</td>
                    <td>ID</td>
                    <td>Title</td>
                    <td>URL</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img src={this.props .imgData.url} alt= {this.props.imgData.id} width="100"/>
                    </td>
                    <td>
                        <div>ID: {this.props.imgData.id}</div>
                    </td>
                    <td>
                        <div>Title: {this.props.imgData.title}</div>
                    </td>
                    <td>
                        <div>URL: {this.props.imgData.url}</div>
                    </td>
                </tr>
                </tbody>
            </table>
            {/* <style jsx>
                {
                    `.card{
                        text-align: center;
                        border:1px solid black;
                        width:300px;
                        margin:10px
                    }`
                }
            </style> */}
            </>
        )
    }
    
}
export default Table