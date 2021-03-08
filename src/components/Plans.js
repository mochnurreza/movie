import React from 'react'
import { packagePlans } from '../data/data'
import './plans.css'

function Plans() {
    return (
        <div className="plans">
            <p>Renewal date: </p>
            {packagePlans.map((plan) => {
                const {id, subcription, quality} = plan
                return(
                    <div className="planscreen_plans" key={id}>
                        <div className="plans_info">
                            <h5>{subcription}</h5>
                            <h6>{quality}</h6>  
                        </div>
                        <button>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Plans
