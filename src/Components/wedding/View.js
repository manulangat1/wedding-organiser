import React from 'react'
import '../../App.css'

import Weddo from './Weddo'
class  View extends React.Component{
    render(){
        let weddingItem
        if (this.props.wedding){
            weddingItem= this.props.wedding.map( wedo => {
                return <Weddo key={wedo.title} wedo={wedo} />
            }
            )
        }
        return (
            <section>
                <div id="displays">
                {weddingItem}
                </div>
            </section>
        )
    }
}
export default View;