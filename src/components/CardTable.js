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

import {black500, blue500} from 'material-ui/styles/colors';
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
class CardTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }
    render() {
      var allQuestions = this.props.questions.map(function(q){
           return (
             <Col xs={12} md={4}>
               <TextField
                 floatingLabelText={q}
                 floatingLabelStyle={styles.floatingLabelStyle}
                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                 floatingLabelFixed={true}
               />
             </Col>
           );
       });
      return(
        <Card style={{margin:'20'}} zDepth={3}>
          <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
          <CardHeader
            /*title="Without Avatar"
            subtitle="Subtitle"
            */
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={false}>
            {this.props.text}

            <Row>
              {allQuestions}
            </Row>

            <CardActions>
              <RaisedButton label="Agregar" primary={true} style={styles.BtnStyle} />
              <RaisedButton label="Quitar" secondary={true} style={styles.BtnStyle} />
            </CardActions>

          </CardText>


          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>


        </Card>
    );
  }
}

export default CardTable;
