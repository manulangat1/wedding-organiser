import React from 'react'
import '../../App.css'

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
        // console.log(title,description,price,location,capacity)
        const venue = {title,description,price,location,capacity}
        // if (venue == null){
        //     confirm("Values are needed")
        // } else{
            console.log(venue)
            this.props.addVenue(venue)
            this.setState({
                title:"",
                description:"",
                price:"",
                location:"",
                capacity:""
            })
        // }
        
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
                        <label>description</label>
                        <input type="text" name="description" class="form-control" value={description} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>price</label>
                        <input type="text" name="price" class="form-control" value={price} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>location</label>
                        <input type="text" name="location" class="form-control" value={location} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>capacity</label>
                        <input type="text" name="capacity" class="form-control" value={capacity} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Add Venue" class="primary-btn" />
                </form>
            </section>
        )
    }
}
export default Add;