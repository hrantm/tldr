import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { fetchNotes } from '../actions';


class NotesIndex extends React.Component {

  componentWillMount () {
    this.props.fetchNotes();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource ({ notes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(notes);
  }

  renderRow (note) {
    return <ListItem note={note} />;
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
    );
  }
}

const mapStateToProps = state => {
  const notes = _.map(state.notes, (val, uid) => {
    return { ...val, uid };
  });
  return { notes };
};

export default connect(mapStateToProps, { fetchNotes } )(NotesIndex);
