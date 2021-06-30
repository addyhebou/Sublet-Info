import React from 'react'
import { ReactComponent as Credit } from '../pics/creditReport.svg';
import RentPic from '../pics/rent.jpg';
import SecurityPic from '../pics/securty.jpg';

export default function Steps() {
    return (
        <div>
            <div className = "Step">
                <div>
                    <div className = "bullet">1</div>
                </div>
                <div className = "bulletInfo">
                    <strong>Roommate Consulations</strong>
                    <p>You’ll get to schedule a consultation via this  
                        <a href = {"https://calendly.com/addyhebou/15min"} target="_blank"> Calendly link </a> 
                        by July 15, 2021 to discuss, ask, and answer questions 
                        relating compatibility, lifestyle, responsibilities, personality. 
                        If anyone would like to schedule a physical tour complying with COVID-19 regulations, 
                        feel free to let me know.</p>
                </div>
            </div>

            <div className = "Step">
                <div>
                    <div className = "bullet">2</div>
                </div>
                <div>
                    <strong>Complete A Credit Report/Background Check </strong>
                    <p>If selected as our roommate, congratulations!</p>
                    <p>One more step. A non-refundable deposit of $50 electronic payment is to be made after to process 
                        the full report – instructions will be sent out on how to carry about this.</p>
                    <Credit />
                </div>
            </div>

            <div className = "Step">
                <div>
                    <div className = "bullet">3</div>
                </div>
                <div>
                    <strong>Move-In</strong>
                    <p>If the credit report/background check clears –– congratulations!! Welcome to the team!</p>
                    <p>You’ll receive a SUBLEASE AGREEMENT, CONDITIONAL RENTAL PROPERTY CHECKLIST, 
                        AND LIST OF SUBTENANT DUTIES & RESPONSIBILIIES. 
                        Final payment will include first month’s rent and security deposit 
                        (security deposit is fully refundable if no damages are found 
                        at the end of the term).</p>
                    <img src = {RentPic} alt = "Rent is $1000"/>
                    <img src = {SecurityPic} alt = "Security Deposit is $500"/>
                </div>
            </div>

            


        </div>
    )
};