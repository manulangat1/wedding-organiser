import React from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import DeleteTodo from './Components/DeleteTodo';
import Todo from './Components/Todo'

import Dashboard from './Components/Dashboard'

class  App extends React.Component {
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({projects:[
      {
        title: "Business website",
        category: "Web Design"
      },
      {  title: "Social site",
        category: "Mobiile developemnt"
      },
      {
        title: "E-commerce shopping cart",
        category: "Web developemnt"
      }
    ]});
  }
  handleAddProject(project){
    console.log(project)
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects:projects})
  }
  render(){
    return (
      <div className="apps">
      {/* <AddTodo addProject={this.handleAddProject.bind(this)} />
      <Todo projects={this.state.projects} />
      <DeleteTodo /> */}
      <Dashboard />
      </div>
    );
  }
}

export default App;
