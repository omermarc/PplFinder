import React, { useState } from "react";
import User from "../../components/User";
import { useLocalStorage, LocalStorageKeys } from "hooks";
import * as S from "./style";
import Text from "components/Text";
import NavBar from "components/NavBar";



const Favorites = () => {
  const [favoriteUsersList, setFavoriteUsersList] = useLocalStorage(LocalStorageKeys.FAVORITE_USERS, []);
  const [hoveredUserId, setHoveredUserId] = useState(0);

  const changeUserFavorite = (user) => {
    if (favoriteUsersList.includes(user)) {
      setFavoriteUsersList(favoriteUsersList.filter(favoriteUser => favoriteUser != user))
    }
    else {
      setFavoriteUsersList([...favoriteUsersList, user])
    }
  }

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const isUserFavorite = (userId) => {
    return favoriteUsersList.includes(userId);
  }

  return (
   

    

    <S.Favorites>
          <S.Content>
    <S.Header>
          <Text size="64px" bold>
            Favorite Users
          </Text>
          </S.Header>
        <S.List>
        {favoriteUsersList.map((user, index) => {
          if (favoriteUsersList.length === 0) {
            return <div>nothing from favorites to show</div>
          }
          else {
            return (
              <User key={index} user={user} index={index} hoveredUserId={hoveredUserId} setHoveredUserId={setHoveredUserId} changeUserFavorite={changeUserFavorite}
               handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isUserFavorite={isUserFavorite} />
            );
          }
        })}
        </S.List>
      </S.Content>
      </S.Favorites>
      );
}

export default Favorites;






