import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './content.css'
import { Context } from '../../context/Context'

const Content = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="content">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="container">

      {!showResult ? 
        <>
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
        </>
        :<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ?
            <div className="loader">
              <hr />
              <hr className="gradient"/>
              <hr className="short-line"/>
            </div>
            :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            }
          </div>
        </div>
      }

        <div className='content-bottom'>
          <div className='search-box'>
            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
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
