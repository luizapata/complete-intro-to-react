const React = require('react')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>video</h1>
      <input className='search' type='text' placeholder='search' />
      <button className='browse-all'> or browse all </button>
    </div>
  </div>
)

module.exports = Landing
