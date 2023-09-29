'use client';

import { useEffect, useState } from 'react';

import Form from '../Form';
import { EminentBtn } from './FormBtn';
import { EminentInput } from './FormInput';
import EminentAvatar from './eminent/EminentAvatar';
import AvatarList from './eminent/AvatarList';

const CreateEminent = () => {
  const [avatar, setAvatar] = useState('');
  const [client, setClient] = useState(false);

  const handleAvatarClick = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <Form
      heading={'Craft Your Public Profile'}
      paragraph={
        "Personalize your wallet to become an 'Eminent' by setting up your public profile with an avatar and your first and last name."
      }
    >
      {client && <EminentAvatar avatar={avatar} />}
      <EminentInput />
      <EminentBtn />
      {client && <AvatarList onAvatarClick={handleAvatarClick} />}
    </Form>
  );
};

export default CreateEminent;
