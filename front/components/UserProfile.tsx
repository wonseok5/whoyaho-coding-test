import Image from "next/image";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import { User, UsersApi } from "../apis/users";
import UserContext from "../contexts/userContext";

const Container = styled.div`
  align-self: flex-start;
  flex-direction: column;
  & > div {
    border-radius: 999px;
    position: relative;
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    & img {
      border-radius: 999px;
    }
  }
  & input {
    margin-bottom: 0.5rem;
    width: 10rem;
  }
`;
type Props = {};
const UserProfile: FC<Props> = ({}) => {
  const { getUser, user } = useContext(UserContext);
  const [imgPath, setImgPath] = useState(user?.UserProfile?.profileImage ?? "");
  const onEditProfileImage = useCallback(async () => {
    try {
      await UsersApi.saveUserProfile({
        intro: "",
        nickname: "",
        profileImage: imgPath,
        UserId: user.id,
      });
      await getUser();
      console.log(123);
    } catch (error) {
      alert("failed");
    }
  }, [getUser, imgPath, user.id]);
  const onChangeImgPath = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setImgPath(e.target.value);
  }, []);
  return (
    <Container>
      {user?.UserProfile?.profileImage ? (
        <div>
          <Image
            src={user.UserProfile.profileImage}
            width="100%"
            height="100%"
            alt="profile image"
            layout="fill"
          />
        </div>
      ) : null}
      <input
        value={imgPath}
        placeholder="이미지 주소를 입력해주세요"
        onChange={onChangeImgPath}
      />
      <button onClick={onEditProfileImage}>프로필 이미지 수정</button>
    </Container>
  );
};

export default UserProfile;
