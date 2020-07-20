import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GamesPage = () => {
    return (
        <div>
            hey i'm on games page
        </div>
    )
};

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => { return { games: state.games }};

connect(mapStateToProps)(GamesPage);

export default GamesPage;