import React from 'react'
import '../../App.css'
import { db } from '../../firebase/firebase'

class  Add extends React.Component{
    state = {
        title:"",
        description:"",
        price:"",
        location:"",
        capacity:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const {title,description,price,location,capacity} = this.state
        const venue = {title,description,price,location,capacity}
            console.log(venue)
            this.props.addVenue(venue)
            // db.database().ref('venues').push( venue );
            db.collection("venues").doc(venue.title).set({
                venue:venue
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            this.setState({
                title:"",
                description:"",
                price:"",
                location:"",
                capacity:""
            })
    }
    render(){
        const {title,description,price,location,capacity} = this.state
        return (
            <section id="add">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" class="form-control" value={title} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" class="form-control" value={description} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" class="form-control" value={price} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" name="location" class="form-control" value={location} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Capacity</label>
                        <input type="text" name="capacity" class="form-control" value={capacity} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Add Venue" class="primary-btn" />
                </form>
            </section>
        )
    }
}
export default Add;