import React, { useEffect, useState } from "react";

export class CountDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count -1
            });
        },1000);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count && this.state.count === 0){
            if(this.timer){
                clearInterval(this.timer);
            }
        }
    }

    render(){
        return(
            <div>{this.state.count} class</div>
        )
    }
}

export const NewCountDown = (props) => {
    const [count,setCount] = useState(10);

    useEffect(()=>{
        if(count === 0){
            return;
        }

        let timer = setInterval(() => {
            setCount(count -1);
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[count]);

    return(
        <div>{count} hooks</div>
    )
}