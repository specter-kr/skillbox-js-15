import React, { Component } from 'react';
import {saveComment} from './savecomments.js';

class MakeCommentsBlock extends Component{

  state = {coms: JSON.parse(localStorage.getItem('comments'))}

  deleteCom (key) {
    const coms = this.state.coms.map((com, i) => {
      if (key === i){
        if (key === 0){
          this.state.coms.shift();
          let newComs = JSON.stringify(this.state.coms);
          localStorage.setItem('comments', newComs);
        }
        else {
          this.state.coms.splice(key, key);
          let newComs = JSON.stringify(this.state.coms);
          localStorage.setItem('comments', newComs);
        }
      };
    });
    this.setState({coms: JSON.parse(localStorage.getItem('comments'))});
  };

  addComment = () => {
    const allComments = JSON.parse(localStorage.getItem('comments'));
    saveComment(allComments);
    let coms = JSON.stringify(allComments);
    localStorage.setItem('comments', coms);
    this.setState({coms: JSON.parse(localStorage.getItem('comments'))});
  };

  render (){
    return (
      <React.Fragment>
        {this.state.coms.map((com, i) => {
            return (
              <React.Fragment>
                    <div key={i} className='comment-block'>
                      <div className="coms-block-author">{com.author}</div>
                      <div className="coms-block-text">{com.text}</div>
                      <div className="coms-block-date">{com.date}</div>
                      <button className="button-del" onClick={ev => {this.deleteCom(i)}}>X</button>
                    </div>
                </React.Fragment>
            );
        })}
        <div className="comment-field">
              <input type="text" className="author-field" defaultValue="Автор"/>
              <br />
              <input type="textarea" className="text-field" />
              <br />
              <input type="button" className="button-add" value="Отправить" onClick={this.addComment} />
        </div>

      </React.Fragment>
        );
  }
}

export default MakeCommentsBlock
