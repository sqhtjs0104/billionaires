import styles from './profile.module.css';
import { IProfile } from '@/app/person/[id]/page';

export default async function Profile({
  profile
}: {
  profile: IProfile;
}) {
  return (
    <div className={styles.profile__detail}>
      <img src={profile.squareImage} alt="profile image" />
      <h4>{profile.name}</h4>
      <div className={styles.profile__detail__summaries}>
        <span>Networth: {`${Math.ceil(profile.netWorth / 1000)} Billion`}</span>
        <span>Country: {profile.country}</span>
        <span>Industry: {profile.industries.join(", ")}</span>
        <p>{profile.bio.join("\n")}</p>
      </div>
    </div>
  );
}