import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// // Type 3: Persistent datastore with automatic loading
// var Datastore = require('nedb')
//   , db = new Datastore({ filename: '.db.ne', autoload: true });
// // You can issue commands right away
var workbook = {};
var worksheet = {};
var rows = [];

function fixdata(data) {
  var o = "", l = 0, w = 10240;
  for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
  o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
  return o;
}
var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
const listItems = {};

class  Sap extends Component {
  constructor(props) {
      super(props);
      this.state = {
         workbook,
      }
  }

  render() {
    return (
        <div>
          <Card style={{margin:'20'}} zDepth={3}>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              <br/>
              <FlatButton label="Choose an Image" primary={true}>
                 <input id="imageButton" type="file" onChange={this.handleFileUpload}></input>
              </FlatButton>
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>

          <Card style={{margin:'20'}} zDepth={3}>
            <CardTitle title="Card title" subtitle="Card subtitle" />

            <CardText expandable={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

            </CardText>
            {/* <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listItems}
              </TableBody>
            </Table> */}

            {this.workbook}
            {/* <CardActions>
              <FlatButton label="Editar" />
              <FlatButton label="Borrar" />
            </CardActions> */}
          </Card>
        </div>
    );
  }
}

export default Sap;
