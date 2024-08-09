import { Profile } from '@/components/profile';
import styles from './person.module.css';
import { FinancialAssets } from '@/components/financialAsstes';

const URL = "https://billions-api.nomadcoders.workers.dev/person/";

async function getProfile(id: string) {
  const response = await fetch(`${URL}${id}`);
  const json = await response.json();
  return json;
}

export interface IFinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  exerciseOptionPrice?: number;
}

export interface IProfile {
  id: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IFinancialAsset[];
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export default async function Person({
  params: { id }
}: {
  params: { id: string; }
}) {
  const [profile]: [IProfile] = await Promise.all([getProfile(id)]);

  return (
    <>
      <div className={styles.box}>
        <Profile profile={profile} />
      </div>

      <div className={styles.box}>
        <FinancialAssets financialAssets={profile.financialAssets} />
      </div>
    </>
  )
}