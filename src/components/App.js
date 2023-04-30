import Profile from './01-Profile.js';
import Statistics from './02-Statistics.js';
// import FriendList from './FriendList.js';
// import FriendListItem from './FriendListItem.js';

import user from '../user.json';
import data from '../data.json';
// import friends from '../friends.json';

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

      <Statistics 
      title="Upload stats" 
      stats={data} />

      {/* <FriendList 
      friends={friends} 
      />

<FriendListItem 
      avatar={friends.avatar} 
      name = {friends.name}
      isOnline = {friends.isOnline}
      /> */}

    </div>
  );
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
