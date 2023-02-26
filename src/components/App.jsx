import { Profile } from './Section/Profile/Profile';
import { Statistics } from './Section/Statistics/Statistics';
import { FriendList } from './Section/FriendList/FriendList';
import { TransactionHistory } from './Section/Transaction/TransactionHistory ';
import user from '../data/user';
import transactions from '../data/transactions';
import friends from '../data/friends';
import data from '../data/data';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
