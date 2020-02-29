import React from 'react';
import ReactJson from 'react-json-view';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          url: '',
          method: 'get',
          header: {},
          body: {},
          history: {},
          headersVisible: false,
        };
    }
    handleChange = e =>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value});
      }
    
      apiCaller = e =>{
        e.preventDefault();
        fetch(this.state.url,{
          method: this.state.method,
          headers:{
            'Content-Type': 'application/json',
          },
        })
          .then(res =>{
            res = res.json()
              .then(res=>{
                let header = {'Content-Type': 'application/json'};
                let body = res;
                this.setState({ header, body });
              })
              .catch(err =>{
                let body = {error: err.message};
                let header = {};
                this.setState({ header, body });
              });
          });
      }
      render() {
        return (
          <main>
            <section>
              <form onSubmit={this.apiCaller}>
                <section>
                  <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
                  <label> <button type="submit">CALL</button> </label>
                </section>
              </form>
              <div>
                <ReactJson name="Headers"
                  enableClipboard={false}
                  collapsed={true}
                  src={this.state.header}
                />
                <ReactJson name="Response"
                  enableClipboard={false}
                  collapsed={true}
                  src={this.state.body}
                />
              </div>
            </section>
          </main>
        );
      }
    
    }
    
    export default Form;
