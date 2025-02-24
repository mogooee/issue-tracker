import StyledImg from 'components/Atoms/UserImage/UserImage.styles';

export interface UserImageTypes {
  id?: number;
  loginId: string;
  profileImageUrl: string;
  imgSize?: 'MEDIUM' | 'SMALL';
}

const UserImage = ({ imgSize = 'SMALL', ...props }: UserImageTypes) => {
  const { profileImageUrl, loginId } = props;
  const imgAlt = `${loginId}의 프로필 사진`;

  return <StyledImg src={profileImageUrl} alt={imgAlt} imgSize={imgSize} />;
};

export default UserImage;
