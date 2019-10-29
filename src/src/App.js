import React from 'react';
import LanguageSelector from './components/LanguageSelector.js'
import BankDeets from './components/BankDeets.js'
import Grid from '@material-ui/core/Grid';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      language: 'en'
    }
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(event){
    this.setState({
      language: event.target.value
    });
  }

  render(){
    return(
      <div>
        <Grid container direction="row" justify="flex-end">
          <LanguageSelector language={this.state.language} setLanguage={this.setLanguage} />
        </Grid>
      <BankDeets language={this.state.language} />
      </div>
    )
  }
}