import ProfileImagee from "./ProfileImage";
import User from './User';
import Timestamp from './Timestamp';
import Message from  './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImagee imageUrl={tweet.user.image}/>

      <div className="body">
        <div className="top">
         <User userData={tweet.user}/>
<Timestamp time={tweet.timestamp} />
        </div>

<Message message={tweet.message}/>  

<Actions/>

    <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
