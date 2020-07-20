import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';

const mapStateToProps = (state) => { return { games: state.games }};

class GamesPage extends React.Component {
    render() {
        return (
            <div>

                <GamesList  games={this.props.games}/>
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(GamesPage);