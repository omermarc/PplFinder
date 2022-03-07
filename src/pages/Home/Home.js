import { useState } from "react";
import Text from "components/Text";

import UserList from "components/UserList";
import { usePeopleFetch, useLocalStorage, LocalStorageKeys } from "hooks";
import * as S from "./style";

const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const { users, setUsers, isLoading, hasMore, countries, setCountries, genders, setGenders} = usePeopleFetch(pageNumber);  
  const [favoriteUsersList, setFavoriteUsersList] = useLocalStorage(LocalStorageKeys.FAVORITE_USERS, []);

 

  return (
    <S.Home>
      <S.Content>
        <UserList users={users} isLoading={isLoading} setPageNumber={setPageNumber} favoriteUsersList={favoriteUsersList} 
        setFavoriteUsersList={setFavoriteUsersList} countries={countries} setCountries={setCountries} hasMore={hasMore} 
        genders={genders} setGenders={setGenders} />
      </S.Content>
    </S.Home>
  );
};

export default Home;