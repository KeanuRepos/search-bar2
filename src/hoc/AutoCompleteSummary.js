import React from 'react'

const AutoCompleteSummary = (WrappedComponent) => {
    return (props) =>{
        console.log('1',props);
        return(
            <div className = "container">
        
                <div className = "form-row">
        
                    <div className = "col mt-2">
                        <h3>Logo</h3> 
                    </div>
        
                    <div className = "col">
                        <div className = "input-group md-form form-sm from-1 pl-0 mt-2">
                            <div className = "input-group-prepend">
                                <span className ="input-group-text purple lighten-3" id="basic-text1"><i className="fas fa-search text-white" aria-hidden="true"></i></span>
                            </div>
                            <WrappedComponent {...props}/>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

}
export default AutoCompleteSummary