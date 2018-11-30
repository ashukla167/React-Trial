import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default props => {
  return (
    <div className="flex directionRow justifyCenter alignCenter height100">
      {props.processingTransaction ?
        <div className="flex directionColumn justifyCenter alignCenter height100" onKeyPress={props.showSuccess} tabIndex="0">
          <CircularProgress size={50} />
          <b className="marginTop20">Processing Transaction</b>
        </div>
        :
        <div className="flex directionColumn checkoutBox padding20All alignCenter">
          <b className="marginBottom20">{`Total Amount - ${props.price}`}</b>
          <div>
            <FormControl component="fieldset" required>
              <RadioGroup
                onChange={props.handlePaymentChange}
                value={props.currentPayment}
              >
                <FormControlLabel value="csh" control={<Radio />} label="Cash" />
                <Divider />
                <FormControlLabel value="tez" control={<Radio />} label="Google Tez" />
                <Divider />
                <FormControlLabel value="amzn" control={<Radio />} label="Amazon Pay" />
                <Divider />
                <FormControlLabel value="ptm" control={<Radio />} label="PayTM" />
                <Divider />
                <FormControlLabel value="UPI" control={<Radio />} label="UPI Payment" />
                <Divider />
                <FormControlLabel value="wepa" control={<Radio />} label="V-Pay" />
                {props.currentPayment == "wepa" ?
                  <FormControl>
                    <InputLabel htmlFor="name-simple">V-Pay ID</InputLabel>
                    <Input id="name-simple" />
                  </FormControl> : null}
                <Divider />

              </RadioGroup>
              <div className="marginTop20">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.processPayment}
                >PAY NOW</Button>
              </div>
            </FormControl>
          </div>
        </div>}

    </div>
  )
}