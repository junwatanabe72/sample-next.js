import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Link from 'next/link';
import { addUsers } from '../duck/MyButton/action';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { initalState } from '../duck/MyButton/userReducer';

const Home = () => {
  const state = useSelector<typeof initalState, typeof initalState>((state) => state);
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data } = await axios.get('https://stark-springs-90527.herokuapp.com/users');
    // const { data } = await axios.get('https://stark-springs-90527.herokuapp.com/');
    dispatch(addUsers(data.allUsers));
    // console.log(data.allUsers);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(state);

  return (
    <Layout>
      {state.map((user) => {
        return (
          <ul>
            <li>{user.name}</li>
            <li>{user.id}</li>
          </ul>
        );
      })}
      <Link href="/">
        <a>Top</a>
      </Link>
      <Link href="/post">
        <a>post</a>
      </Link>
    </Layout>
  );
};

export default Home;
