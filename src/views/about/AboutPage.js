import React from 'react';
import PageTitle from '../../ui/common/PageTitle';
import AboutContent from '../../config/content/aboutContent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui';
class AboutPage extends React.Component {
    render() {
        const alamogordo = "http://www.trinitawellness.com/resources/alamogordo.jpg";
        return (
            <div>
                <Card>
                    <CardMedia overlay={<CardTitle title="Jennifer Ippolito" subtitle="Trinita Wellness"/>}>
                        <img src={alamogordo} />
                    </CardMedia>
                    <CardTitle title={<PageTitle title="About" />} subtitle="Card subtitle"/>
                    {AboutContent.map(content => <CardText>{content}</CardText>)}
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AboutPage;
