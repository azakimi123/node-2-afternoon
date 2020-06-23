let messages = [

];

let id = 0;
// let timestamp = Date.now();
// let timestamp2 = new Date(timestamp);
// let time = timestamp2.toString();

module.exports = {
    //post
    create: (req, res) => {
        console.log(req.body)

        let newMessage = {
            id: id,
            text: req.body.text,
            time: req.body.time,
        }

        id++;
        messages.push(newMessage);
        res.status(200).send(messages);
    },

    //get
    read: (req, res) => {
        console.log(req.body)


        res.status(200).send(messages);
    },
    //put
    update: (req, res) => {
        console.log(req.params)


        let index = messages.findIndex( e => e.id === +req.params.id );
        messages[index].text = req.body.text;

        res.status(200).send(messages);
    },
    //delete
    delete: (req, res) => {
        
        let index = messages.findIndex( e => e.id === +req.params.id );
        messages.splice(messages[index], 1);

        res.status(200).send(messages);
    }

}


