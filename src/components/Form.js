import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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

function renderColumnsName(column, index, self){
  if(self.props.category != column.category )
    return;
  return (
    <TableHeaderColumn style={{ width: '7rem' }} key={index}>
        {column.text}
    </TableHeaderColumn>
  );
};
function renderQuestionType(question, index, self){
  if(self.props.category != question.category )
    return;
  if(true){
    // question.type == "text"
    return (
      <Col xs={12} key={index}>
        <TextField
            floatingLabelText={question.text}
            // floatingLabelStyle={styles.floatingLabelStyle}
            // floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            // floatingLabelFixed={true}
        />
      </Col>
    );
  }else {
    return (
      <Col xs={12} key={index}>
        <SelectField
          floatingLabelText={question.text}
          // value={1}
          onChange={self.handleChange}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </Col>
    );
  }
}
function getQuestions(self, db){
  db.find({ _id : "questions"}, function (err, docs) {
    // console.log("questions category ",docs.length, docs, " Err ", err );
    var allQuestions = <h3>Information Not Found</h3>
    var allColums = <h3>Information Not Found</h3>
    if( docs.length > 0){
      var allQuestions = docs[0].questions.map((question, index) => {
        return renderQuestionType(question, index, self);
      });
      var allColums = docs[0].questions.map((question, index) => {
        return renderColumnsName(question, index, self);
      });
      var allDict = new Array();
      docs[0].questions.map((question, index) => {
        allDict[question._id] = {valor : '', tableId : ''};
      });

      self.setState({
          allQuestions,
          allColums,
          allDict
      });

      console.log("State Changed ", self.state);
    }

  });
}
class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        allQuestions : []
      };

    }
    handleFormValuesChange = (event, index, value) =>{
      this.setState({value})
    };
    componentDidMount() {
        var self = this;
        getQuestions(self, this.props.db.db);
    }
    render() {
      return(
        <Card style={{margin:20, padding:20}} zDepth={1}>
          <h2>Inrese los valores</h2>

          <Row>
          {this.state.allQuestions}
          </Row>

          <CardActions>
            <RaisedButton label="Agregar" primary={true} style={styles.BtnStyle} />
            <RaisedButton label="Quitar" secondary={true} style={styles.BtnStyle} />
          </CardActions>
       </Card>
    );
  }
}

export default Form;
