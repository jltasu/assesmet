import React, { useState } from 'react';
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';
import Questions from '../test/Question';
import { Empty } from 'antd';

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
    return (
      <div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{color: 'black'}}/>
      </div>
    )
  }