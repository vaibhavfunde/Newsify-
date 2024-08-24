import React, { Component } from 'react'

export default class Newsitems extends Component {
   


  render() {
    let  {title ,description , imageurl ,newsurl, author , date , source} = this.props;
    return (

      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex', 
             justifyContent:'flex-end',
             position:'absolute',
             top:9,
             right:44
          }}>
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1' , left:"90%"}}>
                 {source}
                 
             </span>
             </div>
           <img src={!imageurl?"https://seotest.guwahatiplus.com/public/web/images/default-news.png":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title">{title}...  
                </h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
             <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
             </div>
           
        </div>
        
    </div>
    )
  }
}
