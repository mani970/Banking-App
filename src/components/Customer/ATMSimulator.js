import React from 'react'
import LeftCustomer from './LeftCustomer'

export default function ATMSimulator() {
    return (
        <div>
           <div class="row ">
                    <div class="col-2"><LeftCustomer/></div>
                    <div class="col-10">
                   <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <div class="card text-center col-8  p-3 m-5 card_section">
                            <div className="card-header col-12">
                            <h3 className="text-center text-info "> ATM Simulator </h3>
                            </div>
                            <br/>
                            
                             <div className="card-body m-1 p-2">
                                <form>
                                <div class="form-group col-8">
                            <input type="text" class="form-control" placeholder="Enter Amount (in INR) "/>
                            </div>
                                <div className="row m-1 p-1">
                                <label class="form-check-label m-2">   Type :  </label> <br/>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="type"/> Debit
                                    </label>
                                    </div>
                                    <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="type"/> Credit
                                    </label>
                                    </div>
                            </div>
                            <div class="form-group col-8">
                            <input type="text" class="form-control" maxLength="4" placeholder="Enter ur PIN (4 Digit) "/>
                            </div>

                                </form>
                                <div className="card-footer text-left ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                            <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button>
                       </div>
                            </div>
                    </div>
                    </div>
                    <div className="col-2"></div>
                   </div>
                    </div>
                </div>
        </div>
    )
}
