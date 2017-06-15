import React from '../../utils/react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton, DatePicker, TimePicker, Checkbox, TextField} from 'material-ui';
import HomeContent from '../../config/content/homeContent';
import Universities from '../../services/universities';
import EMAIL_STATUS from '../../services/constants/emailStatus';
import INSTITUTION_TYPES from '../../services/constants/institutions';
import Contacts from '../../services/contacts';
import Countries from '../../services/countries';
import Locations from '../../services/locations';
class HomePage extends React.PureComponent {
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
        const {image: {splash, alamogordo, jenny}, title} = this.state;
        return (
            <div>
                <Card>
                    <CardMedia overlay={<CardTitle title="Jennifer Ippolito" subtitle={title}/>}>
                        <img src={splash}/>
                    </CardMedia>
                    <CardTitle title={title} subtitle="Card subtitle"/>
                    {HomeContent.map((content, index) => <CardText key={index}>{content}</CardText>)}
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default HomePage;
