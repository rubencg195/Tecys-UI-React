import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


import {black500, blue500, lightGreen500} from 'material-ui/styles/colors';
const styles = {
  errorStyle: {
    color: black500,
  },
  underlineStyle: {
    borderColor: black500,
  },
  floatingLabelStyle: {
    color: black500,
    fontSize: 21,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  BtnStyle : {
    margin: 12,
  },
};
class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <Card style={{margin:20}} zDepth={3}>
        <CardTitle title={this.props.title} subtitle= {this.props.subtitle}/>
        <CardHeader
          /*title="Without Avatar"
          subtitle="Subtitle"
          */
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={false}>
          {this.props.text}
          <br/>
          <Row style={{margin:10}}>
            {/* { allQuestions } */}
          </Row>
        </CardText>

        <CardActions>
          <RaisedButton label="Agregar" primary={true} style={styles.BtnStyle} />
          <RaisedButton label="Quitar" secondary={true} style={styles.BtnStyle} />
        </CardActions>
      </Card>
    );
  }
}

export default CardForm;
