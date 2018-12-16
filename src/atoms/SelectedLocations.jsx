import React, { Component } from 'react'

export default class SelectedLocations extends Component {

	render() {

		const locations = this.props.locations.map((location) => {
			return (<li key={location}>{location}</li>)
		})

		return (
			<div>
				SelectedLocations <br/>
				<ul>
					{locations}
				</ul>
      </div>
		)
	}
}
