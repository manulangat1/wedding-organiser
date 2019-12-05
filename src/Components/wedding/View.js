import React from 'react'
import '../../App.css'
import { db } from '../../firebase/firebase'

import Weddo from './Weddo'
class  View extends React.Component{
    componentWillMount(){
         db.collection("venues")
            .get()
            .then(querySnapshot => {
            const data = querySnapshot.docs.map(LA => LA.data());
            console.log(data); // array of cities objects
            });
    }
    render(){
        let weddingItem
        if (this.props.wedding){
            weddingItem= this.props.wedding.map( wedo => {
                return <Weddo key={wedo.title} wedo={wedo} />
            }
            )
        }
        return (
            <section id="views">
                <div class="container">
                <div id="displays">
                        {weddingItem}
                </div>
                </div>
            </section>
        )
    }
}
export default View;