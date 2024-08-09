import Personage, { IPersonage } from "@/components/personage/Personage";
import styles from "../styles/home.module.css";

const URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionarie() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}


export default async function Home() {
  const [billiornaire]: [IPersonage[]] = await Promise.all([getBillionarie()]);

  return (
    <main className={styles.list}>
      {
        billiornaire && billiornaire.map((item: IPersonage) => (
          <Personage key={`list-item-${item.id}`} data={item} />
        ))
      }
    </main>
  );
}
