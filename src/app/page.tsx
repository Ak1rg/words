import { SideBar } from '@/widgets/SideBar';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <SideBar/>
    </div>
  );
}
