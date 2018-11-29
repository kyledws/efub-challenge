import React from 'react';
import LocaleContext from '../contexts/localeContext'

/**
 * Represents a single instance of user data. Localized.
 * 
 * @param {*} param0 
 */
function UserCard({user}) {
  const ddStyle = {margin: '0 0 .5em 1ch'};
  return (
    <LocaleContext.Consumer>
      {({resources}) => (
          <>
            <img
              alt=''
              height={240}
              src={user.photo}
              style={{marginBottom: '1em'}}
              width={240}/>
            <dl>
              <dt>{resources.name}</dt>
              <dd style={ddStyle}>{user.name}</dd>

              <dt>{resources.surname}</dt>
              <dd style={ddStyle}>{user.surname}</dd>

              <dt>{resources.email}</dt>
              <dd style={ddStyle}>{user.email}</dd>

              <dt>{resources.region}</dt>
              <dd style={ddStyle}>{user.region}</dd>

              <dt>{resources.gender}</dt>
              <dd style={ddStyle}>{user.gender}</dd>

              <dt>{resources.password}</dt>
              <dd style={ddStyle}>{user.password}</dd>

              <dt>{resources.phone}</dt>
              <dd style={ddStyle}>{user.phone}</dd>
            </dl>
          </>
      )}
    </LocaleContext.Consumer>
  );
}

export default UserCard;