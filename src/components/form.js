import React from 'react';

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
                this.props.sendResults({header,body});
              })
              .catch(err =>{
                let body = {error: err.message};
                let header = {};
                this.setState({ header, body });
                this.props.sendResults({header,body});
              });
          });
      }
      render() {
        return (
          <main>
            <section>
              <form onSubmit={this.apiCaller}>
                <section id="nn">
                  <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
                  <div>
                  <label class="nn">
                  <input type="radio" name="method" value="get"  />
                  <span>GET</span>
                </label>
                <label class="nn">
                  <input type="radio" name="method" value="post"   />
                  <span>POST</span>
                </label>
                <label class="nn" >
                  <input type="radio" name="method" value="put"  />
                  <span>PUT</span>
                </label>
                <label class="nn">
                  <input type="radio" name="method" value="delete"   />
                  <span>DELETE</span>
                </label>
                  <label> <button type="submit">GO!</button> </label>
                  </div>
                </section>
              </form>
            </section>
          </main>
        );
      }
    
    }
    
    export default Form;
