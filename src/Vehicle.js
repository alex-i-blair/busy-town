export default function Vehicle({ vehicle }) {
  return (
    <div title="vehicle-test" className="vehicle">
      {vehicle === 'car' && '🚗'}
      {vehicle === 'truck' && '🚚'}
      {vehicle === 'bus' && '🚌'}
      {vehicle === 'motorcycle' && '🏍️'}
      {/* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
      {/* if the vehicle props is a car, render a '🚗' emoji */}
      {/* if the vehicle props is a truck, render a '🚚' emoji */}
      {/* if the vehicle props is a bus, render a '🚌' emoji */}
      {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    </div>
  );
}
