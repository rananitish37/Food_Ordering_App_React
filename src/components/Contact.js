const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl m-2 p-2">Contact us page</h1>
            <div>
                <input className="border border-black m-2 p-2 rounded-sm" placeholder="name"></input>
                <input className="border border-black m-2 p-2 rounded-sm" placeholder="message"></input>
                <button className="border border-black m-2 p-2 rounded-lg bg-gray-100">Send</button>
            </div>
        </div>
    )
}

export default Contact;