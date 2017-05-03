import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui';
import HomeContent from '../../config/content/homeContent';
import alamogordo from '../../../images/alamogordo.jpg';
import UniversityDetails from '../../services/universityDetailsProxy';
import Contacts from '../../services/contactProxy';
class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "Trinita Wellness",
            image: {
                jenny: "http://www.trinitawellness.com/resources/websitephoto.jpg.opt295x393o0%2C0s295x393.jpg",
                alamogordo,//: "http://www.trinitawellness.com/resources/alamogordo.jpg",
                splash: "http://www.trinitawellness.com/resources/Jenniferwebsitepic.jpg"
            }
        }
    }
  render(){
        UniversityDetails.GetByName("missouri").then(result => console.log("RESULT", result));
      const {image:{splash, alamogordo, jenny}, title} = this.state;
      const Contact = {
          Id: 71,
          LastName: "James",
          FirstName: "Bob",
          Email: "danbaumgart@gmail.com",
          Phone: "3147181815",
          Extension: null
      };
      Contacts.Delete('/' + Contact.Id)
          .then(resp => console.log("RESPONSE FROM DELETE", resp));
    return (
      <div>
          <Card>
              <CardMedia overlay={<CardTitle title="Jennifer Ippolito" subtitle={title} />}>
                  <img src={splash} />
              </CardMedia>
              <CardTitle title={title} subtitle="Card subtitle" />
              {HomeContent.map((content, index) => <CardText key={index}>{content}</CardText>)}
              <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
              </CardActions>
          </Card>
      </div>
    );
  }
}

export default HomePage;
