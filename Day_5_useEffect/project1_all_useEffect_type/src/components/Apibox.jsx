import React from 'react'

function Apibox({ids,title, body}) {
    return (
        <div>
            <div className="row" style={{Width:'100%'}}>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card" >
                        <div className="card-body">
                            <div>{ids}</div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <a href="#" className="btn btn-primary">{"more..."}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apibox