import React from 'react'
import {inject, observer} from "mobx-react";
import {Link} from 'react-router-dom'

@inject('EventStore')
@observer
class Events extends React.Component {

    componentDidMount() {
        this.props.EventStore.fetchEvents();
    }
    componentWillUnmount() {
        this.props.EventStore.clearEvents();
    }

    handleSubmit=()=>{
        this.props.EventStore.fetchEvents();
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className='row'>
                        Number of Events: {this.props.EventStore.eventCount}

                        {
                            this.props.EventStore.events.map((event) => {
                                return (
                                    <span key={event.id} className=' event-container col-xs-12 col-md-6 col-lg-3'>
                                        <div className='event-img-wrap'>
                                            <span className='image' style={{backgroundImage:`url(${event.logo_uri})`}}/>
                                        </div>
                                        <span className='event-txt'>
                                            <h1>{event.organizer.name}</h1>
                                            <p>{event.name}</p>
                                            <p>{new Date(event.start_time).toString()} / {new Date(event.finish_time).toString()}</p>
                                        </span>
                                    </span>
                                )
                            })}

                    </div>
                    <button onClick={this.handleSubmit}>
                        <p>Load More...</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Events