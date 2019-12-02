import React from 'react';

class TodosItem extends React.Component{
  render(){
    console.log(this.props)
    return(
      <li className="Project">
      <h1>Title - { this.props.project.title}</h1>
      { this.props.project.category}
      </li>
    )
  }
}
export default TodosItem;
