import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateMessageTrack } from 'actions/index';

import FlexTable from 'components/flexTable';

const MessagesTable = ({messages, updateMessageTrack}) => {

    useEffect(() => {
        updateMessageTrack(messages);
    }, [])

    return <FlexTable messages={messages} />
}

function mapStateToProps(state) {
    return {
        messages: state.messages.data,
    }
}

MessagesTable.propTypes = {
    messages: PropTypes.array,
    updateMessageTrack: PropTypes.func,
}

export default connect(mapStateToProps, {updateMessageTrack})(MessagesTable);
