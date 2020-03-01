import React from 'react';
import tachyons from 'tachyons';

const NewsList = (props) => {
 const news =   props.articles.map((article) => {
        return <div>
        <img src={article.urlToImage} alt={article.title}/>
      <h5> {article.title} </h5>  
    <p> {article.description}</p>
        
    </div>
     })



return (
        <div className="mb5">
            <h4 className="tc mb2">Latest news in Tech Today</h4>
                  <div className="tc ma3">{news}  </div>
                         

        </div>
    )
}

export default NewsList;