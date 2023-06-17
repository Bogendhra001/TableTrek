export default function EditRest(props) {

    console.log(props.data);

    return(
        <div className="edit-restaurants">
            <div className="edit-form">
                <label>Restaurant Name:</label>
                <input placeholder="Enter restaurant name" defaultValue={props.data.rest_name} type="text"></input>
                <label>Restaurant Description:</label>
                <textarea defaultValue={props.data.rest_desc}></textarea>
                <label>Cuisine:</label>
                <input placeholder="Enter cuisine" defaultValue={props.data.cuisine} type="text"></input>
                <label>Restaurant phone:</label>
                <input placeholder="Enter phone" defaultValue={props.data.rest_phone} type="text"></input>
                <label>Restaurant email:</label>
                <input placeholder="Enter email" defaultValue={props.data.rest_email} type="text"></input>
                <label>Restaurant available cites:</label>
                {
                    props.data.rest_location.map((location) => { return (<p key={location}>{location},</p>) })
                }
                <label>Restaurant rating:</label>
                <input type="text" placeholder="Enter rating" defaultValue={props.data.rest_rating} />
                <label>Opening hours:</label>
                <input type="text" placeholder="Opening hours" defaultValue={props.data.opening_hrs} />
                <label>Closing hours:</label>
                <input type="text" placeholder="Closing hours" defaultValue={props.data.closing_hrs} />
            </div>
        </div>
    )
}