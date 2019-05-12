import React from 'react';

const CaculateDetail=(props)=>(
    <div>
            <p className="text-left">Your Full Name is: {props.data.fullname}</p>
            <p className="text-left">Sum of the ascii values for each character is:</p>
            <table className="table  col-sm-5">
                <tbody>
                    {
                        props.data.charters.map((charter,i) =>
                            <tr key={i}>
                                <td>{charter.charter}</td>
                                <td>{charter.ascii}</td>
                            </tr>
                        )                            
                    }
                </tbody>
            </table>
            <p className="text-left">{props.data.sumValue} in binary is {props.data.sumBinary}</p>
            <p className="text-left">The largest number of consecutive zeros is therefore {props.data.consecutiveZero}</p>
        </div>   
);


export default CaculateDetail;





