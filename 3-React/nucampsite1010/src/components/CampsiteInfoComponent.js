import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    // CardTitle,
    CardText,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, LocalForm } from 'react-redux-form'

//Week 4 Assignment
class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal () {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleSubmit(values) {
        console.log(`Current state is ${JSON.stringify(values)}`);
        alert(`Current state is ${JSON.stringify(values)}`);
    }

    render () {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"></i>{' '}
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Submit Comment
                        <Button close onClick={this.toggleModal} />
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <Control.select model=".rating" name='rating'
                                className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <Control.text model='.author' name='author'
                                className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Text</label>
                                <Control.textarea model=".text" id="text"
                                name="text" rows="4" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit Comment
                                </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    {/* <CardTitle>{campsite.name}</CardTitle> */}
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.text}>
                            <p>{comment.text}</p>
                            <p>- {comment.author} {' '}
                            {new Intl.DateTimeFormat('en-US', 
                            { year: 'numeric', month: 'short', day: '2-digit'})
                            .format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                })}
                <CommentForm />
            </div>
        )
    }
    return <div></div>
}


function CampsiteInfo(props) {
    console.log('Props', props)
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}





// class CampsiteInfoCLS extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     renderCampsite(campsite) {
//         return (
//             <div className='col-md-5 m-1'>
//                 <Card>
//                     <CardImg top src={campsite.image} alt={campsite.name} />
//                     <CardBody>
//                         <CardTitle>{campsite.name}</CardTitle>
//                         <CardText>{campsite.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     } 

//     renderComments(comments) {
//         if (comments) {
//             return (
//                 <div className='col-md-5 m-1'>
//                     <h4>Comments</h4>
//                     {comments.map(comment => {
//                         return (
//                             <div key={comment.text}>
//                                 <p>{comment.text}</p>
//                                 <p>- {comment.author} {' '}
//                                 {new Intl.DateTimeFormat('en-US', 
//                                 { year: 'numeric', month: 'short', day: '2-digit'})
//                                 .format(new Date(Date.parse(comment.date)))}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//         }
//         return <div></div>
//     }

//     render () {
//         if(this.props.campsite) {
//             console.log('nice, this exists')
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderCampsite(this.props.campsite)}
//                         {this.renderComments(this.props.campsite.comments)}
//                     </div>
//                 </div>
//             )
//         } else {
//             console.log('hmm', this.props.campsite)
//             return <div />
//         }
//     }
// }

export default CampsiteInfo;