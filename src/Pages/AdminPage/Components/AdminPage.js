import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../State/AdminEffects';

import { UserCard } from '../../../Components/Card/Card';

const AdminPage = ({ dispatch, usersList }) => {
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const renderUsers = () => {

    return usersList.map(user => <UserCard key={user.id} user={user} />);
  };

  return (
    <section>
      {renderUsers()}
    </section>
  );
};

const mapStateToProps = state => ({
  usersList: state.adminPage.usersList,
});

export default connect(mapStateToProps)(AdminPage);
