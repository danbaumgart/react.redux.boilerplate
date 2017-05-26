import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton, DatePicker, TimePicker, Checkbox, TextField} from 'material-ui';
import HomeContent from '../../config/content/homeContent';
import Universities from '../../services/universities';
import EMAIL_STATUS from '../../services/constants/emailStatus';
import INSTITUTION_TYPES from '../../services/constants/institutions';
import Contacts from '../../services/contacts';
import Countries from '../../services/countries';
import Locations from '../../services/locations';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "Trinita Wellness",
            image: {
                jenny: "http://www.trinitawellness.com/resources/websitephoto.jpg.opt295x393o0%2C0s295x393.jpg",
                alamogordo: "http://www.trinitawellness.com/resources/alamogordo.jpg",
                splash: "http://www.trinitawellness.com/resources/Jenniferwebsitepic.jpg"
            }
        }
    }
    render() {
        //Countries.Search("uni").then(states => console.log("COUNTRIES", states));
        //Contacts.GetPhoneNumbers(3).then(selected => console.log("SELECTED", selected));
        const location = {
            Name: 'EAST ARKANSAS COMMUNITY COLLEGE',
            Street: null,//'1700 NEWCASTLE RD',
            City: 'FORREST CITY',
            State: 'NY',
            Zip: '72339',
            Country: 197,
            Institution: INSTITUTION_TYPES.HIGH_SCHOOL
        };
        //Locations.Post(location).then(location => console.log("INSERT LOCATION", location));
        //Locations.Delete(61).then(location => console.log("DELETE LOCATION", location));
        //Contacts.DeletePhoneNumber(3, "6362213377").then(deleted => console.log("DELETED", deleted));
        //Contacts.InsertPhoneNumber(3, "6362213377").then(inserted => console.log("INSERTED", inserted));
        //Contacts.UpdatePhoneNumber(3, "6362213377", "989").then(updated => console.log("UPDATED", updated));
        //Contacts.GetEmailAddresses(3).then(selected => console.log("SELECTED", selected));
        //Contacts.DeleteEmailAddress(3, "daniel@baumgart.com").then(deleted => console.log("DELETED", deleted));
        //Contacts.InsertEmailAddress(3, "daniel@baumgart.com", EMAIL_STATUS.UNAUTHENTICATED, "spiderman").then(inserted => console.log("INSERTED", inserted));
        //Contacts.UpdateEmailAddress(3, "daniel@baumgart.com", EMAIL_STATUS.ADMIN, "superman").then(updated => console.log("UPDATED", updated));

        // Universities.GetDetailsByName("missouri").then(result => console.log("UNIVERSITIES", result));
        const {image:{splash, alamogordo, jenny}, title} = this.state;
        const Contact = {
            Id: 71,
            LastName: "James",
            FirstName: "Bob",
            Email: "danbaumgart@gmail.com",
            Phone: "3147181815",
            Extension: null
        };
        return (
            <div>
                {/*<Card>*/}
                    {/*<CardMedia overlay={<CardTitle title="Jennifer Ippolito" subtitle={title}/>}>*/}
                        {/*<img src={splash} />*/}
                    {/*</CardMedia>*/}
                    {/*<CardTitle title={title} subtitle="Card subtitle"/>*/}
                    {/*{HomeContent.map((content, index) => <CardText key={index}>{content}</CardText>)}*/}
                    {/*<CardActions>*/}
                        {/*<FlatButton label="Action1"/>*/}
                        {/*<FlatButton label="Action2"/>*/}
                    {/*</CardActions>*/}
                {/*</Card>*/}
            </div>
        );
    }
}

export default HomePage;
