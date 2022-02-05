import { Component } from "react";
import { Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import data from "../data";


class InsertData extends Component {
 
    constructor(props) {
        super(props);
        console.log(data.length);
        this.state = {
            id:`${data.length+1}`,
            name: "",
            dob: "",
            image: ""
        }
    }

    handleChange = (field, e) => {

        let currentState = this.state;
        if(field==='image'){
            currentState[field] = e.target.files[0];
        }else{
            currentState[field] = e.target.value;
        }
        
        this.setState({ currentState });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        data.push(this.state);
        console.log(data.length);
        console.log(data);
    }

    render() {
        return (
            <>
                <Modal style={{ "background": "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)" }} show={this.props.showModal} onHide={this.props.closeModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form id="insertData" onSubmit={this.handleSubmit.bind(this)} >
                            <FormGroup className="mb-3">
                                <FormLabel>Enter Name</FormLabel>
                                <FormControl type='text' name='name'
                                    onChange={this.handleChange.bind(this, "name")}
                                    value={this.state.name}
                                />

                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Enter DOB</FormLabel>
                                <FormControl type='date'
                                    name="dob"
                                    onChange={this.handleChange.bind(this, "dob")}
                                    value={this.state.dob}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Upload Image</FormLabel>
                                <FormControl type='file'
                                    name='image'
                                    onChange={this.handleChange.bind(this, "image")}
                                    
                                />
                            </FormGroup>

                            <div>
                                <Button variant="secondary" onClick={this.props.closeModal}>
                                    Close
                                </Button>
                                <Button type="submit" variant='secondary' style={{ 'backgroundColor': '#f28ab2' }}>
                                    Submit
                                </Button>
                            </div>
                        </Form>

                    </Modal.Body>
                </Modal>


            </>
        )
    }
}
export default InsertData;