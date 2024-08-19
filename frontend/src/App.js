import './App.css';
import search from './assets/search.png'
import { useEffect, useState } from 'react'
import { makeHttpRequest } from './helper';

const footerItems = [
  {
    title: 'About',
    links: ['Branches']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help Center', 'Release Notes', 'Status']
  },
  {
    title: 'Community',
    links: ['Twitter', 'LinkedIn', 'Facebook', 'Dribbble', 'Podcast']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Legal']
  },
  {
    title: 'Contact Us',
    links: ['info@abstract.com']
  }
]

function App() {
  const [cards, setCards] = useState([])
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    fetchCards()
  }, [])

  async function fetchCards() {
    try {
      const response = await makeHttpRequest('/cards', "GET", null)
      setCards(response.cards);
      setShowLoading(false)
    } catch (error) {
      console.log('error occured', error.message);
    }
  }

  const debounce = (func, delay) => {
    let debounceId
    return function (e) {
      clearTimeout(debounceId)
      debounceId = setTimeout(() => { func(e.target.value) }, delay)
    }
  }

  const callApi = async (title) => {
    setShowLoading(true)
    try {
      console.log('api called', title);
      const response = await makeHttpRequest(`/cards/${title}`, "GET")
      setCards(response.cards)
      setShowLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchCardByTitle = debounce(callApi, 1000)

  return (
    <div className="container">
      <header>
        <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', margin: 'auto' }}>
          <span>Abstract | Help Center</span>
          <button >Submit a request</button>
        </div>
      </header>

      <div className='banner-section'>
        <h1>How can we help ?</h1>
        <div className='search-container'>
          <input type="text" placeholder='search' onChange={fetchCardByTitle} className='search-input' />
          <button className='search-button'>search</button>
        </div>
      </div>

      <div className='cards-section'>
        {
          showLoading ?
            <div className='loading-container'>
              <span>loading...</span>
            </div> :
            <div className='grid-container'>
              {
                cards.map((card, index) => (
                  <div className='grid-item'>
                    <div className='grid-item-title'>
                      {card.title}
                    </div>
                    <div className='grid-item-desciption'>
                      {card.description}
                    </div>
                  </div>
                ))
              }
            </div>
        }

        {
          cards.length == 0 && <div className='loading-container'>
            <span>No cards available</span>
          </div>
        }

      </div>

      <footer>
        {
          footerItems.map((footerItem, index) => (
            <div className='footer-items-container'>
              <h3>{footerItem.title}</h3>
              {
                footerItem.links.map((link, index) => (
                  <h6>{link}</h6>
                ))
              }
            </div>
          ))
        }

        <div className='trademark-container'>
          <span>@ Copyright 2022</span>
          <span>Abstract Studio Design, Inc.</span>
          <span>All Rights Reserved</span>
        </div>

      </footer>
    </div>
  );
}

export default App;
