import React from 'react';
import TodosItem from './TodosItem'

class Todo extends React.Component{
  render(){
    let projectItem;
    if (this.props.projects){
      projectItem = this.props.projects.map(project =>{
        // console.log(project)
        return (
          <TodosItem key={project.title} project={project} />
        );
      })
    }
    console.log(this.props)
    return(
      <div>
      <h4>Latest projects</h4>
      <hr />
      <br/>
      {projectItem}
      </div>
    )
  }
}
export default Todo;
