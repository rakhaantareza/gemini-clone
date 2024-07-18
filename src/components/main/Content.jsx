import { assets } from '../../assets/assets'
import './content.css'

const Content = () => {
  return (
    <div className="content">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="container">
        <div className="greet">
          <p><span>Hello, Gemini</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Teach me the concept of game theory in simple terms</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Help me find YouTube videos to care for a specific plant</p>
            <img src={assets.youtube_icon} />
          </div>
        </div>

        <div className='content-bottom'>
          <div className='search-box'>
            <input type='text' placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img src={assets.send_icon} />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. <span>Your privacy & Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content
