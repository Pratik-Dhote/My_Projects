// src/data.js
import water from './water.jpg';
import chilli from './images/chilli.jpg'
import chiill_powder from './images/chilli_powder.jpg'
import coriander from './images/coriander.jpg'
import ginger from './images/ginger.jpg'
import red_dried_chilli from './images/red-dried-chilies.jpg'
import spieces from './images/spieces.jpg'
import turmeric from './images/turmeric.jpg'
import turmeric_powder from './images/turmeric_powder.jpg'
import turmeric_tablet from './images/turmeric_tablets.jpg'
export const products = [
    {
      title: 'Cotton',
      image: water,
      categories: [
        {
          title: 'Cotton',
          image: water,
          description: 'Details about Cotton Category 1',
          price:'Price: 5k'
        },
        {
          title: 'Cotton 2',
          image: water,
          description: 'Details about Cotton Category 2',
          price:'Price: 5k'
        },
        {
          title: 'Cotton 3',
          image: water,
          description: 'Details about Cotton Category 2',
          price:'Price: 5k'
        },
      ],
    },
    {
      title: 'Turmeric',
      image: turmeric,
      categories: [
        {
          title: 'Turmeric Powder',
          image: turmeric_powder,
          description: 'Details about Turmeric Powder',
          price:'Price: 5k'
        },
        {
          title: 'Turmeric Tablets',
          image:turmeric_tablet,
          description: 'Details about Turmeric Tablet',
          price:'Price: 5k'
        },
      ],
    },
    {
      title: 'Red Chilli',
      image: chilli,
      categories: [
        {
          title: 'Red Chilli Powder',
          image: chiill_powder,
          description: 'Details about Red Chilli Powder',
          price:'Price: 5k'
        },
        {
          title: ' Red Dried Chilli',
          image: red_dried_chilli,
          description: 'Details about  Red Dried Chilli',
          price:'Price: 5k'
        },
      ],
    },
    {
      title: 'Spices',
      image: spieces,
      categories: [
        {
          title: 'Coriander',
          image:coriander,
          description: 'Details about Coriander',
        },
        {
          title: 'Ginger',
          image: ginger,
          description: 'Details about Ginger',
        },
        {
          title: ' Red Dried Chilli',
          image: red_dried_chilli,
          description: 'Details about  Red Dried Chilli',
        },
      ],
    },
    
  ];
  