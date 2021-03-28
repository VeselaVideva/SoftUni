function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    function splitLine(line) { return line.split('|'); }

    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }

    const sortMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return arr.map(splitLine).map(convertToTicket).sort(sortMapper[criteria]);
}

console.log(tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'));
// [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' },
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]

console.log(tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'status'));
// [ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' } ]