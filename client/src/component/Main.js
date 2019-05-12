import React,{useState} from 'react';
import CaculateDetail from './CaculateDetail'

const Main=props=>{
    const [submitState,setsubmitState]=useState({
        IsSubmit:false
    });
    const [caculateDetailState,setCaculateDetail]=useState({    
    });
    const [nameValidState,setnameValidState]=useState({
        valid: false,error: ''
    });

    const handlesubmit=(e)=>{
        e.preventDefault();
        const {name}=e.target;
        fetch('/api/submituser' , {
            method: "POST",
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify({
               name:name.value
            })
        })
        .then((res)=>{
            if(res.status!==200){
                console.log("Fetch with error"+res.status);
                return;
            }
           return res.json();       
        })
        .then((data) => {
            setCaculateDetail(data); 
            setsubmitState({IsSubmit:true})
            document.getElementById("InputName").value = ""
            setnameValidState({valid:false}); 
        })
        .catch(error => {console.log(error)});   
    };

    const onNameChange=(e)=>{
        const name=e.target.value;
        if(!name){
            setnameValidState({valid:false,error:'Input name is empty'});        
        }else if(!name.match('^[A-Za-z]+[ ][A-Za-z]+$')){
            setnameValidState({valid: false,error:'Input name is invalid'});
        }else{
            setnameValidState({valid: true,error:''});            
        }
    }
  
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <p  className="text-left">
                        Please Enter Your Full Name:
                    </p>
                    <div className="input-group">          
                            <input className="form-control col-sm-3" 
                                    type="text" name="name" id="InputName"
                                    onChange={onNameChange}
                                    autoComplete="OFF"/>
                        <div className="input-group-append">
                            <input className="btn btn-primary" type="submit" value="Submit" disabled={!nameValidState.valid}/>  
                        </div>
                    </div>
                    {!nameValidState.valid &&<p className="text-danger text-left">{nameValidState.error}</p>}                
                </div>                    
            </form>
            {submitState.IsSubmit&& <CaculateDetail data={caculateDetailState}/>  }            
        </div>   
    )   
};


export default Main;





