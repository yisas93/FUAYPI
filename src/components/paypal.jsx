import React from "react";
import {PayPalScriptProvider, PayPalButtons,  BraintreePayPalButtons} from "@paypal/react-paypal-js"



export const Paypal =()=>{
    return(
        <div className="paypal" style={{width: "100%"}}>
                <PayPalScriptProvider options={{clientId: "AY8olikn7swBTBzvZX6kxnNavRGxY-2MxAaGWW3ohq_tkDxCs_tcIs1a-3SuylZkvTr3tSsGtbXsM-iv"}}>
                    <PayPalButtons/>
                </PayPalScriptProvider>
        </div>
    )
}