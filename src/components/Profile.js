import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <h1 className="Name">{this.props.person.name}</h1>
                <p className="Bio">{this.props.person.biography}</p>
                <div className="Quote">
                    <blockquote>&ldquo; {this.props.quote.content} &rdquo;</blockquote>
                    <div className="byline">&mdash; {this.props.quote.source}</div>
                </div>
            </div>
        )
    }
}

export default Profile
