import  { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Messages from './../Messages/Messages' ; 
import './styles.css';

const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('');
  const containerRef = useRef(null);
  const [userProfile, setUserProfile] = useState(''); 
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  },);

  const languageCode = 'fr'
  const sessionId = Math.random()*10;

  const handleMessageSubmit = (queryText) => {
    const sendData = () => {
        axios.post("http://localhost:5000/api/chatbot", {languageCode , queryText , sessionId })
           .then((res) =>{
            setIsLoading(false);
            console.log(res.data);
            if(res.data.nom){
              setUserProfile(res.data.nom) ;
            }
            const responseData ={
              text: res.data.response,
              isBot: true,
              codeHtml : res.data.html, 
              nom : res.data.nom , 
              fonction : res.data.fonction
            }
              if (res.status===200){
                setResponses((responses) => [...responses, responseData]) ; 
              }
           })
           .catch(err => console.log(err))
        }
          sendData();
  }

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
      
    }
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text);
      setCurrentMessage('');
    }
  }


const welcoming = (
    <div className='welcoming'>
        <p>Bienvenue, je suis votre Chatbot scolaire, voici les services que je peut en repondre :</p>
        <ul>
          <li>Consultation des notes</li>
          <li>Chercher de fomations</li>
          <li>Demander un rendez-vous </li>
          <li>Demander releve des notes </li>
        </ul>
        <p className='text-black fw-bold text-center'> Saisir votre code apoge avant toute autre chose</p>
    </div>
)

const userAccount = (
  <div className='userAccount'>
      <span className='text-success' ><i class="fa-solid fa-circle-user"></i></span>
      <p className='bg-light rounded-2 px-1 '>{userProfile}</p>
  </div>
)
  return (
    
    <div className="container rounded d-flex  container_wrapper">
      <div className="row mb-3 header_chatbot">
        <div className="col">
          <img className='py-2' src="http://www.fstg-marrakech.ac.ma/FST/images/LOGO_FST.png" alt="" />
        </div>
        <div className="col">
          <h2 className='text-center pt-4'> <i class="fa-solid fa-robot" aria-hidden="true"></i> ChatBot   </h2> <p className='text-center'>online</p>
        </div>
        <div className="col text-dark">
          {
               (userProfile) ? userAccount : ''
          }
        </div>
          <p className=' ' >
            { (!responses[0]) ? welcoming : '' }
          </p>
      </div>

      <div ref={containerRef} className="row chat_wrapper">
        <div className="col">
          <Messages userAccount={userAccount} messages={responses}/>
        </div>
      </div>
      <div className="row input_wrapper">
        <div className="col d-flex input_col">
          <input
          value={currentMessage}
          onChange={handleMessageChange}
          onKeyDown={handleSubmit}
          type="text"
          className='form-control'
          placeholder='enter you msg here' />
          {/* <button  className="btn btn-primary btn-sm ">send </button> */}
        </div>
      </div>
    </div>
  )
}


export default Chat ;