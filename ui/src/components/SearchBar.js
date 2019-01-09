import React from 'react'

class SearchBar extends React.Component{
  
    state ={
        searchInput: ''
    }

    handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.searchInput)
    }
      
    render(){
       return(
           <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleOnSubmit}>
                <div className='field'>
                <label>Search
                <input type='text' value={this.state.searchInput} onChange ={ (e) => this.setState({searchInput: e.target.value})}/></label>
                </div>
            </form>
            </div>
       )
   }
}

export default SearchBar