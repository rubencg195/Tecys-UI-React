import React from 'react';

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
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};
const CardTable = () => (
  <Card style={{margin:'20'}} zDepth={3}>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardHeader
      /*title="Without Avatar"
      subtitle="Subtitle"
      */
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

      <Row>
        <Col xs={4} md={3}>
          <TextField
            floatingLabelText="Codigo"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={4} md={3}>
          <TextField
            floatingLabelText="Cantidad"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={4} md={3}>
          <TextField
            floatingLabelText="Volumen"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={4} md={3}>
          <TextField
            floatingLabelText="Select Unidad"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={4} md={3}>
          <br/><br/>
          <FlatButton label="Agregar" />
        </Col>
      </Row>
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

    <CardActions>
      <FlatButton label="Editar" />
      <FlatButton label="Borrar" />
    </CardActions>
  </Card>
);

export default CardTable;
