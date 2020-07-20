import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';
import fetchGames from '../actions/actions';

const mapStateToProps = (state) => { return { games: state.games }};

class GamesPage extends React.Component {

    componentDidMount() {
        this.props.fetchGames();
    }

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
    fetchGames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {fetchGames})(GamesPage);