import { connect } from "react-redux"
import {useState} from "react"
import { useEffect, useRef } from "react"
import {toast} from "react-toastify"
import Col from "react-bootstrap/Col"
import activitiesAction from "../redux/actions/activitiesActions"
import Comments from "../Components/Comments"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Image from 'react-bootstrap/Image'

function Itinerary(props) {
  const [display, setDisplay] = useState(false)
  const [liked, setLiked] = useState("")
  const [likeQuantity, setlikeQuantity] = useState("")

  if (!localStorage.getItem("token") && liked === "") {
    setLiked(false)
}
useEffect(() => {
  !props.user && setLiked(false)
  }, [props.user])

  if (props.itinerary && liked === "" && likeQuantity === "") {
    if(props.user){
    setLiked(props.itinerary.likes.some((id) => id === props.user._id))
    }
    setlikeQuantity(props.itinerary.likes)
}
useEffect(() => {
  !props.activities.length && props.getActivities(props.itinerary._id)
}, [props.activities])


  function precio(price) {
    return Array.from({length: price})
  }
  const handleClick = () => {
    setDisplay(!display)
    
    props.getAllComments()
}

const comment = useRef()
    
function handleComment(e){
    e.preventDefault()
    props.postComments(
        props.itinerary._id,
        props.user._id,
        comment.current.value
    )
    comment.current.value = ""
        
}

function handleLike() {
  if (localStorage.getItem("token")) {
      setLiked(!liked)
      liked ? setlikeQuantity(likeQuantity - 1) : setlikeQuantity(likeQuantity + 1)
      props.likes(props.user._id, props.itinerary._id, props.params)
  } else {
      toast.warning("Please sign in to like this itinerary", {
      position: toast.POSITION.TOP_CENTER,
      })
  }
}

  return (
    <>
      
          <div className="d-flex justify-content-center">
          <div  className="itinerarioCard">
            <h2 id="itinerariotext">{props.itinerary.itineraryName}</h2>
            <img className="singleCard" variant="top" src={props.itinerary.userImg} />
            <div id="sub">
               <h4 id="username">{props.itinerary.userName}</h4>
            </div>
            <div className="div">
              
                <div className="minidiv">
                <div className="like">
                                <p className="corazones" onClick={() => handleLike()}>
                                    {liked ?  "💗" : "♡" }
                                </p><p>{likeQuantity}</p>
                                </div>
                </div>                
                <div className="minidiv" id="border">
                    <div>Duration: {props.itinerary.duration}hs</div>
                </div>
                <div className="minidiv" id="border">
                  {precio(props.itinerary.price).map(() => (
                    <div>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {props.itinerary.hashtag.map((hash) => (
                <div className="tag">  #{hash}  </div>
                ))}
            </div>
            <div>
                <button className="btn-warning" onClick= {() => handleClick(props.itinerary._id)}>
                                {" "}
                                {display ? "View less" : "View more"}
                </button>
               
                <div>
                  {display && (
                              props.activities[0] && props.activities.map(activity => 
                              {if(activity.itinerary._id === props.itinerary._id){
                              return(
                                    <div className="d-flex flex-column" id="divis">
                                      <h3 id="titleact">{activity.title}</h3>
                                      <Col xs={6} md={4}>
                                      <img id="img" src={activity.image} alt={activity.title} />
                                      </Col>
                                      <p id="pact">{activity.description}</p>
                                    </div>
                              
                                  )}else{
                                    <h2>Under Construction</h2>
                                  }
                                })
                              )}                       
                </div>
                <div>
                    {display && (
                        <div className="formu-comentarios">
                            <div className="titulo-comentarios">
                                <h3 className='comentario-titulo' >Comments</h3>
                            </div>
                            {props.comments && props.comments.map(comment => {
                                if(comment.itinerary === props.itinerary._id){
                                    return(
                                        <div className='fondo-comentario'>
                                            <Comments comment={comment} itinerary={props.itinerary._id} user={props.user} />
                                        </div>
                                    )
                                }
                            })
                            }
                        </div>
                    )
                 }
                    {display && (
                        <form className="input-comentar" onSubmit={handleComment}>
                            <input
                                ref={comment}
                                type="text"
                                className="comentar-input"
                                placeholder= "Leave your comment here"
                                />
                            <input className='btn-submit btn-comentar' type="submit" value="Submit" />
                        </form>
                    )}   
                    </div>
               </div>
            </div>
          </div>
        )
    </>
  )
}
const mapStateToProps = (state) => {
  return{
    user: state.authReducer.newUser,
    comments: state.itinerariesReducer.comments}
  
}

const mapDispatchToProps = {
  likes: itinerariesActions.likes,
  getActivities: activitiesAction.getActivities,
  getAllComments: itinerariesActions.getAllComments,
  postComments: itinerariesActions.postComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);