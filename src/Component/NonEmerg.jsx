import React from 'react'

export default function NonEmerg(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <button className='start-btn' onClick={() => initialAction()}>Non Emergency Dispatch!!! Click here</button>
        </div >
    )
}
