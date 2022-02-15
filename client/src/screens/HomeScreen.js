import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {
  addPlayer,
  listPlayersAll,
  updatePlayerScore,
} from '../actions/playerActions';
import { createFight } from '../actions/fightActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import PlayerForm from '../components/PlayerForm';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const [playername, setPlayerName] = useState('');
  const [teamname, setTeamName] = useState('');
  const [result, setResult] = useState('');
  const [oldvalue2, setOldValue2] = useState('');
  const addFight = useSelector(state => state.addFight);
  var { loading, error } = addFight;

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(addPlayer(playername, teamname));
  };
  const setValue2 = e => {
    setOldValue2(e.target.value);
  };
  const updateFight = e => {
    e.preventDefault();
    const playeronename = oldvalue;
    const playertwoname = oldvalue2;
    var tn = result === 'player 1 won' ? oldvalue : oldvalue2;
    var searchteam =
      players && players.find(player => player.playername === tn);
    const teamname =
      result === 'tie' ? oldvalue + '' + oldvalue2 : searchteam.teamname;
    const ties = result === 'tie' ? true : false;

    dispatch(createFight({ playeronename, playertwoname, teamname, ties }));
  };

  const listPlayers = useSelector(state => state.listPlayers);
  var { loading, error, players } = listPlayers;

  const playerslist = players && players.map(player => player.playername);

  const [oldvalue, setNewValue] = useState('P2');

  const setValue = e => {
    setNewValue(String(e.target.value));
  };
  const setTieVal = e => {
    setResult(String(e.target.value));
  };
  var myArray = Object.values({ ...playerslist });

  const optionsone =
    myArray &&
    myArray.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

  const remainArray = myArray.filter(item => item != oldvalue);

  const optionstwo =
    remainArray &&
    remainArray.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  const winArray = ['player 1 won', 'player 2 won', 'tie'];

  const optionsthree = winArray.map(item => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  useEffect(() => {
    dispatch(listPlayersAll());
  }, []);

  return (
    <>
      <Container className='mb-3'>
        <h3 className='mt-2'>ADD PLAYER</h3>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='playername'>
              <Form.Label>Player Name </Form.Label>
              <Form.Control
                type='playername'
                placeholder='Enter player name'
                value={playername}
                onChange={e => setPlayerName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='teamname'>
              <Form.Label>Team Name </Form.Label>
              <Form.Control
                type='teamname'
                placeholder='Enter team name'
                value={teamname}
                onChange={e => setTeamName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button
            type='submit'
            variant='primary'
            className='add-player-button'
            size='sm'
          >
            Add player
          </Button>
        </Form>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={updateFight}>
          <h3 className='mt-3'>FIGHT</h3>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='TeamSelector'>
              <Form.Label>Select Player 1</Form.Label>
              <Form.Control as='select' onChange={e => setValue(e)}>
                {optionsone}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId='TeamSelector2'>
              <Form.Label>Select Player 2</Form.Label>
              <Form.Control as='select' onChange={e => setValue2(e)}>
                {optionstwo}
              </Form.Control>
            </Form.Group>{' '}
            <Form.Group as={Col} controlId='TeamSelector3'>
              <Form.Label>Who Won?</Form.Label>
              <Form.Control as='select' onChange={e => setTieVal(e)}>
                {optionsthree}
              </Form.Control>
            </Form.Group>{' '}
          </Row>
          <Button
            type='submit'
            variant='primary'
            className='add-player-button'
            size='sm'
          >
            Fight!
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HomeScreen;
