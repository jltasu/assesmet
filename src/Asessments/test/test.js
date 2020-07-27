import React, { useState } from 'react';
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';
import Questions from '../test/Question';

const data = [
    {
      title: 'lets start with your first name? *',
      id: 'first_name',
      link: 'last_name',
      i: 1
    },
    {
      title: 'and your last name? *',
      id: 'last_name',
      link: 'city',
      i: 2
    },
    {
      title: 'what city and state are you from? (or put a zipcode) *',
      id: 'city',
      link: 'occupation',
      i: 3
    },
    {
      title: 'got a job? or are you a student? *',
      id: 'occupation',
      link: '',
      i: 4
    }
  ]

  const anchorFunc = (anchor_data) => { // return array of anchor tags
    return anchor_data.map((item) => (
      item.id
    ))
  }
  
  export default function Asessment() {
  
    let options = {
      sectionClassName: 'section',
      anchors: anchorFunc(data),
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: false
    };
  
    const [obj, setObj] = useState({});
  
  
    const inputDataHandler = (name, value) => {
      console.log(name, value)
      console.log(obj)
      setObj({
        ...obj,
        [name]: value
      });
    }
  
    const submitBtnHandler = () => {
      console.log(obj);
      //API call here
    }
  
    return (
      <div style={{backgroundColor: '#F1ECE2'}}>
        <ScrollToTopOnMount />
        <SectionsContainer {...options}>
          {
            data.map((item, i) => {
              return (
                <Section key={i} >
                  <div>
                    <header className="App-header">
                      <Questions
                        item={item}
                        index={i}
                        isSubmit={i == (data.length - 1) ? true : false}
                        inputDataHandler={inputDataHandler}
                        submitBtnHandler={submitBtnHandler}
                      />
                    </header>
                  </div>
                </Section>
              )
            })
          }
        </SectionsContainer>
      </div>
    );
  }