import { render } from '@testing-library/react';
import React from 'react';
import data from "./data.json";
import ShowImage from './ShowImage';
import Table from './Table';

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            ids: [],
            // apiLink: "https://jsonplaceholder.typicode.com/photos"
        }
    }

    // componentDidMount(){
    //     fetch(this.state.apiLink)
    //     .then(res => res.json())
    //     .then(res => this.setState({
    //       data: res
    //     }))
    //   }

    comparison = (id,compare) => {
        console.log(id)
        let imgToCompare = this.state.data.filter(item => item.id === id)[0]                                                                                                                                            
        imgToCompare['toCompare'] = compare ? false : true;
        console.log(imgToCompare)
        this.setState({
            ids: [...this.state.ids, id]
        })
        console.log(this.state.ids)
    }

    render() {
        // let compareData = this.state.data.filter(item => this.state.ids.find(item2 => item.id === item2 ))
        let compareData = this.state.data.filter(item => item.toCompare === true)
        console.log(compareData)
        return (
            <>
            <div className="display">
                {this.state.data.map(item=><ShowImage key={item.id} imgData={item} handleClick={this.comparison} />)}
            </div>
            <div>
                {compareData.map(item=><Table key={item.id} imgData={item} />)}
            </div>
            <style jsx>
                {
                    `.display{
                        display: flex
                    }`
                }
            </style>
        </>
        );
    }
}
export default Image;