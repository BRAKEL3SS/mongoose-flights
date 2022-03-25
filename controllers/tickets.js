const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    const flight = {id: req.params.id}
    res.render('tickets/new', { title: 'New Ticket', flight })
}
function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.flight = req.params.id
    ticket.save(function(err) {
        if (err) return res.render('tickets/new', {title: 'New Ticket'})
        res.redirect(`/flights/${req.params.id}`)
    })
}