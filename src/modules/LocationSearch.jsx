import React from 'react';
import { TypeAhead } from './../atoms/TypeAhead';

export class LocationSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLocation: 'type to search',
            typeAheadOptions: ['Amsterdam', 'Rotterdam', 'George', 'Ringo'],
            resultsFS: {}
        }
    }

    selectedLocation = location => {
        this.setState({ selectedLocation: location });
        this.lookupNearbyLocations(location);
    };

    handleFormSubmit = event => {
        this.lookupNearbyLocations(this.state.selectedLocation);
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ selectedLocation: event.target.value })
    }

    lookupNearbyLocations = location => {
        const CLIENT_ID = 'KTERDH33ERYKRCSHMNEEFFD3CCYI5XIKOPQYP4HJFAK33NVP';
        const CLIENT_SECRET = '0XTDAOZDW0WFY0FQVMJKMA1B1C2INDA3MXKMHLG033LSOLIS';
        const radius = 50;
        const query = 'bar';
        fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=10&near=${location}&query=${query}&radius=${radius}`)
            .then(function (res) {
                return res.json()
            })
            .then((resJSON) => {
                console.log(' res ', resJSON.response);
                this.setState({ resultsFS: { ...resJSON.response } })
            })
            .catch(function () {
                // Code for handling errors
            });
    }

    selectedVenue = venue => {
        console.log('ven', venue);
        
    }

    render() {
        const lijstje = this.state.resultsFS.groups ? this.state.resultsFS.groups[0].items.map((item) => {
            return (<li onClick={this.selectedVenue(item.venue)} key={item}>{item.venue.name}</li>)
        }): null;

        return (
            <div>
                {/* <TypeAhead options={this.state.typeAheadOptions} selection={this.selectedLocation} ></TypeAhead> */}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">click</button>
                </form>
                <p>{this.state.selectedLocation}</p>
                <p>{this.state.results}</p>
                <ol >
                    {lijstje}
                </ol>
            </div>

        )
    }
}
