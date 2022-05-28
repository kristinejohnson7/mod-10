import React from "react"

class MyForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target["name"].value)
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value})
    
  }

  render() {
    console.log(this.state.value)
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input onChange={this.onChange} type="text" name="name" value={this.state.value}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default MyForm;