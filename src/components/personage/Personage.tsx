import Link from 'next/link';
import styles from './personage.module.css';

export interface IPersonage {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default async function Personage({
  data
}: {
  data: IPersonage;
}) {
  return (
    <Link className={styles.card} href={`/person/${data.id}`}>
      <img src={data.squareImage} alt={`profile image - ${data.name}`} />
      <div>
        <h5>{data.name}</h5>
        <span>
          {`${Math.ceil(data.netWorth / 1000)} Billion`} / {data.industries.join(", ")}
        </span>
      </div>
    </Link>
  );
}