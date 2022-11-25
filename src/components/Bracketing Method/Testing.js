import { evaluate, index } from "mathjs";
import { useState } from "react";
import {Col,Container,Row, Table} from "react-bootstrap" ;
import 'chart.js/auto';
import { Bar, Line } from "react-chartjs-2";

const Testing=()=>{
    const[X,setX] = useState([]) ;
    const[N,setN] = useState(0) ;
    const[equation,setEquation] = useState("x^2") ;

    const cal=(X)=>{
        var fx , scope ;
        scope={
            X:X,
            x:X,
            y:X,
            Y:X
        }
        fx = evaluate(equation,scope) ;
        return fx;
    }
    const[state,setstate] = useState({labels: X.map((element,index)=>{return index+1;}),
    datasets: [
      {
        label: 'Y',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#E9967A',
        borderColor: '#E9967A',
        borderWidth: 2,
        data: X.map((element,index)=>{return cal(index+1);})
      }
    ]
});
    const e=(even)=>{
        setN(even.target.value);
        setX(new Array(parseInt(even.target.value)).fill(0)) ;
        var A= new Array(parseInt(even.target.value)).fill(0) ;
        setstate({labels: A.map((element,index)=>{return index+1;}),
        datasets: [
          {
            label: 'Y',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#E9967A',
            borderColor: '#E9967A',
            borderWidth: 2,
            data: A.map((element,index)=>{return cal(index+1);})
          }
        ]
    })
        console.log(even.target.value) ;
        
    }
    const a=(even)=>{
        console.log(even.target.value);
        setEquation(even.target.value);
    }
    return(
        <Container>
           <Row>
            <Col>
            <h4>inputEquation</h4>
            <input type="text" id="equation" value={equation} onChange={a} ></input>
            </Col>
            <Col>
            <h4>inputValue</h4>
            <input type="number" id="X" value={N} onChange={e} ></input>
            </Col>
           </Row>
           <Table striped bordered hover variant="light">
                <thead>
                 <tr>
                     <th width="30%">X</th>
                     <th width="30%">Y</th>
                </tr>
                </thead>
                <tbody>
                        {X.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{cal((index+1))}</td>
                            </tr>)
                        })}
                </tbody>
           </Table>
           <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Test',
                    fontSize:20
                    },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </Container>
    )
}

export default Testing