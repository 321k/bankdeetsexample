import React from 'react';
import logo from './logo.svg';
import './App.css';
import BankDeets from 'bankdeets'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <CssBaseline />
        <Introduction />
        <BankDeets />
        <ApiDocs/>
      </Container>
    </div>
  );
}


function Introduction(props){
  return (
    <div>
      <h1>{"<BankDeets/>"}</h1>
      <a href="https://github.com/321k/bankdeets">Github</a> | <a href="https://twitter.com/321k">Twitter</a> | <a href="https://github.com/321k/bankdeetsexample/issues">Bugs</a>
    </div>
  )
}

function ApiDocs(props){
  return (
    <Grid container 
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Typography align="left">
        <Grid item xs={12}>
          <h2>API</h2>
          <ul>
            <li><b>submitURL</b>="where to post the form data to"</li>
            <li>Example: {'<BankDeets submitURL="bankdeets.co/bankdeets" />'}</li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <h2>Supported languages</h2>
            <ul>
              <li>English</li>
              <li>Swedish</li>
              <li>Norwegian</li>
              <li>Danish</li>
              <li>Finnish</li>
            </ul>

          Contribute to translations <a href="https://github.com/321k/bankdeets/blob/master/src/translation.js">here</a>
        </Grid>
        <Grid item xs={12}>
          <h2>Supported currencies</h2>
          <ul>
            <li>Eurozone</li>
            <li>USD SWIFT</li>
            <li>EUR SWIFT</li>
            <li>GBP SWIFT</li>
            <li>Bulgaria</li>
            <li>Denmark</li>
            <li>Norway</li>
            <li>Sweden</li>
            <li>UK</li>
            <li>USA</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Poland</li>
            <li>Hungary</li>
            <li>India</li>
            <li>Singaproe</li>
            <li>Hong Kong</li>
            <li>New Zealand</li>
            <li>Czechia</li>
            <li>Bangladesh</li>
            <li>Vietnam</li>
            <li>Switzerland</li>
            <li>Malaysia</li>
          </ul>

        Contribute to the list of supported currencies <a href="https://github.com/321k/bankdeets/blob/master/src/components/BankDetails.js">here</a> 
        </Grid>
      </Typography>
    </Grid>
  )
}

export default App;
