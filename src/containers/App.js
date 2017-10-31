import React, { Component } from 'react'
import '../styles/index.css'

import { Image, Profile } from '../components'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            person: {
                name: 'Sonya Moisset',
                biography: '33 years old Full Stack Developer living in London. Originally from Paris, France. Lifelong learner.'
            },
            image: 'https://images.unsplash.com/photo-1506345285442-8e9a3a298cdd?auto=format&fit=crop&w=2883&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            quote: {
                content: 'Stay curious, Keep on hacking & Make it happen',
                source: 'The Secret Life of a developer'
            }
        }
    }

    render() {
        const { image, person, quote } = this.state
        
        return (
            <div className="App">
                <Image src={image} />
                <Profile person={person} quote={quote} />
            </div>
        )
    }
}
