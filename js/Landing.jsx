const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>video</h1>
      <input className='search' type='text' placeholder='search' />
      <Link to='/search' className='browse-all'> or browse all </Link>
    </div>
  </div>
)

module.exports = Landing
