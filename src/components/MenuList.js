import React from 'react';

import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import DropDownMenu from 'material-ui/DropDownMenu';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

export default class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleToggle = () => {
   this.setState({
     open: !this.state.open,
   });
  }
  handleNestedListToggle = (item) => {
   this.setState({
     open: item.state.open,
   });
  }
  render() {
   return (

      <div>
        {/* <Toggle
          toggled={this.state.open}
          onToggle={this.handleToggle}
          labelPosition="right"
          label="This toggle controls the expanded state of the submenu item."
        /> */}
        <br />
        <List>
          <Subheader>Calculo de Importaciones</Subheader>
          <ListItem primaryText="Importacion" leftIcon={<ContentSend />} containerElement={<Link to="/" />} />
          <ListItem
            primaryText="Configuracion"
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText={"Region"}
                leftIcon={<ActionGrade />}
                containerElement={<Link to="region" />}
              />,
              <ListItem
                key={2}
                primaryText={ "Agente Aduanero" }
                leftIcon={<ContentSend />}
                containerElement={<Link to="agente" />}
                // disabled={true}
                // nestedItems={[
                //   <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                // ]}
              />,
              <ListItem
                key={3}
                primaryText={ "Bodega Fiscal" }
                leftIcon={<ContentInbox />}
                containerElement={<Link to="bodega" />}
                // open={this.state.open}
                // onNestedListToggle={this.handleNestedListToggle}
                // nestedItems={[
                //   <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                // ]}
              />,
              <ListItem
                key={4}
                primaryText={ "Mas Informacion" }
                leftIcon={<ActionGrade />}
                containerElement={<Link to="informacion" />}
              />,
              <ListItem
                key={5}
                primaryText={ "SAP" }
                leftIcon={<ActionGrade />}
                containerElement={<Link to="sap" />}
              />,
            ]}
          />
        </List>
      </div>
  );
 }
}
