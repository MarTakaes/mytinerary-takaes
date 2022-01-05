import itinerariesActions from "../redux/actions/itinerariesActions"
import {useRef, useState} from "react"
import {connect} from "react-redux"
import swal from "sweetalert"
import {FcEmptyTrash} from "react-icons/fc";
import {FiEdit} from "react-icons/fi";

function Comments(props) {
    const editar = <FiEdit />
    const basura = <FcEmptyTrash/>
    const editComment = useRef()
    const [edit, setEdit] = useState(false)

    function handleEditComment(e) {
        e.preventDefault()
        setEdit(!edit)
        props.editComments(
            props.comment._id,
            editComment.current.value
        )
        editComment.current.value = ""
    }

    function deleteComment() {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            }).then((willDelete) => {
            if (willDelete) {
                props.deleteComments(
                    props.comment._id
                )
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
                })
            } else {
                swal("Your imaginary file is safe!")
            }
            })
        }
    
    return(
        <div className="comentario">
            {props.comment.user && (
                <div className="comentario-cont">
                    <img className="foto-comentario" src={props.comment.user.photo} />
                    <div className="texto-comentario">
                        <h5 className="titulo-name">{props.comment.user.photo}</h5>
                        <p className="msj-comentario">{props.comment.message}</p> 
                    </div>   
                </div>
            )
            }
            <div className="btn-comentarios">
                {props.comment.user && props.comment.user._id === props.user._id &&
                    (<div className="editor">
                        <p className="btn-cursor btn-edit"  onClick={() => {setEdit(!edit)}}>{editar} </p>
                        {edit && (
                            <div className="editor">
                                <form className="editor" onSubmit={handleEditComment}>
                                    <input
                                        ref={editComment}
                                        type="text"
                                        className="comentar"
                                        placeholder="edit your comment"
                                        />
                                    <input className="btn-editor" type="submit" value="Submit" />
                                </form>
                            </div>
                        )}
                    </div>
                    )
                }
                {props.comment.user && props.comment.user._id === props.user._id &&
                    (<p className="btn-cursor eliminar" onClick={() => {deleteComment()} }>{basura}</p>)
                }
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    editComments: itinerariesActions.editComments,
    deleteComments: itinerariesActions.deleteComments,
}
export default connect(null, mapDispatchToProps)(Comments)