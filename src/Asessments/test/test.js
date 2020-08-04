import React from 'react';
import InputBlock from './Question';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const FullPage = ({ data }) => {

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
    <div style={{ width: '100%', height: '100%', background: 'blue', position: 'absolute', backgroundImage: `url(https://newcastlebeach.org/images/black-and-white-student-8.jpg)` }}>
      <div className="body-form" style={{ backgroundImage: 'linear-gradient(black, white)', color: 'white' }}>
        <div className="upform">
          <form onSubmit={handleSubmit}>
            <div className="upform-header" />
            <div className="upform-main">
              <h1 style={{color: 'white', padding: '1.2rem'}}>¿Te gustaria trabajar en ... </h1>
              {
                data.map(function (item, i) {
                  return <InputBlock id={item.i} question={item.title} />
                })
              }
              <div class="input-block">
                <div class="label" style={{color: 'black'}}>Escribe una experiencia tuya ....</div>
                <div class="input-control">
                  <TextArea rows={4} value="Me llamo Lauren Price. Soy un estudiante  de ingeniería de Sistemas  de la universidad de Peruana Unión. Yo tengo 21 años y soy de Ayacucho. Yo estoy terminando la universidad y estoy estudiando Inglés"/>
                </div>
              </div>
            </div>
            <div className="upform-footer">
              <button className="btn btn-primary btn-lg"><Link to='/asessments/reports'>Enviar</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.questions.questions
})

export default connect(mapStateToProps, null)(FullPage);