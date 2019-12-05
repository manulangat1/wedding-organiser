import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import Search from './Search'

class Home extends React.Component{
    state = {
        search:"",
        wedding:{}
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        let filteredweddings = this.props.wedding.filter(
            (wedding) => {
                console.log(wedding.title)
                this.setState({wedding:wedding})
                return wedding.title.toLowerCase().includes(this.state.search.toLowerCase());
            }  
        );
        console.log(filteredweddings)
        return <Search wedding={this.state.wedding} />
    }
    render(){
        const { search } = this.state
        return(
            <section id="home">
                <div>
                    <div className="bg-image" >
                        <div className="search">
                        <h1>For the best wedding venues </h1>
                            <div className="form">
                        <div className="newsletter">
                            <div>
                                <p>Search your desired venues!!</p>
                            </div>
                            <div>
                            <form className="forms" onSubmit={this.onSubmit} >
                            <div>
                                <input type="search" className="form-control1" value={search} onChange={this.onChange} name="search" placeholder="Enter venue to search" />
                                <button className="button_1">Find</button>
                            </div>
                        </form>
                        {/* <Search wedding={this.state.wedding} /> */}
                          </div>
                        </div>
                        <div class="home-links">
                        <p>Click on the link belowe to look at the venues that are available</p>
                            <Link className="btn btn-lg" to="/ed">View Venues</Link>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* {
                        this.state.wedding.length > 0(
                            return <Search wedding={this.state.wedding} />
                        )
                    } */}
                    
                    {
                    Object.keys(this.state.wedding).length > 0 ?
                    // <h1>hey</h1>
                    <Search wedding={this.state.wedding} />
                    : null
                }
                </div>
            </section>
        )
    }
}
export default Home