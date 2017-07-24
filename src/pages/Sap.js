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

// Type 3: Persistent datastore with automatic loading
var Datastore = require('nedb')
  , db = new Datastore({ filename: '.db.ne', autoload: true });
// You can issue commands right away
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
      // db.remove({ _id: "sap" }, {}, function (err, numRemoved) {
      //   console.log(numRemoved, err);
      // });
      this.state = {
         workbook,
      }
      db.find( { _id: "sap" }, function (err, docs) {
        // docs is an array containing documents Mars, Earth, Jupiter
        // If no document is found, docs is equal to []
        if(err == null){
          workbook = docs[0].workbook;
          console.log("SAP ", workbook);
        }
        var first_sheet_name = workbook.SheetNames[1];
        var address_of_cell = 'A4';
        worksheet = workbook.Sheets[first_sheet_name];

        var XLSX = require('xlsx');
        worksheet= XLSX.utils.sheet_to_html(worksheet);
        // console.log("A4", desired_cell);
        rows.push()
        let letters = ['A','B','C','D','E','F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P'];
        for(var R = 0; R <= 20; ++R) {
          let cols = [];
           for(var C = 0; C <= letters.length - 1; ++C) {
              let index = letters[C] + (C+1);
              let desired_cell = worksheet[ index ];
              let desired_value = (desired_cell ? desired_cell.v : undefined);
              cols.push( desired_value );
              console.log(index, desired_value);
           }
           rows.push(cols);
        }
        listItems = rows.map((row) =>
          <TableRow>
            row.map((col) =><TableRowColumn>col</TableRowColumn> );
          </TableRow>
        );

        // var desired_value = (desired_cell ? desired_cell.v : undefined);
        // for(var R = range.s.r; R <= range.e.r; ++R) {
        //   let cols = [];
        //   for(var C = range.s.c; C <= range.e.c; ++C) {
        //     var cell_address = {c:C, r:R};
        //   }
        // }
      });

  }
  handleFileUpload = ( e ) => {
    // const file = files[0];
    var XLSX = require('xlsx');
    // var workbook = XLSX.read(e.target);
    // console.log(workbook);

    var files = e.target.files;
    var i,f;
    for (i = 0; i != files.length; ++i) {
      f = files[i];
      var reader = new FileReader();
      var name = f.name;
      reader.onload = function(e) {
        var data = e.target.result;

        var workbook;
        if(rABS) {
          /* if binary string, read with type 'binary' */
          workbook = XLSX.read(data, {type: 'binary'});
          // console.log(workbook);
          // db.insert({_id: "sap", workbook : workbook}, function (err, newDoc) {   // Callback is optional
          //   // newDoc is the newly inserted document, including its _id
          //   // newDoc has no key called notToBeSaved since its value was undefined
          //
          // });
          // Upserting a document
          db.update({ _id: "sap" }, {_id: "sap", workbook : workbook}, { upsert: true }, function (err, numReplaced, upsert) {
            // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
            // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
            console.log("New workbook",err, numReplaced, upsert);
          });

        } else {
          /* if array buffer, convert to base64 */
          var arr = fixdata(data);
          workbook = XLSX.read(btoa(arr), {type: 'base64'});
          // console.log(workbook);
          db.update({ _id: "sap" }, {_id: "sap", workbook : workbook}, { upsert: true }, function (err, numReplaced, upsert) {
            // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
            // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
            console.log("New workbook",err, numReplaced, upsert);
          });
        }

        /* DO SOMETHING WITH workbook HERE */
      };
      reader.readAsBinaryString(f);
    }

  };
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
