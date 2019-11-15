import React, { Component } from 'react'

export default class AppMy extends Component {
    render() {
        return (
            <div>
                <h3>It's mine</h3>
                <img src={require('../image/ll.jpg')} style={{width:'100%'}}/>
            </div>
        )
    }
}
