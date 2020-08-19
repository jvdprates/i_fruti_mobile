import React, {useEffect} from 'react';
import * as Permissions from 'expo-permissions';

import Routes from "./src/routes";

export default function App() {

  useEffect(() => {
    const getPermission = async function(){
      await Permissions.askAsync(Permissions.LOCATION);
    }
    getPermission();
  }, [])

  return (
    <Routes/>
  );
}