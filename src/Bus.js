import Arrival from './Arrival';
import BusNum from './BusNum';

export default function Bus( { bus } ) {

    return (
        <div className = 'flexbox-container'>
            <BusNum busNum = { bus.ServiceNo } />
            <Arrival busTime = { bus.NextBus.EstimatedArrival } />
            <Arrival busTime = { bus.NextBus2.EstimatedArrival } />
            <Arrival busTime = { bus.NextBus3.EstimatedArrival } />
        </div>
    )
}

