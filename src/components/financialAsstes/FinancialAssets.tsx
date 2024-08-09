import { IFinancialAsset } from '@/app/person/[id]/page';
import styles from './financialAssets.module.css';

export default async function FinancialAssets({
  financialAssets
}: {
  financialAssets: IFinancialAsset[];
}) {
  console.log(financialAssets);
  return (
    <div className={styles.profile__financialAssets}>
      <h5>Financial Assets</h5>
      <div className={styles.profile__financialAssets__list}>
        {
          financialAssets.map((asset: IFinancialAsset, i: number) => (
            <div key={`asset-${i}`} className={styles.profile__financialAssets__list__item}>
              {
                asset.ticker &&
                <span>Ticker: {asset.ticker}</span>
              }
              {
                asset.sharePrice &&
                <span>Shares: {asset.sharePrice}</span>
              }
              {
                asset.exchange &&
                <span>Excercise Price: ${asset.exerciseOptionPrice}</span>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}