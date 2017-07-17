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
const CardForm = () => (
  <Card style={{margin:'20'}} zDepth={3}>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardHeader
      /*title="Without Avatar"
      subtitle="Subtitle"
      */
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Row style={{margin:"10"}}>
        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Region"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Medio De Transporte"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Agente Aduanero"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Bodega Fisica"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Dias de Retencion"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            floatingLabelText="Gastos Administrativos"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </Col>


      </Row>

    </CardText>

    <CardActions>
      {/*<FlatButton label="Editar" />
      <FlatButton label="Borrar" />*/}
    </CardActions>
  </Card>
);

export default CardForm;
