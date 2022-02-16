import React from 'react';

// components
import { SendCode } from '../sendCode/SendCode';
import { VerifyCode } from '../verifiyCode/VerifyCode';

// utils
import { getGenerateCode } from "../../utils/GenerateCode"

// styles
import './App.css';
import { Congratulations } from '../congratulations/Congratulations';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      codeValue: '',
      codeg: '',
      sendCode: false,
      finishVerification: false,
      codeIsValid: false
    }
    // can modify the state from another component
    this.setState = this.setState.bind(this);
    this.sendCode = this.sendCode.bind(this);
  }


  sendCode() {
    /**
     * Generate code and then set state of the app.
     */
    const codeg = getGenerateCode(5)
    this.setState({ sendCode: true, codeg  })

  }


  render() {
    const { sendCode, codeg, finishVerification, codeIsValid } = this.state
    return (
      <div className="d-flex justify-content-center mt-5">

        { !sendCode && (
          <SendCode sendCode={() => this.sendCode()} />
        )}

        { (sendCode && !finishVerification) &&
          <VerifyCode setStateApp={this.setState} 
                      codeIsValid={codeIsValid} 
                      codeg={codeg} />
        }
        { (codeIsValid && finishVerification) && (
          <Congratulations message="Congratulations, you've just finished the verification!"/>
        )
          
        }
      </div>
    )

  }

}


export default App;
