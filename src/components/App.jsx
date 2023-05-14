import Profile from 'components/01-Profile/01-Profile.jsx';
import Statistics from 'components/02-Statistic/02-Statistics.jsx';
import FriendList from 'components/03-FriendList/03-FriendList.jsx';
import TransactionHistory from 'components/04-TransactionHistory/04-TransactionHistory.jsx';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
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
    </div>
  );
}

