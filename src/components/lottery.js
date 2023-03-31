import React, {useState, useEffect} from 'react';
import Ball from './ball';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/count';

const Lottery = () => {
    const [name,setName] = useState('Reset')
    // const [count, setCount] = useState(0)
    const num = useSelector((state) => state.countReducer.num);
    const reduxstate = useSelector((state) => state);
    console.log("reduxstate is ::",reduxstate)
    console.log("num is :::",num)
    const dispatch = useDispatch();
    const data = {
        title:'Game-1',
        numbers: [1,2,3,4,5,6]
    }
    const container = {
        border:'2px solid grey',
        borderRadius:'7px',
        width:'40em',
        textAlign:'center',
        margin:'1em auto auto',
        padding: '2em'
    }
    const Balls = data.numbers.map((val,i) =><Ball key= {i} num={val} />)

    // useEffect(()=>{
    //     if(count >0){
    //         console.log('Inside useEffect count .....')
    //         document.title = `ITT Training`;
    //     }
    // },[count])

    useEffect(()=>{
        console.log('Inside useEffect name .....')
        document.title = `ITT Training`;
    },[name])

    useEffect(()=>{
        console.log('Inside useEffect .....')
    })

    return (
        <div style={container}>
            <h3>{data.title}</h3>
            <div>
            {Balls}
            </div>
            <Button onClick={(e)=> setName(e.target.innerHTML === 'Reset' ? 
            'Set' : 'Reset')}>{name}</Button>
            <Button onClick={()=> dispatch(increment())}>{num}</Button>
        </div>
    )
}

export default Lottery