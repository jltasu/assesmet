import React from 'react';
import InputBlock from './Question';
import { connect } from 'react-redux';

const FullPage = ({data}) => {

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value
    });
    var json = JSON.stringify(object);
    console.log(json)
  }

  return (
    <div className="body-form" >
      <div className="upform">
        <form onSubmit={handleSubmit}>
          <div className="upform-header" />
          <div className="upform-main">
            {
              data.map(function(item, i){
                  return <InputBlock id={item.i} question={item.title}/>
              })
            }
          </div>
          <div className="upform-footer">
            <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.questions.questions
})

export default connect(mapStateToProps, null)(FullPage);