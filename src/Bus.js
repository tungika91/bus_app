import Arrival from './Arrival';
import BusNum from './BusNum';
import useWindowSize from './hooks/useWindowSize';

export default function Bus( { bus } ) {
    const { width } = useWindowSize();

    return (
        <div className = 'flexbox-container'>
            <BusNum busNum = { bus.ServiceNo } />
            {width < 768 
            ? <>
                <Arrival busTime = { bus.NextBus.EstimatedArrival } />
                <Arrival busTime = { bus.NextBus2.EstimatedArrival } />
            </>
            : <>
                <Arrival busTime = { bus.NextBus.EstimatedArrival } />
                <Arrival busTime = { bus.NextBus2.EstimatedArrival } />
                <Arrival busTime = { bus.NextBus3.EstimatedArrival } />
            </>
            }      
        </div>
    )
}

