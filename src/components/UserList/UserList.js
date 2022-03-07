import { useState, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import User from "../User";
import Text from "components/Text";


const UserList = ({ users, isLoading, setPageNumber, favoriteUsersList, setFavoriteUsersList, countries, setCountries, hasMore, genders, setGenders }) => {

  const observer = useRef()
  const lastUser = useCallback(user => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (user) observer.current.observe(user)
  }, [isLoading, hasMore])

  const [hoveredUserId, setHoveredUserId] = useState(0);

  const changeCountry = (country) => {
    if (countries.includes(country)) {
      setCountries(countries.filter(elem => elem != country));
    }
    else {
      setCountries([...countries, country]);
    }
  }

  const changeGender = (gender) => {
    if (genders.includes(gender)) {
      setGenders(genders.filter(elem => elem != gender));
    }
    else {
      setGenders([...genders, gender]);
    }
  }

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
    <div>
    <S.UserList>
    <S.FilterContainer>
        <Text className="filter-label" size="16px">Filter by Gender:</Text>
        <S.Filters>
          <CheckBox value="male" label="Male" onChange={(gender) => changeGender(gender)} />
          <CheckBox value="female" label="Female" onChange={(gender) => changeGender(gender)} />
        </S.Filters>
      </S.FilterContainer>
      <S.FilterContainer>
      <Text className="filter-label" size="16px">Filter by Country:    </Text>
      
      <S.Filters>
     
        <CheckBox value="BR"  label="Brazil" onChange={(country) => changeCountry(country)}/>
        <CheckBox value="AU" label="Australia" onChange={(country) => changeCountry(country)}/>
        <CheckBox value="CA" label="Canada"onChange={(country) => changeCountry(country)} />
        <CheckBox value="DE" label="Germany" onChange={(country) => changeCountry(country)}/>
        <CheckBox value="ES" label="Spain" onChange={(country) => changeCountry(country)}/>
        <CheckBox value="NZ" label="New Zealand" onChange={(country) => changeCountry(country)}/>
      </S.Filters>
      </S.FilterContainer>
      <S.List>
          {users.map((user, index) => {
            if (users.length === index + 1) {
              return <div ref={lastUser} key={user.login.uuid}>
                <User user={user} index={index} hoveredUserId={hoveredUserId} changeUserFavorite = {changeUserFavorite} setHoveredUserId={setHoveredUserId}  handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isUserFavorite={isUserFavorite} />
              </div>
            }
            else {
              return <div key={user.login.uuid}>
                <User user={user} index={index} hoveredUserId={hoveredUserId}  changeUserFavorite = {changeUserFavorite} setHoveredUserId={setHoveredUserId}  handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isUserFavorite={isUserFavorite} />
              </div>
            }
          })}
          <div>{isLoading && "Loading..."}</div>
          {isLoading && (
            <S.SpinnerWrapper>
              <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
            </S.SpinnerWrapper>
          )}
        </S.List>
      </S.UserList>
    </div>
  );
};

export default UserList;
