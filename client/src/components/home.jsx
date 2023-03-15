import React from 'react';

const home = () => {
  return (
    <div> 
        <div classNameName="row">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FSTG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            <a className="nav-link active" aria-current="page" href="#">About us</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            <div clasName="row">
                <div className="col p-3 m-3" >
                    <h1>Chatbot Faculte des sciences et Techniques</h1>
                </div>
            </div>
            <div className="col">
                <img src="https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?size=626&ext=jpg" alt="image" />
            </div>
                <div className="col"> 
                    <ul className='text-dark'>Realisé par : 
                        <li className='mx-3 text-dark fw-bold nav'> OISSAFE IMAD</li>
                        <li className='mx-3 text-dark fw-bold nav'> OHSSINE ABDELFATAH</li>
                    </ul>
                </div>
    </div>
  )
}

export default home